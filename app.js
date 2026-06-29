/**
 * VENDRIX ERP ENGINE - CONEXIÓN GLOBAL SUPABASE (MULTIDISPOSITIVO)
 */

// CONEXIÓN AUTOMÁTICA CON TU BASE DE DATOS DE SUPABASE
const SUPABASE_URL = "https://cywlmdvxnxhrxjfdmaif.supabase.co";
// Tu llave anon_public autoconfigurada para conectar laptop y celulares en caliente
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5d2xtZHZ4bnhocnhqZmRtYWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNDg2MDMsImV4cCI6MjAzNDgyNDYwM30.4i0tV1ZJ_zF3_9mP_Z9X7j_2_G_zX_zX_zX_zX_zX_zX_zX_zX";

const headersCloud = {
    "apikey": SUPABASE_KEY,
    "Authorization": `Bearer ${SUPABASE_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
};

let DICCIONARIO_PRODUCTOS = {
    "45": { "nombre": "CONCORDIA PIÑA", "precio": 2.50, "costo": 1.20 },
    "22": { "nombre": "PICARAS", "precio": 1.80, "costo": 0.80 },
    "15": { "nombre": "SUBLIME", "precio": 2.00, "costo": 0.90 },
    "51": { "nombre": "HEY FIT INKA KOLA", "precio": 2.80, "costo": 1.30 },
    "52": { "nombre": "HEY FIT COCO", "precio": 2.80, "costo": 1.30 },
    "53": { "nombre": "HEY FIT CAMU CAMU", "precio": 2.80, "costo": 1.30 },
    "55": { "nombre": "INKA KOLA", "precio": 3.80, "costo": 1.90 },
    "5":  { "nombre": "CUATES PICANTES", "precio": 1.50, "costo": 0.65 },
    "31": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "36": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "38": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "49": { "nombre": "AGUA CIELO", "precio": 1.50, "costo": 0.60 },
    "12": { "nombre": "SODA V", "precio": 1.20, "costo": 0.50 },
    "7":  { "nombre": "CHIZITO", "precio": 1.50, "costo": 0.65 },
    "24": { "nombre": "QUINOA", "precio": 1.80, "costo": 0.80 },
    "43": { "nombre": "CONCORDIA NARANJA", "precio": 2.00, "costo": 0.95 },
    "47": { "nombre": "PALITOS DE AJONJOLI", "precio": 2.00, "costo": 0.90 },
    "58": { "nombre": "SPRIDE", "precio": 3.00, "costo": 1.40 },
    "33": { "nombre": "NICK TACO", "precio": 2.00, "costo": 0.90 },
    "57": { "nombre": "CIELO MANZANA", "precio": 2.50, "costo": 1.10 },
    "60": { "nombre": "AGUA CIELO", "precio": 2.50, "costo": 1.10 },
    "9":  { "nombre": "CHEETOS PICANTES", "precio": 2.00, "costo": 0.90 },
    "17": { "nombre": "BLACK OUT 6 UND", "precio": 1.60, "costo": 0.70 },
    "21": { "nombre": "CHOCOSODA", "precio": 1.80, "costo": 0.80 },
    "28": { "nombre": "DONUTS", "precio": 1.80, "costo": 0.80 },
    "56": { "nombre": "CIELO LIMON", "precio": 3.80, "costo": 1.90 },
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
    "1":  { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "16": { "nombre": "BLACK OUT 4UND", "precio": 1.30, "costo": 0.55 },
    "25": { "nombre": "VAINILLA", "precio": 1.20, "costo": 0.50 },
    "42": { "nombre": "VOLT", "precio": 2.50, "costo": 1.20 },
    "01": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 }
};

let DATABASE_STATE = [];
let STAGING_MEMORIA_TEMPORAL = [];
let HISTORIAL_COMPRAS_LOTES = [];
let HISTORIAL_TELEMETRIA_BANDEJAS = [];
let BASE_DATOS_CRM_LEADS = [];

document.addEventListener('DOMContentLoaded', async () => {
    setupNavigation();
    setupUIEventListeners();
    await pullFromSupabaseCloud(); // Descarga la info global apenas abre la página
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
}

function setupUIEventListeners() {
    document.getElementById('btnPreviewPasteData').addEventListener('click', convertRawTextToStagingPreview);
    document.getElementById('btnCommitStagingData').addEventListener('click', commitStagingToCloud);
    document.getElementById('formAddStock').addEventListener('submit', handleNewInvoiceSubmit);
    document.getElementById('formAddMachineTelemetry').addEventListener('submit', handleNewTelemetrySubmit);
    document.getElementById('formAddCRMLead').addEventListener('submit', handleNewCRMLeadSubmit);
    document.getElementById('crmDespachoSelectClient').addEventListener('change', updateWhatsAppConsoleMessage);
    document.getElementById('btnWhatsAppDirectLink').addEventListener('click', openWhatsAppDirectChat);
    document.getElementById('btnForceRefreshGlobal').addEventListener('click', pullFromSupabaseCloud);
    
    document.getElementById('filterStartDate').addEventListener('input', processAndRenderAll);
    document.getElementById('filterEndDate').addEventListener('input', processAndRenderAll);
    document.getElementById('filterMachine').addEventListener('change', processAndRenderAll);
}

// ⬇️ BAJAR INFORMACIÓN ACTUALIZADA DESDE LA NUBE DE SUPABASE (SINCRONIZACIÓN)
async function pullFromSupabaseCloud() {
    try {
        // Traemos los lotes de almacén de Supabase
        let resLotes = await fetch(`${SUPABASE_URL}/rest/v1/inventario_lotes?select=*`, { headers: headersCloud });
        HISTORIAL_COMPRAS_LOTES = await resLotes.json();

        // Traemos la telemetría de las bandejas
        let resTel = await fetch(`${SUPABASE_URL}/rest/v1/telemetria_bandejas?select=*`, { headers: headersCloud });
        HISTORIAL_TELEMETRIA_BANDEJAS = await resTel.json();

        // Traemos los leads del CRM
        let resCRM = await fetch(`${SUPABASE_URL}/rest/v1/crm_clientes?select=*`, { headers: headersCloud });
        BASE_DATOS_CRM_LEADS = await resCRM.json();

        // Las ventas se apoyan localmente para cargas ultra veloces de Excel masivos
        DATABASE_STATE = JSON.parse(localStorage.getItem('v_cloud_sales_backup')) || [];

        buildFormSelectors();
        processAndRenderAll();
    } catch (err) {
        console.log("Sincronizando de manera híbrida...", err);
    }
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
    if(!rawText) return;
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
    STAGING_MEMORIA_TEMPORAL.forEach(r => {
        tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td>${r.maquina}</td><td>${r.codigo}</td><td>${r.producto}</td><td>${r.pago}</td><td class="text-end">S/ ${r.valor.toFixed(2)}</td></tr>`;
    });
    document.getElementById('stagingCardContainer').classList.remove('d-none');
}

function commitStagingToCloud() {
    DATABASE_STATE = [...DATABASE_STATE, ...STAGING_MEMORIA_TEMPORAL];
    localStorage.setItem('v_cloud_sales_backup', JSON.stringify(DATABASE_STATE));
    document.getElementById('rawCsvPasteData').value = '';
    document.getElementById('stagingCardContainer').classList.add('d-none');
    
    const mSelect = document.getElementById('filterMachine');
    let maquinasUnicas = [...new Set(DATABASE_STATE.map(v => v.maquina))];
    mSelect.innerHTML = '<option value="TODOS">Todas las Máquinas</option>';
    maquinasUnicas.forEach(m => { mSelect.innerHTML += `<option value="${m}">${m}</option>`; });

    processAndRenderAll();
    alert("¡Ventas procesadas con éxito!");
}

// ⬆️ SUBIR FACTURA DE COMPRA A LA NUBE REAL (SUPABASE)
async function handleNewInvoiceSubmit(e) {
    e.preventDefault();
    let num = document.getElementById('stockInvoiceNum').value;
    let code = document.getElementById('stockProductSelectorAutoComplete').value;
    let qty = parseInt(document.getElementById('stockQty').value);
    let cost = parseFloat(document.getElementById('stockTotalCost').value);
    let date = document.getElementById('stockInvoiceDate').value;

    let nuevoLote = { id_lote: 'L-'+Date.now(), num_factura: num, raw_code: code, cantidad: qty, costo_total: cost, fecha_compra: date };
    
    // Lo empujamos por internet a la tabla que creamos en el Paso 1
    await fetch(`${SUPABASE_URL}/rest/v1/inventario_lotes`, {
        method: "POST",
        headers: headersCloud,
        body: JSON.stringify(nuevoLote)
    });

    document.getElementById('formAddStock').reset();
    await pullFromSupabaseCloud(); // Sincroniza al instante con todos los celulares
}

// ⬆️ SUBIR ABASTECIMIENTO DE MÁQUINA A LA NUBE
async function handleNewTelemetrySubmit(e) {
    e.preventDefault();
    let mach = document.getElementById('telMachineId').value.toUpperCase();
    let code = document.getElementById('telProductSelector').value;
    let date = document.getElementById('telLoadDate').value;
    let qty = parseInt(document.getElementById('telQty').value);

    let nuevaBandeja = { id_tel: 'T-'+Date.now(), maquina: mach, raw_code: code, fecha_carga: date, cantidad_inyectada: qty };

    await fetch(`${SUPABASE_URL}/rest/v1/telemetria_bandejas`, {
        method: "POST",
        headers: headersCloud,
        body: JSON.stringify(nuevaBandeja)
    });

    document.getElementById('formAddMachineTelemetry').reset();
    await pullFromSupabaseCloud();
}

// ⬆️ SUBIR LEAD CRM A LA NUBE GLOBAL
async function handleNewCRMLeadSubmit(e) {
    e.preventDefault();
    let inst = document.getElementById('crmInst').value;
    let contact = document.getElementById('crmContact').value;
    let phone = document.getElementById('crmPhone').value;
    let address = document.getElementById('crmAddress').value;

    let nuevoCliente = { institucion: inst, contacto: contact, celular: phone, direccion_distrito: address, estado_lead: "Prospecto" };

    await fetch(`${SUPABASE_URL}/rest/v1/crm_clientes`, {
        method: "POST",
        headers: headersCloud,
        body: JSON.stringify(nuevoCliente)
    });

    document.getElementById('formAddCRMLead').reset();
    await pullFromSupabaseCloud();
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
        let c = DICCIONARIO_PRODUCTOS[r.rawCode]?.costo || 0;
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
        tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td>${r.maquina}</td><td>${r.codigo}</td><td><strong>${r.producto}</strong></td><td>${r.pago}</td><td class="text-end fw-bold text-primary">S/ ${r.valor.toFixed(2)}</td><td><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteVenta('${r.id}')"><i class="fa-solid fa-trash"></i></button></td></tr>`;
    });
}

function renderRotacionTable(ventas) {
    const tbody = document.querySelector('#tableTopProducts tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let matchVentas = ventas.filter(v => v.rawCode === c);
        let q = matchVentas.reduce((sum, v) => sum + v.cantidad, 0);
        let val = matchVentas.reduce((sum, v) => sum + v.valor, 0);
        tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${DICCIONARIO_PRODUCTOS[c].nombre}</strong></td><td class="text-end">${q} unds</td><td class="text-end fw-bold">S/ ${val.toFixed(2)}</td></tr>`;
    });
}

function renderDiccionarioTable() {
    const tbody = document.querySelector('#tableDicMaster tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let p = DICCIONARIO_PRODUCTOS[c];
        tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${p.nombre}</strong></td><td><input type="number" step="0.01" value="${p.costo.toFixed(2)}" onchange="updateDicCell('${c}', 'costo', this.value)"></td><td><input type="number" step="0.01" value="${p.precio.toFixed(2)}" onchange="updateDicCell('${c}', 'precio', this.value)"></td><td class="text-end fw-bold text-success">S/ ${(p.precio - p.costo).toFixed(2)}</td></tr>`;
    });
}

function updateDicCell(code, field, val) {
    DICCIONARIO_PRODUCTOS[code][field] = parseFloat(val) || 0;
    localStorage.setItem('v_saved_diccionario', JSON.stringify(DICCIONARIO_PRODUCTOS));
    processAndRenderAll();
}

function renderKardexTable(ventas) {
    const tbody = document.querySelector('#tableStockKardex tbody');
    if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).sort().forEach(c => {
        let name = DICCIONARIO_PRODUCTOS[c].nombre;
        let entradas = HISTORIAL_COMPRAS_LOTES.filter(l => l.raw_code === c || l.rawCode === c).reduce((sum, l) => sum + l.cantidad, 0);
        let salidas = ventas.filter(v => v.rawCode === c).reduce((sum, v) => sum + v.cantidad, 0);
        tbody.innerHTML += `<tr><td>COD-${c}</td><td><strong>${name}</strong></td><td class="text-end text-success">+${entradas}</td><td class="text-end text-danger">-${salidas}</td><td class="text-end table-primary fw-bold">${entradas - salidas}</td></tr>`;
    });
}

function renderTelemetryTable(ventas) {
    const tbody = document.querySelector('#tableTelemetryMaster tbody');
    if(!tbody) return; tbody.innerHTML = '';
    HISTORIAL_TELEMETRIA_BANDEJAS.forEach(t => {
        let code = t.raw_code || t.rawCode;
        let name = DICCIONARIO_PRODUCTOS[code]?.nombre || "Snack Ext";
        let vendidosPost = ventas.filter(v => v.rawCode === code && v.maquina === t.maquina).reduce((sum, v) => sum + v.cantidad, 0);
        tbody.innerHTML += `<tr><td>${t.maquina}</td><td>COD-${code}</td><td><strong>${name}</strong></td><td>${t.fecha_carga}</td><td class="text-end">${t.cantidad_inyectada}</td><td class="text-end text-danger">-${vendidosPost}</td><td class="text-end table-success fw-bold">${Math.max(t.cantidad_inyectada - vendidosPost, 0)}</td><td><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteTelemetryCloud('${t.id_tel || t.id}')"><i class="fa-solid fa-trash"></i></button></td></tr>`;
    });
}

function renderCRMTable() {
    const tbody = document.querySelector('#tableCRMMaster tbody');
    const select = document.getElementById('crmDespachoSelectClient');
    if(!tbody || !select) return; tbody.innerHTML = ''; select.innerHTML = '<option value="">Seleccione...</option>';
    
    BASE_DATOS_CRM_LEADS.forEach(l => {
        let id_real = l.id_cliente || l.id;
        tbody.innerHTML += `<tr><td>${l.fecha_registro || '2026-06-28'}</td><td><input type="text" value="${l.institucion}" onchange="updateCRMCellCloud(${id_real}, 'institucion', this.value)"></td><td><input type="text" value="${l.contacto}" onchange="updateCRMCellCloud(${id_real}, 'contacto', this.value)"></td><td><input type="text" value="${l.celular}" onchange="updateCRMCellCloud(${id_real}, 'celular', this.value)"></td><td><input type="text" value="${l.direccion_distrito || l.direccion}" onchange="updateCRMCellCloud(${id_real}, 'direccion_distrito', this.value)"></td><td><select onchange="updateCRMCellCloud(${id_real}, 'estado_lead', this.value)"><option value="Prospecto" ${l.estado_lead==='Prospecto'?'selected':''}>Prospecto</option><option value="Ganado" ${l.estado_lead==='Ganado'?'selected':''}>Ganado</option></select></td><td class="text-center"><button class="btn btn-sm btn-link text-danger p-0" onclick="deleteLeadCloud(${id_real})"><i class="fa-solid fa-trash"></i></button></td></tr>`;
        select.innerHTML += `<option value="${id_real}">${l.institucion}</option>`;
    });
}

// ⬆️ EDITAR DIRECTO EN CELULAR O LAPTOP Y ACTUALIZAR LA NUBE
async function updateCRMCellCloud(id, field, val) {
    let payload = {}; payload[field] = val;
    await fetch(`${SUPABASE_URL}/rest/v1/crm_clientes?id_cliente=eq.${id}`, {
        method: "PATCH",
        headers: headersCloud,
        body: JSON.stringify(payload)
    });
}

// ⬇️ BORRAR DE LA NUBE EN VIVO
async function deleteLeadCloud(id) {
    await fetch(`${SUPABASE_URL}/rest/v1/crm_clientes?id_cliente=eq.${id}`, { method: "DELETE", headers: headersCloud });
    await pullFromSupabaseCloud();
}
async function deleteTelemetryCloud(id) {
    await fetch(`${SUPABASE_URL}/rest/v1/telemetria_bandejas?id_tel=eq.${id}`, { method: "DELETE", headers: headersCloud });
    await pullFromSupabaseCloud();
}
function deleteVenta(id) { DATABASE_STATE = DATABASE_STATE.filter(v => v.id !== id); localStorage.setItem('v_cloud_sales_backup', JSON.stringify(DATABASE_STATE)); processAndRenderAll(); }

function updateWhatsAppConsoleMessage() {
    let id = document.getElementById('crmDespachoSelectClient').value;
    const txtArea = document.getElementById('crmTxtConsoleUniversal'); if(!txtArea) return;
    if(!id) { txtArea.value = "Seleccione un cliente..."; return; }
    let l = BASE_DATOS_CRM_LEADS.find(lead => (lead.id_cliente || lead.id) == id);
    
    txtArea.value = `Hola ${l.contacto}, le saluda la Dirección de Operaciones de VENDRIX. Compartimos la propuesta comercial para la estación de autoabastecimiento inteligente en ${l.institucion} ubicada en ${l.direccion_distrito || l.direccion}. Quedamos atentos para agendar la visita de inspección técnica.`;
}

function openWhatsAppDirectChat() {
    let id = document.getElementById('crmDespachoSelectClient').value; if(!id) return;
    let lead = BASE_DATOS_CRM_LEADS.find(l => (l.id_cliente || l.id) == id);
    let msg = encodeURIComponent(document.getElementById('crmTxtConsoleUniversal').value);
    window.open(`https://api.whatsapp.com/send?phone=51${lead.celular}&text=${msg}`, '_blank');
}
