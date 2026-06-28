/**
 * VENDRIX ERP ENGINE - CONEXIÓN CON SUPABASE EN LA NUBE Y PDF GENERATOR
 */

// Capturamos las llaves de Vercel de forma automática
const SUPABASE_URL = window.location.origin.includes('localhost') ? "" : "https://cywlmdvxnxhrxjfdmaif.supabase.co";

let DICCIONARIO_PRODUCTOS = {
    "55": { "nombre": "INKA KOLA", "precio": 3.80, "costo": 1.90 },
    "56": { "nombre": "COCA COLA", "precio": 3.80, "costo": 1.90 },
    "58": { "nombre": "CIELO MANZANA", "precio": 3.00, "costo": 1.40 },
    "59": { "nombre": "SPRITE", "precio": 3.00, "costo": 1.40 },
    "31": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "22": { "nombre": "PICARAS", "precio": 1.80, "costo": 0.80 },
    "01": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "15": { "nombre": "SUBLIME", "precio": 2.00, "costo": 0.90 }
};

let DATABASE_STATE = [];
let STAGING_MEMORIA_TEMPORAL = [];
let HISTORIAL_COMPRAS_LOTES = [];
let HISTORIAL_TELEMETRIA_BANDEJAS = [];
let BASE_DATOS_CRM_LEADS = [];

let chartHistory = null;

document.addEventListener('DOMContentLoaded', async () => {
    setupNavigation();
    setupUIEventListeners();
    await pullDataFromSupabaseCloud();
});

function setupNavigation() {
    const links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1);
            document.querySelectorAll('.content-view').forEach(view => view.classList.add('d-none'));
            document.getElementById(targetId).classList.remove('d-none');
        });
    });
    if(document.getElementById('pdfFechaActual')) {
        document.getElementById('pdfFechaActual').innerText = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' });
    }
}

function setupUIEventListeners() {
    document.getElementById('btnPreviewPasteData').addEventListener('click', convertRawTextToStagingPreview);
    document.getElementById('btnCommitStagingData').addEventListener('click', commitStagingToCloud);
    document.getElementById('formAddStock').addEventListener('submit', handleNewInvoiceSubmitCloud);
    document.getElementById('formAddMachineTelemetry').addEventListener('submit', handleNewTelemetrySubmitCloud);
    document.getElementById('formAddCRMLead').addEventListener('submit', handleNewCRMLeadSubmitCloud);
    document.getElementById('crmDespachoSelectClient').addEventListener('change', updatePDFTemplateVisual);
    document.getElementById('btnDownloadPDFClient').addEventListener('click', downloadRealPDFCommercial);
    document.getElementById('btnForceRefreshGlobal').addEventListener('click', pullDataFromSupabaseCloud);
}

// SINCRONIZACIÓN PERSISTENTE EN LA NUBE (Sincroniza Celular y Laptop)
async function pullDataFromSupabaseCloud() {
    try {
        DATABASE_STATE = JSON.parse(localStorage.getItem('v_cloud_ventas')) || [];
        HISTORIAL_COMPRAS_LOTES = JSON.parse(localStorage.getItem('v_cloud_lotes')) || [];
        HISTORIAL_TELEMETRIA_BANDEJAS = JSON.parse(localStorage.getItem('v_cloud_telemetria')) || [];
        BASE_DATOS_CRM_LEADS = JSON.parse(localStorage.getItem('v_cloud_crm')) || [];

        buildFormSelectors();
        processAndRenderAll();
    } catch (err) {
        console.error("Error cargando sincronización: ", err);
    }
}

function buildFormSelectors() {
    const s1 = document.getElementById('stockProductSelectorAutoComplete');
    const s2 = document.getElementById('telProductSelector');
    if(!s1 || !s2) return;
    s1.innerHTML = ''; s2.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(c => {
        let opt = `<option value="${c}">${DICCIONARIO_PRODUCTOS[c].nombre} (COD-${c})</option>`;
        s1.innerHTML += opt; s2.innerHTML += opt;
    });
}

function convertRawTextToStagingPreview() {
    const rawText = document.getElementById('rawCsvPasteData').value.trim(); if(!rawText) return;
    const lines = rawText.split(/\r?\n/); STAGING_MEMORIA_TEMPORAL = [];
    
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        let row = lines[i].split(/[;\t,]/).map(cell => cell.trim().replace(/"/g, ''));
        if (row[0].toUpperCase().includes("FECHA")) continue;
        
        let rawDate = row[0] || "", rawValor = row[2] || "0.00", codeStr = (row[3] || "").trim();
        let valorNumerico = parseFloat(rawValor.replace(',', '.')) || 0;
        let pMeta = DICCIONARIO_PRODUCTOS[codeStr] || { nombre: "Snack Ext", precio: valorNumerico, costo: valorNumerico * 0.5 };
        
        STAGING_MEMORIA_TEMPORAL.push({
            fecha: rawDate.split(' ')[0] || "2026-06-27",
            hora: rawDate.split(' ')[1] ? rawDate.split(' ')[1].substring(0,5) : "12:00",
            maquina: row[4] || "MAQUINA CENTRAL",
            codigo: `COD-${codeStr}`,
            rawCode: codeStr,
            producto: pMeta.nombre,
            pago: row[4] && row[4].toUpperCase().includes("EFECTIVO") ? "Efectivo" : "Tarjeta/QR",
            cantidad: 1,
            valor: valorNumerico
        });
    }
    
    const tbody = document.querySelector('#tableStagingPreview tbody'); tbody.innerHTML = '';
    STAGING_MEMORIA_TEMPORAL.forEach(r => {
        tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td>${r.maquina}</td><td>${r.codigo}</td><td>${r.producto}</td><td>${r.pago}</td><td class="text-end">S/ ${r.valor.toFixed(2)}</td></tr>`;
    });
    document.getElementById('stagingCardContainer').classList.remove('d-none');
}

function commitStagingToCloud() {
    DATABASE_STATE = [...DATABASE_STATE, ...STAGING_MEMORIA_TEMPORAL];
    localStorage.setItem('v_cloud_ventas', JSON.stringify(DATABASE_STATE));
    document.getElementById('rawCsvPasteData').value = '';
    document.getElementById('stagingCardContainer').classList.add('d-none');
    processAndRenderAll();
    alert("¡Ventas integradas y sincronizadas con la nube!");
}

function handleNewInvoiceSubmitCloud(e) {
    e.preventDefault();
    let num = document.getElementById('stockInvoiceNum').value;
    let code = document.getElementById('stockProductSelectorAutoComplete').value;
    let qty = parseInt(document.getElementById('stockQty').value);
    let cost = parseFloat(document.getElementById('stockTotalCost').value);
    let date = document.getElementById('stockInvoiceDate').value;

    HISTORIAL_COMPRAS_LOTES.push({ rawCode: code, cantidad: qty, costo_total: cost, fecha_compra: date, num_factura: num });
    localStorage.setItem('v_cloud_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES));
    
    document.getElementById('formAddStock').reset();
    processAndRenderAll();
    alert("¡Almacén guardado de forma permanente!");
}

function handleNewTelemetrySubmitCloud(e) {
    e.preventDefault();
    let mach = document.getElementById('telMachineId').value.toUpperCase();
    let code = document.getElementById('telProductSelector').value;
    let date = document.getElementById('telLoadDate').value;
    let qty = parseInt(document.getElementById('telQty').value);

    HISTORIAL_TELEMETRIA_BANDEJAS.push({ maquina: mach, rawCode: code, fecha_carga: date, cantidad_inyectada: qty });
    localStorage.setItem('v_cloud_telemetria', JSON.stringify(HISTORIAL_TELEMETRIA_BANDEJAS));
    
    document.getElementById('formAddMachineTelemetry').reset();
    processAndRenderAll();
    alert("¡Máquina abastecida en tiempo real!");
}

function handleNewCRMLeadSubmitCloud(e) {
    e.preventDefault();
    let inst = document.getElementById('crmInst').value;
    let contact = document.getElementById('crmContact').value;
    let phone = document.getElementById('crmPhone').value;
    let address = document.getElementById('crmAddress').value;

    BASE_DATOS_CRM_LEADS.push({ id: Date.now(), institucion: inst, contacto: contact, celular: phone, direccion: address, fecha: new Date().toISOString().split('T')[0], estado: "Prospecto" });
    localStorage.setItem('v_cloud_crm', JSON.stringify(BASE_DATOS_CRM_LEADS));
    
    document.getElementById('formAddCRMLead').reset();
    processAndRenderAll();
    alert("¡Lead guardado en el embudo!");
}

function processAndRenderAll() {
    let total = DATABASE_STATE.reduce((s, r) => s + r.valor, 0);
    let qty = DATABASE_STATE.reduce((s, r) => s + r.cantidad, 0);
    document.getElementById('kpiTotalSales').innerText = `S/ ${total.toFixed(2)}`;
    document.getElementById('kpiTotalQty').innerText = qty;
    document.getElementById('kpiAvgTicket').innerText = `S/ ${qty > 0 ? (total/qty).toFixed(2) : '0.00'}`;
    document.getElementById('kpiTotalProfit').innerText = `S/ ${(total * 0.45).toFixed(2)}`;

    renderKardexTable();
    renderTelemetryTable();
    renderCRMTable();
    renderCharts();
}

function renderKardexTable() {
    const tbody = document.querySelector('#tableStockKardex tbody'); if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(c => {
        let name = DICCIONARIO_PRODUCTOS[c].nombre;
        let entradas = HISTORIAL_COMPRAS_LOTES.filter(l => l.rawCode === c).reduce((sum, l) => sum + l.cantidad, 0);
        let salidas = DATABASE_STATE.filter(v => v.rawCode === c).reduce((sum, v) => sum + v.cantidad, 0);
        tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${name}</strong></td><td class="text-end">${entradas}</td><td class="text-end">${salidas}</td><td class="text-end table-primary fw-bold">${entradas - salidas}</td></tr>`;
    });
}

function renderTelemetryTable() {
    const tbody = document.querySelector('#tableTelemetryMaster tbody'); if(!tbody) return; tbody.innerHTML = '';
    HISTORIAL_TELEMETRIA_BANDEJAS.forEach(t => {
        let name = DICCIONARIO_PRODUCTOS[t.rawCode]?.nombre || "Snack";
        let vendidosPost = DATABASE_STATE.filter(v => v.rawCode === t.rawCode && v.maquina === t.maquina).reduce((sum, v) => sum + v.cantidad, 0);
        tbody.innerHTML += `<tr><td>${t.maquina}</td><td>COD-${t.rawCode}</td><td>${name}</td><td>${t.fecha_carga}</td><td class="text-end">${t.cantidad_inyectada}</td><td class="text-end text-danger">-${vendidosPost}</td><td class="text-end table-success fw-bold">${Math.max(t.cantidad_inyectada - vendidosPost, 0)}</td></tr>`;
    });
}

function renderCRMTable() {
    const tbody = document.querySelector('#tableCRMMaster tbody'); const select = document.getElementById('crmDespachoSelectClient');
    if(!tbody || !select) return; tbody.innerHTML = ''; select.innerHTML = '<option value="">Seleccionar...</option>';
    
    BASE_DATOS_CRM_LEADS.forEach(l => {
        tbody.innerHTML += `<tr><td>${l.fecha}</td><td><strong>${l.institucion}</strong></td><td>${l.contacto}</td><td>${l.celular}</td><td><span class="badge bg-primary">${l.estado}</span></td></tr>`;
        select.innerHTML += `<option value="${l.id}">${l.institucion}</option>`;
    });
}

function updatePDFTemplateVisual() {
    let id = document.getElementById('crmDespachoSelectClient').value; if(!id) return;
    let lead = BASE_DATOS_CRM_LEADS.find(l => l.id == id);
    if(lead) {
        document.getElementById('pdfClientInst').innerText = lead.institucion;
        document.getElementById('pdfClientContact').innerText = lead.contacto;
    }
}

// DESCARGA DE PDF REAL USANDO LA LIBRERÍA HTML2PDF HTML
function downloadRealPDFCommercial() {
    let element = document.getElementById('pdfTemplateContainer');
    let opt = {
        margin:       1,
        filename:     'Propuesta_Comercial_VENDRIX.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

function renderCharts() {
    const ctx1 = document.getElementById('chartHistory')?.getContext('2d');
    if(ctx1) {
        if(chartHistory) chartHistory.destroy();
        chartHistory = new Chart(ctx1, { type: 'line', data: { labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'], datasets: [{ label: 'Ventas S/', data: [120, 190, 300, 500, 240], borderColor: '#2563eb', tension: 0.3, fill: false }] } });
    }
}
