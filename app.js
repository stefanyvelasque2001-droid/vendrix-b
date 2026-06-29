/**
 * VENDRIX ERP CORE ENGINE - CATÁLOGO MAESTRO COMPLETO DE 56 CASILLAS
 */

// Tu Diccionario Real Inyectado al 100%
let DICCIONARIO_PRODUCTOS = {
    "45": { "nombre": "CONCORDIA PIÑA", "precio": 2.50, "costo": 1.20 },
    "22": { "nombre": "PICARAS", "precio": 1.80, "costo": 0.80 },
    "15": { "nombre": "SUBLIME", "precio": 2.00, "costo": 0.90 },
    "51": { "nombre": "HEY FIT INKA KOLA", "precio": 2.80, "costo": 1.30 },
    "52": { "nombre": "HEY FIT COCO", "precio": 2.80, "costo": 1.30 },
    "53": { "nombre": "HEY FIT CAMU CAMU", "precio": 2.80, "costo": 1.30 },
    "55": { "nombre": "INKA KOLA", "precio": 3.80, "costo": 1.90 },
    "05": { "nombre": "CUATES PICANTES", "precio": 1.50, "costo": 0.65 },
    "5":  { "nombre": "CUATES PICANTES", "precio": 1.50, "costo": 0.65 },
    "31": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "36": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "38": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "49": { "nombre": "AGUA CIELO", "precio": 1.50, "costo": 0.60 },
    "12": { "nombre": "SODA V", "precio": 1.20, "costo": 0.50 },
    "07": { "nombre": "CHIZITO", "precio": 1.50, "costo": 0.65 },
    "7":  { "nombre": "CHIZITO", "precio": 1.50, "costo": 0.65 },
    "24": { "nombre": "QUINOA", "precio": 1.80, "costo": 0.80 },
    "43": { "nombre": "CONCORDIA NARANJA", "precio": 2.00, "costo": 0.95 },
    "47": { "nombre": "PALITOS DE AJONJOLI", "precio": 2.00, "costo": 0.90 },
    "58": { "nombre": "SPRIDE", "precio": 3.00, "costo": 1.40 },
    "33": { "nombre": "NICK TACO", "precio": 2.00, "costo": 0.90 },
    "57": { "nombre": "CIELO MANZANA", "precio": 2.50, "costo": 1.10 },
    "60": { "nombre": "AGUA CIELO", "precio": 2.50, "costo": 1.10 },
    "09": { "nombre": "CHEETOS PICANTES", "precio": 2.00, "costo": 0.90 },
    "9":  { "nombre": "CHEETOS PICANTES", "precio": 2.00, "costo": 0.90 },
    "17": { "nombre": "BLACK OUT 6 UND", "precio": 1.60, "costo": 0.70 },
    "21": { "nombre": "CHOCOSODA", "precio": 1.80, "costo": 0.80 },
    "28": { "nombre": "DONUTS", "precio": 1.80, "costo": 0.80 },
    "56": { "nombre": "CIELO LIMON", "precio": 3.80, "costo": 1.90 },
    "03": { "nombre": "TIKTOK", "precio": 1.50, "costo": 0.60 },
    "3":  { "nombre": "TIKTOK", "precio": 1.50, "costo": 0.60 },
    "23": { "nombre": "MOROCHAS", "precio": 1.80, "costo": 0.80 },
    "27": { "nombre": "INTEGRALES DE MIEL", "precio": 1.50, "costo": 0.65 },
    "41": { "nombre": "GATORADE", "precio": 2.50, "costo": 1.20 },
    "44": { "nombre": "CONCORDIA FRESA", "precio": 2.00, "costo": 0.95 },
    "46": { "nombre": "GUARANITA", "precio": 2.00, "costo": 0.95 },
    "50": { "nombre": "AGUA SAN MATEO", "precio": 2.50, "costo": 1.10 },
    "11": { "nombre": "TRIDENT", "precio": 2.00, "costo": 0.80 },
    "18": { "nombre": "CHIPS GALLETA", "precio": 1.80, "costo": 0.80 },
    "19": { "nombre": "RELLENITAS", "precio": 1.80, "costo": 0.80 },
    "35": { "nombre": "RITZ TACO", "precio": 2.00, "costo": 0.90 },
    "39": { "nombre": "CHIPS GALLETA", "precio": 1.80, "costo": 0.80 },
    "54": { "nombre": "HEY FIT INKA COLA", "precio": 2.80, "costo": 1.30 },
    "59": { "nombre": "FRUGOS DEL VALLE", "precio": 3.00, "costo": 1.40 },
    "13": { "nombre": "CHIPS GALLETA", "precio": 1.80, "costo": 0.80 },
    "14": { "nombre": "CARAMELO FULL", "precio": 2.00, "costo": 0.80 },
    "20": { "nombre": "RELLENITAS", "precio": 1.20, "costo": 0.50 },
    "26": { "nombre": "TENTACIÓN CHOCOLATE", "precio": 1.80, "costo": 0.80 },
    "34": { "nombre": "NICK TACO", "precio": 2.00, "costo": 0.90 },
    "37": { "nombre": "FRUTA MIXTA", "precio": 1.80, "costo": 0.75 },
    "40": { "nombre": "SODA LINE", "precio": 1.50, "costo": 0.65 },
    "29": { "nombre": "CLUB SOCIAL", "precio": 1.80, "costo": 0.80 },
    "30": { "nombre": "SODA LIGHT", "precio": 1.80, "costo": 0.80 },
    "32": { "nombre": "PALITOS DE AJONJOLI", "precio": 2.00, "costo": 0.90 },
    "48": { "nombre": "AGUA SWORD", "precio": 1.20, "costo": 0.50 },
    "01": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "1":  { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "16": { "nombre": "BLACK OUT 4UND", "precio": 1.30, "costo": 0.55 },
    "25": { "nombre": "VAINILLA", "precio": 1.20, "costo": 0.50 },
    "42": { "nombre": "VOLT", "precio": 2.50, "costo": 1.20 }
};

let DATABASE_STATE = [];
let STAGING_MEMORIA_TEMPORAL = [];
let HISTORIAL_COMPRAS_LOTES = [];
let HISTORIAL_TELEMETRIA_BANDEJAS = [];
let BASE_DATOS_CRM_LEADS = [];

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupUIEventListeners();
    loadPersistentData();
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

function toggleAbanico(id, triggerBtn) {
    const target = document.getElementById(id);
    if(target.classList.contains('open')) target.classList.remove('open');
    else target.classList.add('open');
}

function setupUIEventListeners() {
    document.getElementById('btnPreviewPasteData').addEventListener('click', convertRawTextToStagingPreview);
    document.getElementById('btnCommitStagingData').addEventListener('click', commitStagingToCloud);
    document.getElementById('formAddStock').addEventListener('submit', handleNewInvoiceSubmit);
    document.getElementById('formAddMachineTelemetry').addEventListener('submit', handleNewTelemetrySubmit);
    document.getElementById('formAddCRMLead').addEventListener('submit', handleNewCRMLeadSubmit);
    document.getElementById('crmDespachoSelectClient').addEventListener('change', updatePDFTemplateVisual);
    document.getElementById('btnDownloadPDFClient').addEventListener('click', downloadRealPDFCommercial);
    document.getElementById('btnWhatsAppDirectLink').addEventListener('click', dispatchWhatsAppMessage);
    document.getElementById('btnResetFilters').addEventListener('click', () => {
        document.getElementById('filterStartDate').value = '';
        document.getElementById('filterEndDate').value = '';
        document.getElementById('filterMachine').value = 'TODOS';
        processAndRenderAll();
    });
    
    document.getElementById('filterStartDate').addEventListener('input', processAndRenderAll);
    document.getElementById('filterEndDate').addEventListener('input', processAndRenderAll);
    document.getElementById('filterMachine').addEventListener('change', processAndRenderAll);
    document.getElementById('btnToggleMobileMenu').addEventListener('click', () => {
        document.getElementById('sidebarMenu').classList.toggle('open');
    });
}

function loadPersistentData() {
    DATABASE_STATE = JSON.parse(localStorage.getItem('v_state_ventas')) || [];
    HISTORIAL_COMPRAS_LOTES = JSON.parse(localStorage.getItem('v_state_lotes')) || [];
    HISTORIAL_TELEMETRIA_BANDEJAS = JSON.parse(localStorage.getItem('v_state_telemetria')) || [];
    BASE_DATOS_CRM_LEADS = JSON.parse(localStorage.getItem('v_state_crm')) || [];
    
    const savedDic = localStorage.getItem('v_state_diccionario');
    if(savedDic) { DICCIONARIO_PRODUCTOS = JSON.parse(savedDic); }

    buildFormSelectors();
    processAndRenderAll();
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function buildFormSelectors() {
    const s1 = document.getElementById('stockProductSelectorAutoComplete');
    const s2 = document.getElementById('telProductSelector');
    if(!s1 || !s2) return;
    s1.innerHTML = ''; s2.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let opt = `<option value="${c}">${DICCIONARIO_PRODUCTOS[c].nombre} (COD-${c})</option>`;
        s1.innerHTML += opt; s2.innerHTML += opt;
    });
}

function convertRawTextToStagingPreview() {
    const rawText = document.getElementById('rawCsvPasteData').value.trim();
    if(!rawText) { alert("El cuadro de texto está vacío."); return; }
    const lines = rawText.split(/\r?\n/);
    STAGING_MEMORIA_TEMPORAL = [];
    
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        let row = lines[i].split(/[;\t,]/).map(cell => cell.trim().replace(/"/g, ''));
        if (row[0].toUpperCase().includes("FECHA") || row[0] === "") continue;
        
        let rawDate = row[0] || "", rawValor = row[2] || "0.00", codeStr = (row[3] || "").trim();
        let valorNumerico = parseFloat(rawValor.replace(',', '.')) || 0;
        
        let cleanCode = codeStr;
        if(cleanCode.startsWith('0') && cleanCode.length > 1) cleanCode = cleanCode.substring(1);
        
        let pMeta = DICCIONARIO_PRODUCTOS[cleanCode] || DICCIONARIO_PRODUCTOS[codeStr] || { nombre: `Snack Cód. ${codeStr}`, precio: valorNumerico, costo: valorNumerico * 0.5 };
        
        STAGING_MEMORIA_TEMPORAL.push({
            id: 'V-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
            fecha: rawDate.split(' ')[0] || "2026-06-28",
            hora: rawDate.split(' ')[1] ? rawDate.split(' ')[1].substring(0,5) : "12:00",
            maquina: row[4] || "VENDRIX CENTRAL",
            codigo: `COD-${codeStr}`,
            rawCode: cleanCode,
            producto: pMeta.nombre,
            pago: row[4] && row[4].toUpperCase().includes("EFECTIVO") ? "Efectivo" : "Tarjeta/QR",
            cantidad: 1,
            valor: valorNumerico
        });
    }
    
    const tbody = document.querySelector('#tableStagingPreview tbody');
    tbody.innerHTML = '';
    if(STAGING_MEMORIA_TEMPORAL.length === 0) { alert("No se detectaron filas válidas."); return; }
    
    STAGING_MEMORIA_TEMPORAL.forEach(r => {
        tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td>${r.maquina}</td><td>${r.codigo}</td><td>${r.producto}</td><td>${r.pago}</td><td class="text-end">S/ ${r.valor.toFixed(2)}</td></tr>`;
    });
    document.getElementById('stagingCardContainer').classList.remove('d-none');
}

function commitStagingToCloud() {
    DATABASE_STATE = [...DATABASE_STATE, ...STAGING_MEMORIA_TEMPORAL];
    saveToStorage('v_state_ventas', DATABASE_STATE);
    document.getElementById('rawCsvPasteData').value = '';
    document.getElementById('stagingCardContainer').classList.add('d-none');
    
    // Auto actualizar selector de máquinas dinámico con las nuevas ingresadas
    const mSelect = document.getElementById('filterMachine');
    let maquinasUnicas = [...new Set(DATABASE_STATE.map(v => v.maquina))];
    mSelect.innerHTML = '<option value="TODOS">Todas las Máquinas</option>';
    maquinasUnicas.forEach(m => { mSelect.innerHTML += `<option value="${m}">${m}</option>`; });

    processAndRenderAll();
    alert("¡Ventas guardadas con éxito!");
}

function handleNewInvoiceSubmit(e) {
    e.preventDefault();
    let num = document.getElementById('stockInvoiceNum').value;
    let code = document.getElementById('stockProductSelectorAutoComplete').value;
    let qty = parseInt(document.getElementById('stockQty').value);
    let cost = parseFloat(document.getElementById('stockTotalCost').value);
    let date = document.getElementById('stockInvoiceDate').value;

    HISTORIAL_COMPRAS_LOTES.push({ id: 'L-'+Date.now(), rawCode: code, cantidad: qty, costo_total: cost, fecha_compra: date, num_factura: num });
    saveToStorage('v_state_lotes', HISTORIAL_COMPRAS_LOTES);
    document.getElementById('formAddStock').reset();
    processAndRenderAll();
    alert("¡Ingreso de factura registrado!");
}

function handleNewTelemetrySubmit(e) {
    e.preventDefault();
    let mach = document.getElementById('telMachineId').value.toUpperCase();
    let code = document.getElementById('telProductSelector').value;
    let date = document.getElementById('telLoadDate').value;
    let qty = parseInt(document.getElementById('telQty').value);

    HISTORIAL_TELEMETRIA_BANDEJAS.push({ id: 'T-'+Date.now(), maquina: mach, rawCode: code, fecha_carga: date, cantidad_inyectada: qty });
    saveToStorage('v_state_telemetria', HISTORIAL_TELEMETRIA_BANDEJAS);
    document.getElementById('formAddMachineTelemetry').reset();
    processAndRenderAll();
    alert("¡Abastecimiento de máquina sincronizado!");
}

function handleNewCRMLeadSubmit(e) {
    e.preventDefault();
    let inst = document.getElementById('crmInst').value;
    let contact = document.getElementById('crmContact').value;
    let phone = document.getElementById('crmPhone').value;
    let address = document.getElementById('crmAddress').value;

    BASE_DATOS_CRM_LEADS.push({ id: Date.now(), institucion: inst, contacto: contact, celular: phone, direccion: address, fecha: new Date().toISOString().split('T')[0], estado: "Prospecto" });
    saveToStorage('v_state_crm', BASE_DATOS_CRM_LEADS);
    document.getElementById('formAddCRMLead').reset();
    processAndRenderAll();
    alert("¡Cliente guardado en el CRM!");
}

function processAndRenderAll() {
    let fStart = document.getElementById('filterStartDate').value;
    let fEnd = document.getElementById('filterEndDate').value;
    let fMachine = document.getElementById('filterMachine').value;

    let filteredData = DATABASE_STATE.filter(v => {
        let matchDate = true;
        if(fStart) matchDate = matchDate && (v.fecha >= fStart);
        if(fEnd) matchDate = matchDate && (v.fecha <= fEnd);
        let matchMach = (fMachine === "TODOS" || v.maquina === fMachine);
        return matchDate && matchMach;
    });

    let totalSales = filteredData.reduce((s, r) => s + r.valor, 0);
    let totalQty = filteredData.reduce((s, r) => s + r.cantidad, 0);
    let totalCost = filteredData.reduce((s, r) => {
        let clean = r.rawCode;
        let c = DICCIONARIO_PRODUCTOS[clean]?.costo || 0;
        return s + (c * r.cantidad);
    }, 0);

    document.getElementById('kpiTotalSales').innerText = `S/ ${totalSales.toFixed(2)}`;
    document.getElementById('kpiTotalQty').innerText = totalQty;
    document.getElementById('kpiAvgTicket').innerText = `S/ ${totalQty > 0 ? (totalSales/totalQty).toFixed(2) : '0.00'}`;
    document.getElementById('kpiTotalProfit').innerText = `S/ ${(totalSales - totalCost).toFixed(2)}`;

    renderGlobalTransactionsTable(filteredData);
    renderRotacionTable(filteredData);
    renderDiccionarioTable();
    renderKardexTable(filteredData);
    renderTelemetryTable(filteredData);
    renderCRMTable();
}

function renderGlobalTransactionsTable(data) {
    const tbody = document.querySelector('#tableGlobalTransactions tbody');
    if(!tbody) return; tbody.innerHTML = '';
    data.forEach(r => {
        tbody.innerHTML += `
            <tr>
                <td>${r.fecha}</td>
                <td>${r.hora}</td>
                <td><span class="badge bg-secondary">${r.maquina}</span></td>
                <td class="font-monospace fw-bold">${r.codigo}</td>
                <td><strong>${r.producto}</strong></td>
                <td>${r.pago}</td>
                <td class="text-end fw-bold text-primary">S/ ${r.valor.toFixed(2)}</td>
                <td><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteVenta('${r.id}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
    });
}

function renderRotacionTable(ventas) {
    const tbody = document.querySelector('#tableTopProducts tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let matchVentas = ventas.filter(v => v.rawCode === c);
        let q = matchVentas.reduce((sum, v) => sum + v.cantidad, 0);
        let val = matchVentas.reduce((sum, v) => sum + v.valor, 0);
        if(q > 0) {
            tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${DICCIONARIO_PRODUCTOS[c].nombre}</strong></td><td class="text-end fw-bold text-info">${q} uds</td><td class="text-end fw-bold text-success">S/ ${val.toFixed(2)}</td></tr>`;
        }
    });
}

function renderDiccionarioTable() {
    const tbody = document.querySelector('#tableDicMaster tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let p = DICCIONARIO_PRODUCTOS[c];
        let margen = p.precio - p.costo;
        tbody.innerHTML += `
            <tr>
                <td class="font-monospace fw-bold">COD-${c}</td>
                <td><strong>${p.nombre}</strong></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm text-end" value="${p.costo.toFixed(2)}" onchange="updateDicCell('${c}', 'costo', this.value)"></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm text-end fw-bold text-primary" value="${p.precio.toFixed(2)}" onchange="updateDicCell('${c}', 'precio', this.value)"></td>
                <td class="text-end fw-bold text-success">S/ ${margen.toFixed(2)}</td>
            </tr>`;
    });
}

function updateDicCell(code, field, val) {
    DICCIONARIO_PRODUCTOS[code][field] = parseFloat(val) || 0;
    saveToStorage('v_state_diccionario', DICCIONARIO_PRODUCTOS);
    processAndRenderAll();
}

function renderKardexTable(ventas) {
    const tbody = document.querySelector('#tableStockKardex tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let name = DICCIONARIO_PRODUCTOS[c].nombre;
        let entradas = HISTORIAL_COMPRAS_LOTES.filter(l => l.rawCode === c).reduce((sum, l) => sum + l.cantidad, 0);
        let salidas = ventas.filter(v => v.rawCode === c).reduce((sum, v) => sum + v.cantidad, 0);
        let saldo = entradas - salidas;
        tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${name}</strong></td><td class="text-end text-success fw-bold">+${entradas}</td><td class="text-end text-danger fw-bold">-${salidas}</td><td class="text-end table-primary fw-bold ${saldo < 5 ? 'bg-danger bg-opacity-10 text-danger':''}">${saldo}</td></tr>`;
    });
}

function renderTelemetryTable(ventas) {
    const tbody = document.querySelector('#tableTelemetryMaster tbody');
    if(!tbody) return; tbody.innerHTML = '';
    HISTORIAL_TELEMETRIA_BANDEJAS.forEach(t => {
        let name = DICCIONARIO_PRODUCTOS[t.rawCode]?.nombre || "Snack Ext";
        let vendidosPost = ventas.filter(v => v.rawCode === t.rawCode && v.maquina === t.maquina).reduce((sum, v) => sum + v.cantidad, 0);
        tbody.innerHTML += `
            <tr>
                <td><span class="badge bg-dark">${t.maquina}</span></td>
                <td>COD-${t.rawCode}</td>
                <td><strong>${name}</strong></td>
                <td>${t.fecha_carga}</td>
                <td class="text-end fw-bold">${t.cantidad_inyectada}</td>
                <td class="text-end text-danger">-${vendidosPost}</td>
                <td class="text-end table-success fw-bold fs-6">${Math.max(t.cantidad_inyectada - vendidosPost, 0)}</td>
                <td><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteTelemetry('${t.id}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
    });
}

function renderCRMTable() {
    const tbody = document.querySelector('#tableCRMMaster tbody');
    const select = document.getElementById('crmDespachoSelectClient');
    if(!tbody || !select) return; tbody.innerHTML = ''; select.innerHTML = '<option value="">Seleccione...</option>';
    
    BASE_DATOS_CRM_LEADS.forEach(l => {
        tbody.innerHTML += `
            <tr>
                <td>${l.fecha}</td>
                <td><input type="text" class="form-control form-control-sm fw-bold" value="${l.institucion}" onchange="updateCRMCell(${l.id}, 'institucion', this.value)"></td>
                <td><input type="text" class="form-control form-control-sm" value="${l.contacto}" onchange="updateCRMCell(${l.id}, 'contacto', this.value)"></td>
                <td><input type="text" class="form-control form-control-sm font-monospace" value="${l.celular}" onchange="updateCRMCell(${l.id}, 'celular', this.value)"></td>
                <td><input type="text" class="form-control form-control-sm" value="${l.direccion}" onchange="updateCRMCell(${l.id}, 'direccion', this.value)"></td>
                <td>
                    <select class="form-select form-select-sm" onchange="updateCRMCell(${l.id}, 'estado', this.value)">
                        <option value="Prospecto" ${l.estado==='Prospecto'?'selected':''}>Prospecto</option>
                        <option value="Propuesta Enviada" ${l.estado==='Propuesta Enviada'?'selected':''}>Propuesta Enviada</option>
                        <option value="Cerrado Ganado" ${l.estado==='Cerrado Ganado'?'selected':''}>Cerrado Ganado</option>
                    </select>
                </td>
                <td class="text-center"><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteLead(${l.id})"><i class="fa-solid fa-user-minus"></i></button></td>
            </tr>`;
        select.innerHTML += `<option value="${l.id}">${l.institucion}</option>`;
    });
}

function updateCRMCell(id, field, val) {
    let lead = BASE_DATOS_CRM_LEADS.find(l => l.id === id);
    if(lead) { lead[field] = val; saveToStorage('v_state_crm', BASE_DATOS_CRM_LEADS); }
}

function deleteVenta(id) { DATABASE_STATE = DATABASE_STATE.filter(v => v.id !== id); saveToStorage('v_state_ventas', DATABASE_STATE); processAndRenderAll(); }
function deleteTelemetry(id) { HISTORIAL_TELEMETRIA_BANDEJAS = HISTORIAL_TELEMETRIA_BANDEJAS.filter(t => t.id !== id); saveToStorage('v_state_telemetria', HISTORIAL_TELEMETRIA_BANDEJAS); processAndRenderAll(); }
function deleteLead(id) { BASE_DATOS_CRM_LEADS = BASE_DATOS_CRM_LEADS.filter(l => l.id !== id); saveToStorage('v_state_crm', BASE_DATOS_CRM_LEADS); processAndRenderAll(); }

function updatePDFTemplateVisual() {
    let id = document.getElementById('crmDespachoSelectClient').value; if(!id) return;
    let lead = BASE_DATOS_CRM_LEADS.find(l => l.id == id);
    if(lead) {
        document.getElementById('pdfClientInst').innerText = lead.institucion;
        document.getElementById('pdfClientContact').innerText = lead.contacto;
    }
}

function exportTableToExcel(tableId, filename) {
    let table = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(table, { sheet: "VENDRIX ERP" });
    XLSX.writeFile(wb, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function downloadRealPDFCommercial() {
    let element = document.getElementById('pdfTemplateContainer');
    let opt = {
        margin:       0.5,
        filename:     'Propuesta_Comercial_VENDRIX.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

function dispatchWhatsAppMessage() {
    let id = document.getElementById('crmDespachoSelectClient').value;
    if(!id) { alert("Por favor seleccione un cliente de la lista primero."); return; }
    let lead = BASE_DATOS_CRM_LEADS.find(l => l.id == id);
    if(lead) {
        let msg = `Hola *${lead.contacto}*, le saluda la Dirección de Operaciones de *VENDRIX*. Le acabamos de enviar la propuesta formal para la instalación de Estaciones de Autoabastecimiento Inteligente en *${lead.institucion}*. Quedamos atentos para coordinar la fecha de inspección técnica. ¡Un gusto!`;
        let url = `https://api.whatsapp.com/send?phone=51${lead.celular}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    }
}
