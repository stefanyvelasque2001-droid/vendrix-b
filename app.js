/**
 * VENDRIX BI - SERVERLESS ENGINE CON CRM DE EXPANSIÓN INTEGRADO
 */

let DICCIONARIO_PRODUCTOS = {
    "55": { "nombre": "INKA KOLA", "precio": 3.80, "costo": 1.90 },
    "56": { "nombre": "COCA COLA", "precio": 3.80, "costo": 1.90 },
    "58": { "nombre": "CIELO MANZANA", "precio": 3.00, "costo": 1.40 },
    "59": { "nombre": "SPRITE", "precio": 3.00, "costo": 1.40 },
    "51": { "nombre": "HEY FIT CAMU CAMU", "precio": 2.80, "costo": 1.30 },
    "53": { "nombre": "HEY FIT HIERBA LUISA", "precio": 2.80, "costo": 1.30 },
    "54": { "nombre": "HEY FIT COCA COLA", "precio": 2.80, "costo": 1.30 },
    "41": { "nombre": "GATORADE", "precio": 2.50, "costo": 1.20 },
    "50": { "nombre": "AGUA SAN MATEO", "precio": 2.50, "costo": 1.10 },
    "57": { "nombre": "CIELO limon", "precio": 2.50, "costo": 1.10 },
    "31": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "32": { "nombre": "PALITOS DE AJONJOLI", "precio": 2.00, "costo": 0.90 },
    "33": { "nombre": "NICK TACO", "precio": 2.00, "costo": 0.90 },
    "34": { "nombre": "NICK TACO", "precio": 2.00, "costo": 0.90 },
    "35": { "nombre": "RITZ TACO", "precio": 2.00, "costo": 0.90 },
    "38": { "nombre": "ROSCA", "precio": 2.00, "costo": 0.90 },
    "42": { "nombre": "SEVEN UP", "precio": 2.00, "costo": 0.95 },
    "43": { "nombre": "CONCORDIA NARANJA", "precio": 2.00, "costo": 0.95 },
    "44": { "nombre": "CONCORDIA FRESA", "precio": 2.00, "costo": 0.95 },
    "45": { "nombre": "CONCORDIA PIÑA", "precio": 2.00, "costo": 0.95 },
    "46": { "nombre": "GUARANITA", "precio": 2.00, "costo": 0.95 },
    "47": { "nombre": "SAN MATEO CON GAS", "precio": 2.00, "costo": 0.90 },
    "21": { "nombre": "CHOCOSODA", "precio": 1.80, "costo": 0.80 },
    "22": { "nombre": "PICARAS", "precio": 1.80, "costo": 0.80 },
    "23": { "nombre": "MOROCHAS", "precio": 1.80, "costo": 0.80 },
    "24": { "nombre": "QUINOA", "precio": 1.80, "costo": 0.80 },
    "26": { "nombre": "TENTACIÓN DE CHOCOLATE", "precio": 1.80, "costo": 0.80 },
    "28": { "nombre": "DONUTS", "precio": 1.80, "costo": 0.80 },
    "29": { "nombre": "CLUB SOCIAL", "precio": 1.80, "costo": 0.80 },
    "30": { "nombre": "GLACITAS", "precio": 1.80, "costo": 0.80 },
    "36": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "37": { "nombre": "FRUTA MIXTA", "precio": 1.80, "costo": 0.75 },
    "39": { "nombre": "CHIPS GALLETA", "precio": 1.80, "costo": 0.80 },
    "5":  { "nombre": "CUATES PICANTES", "precio": 1.50, "costo": 0.65 },
    "27": { "nombre": "INTEGRALES DE MIEL", "precio": 1.50, "costo": 0.65 },
    "40": { "nombre": "SODA LINE", "precio": 1.50, "costo": 0.65 },
    "49": { "nombre": "AGUA CIELO", "precio": 1.50, "costo": 0.60 },
    "60": { "nombre": "CIELO NARANJA", "precio": 2.50, "costo": 1.10 },
    "19": { "nombre": "RITZ PEQUEÑO", "precio": 1.80, "costo": 0.80 },
    "25": { "nombre": "VAINILLA", "precio": 1.20, "costo": 0.50 },
    "48": { "nombre": "AGUA SWORD", "precio": 1.20, "costo": 0.50 },
    "52": { "nombre": "HEY FIT COCO", "precio": 2.80, "costo": 1.30 },
    "9":  { "nombre": "CHEETOS PICANTES", "precio": 2.00, "costo": 0.90 },
    "11": { "nombre": "TRIDENT", "precio": 2.00, "costo": 0.80 },
    "14": { "nombre": "CARAMELO FULL", "precio": 2.00, "costo": 0.80 },
    "15": { "nombre": "SUBLIME", "precio": 2.00, "costo": 0.90 },
    "13": { "nombre": "CHIPS GALLETA", "precio": 1.80, "costo": 0.80 },
    "18": { "nombre": "CASINO", "precio": 1.80, "costo": 0.80 },
    "01": { "nombre": "CHIFLES", "precio": 1.80, "costo": 0.75 },
    "17": { "nombre": "BLACK OUT 6 UND", "precio": 1.60, "costo": 0.70 },
    "3":  { "nombre": "TIKTOK", "precio": 1.50, "costo": 0.60 },
    "7":  { "nombre": "CHIZITO", "precio": 1.50, "costo": 0.65 },
    "16": { "nombre": "BLACK OUT 4UND", "precio": 1.30, "costo": 0.55 },
    "1":  { "nombre": "INKACHIPS SAL", "precio": 2.50, "costo": 1.10 },
    "12": { "nombre": "SODA V", "precio": 1.20, "costo": 0.50 },
    "20": { "nombre": "RELLENITAS", "precio": 1.20, "costo": 0.50 }
};

let DATABASE_STATE = [];
let STAGING_MEMORIA_TEMPORAL = []; 
let HISTORIAL_COMPRAS_LOTES = []; 
let HISTORIAL_GASTOS_EXTRA = []; 
let HISTORIAL_TELEMETRIA_BANDEJAS = []; 
let BASE_DATOS_CRM_LEADS = []; 

let chartHistory = null, chartPayments = null, chartTopProducts = null;
let dtInstance = null, dtDicMaster = null, dtSimulationOrder = null, dtGastosMaster = null, dtTelemetryMaster = null, dtCRMMaster = null;

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupUIEventListeners();
    loadApplicationData();
});

function setupNavigation() {
    const links = document.querySelectorAll('.sidebar .nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href').substring(1);
            document.querySelectorAll('.content-view').forEach(view => { view.classList.add('d-none'); });
            document.getElementById(targetId).classList.remove('d-none');

            const filterCard = document.getElementById('globalFilterCard');
            if(targetId.includes('crm')) filterCard.classList.add('d-none');
            else filterCard.classList.remove('d-none');
        });
    });
}

function setupUIEventListeners() {
    document.getElementById('btnPreviewPasteData').addEventListener('click', convertRawTextToStagingPreview);
    document.getElementById('btnCommitStagingData').addEventListener('click', commitStagingToDashboard);
    document.getElementById('formAddStock').addEventListener('submit', handleNewInvoiceSubmit);
    document.getElementById('formAddDicProduct').addEventListener('submit', handleDicProductSubmit);
    document.getElementById('formAddGasto').addEventListener('submit', handleNewGastoSubmit);
    document.getElementById('formAddMachineTelemetry').addEventListener('submit', handleNewTelemetrySubmit);
    
    document.getElementById('formAddCRMLead').addEventListener('submit', handleNewCRMLeadSubmit);
    document.getElementById('crmDespachoSelectClient').addEventListener('change', actualizarConsolaTextoComercial);
    document.getElementById('btnCopyConsoleTxt').addEventListener('click', copiarTextoConsolaPortapapeles);
    document.getElementById('btnDownloadPDFClient').addEventListener('click', simularDescargaCartaPresentacionPDF);
    document.getElementById('btnWhatsAppDirectLink').addEventListener('click', abrirChatDirectoWhatsAppCRM);

    document.getElementById('simPeriodDays').addEventListener('change', () => { renderSimulationOrderTable(DATABASE_STATE); });
    document.getElementById('btnForceRefreshGlobal').addEventListener('click', () => { processAndRenderAll(); });
    ['filterStartDate', 'filterEndDate', 'filterPayment', 'filterMachine'].forEach(id => {
        document.getElementById(id).addEventListener('change', processAndRenderAll);
    });
}

function loadApplicationData() {
    DATABASE_STATE = JSON.parse(localStorage.getItem('v_bi_data')) || [];
    HISTORIAL_COMPRAS_LOTES = JSON.parse(localStorage.getItem('v_bi_lotes')) || [];
    HISTORIAL_GASTOS_EXTRA = JSON.parse(localStorage.getItem('v_bi_gastos')) || [];
    HISTORIAL_TELEMETRIA_BANDEJAS = JSON.parse(localStorage.getItem('v_bi_tel')) || [];
    BASE_DATOS_CRM_LEADS = JSON.parse(localStorage.getItem('v_crm_leads')) || [];

    buildFormSelectorsAutoComplete();
    renderDicMasterTable();
    renderInvoiceHistoryTable();
    renderGastosMasterTable();
    renderTelemetryMasterTable();
    renderCRMMasterTable();
    actualizarDropdownDespachoClientes();
    populateSelectors(DATABASE_STATE);
    processAndRenderAll();
}

function handleNewCRMLeadSubmit(e) {
    e.preventDefault();
    const inst = document.getElementById('crmInst').value.trim();
    const cat = document.getElementById('crmCat').value;
    const contact = document.getElementById('crmContact').value.trim();
    const email = document.getElementById('crmEmail').value.trim();
    const phone = document.getElementById('crmPhone').value.trim();
    const address = document.getElementById('crmAddress').value.trim();

    BASE_DATOS_CRM_LEADS.push({
        id_lead: `L-${Date.now()}`,
        fecha_alta: new Date().toISOString().split('T')[0],
        institucion: inst, categoria: cat, contacto: contact, correo: email, celular: phone, direccion: address,
        estado: 'Sin Contactar'
    });

    localStorage.setItem('v_crm_leads', JSON.stringify(BASE_DATOS_CRM_LEADS));
    document.getElementById('formAddCRMLead').reset();
    renderCRMMasterTable();
    actualizarDropdownDespachoClientes();
    alert("¡Cliente registrado en el embudo con éxito!");
}

function renderCRMMasterTable() {
    const tbody = document.querySelector('#tableCRMMaster tbody'); if(!tbody) return;
    if(dtCRMMaster) dtCRMMaster.destroy(); tbody.innerHTML = '';

    BASE_DATOS_CRM_LEADS.forEach(l => {
        tbody.innerHTML += `
            <tr>
                <td class="font-monospace">${l.fecha_alta}</td>
                <td><strong>${l.institucion}</strong> <br><small class="text-muted text-uppercase">${l.categoria}</small></td>
                <td><small>${l.direccion}</small></td>
                <td><strong>${l.contacto}</strong><br><small class="text-muted">${l.correo}</small></td>
                <td class="font-monospace">${l.celular}</td>
                <td>
                    <select class="form-select form-select-sm fw-bold border-primary" onchange="cambiarEstadoLeadEnVivo('${l.id_lead}', this.value)">
                        <option value="Sin Contactar" ${l.estado === 'Sin Contactar' ? 'selected':''}>⚪ Sin Contactar</option>
                        <option value="En espera" ${l.estado === 'En espera' ? 'selected':''}>🟡 En espera</option>
                        <option value="No responde" ${l.estado === 'No responde' ? 'selected':''}>🔴 No responde</option>
                        <option value="Exito" ${l.estado === 'Exito' ? 'selected':''}>🟢 Reunión Agendada</option>
                    </select>
                </td>
                <td class="text-center"><button class="btn btn-xs btn-outline-danger py-0 px-2" onclick="deleteCRMLeadField('${l.id_lead}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`;
    });
    dtCRMMaster = $('#tableCRMMaster').DataTable({ destroy: true, pageLength: 5, language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function cambiarEstadoLeadEnVivo(id, nuevoEstado) {
    let lead = BASE_DATOS_CRM_LEADS.find(l => l.id_lead === id);
    if(lead) { lead.estado = nuevoEstado; localStorage.setItem('v_crm_leads', JSON.stringify(BASE_DATOS_CRM_LEADS)); }
}

function deleteCRMLeadField(id) {
    if(confirm("¿Eliminar este cliente?")) {
        BASE_DATOS_CRM_LEADS = BASE_DATOS_CRM_LEADS.filter(l => l.id_lead !== id);
        localStorage.setItem('v_crm_leads', JSON.stringify(BASE_DATOS_CRM_LEADS));
        renderCRMMasterTable(); actualizarDropdownDespachoClientes();
    }
}

function actualizarDropdownDespachoClientes() {
    const select = document.getElementById('crmDespachoSelectClient'); if(!select) return;
    select.innerHTML = '<option value="" selected disabled>Selecciona un cliente de la lista...</option>';
    BASE_DATOS_CRM_LEADS.forEach(l => { select.innerHTML += `<option value="${l.id_lead}">${l.institucion} (Atn: ${l.contacto})</option>`; });
    actualizarConsolaTextoComercial();
}

function actualizarConsolaTextoComercial() {
    const id = document.getElementById('crmDespachoSelectClient').value;
    const txtArea = document.getElementById('crmTxtConsoleUniversal'); if(!txtArea) return;
    if(!id) { txtArea.value = "Selecciona un cliente para armar la propuesta..."; return; }
    let l = BASE_DATOS_CRM_LEADS.find(lead => lead.id_lead === id);
    
    txtArea.value = `ASUNTO: Propuesta de Valor Logística — Implementación de Estación de Snacks VENDRIX en ${l.institucion}\n\n` +
    `Estimado/a ${l.contacto},\n` +
    `Espero que se encuentre excelente.\n\n` +
    `Me dirijo a usted en representación de VENDRIX, empresa peruana especializada en la gestión integral de estaciones de autoabastecimiento inteligente (Vending Machines) para instituciones de alta concurrencia, tales como su organización catalogada en el sector de: ${l.categoria}.\n\n` +
    `Conocemos la importancia de brindar soluciones de bienestar, comodidad y energía constante a su comunidad en su sede ubicada en ${l.direccion}, sin que esto genere cargas administrativas o costos extras para su gestión. Por ello, nuestra propuesta incluye la instalación, reabastecimiento diario y soporte técnico de nuestros equipos con costo CERO absoluto para su institución.\n\n` +
    `Adjunto a este mensaje comparto nuestra "CARTA DE PRESENTACIÓN - VENDRIX.pdf", donde detallamos nuestra tecnología de pago moderno (Tarjetas, Yape, Plin) y nuestro catálogo de productos multimarca de primera calidad.\n\n` +
    `Quedo a su entera disposición para agendar una breve reunión de 5 minutos o una visita técnica esta semana.\n\n` +
    `Atentamente,\n` +
    `Equipo de Expansión VENDRIX\n` +
    `Contacto: Cel. ${l.celular}`;
}

function copiarTextoConsolaPortapapeles() {
    const txtArea = document.getElementById('crmTxtConsoleUniversal');
    if(txtArea.value.includes("Selecciona")) return;
    txtArea.select(); document.execCommand('copy'); alert("¡Mensaje comercial copiado!");
}

function simularDescargaCartaPresentacionPDF() {
    const id = document.getElementById('crmDespachoSelectClient').value;
    if(!id) { alert("Por favor, selecciona un cliente primero."); return; }
    alert("Descargando archivo: CARTA DE PRESENTACIÓN - VENDRIX.pdf");
}

function abrirChatDirectoWhatsAppCRM() {
    const id = document.getElementById('crmDespachoSelectClient').value; if(!id) return;
    let l = BASE_DATOS_CRM_LEADS.find(lead => lead.id_lead === id);
    let msg = encodeURIComponent(`Hola ${l.contacto}, te escribo de VENDRIX sobre la propuesta para la estación de snacks en ${l.institucion}.`);
    window.open(`https://api.whatsapp.com/send?phone=51${l.celular}&text=${msg}`, '_blank');
}

function buildFormSelectorsAutoComplete() {
    const s1 = document.getElementById('stockProductSelectorAutoComplete');
    const s2 = document.getElementById('telProductSelector');
    if(!s1 || !s2) return;
    s1.innerHTML = '<option value="" selected disabled>Buscar snack por nombre...</option>';
    s2.innerHTML = '<option value="" selected disabled>Seleccionar producto...</option>';
    Object.keys(DICCIONARIO_PRODUCTOS).sort((a,b)=>DICCIONARIO_PRODUCTOS[a].nombre.localeCompare(DICCIONARIO_PRODUCTOS[b].nombre)).forEach(c => {
        const optionHtml = `<option value="${c}">${DICCIONARIO_PRODUCTOS[c].nombre} (COD-${c})</option>`;
        s1.innerHTML += optionHtml; s2.innerHTML += optionHtml;
    });
}

function handleNewTelemetrySubmit(e) {
    e.preventDefault();
    const mach = document.getElementById('telMachineId').value.trim().toUpperCase();
    const code = document.getElementById('telProductSelector').value;
    const dateLoad = document.getElementById('telLoadDate').value;
    const qty = parseInt(document.getElementById('telQty').value) || 0;

    HISTORIAL_TELEMETRIA_BANDEJAS = HISTORIAL_TELEMETRIA_BANDEJAS.filter(t => !(t.maquina === mach && t.rawCode === code));
    HISTORIAL_TELEMETRIA_BANDEJAS.push({ id_tel: `T-${Date.now()}`, maquina: mach, rawCode: code, fecha_carga: dateLoad, cantidad_inyectada: qty });
    localStorage.setItem('v_bi_tel', JSON.stringify(HISTORIAL_TELEMETRIA_BANDEJAS));
    document.getElementById('telQty').value = '';
    renderTelemetryMasterTable(); processAndRenderAll(); alert("¡Bandeja física sincronizada!");
}

function renderTelemetryMasterTable() {
    const tbody = document.querySelector('#tableTelemetryMaster tbody'); if(!tbody) return;
    if(dtTelemetryMaster) dtTelemetryMaster.destroy(); tbody.innerHTML = '';
    const filterMach = document.getElementById('filterMachine').value.toUpperCase();
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;

    HISTORIAL_TELEMETRIA_BANDEJAS.forEach(t => {
        if(filterMach !== 'TODOS' && t.maquina !== filterMach) return;
        const prod = DICCIONARIO_PRODUCTOS[t.rawCode];
        const ventasPosteriores = DATABASE_STATE.filter(r => {
            if(r.rawCode !== t.rawCode) return false;
            if(r.maquina.toUpperCase() !== t.maquina) return false;
            if(r.fecha < t.fecha_carga) return false;
            if(sDate && r.fecha < sDate) return false; if(eDate && r.fecha > eDate) return false;
            return true;
        }).reduce((sum, r) => sum + r.cantidad, 0);

        const stockEnMaquinaReal = Math.max(t.cantidad_inyectada - ventasPosteriores, 0);
        let semaforo = '<span class="badge bg-success w-100 py-1">Abastecido</span>';
        if(stockEnMaquinaReal <= 2) semaforo = '<span class="badge bg-danger w-100 py-1">🔴 Urgente</span>';
        else if(stockEnMaquinaReal <= 5) semaforo = '<span class="badge bg-warning text-dark w-100 py-1">🟡 Medio</span>';

        tbody.innerHTML += `<tr><td><span class="badge bg-secondary">${t.maquina}</span></td><td class="font-monospace fw-bold">COD-${t.rawCode}</td><td><strong>${prod?prod.nombre:'Snack'}</strong></td><td class="font-monospace">${t.fecha_carga}</td><td class="text-end fw-bold text-primary bg-primary bg-opacity-10">${t.cantidad_inyectada}</td><td class="text-end text-danger font-monospace">-${ventasPosteriores}</td><td class="text-end table-primary font-monospace fw-bold fs-6">${stockEnMaquinaReal}</td><td>${semaforo}</td></tr>`;
    });
    dtTelemetryMaster = $('#tableTelemetryMaster').DataTable({ destroy: true, pageLength: 10, order: [[1, 'asc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function handleNewGastoSubmit(e) {
    e.preventDefault();
    const gNum = document.getElementById('gastoNum').value.trim();
    const gDate = document.getElementById('gastoDate').value;
    const gAmount = parseFloat(document.getElementById('gastoAmount').value) || 0;
    const gReason = document.getElementById('gastoReason').value.trim();
    const gUser = document.getElementById('gastoUser').value.trim();
    const gObs = document.getElementById('gastoObs').value.trim() || 'Ninguna';
    HISTORIAL_GASTOS_EXTRA.push({ id_gasto: `G-${Date.now()}`, num_comprobante: gNum, fecha: gDate, monto: gAmount, motivo: gReason, responsable: gUser, observacion: gObs, deducir: false });
    localStorage.setItem('v_bi_gastos', JSON.stringify(HISTORIAL_GASTOS_EXTRA));
    document.getElementById('formAddGasto').reset(); renderGastosMasterTable(); alert("¡Gasto registrado!");
}

function renderGastosMasterTable() {
    const tbody = document.querySelector('#tableGastosMaster tbody'); if (!tbody) return;
    if (dtGastosMaster) dtGastosMaster.destroy(); tbody.innerHTML = '';
    HISTORIAL_GASTOS_EXTRA.forEach(g => {
        tbody.innerHTML += `<tr><td class="text-center"><input type="checkbox" class="form-check-input" ${g.deducir ? 'checked':''} onclick="toggleGastoDeduccion('${g.id_gasto}')"></td><td class="font-monospace fw-bold">${g.num_comprobante}</td><td>${g.fecha}</td><td class="text-end fw-bold text-danger">S/ ${g.monto.toFixed(2)}</td><td>${g.motivo}</td><td>${g.responsable}</td><td>${g.observacion}</td><td class="text-center text-primary"><i class="fa-solid fa-file-pdf fs-5"></i></td></tr>`;
    });
    dtGastosMaster = $('#tableGastosMaster').DataTable({ destroy: true, pageLength: 5, order: [[2, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
    recalcularCuadroDeductorGastos();
}

function toggleGastoDeduccion(id) {
    let egreso = HISTORIAL_GASTOS_EXTRA.find(g => g.id_gasto === id);
    if(egreso) { egreso.deducir = !egreso.deducir; localStorage.setItem('v_bi_gastos', JSON.stringify(HISTORIAL_GASTOS_EXTRA)); recalcularCuadroDeductorGastos(); }
}

function recalcularCuadroDeductorGastos() {
    let gananciaBrutaDashboard = 0;
    const paymentSel = document.getElementById('filterPayment').value; const machineSel = document.getElementById('filterMachine').value.toUpperCase();
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;

    DATABASE_STATE.filter(r => {
        if (sDate && r.fecha < sDate) return false; if (eDate && r.fecha > eDate) return false;
        if (paymentSel !== 'TODOS' && r.pago !== paymentSel) return false;
        if (machineSel !== 'TODOS' && r.maquina.toUpperCase() !== machineSel) return false; return true;
    }).forEach(r => {
        const meta = DICCIONARIO_PRODUCTOS[r.rawCode]; gananciaBrutaDashboard += meta ? (r.valor - meta.costo) : (r.valor * 0.40);
    });
    let totalGastosDeducibles = HISTORIAL_GASTOS_EXTRA.filter(g => g.deducir).reduce((sum, g) => sum + g.monto, 0);
    let utilidadNetaFinal = gananciaBrutaDashboard - totalGastosDeducibles;
    document.getElementById('deductGrossProfit').innerText = `S/ ${gananciaBrutaDashboard.toFixed(2)}`;
    document.getElementById('deductTotalSelected').innerText = `S/ ${totalGastosDeducibles.toFixed(2)}`;
    document.getElementById('deductNetProfit').innerText = `S/ ${utilidadNetaFinal.toFixed(2)}`;
}

function handleDicProductSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('dicProductCode').value.trim().toUpperCase();
    const name = document.getElementById('dicProductName').value.trim();
    const price = parseFloat(document.getElementById('dicProductPrice').value) || 0;
    const costoActual = DICCIONARIO_PRODUCTOS[code] ? DICCIONARIO_PRODUCTOS[code].costo : (price * 0.5);
    DICCIONARIO_PRODUCTOS[code] = { "nombre": name, "precio": price, "costo": costoActual };
    localStorage.setItem('v_bi_dic', JSON.stringify(DICCIONARIO_PRODUCTOS));
    buildFormSelectorsAutoComplete(); renderDicMasterTable(); processAndRenderAll(); alert("Catálogo Guardado.");
}

function renderDicMasterTable() {
    const tbody = document.querySelector('#tableDicMaster tbody'); if (!tbody) return;
    if (dtDicMaster) { dtDicMaster.destroy(); } tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(code => {
        const p = DICCIONARIO_PRODUCTOS[code], costoReal = p.costo || 0, precioVenta = p.precio || 0, margenDinero = precioVenta - costoReal, margenPorcentaje = precioVenta > 0 ? (margenDinero / precioVenta) * 100 : 0, markupPorcentaje = costoReal > 0 ? (margenDinero / costoReal) * 100 : 0;
        tbody.innerHTML += `<tr><td class="font-monospace fw-bold">COD-${code}</td><td><strong>${p.nombre}</strong></td><td class="text-end font-monospace text-danger">S/ ${costoReal.toFixed(2)}</td><td class="text-end font-monospace text-primary fw-bold">S/ ${precioVenta.toFixed(2)}</td><td class="text-end font-monospace text-success fw-bold">S/ ${margenDinero.toFixed(2)}</td><td class="text-end font-monospace text-success">${margenPorcentaje.toFixed(1)}%</td><td class="text-end font-monospace text-warning fw-bold bg-warning bg-opacity-10">${markupPorcentaje.toFixed(1)}%</td><td class="text-center"><button class="btn btn-xs btn-outline-primary py-0 px-2 small me-1" onclick="editDicProductField('${code}')"><i class="fa-solid fa-pen"></i></button></td></tr>`;
    });
    dtDicMaster = $('#tableDicMaster').DataTable({ destroy: true, pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: 'Exportar Catálogo', className: 'btn btn-success btn-sm mt-2' }], order: [[4, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function editDicProductField(code) { const p = DICCIONARIO_PRODUCTOS[code]; if (!p) return; document.getElementById('dicProductCode').value = code; document.getElementById('dicProductCode').disabled = true; document.getElementById('dicProductName').value = p.nombre; document.getElementById('dicProductPrice').value = p.precio; }

function handleNewInvoiceSubmit(e) {
    e.preventDefault();
    const invoiceNum = document.getElementById('stockInvoiceNum').value.trim();
    const code = document.getElementById('stockProductCode').value.trim().toUpperCase().replace('COD-', '');
    const dateInvoice = document.getElementById('stockInvoiceDate').value;
    const qty = parseInt(document.getElementById('stockQty').value) || 0;
    const totalCost = parseFloat(document.getElementById('stockTotalCost').value) || 0;
    const discount = parseFloat(document.getElementById('stockDiscount').value) || 0;

    if (code && dateInvoice && qty > 0 && totalCost >= 0) {
        const unitCostCalculated = (totalCost - discount) / qty;
        if (DICCIONARIO_PRODUCTOS[code]) DICCIONARIO_PRODUCTOS[code].costo = unitCostCalculated;
        localStorage.setItem('v_bi_dic', JSON.stringify(DICCIONARIO_PRODUCTOS));
        HISTORIAL_COMPRAS_LOTES.push({ "id_lote": `L-${Date.now()}`, num_factura: invoiceNum, fecha_compra: dateInvoice, rawCode: code, costo_total: totalCost, descuento: discount, cantidad: qty, costo_unitario: unitCostCalculated });
        localStorage.setItem('v_bi_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES));
        document.getElementById('formAddStock').reset(); renderDicMasterTable(); renderInvoiceHistoryTable(); processAndRenderAll(); alert("Factura Registrada.");
    }
}

function renderInvoiceHistoryTable() {
    const tbody = document.querySelector('#tableInvoiceHistory tbody'); if (!tbody) return;
    tbody.innerHTML = ''; let sortedLotes = [...HISTORIAL_COMPRAS_LOTES].sort((a,b) => b.fecha_compra.localeCompare(a.fecha_compra));
    sortedLotes.forEach(l => {
        const prod = DICCIONARIO_PRODUCTOS[l.rawCode];
        tbody.innerHTML += `<tr><td>${l.num_factura || 'S/N'}</td><td>${l.fecha_compra}</td><td class="font-monospace">COD-${l.rawCode}</td><td><strong>${prod?prod.nombre:'Snack'}</strong></td><td class="text-end">S/ ${l.costo_total.toFixed(2)}</td><td class="text-end text-muted">S/ ${l.descuento.toFixed(2)}</td><td class="text-end fw-bold">${l.cantidad}</td><td class="text-end text-primary fw-bold">S/ ${l.costo_unitario.toFixed(2)}</td><td class="text-center"><button class="btn btn-xs btn-outline-danger py-0 px-2" onclick="deleteInvoiceLote('${l.id_lote}')"><i class="fa-solid fa-trash"></i></button></td></tr>`;
    });
}

function deleteInvoiceLote(id) { if(confirm("¿Borrar?")) { HISTORIAL_COMPRAS_LOTES = HISTORIAL_COMPRAS_LOTES.filter(l => l.id_lote !== id); localStorage.setItem('v_bi_lotes', JSON.stringify(HISTORIAL_COMPRAS_LOTES)); renderInvoiceHistoryTable(); processAndRenderAll(); } }

function renderSimulationOrderTable(filteredSales) {
    const tbody = document.querySelector('#tableSimulationOrder tbody'); if (!tbody) return;
    if (dtSimulationOrder) { dtSimulationOrder.destroy(); } tbody.innerHTML = '';
    const uniqueDates = [...new Set(DATABASE_STATE.map(r => r.fecha))]; const totalDiasReporte = Math.max(uniqueDates.length, 1);
    const填 = {}; filteredSales.forEach(r => {填[r.rawCode] = (填[r.rawCode] || 0) + r.cantidad; });
    const comprasTotalesPorCodigo = {}; HISTORIAL_COMPRAS_LOTES.forEach(l => { comprasTotalesPorCodigo[l.rawCode] = (comprasTotalesPorCodigo[l.rawCode] || 0) + l.cantidad; });
    const diasCoberturaSugerida = parseInt(document.getElementById('simPeriodDays').value) || 7;

    Object.keys(DICCIONARIO_PRODUCTOS).forEach(code => {
        const p = DICCIONARIO_PRODUCTOS[code], totalVentasPeriodo = 填[code] || 0, velocidadVentaDiaria = totalVentasPeriodo / totalDiasReporte, stockRequeridoFuturo = Math.ceil(velocidadVentaDiaria * diasCoberturaSugerida), totalComprasHistoricas = comprasTotalesPorCodigo[code] || 0, totalVentasHistoricas = DATABASE_STATE.filter(r => r.rawCode === code).reduce((sum, r) => sum + r.cantidad, 0), stockFisicoActual = Math.max(totalComprasHistoricas - totalVentasHistoricas, 0);
        let cantidadAComprar = stockRequeridoFuturo - stockFisicoActual; if (cantidadAComprar < 0) cantidadAComprar = 0;
        tbody.innerHTML += `<tr><td class="font-monospace fw-bold">COD-${code}</td><td><strong>${p.nombre}</strong></td><td class="text-end font-monospace text-muted">${velocidadVentaDiaria.toFixed(2)} ud/d</td><td class="text-end font-monospace fw-bold">${stockRequeridoFuturo}</td><td class="text-end font-monospace text-info fw-bold">${stockFisicoActual}</td><td class="text-end font-monospace text-white fw-bold ${cantidadAComprar > 0 ? 'bg-success':'bg-secondary bg-opacity-25 text-dark'}">${cantidadAComprar}</td><td>${stockFisicoActual<=0?'QUIEBRE':'Seguro'}</td></tr>`;
    });
    dtSimulationOrder = $('#tableSimulationOrder').DataTable({ destroy: true, pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: 'Generar Orden (Excel)', className: 'btn btn-info text-dark fw-bold btn-sm mt-2' }], order: [[5, 'desc']], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}

function convertRawTextToStagingPreview() {
    const rawText = document.getElementById('rawCsvPasteData').value.trim(); if(!rawText) return;
    const lines = rawText.split(/\r?\n/); STAGING_MEMORIA_TEMPORAL = []; let divisor = '\t'; if (!lines[0].includes('\t')) { divisor = lines[0].includes(';') ? ';' : ','; }
    for (let i = 0; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        let row = lines[i].split(divisor).map(cell => cell.trim().replace(/"/g, '')); if (row[0].toUpperCase().includes("FECHA") || row[1].toUpperCase().includes("STATUS")) continue;
        let rawDate = row[0] || "", estado = (row[1] || "ACEPTADA").toUpperCase().trim(), rawValor = row[2] || "0.00", codeStr = (row[3] || "").trim(), maquinaOrigenExcel = row[4] || "MAQUINA 1", tecnologia = row[6] || ""; if (estado !== "ACEPTADA") continue;
        let valorNumerico = parseFloat(rawValor.replace(/[^0-9,\.-]/g, '').replace(',', '.')) || 0; let isoDate = "2026-06-20", timeShort = "12:00";
        if (rawDate.includes(' ')) { let parts = rawDate.split(' '); timeShort = parts[1].substring(0, 5); let dateParts = parts[0].split(/[-/]/); if (dateParts.length === 3) isoDate = dateParts[0].length === 4 ? `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}` : `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;}
        let pago = "Otros"; if (maquinaOrigenExcel.toUpperCase().includes("EFECTIVO")) pago = "Efectivo"; else if (maquinaOrigenExcel.toUpperCase().includes("TARJETA")) pago = tecnologia.toUpperCase().includes("QR") ? ((i % 2 === 0) ? "Yape" : "Plin") : "Tarjeta";
        let maquinaRealNombre = row[4] && !row[4].toUpperCase().includes("EFECTIVO") && !row[4].toUpperCase().includes("TARJETA") ? row[4].toUpperCase() : "MAQUINA 1";
        let prodMeta = DICCIONARIO_PRODUCTOS[codeStr];
        STAGING_MEMORIA_TEMPORAL.push({ id: `V_${i}_${Date.now()}`, fecha: isoDate, hora: timeShort, maquina: maquinaRealNombre, codigo: `COD-${codeStr}`, rawCode: codeStr, producto: prodMeta ? prodMeta.nombre : `Snack Código ${codeStr}`, estado: estado, pago: pago, cantidad: 1, valor: valorNumerico });
    }
    const tbody = document.querySelector('#tableStagingPreview tbody'); tbody.innerHTML = '';
    STAGING_MEMORIA_TEMPORAL.forEach(r => { tbody.innerHTML += `<tr><td>${r.fecha}</td><td>${r.hora}</td><td><span class="badge bg-secondary">${r.maquina}</span></td><td>${r.codigo}</td><td><span class="badge bg-light text-dark border">${r.producto}</span></td><td><span class="badge bg-primary">${r.pago}</span></td><td class="text-end text-success fw-bold">S/ ${r.valor.toFixed(2)}</td></tr>`; });
    document.getElementById('stagingCardContainer').classList.remove('d-none');
}

function commitStagingToDashboard() {
    if (STAGING_MEMORIA_TEMPORAL.length === 0) return;
    if (confirm("¿Aprobar transacciones?")) { DATABASE_STATE = [...STAGING_MEMORIA_TEMPORAL]; localStorage.setItem('v_bi_data', JSON.stringify(DATABASE_STATE)); document.getElementById('rawCsvPasteData').value = ''; document.getElementById('stagingCardContainer').classList.add('d-none'); updateMachineSelectorDropdown(DATABASE_STATE); processAndRenderAll(); document.querySelector('#main-nav a[href="#dashboard-section"]').click(); }
}

function updateMachineSelectorDropdown(data) {
    const machines = new Set(); data.forEach(r => { if(r.maquina) machines.add(r.maquina.toUpperCase()); });
    const mSel = document.getElementById('filterMachine'); if(!mSel) return;
    const currentM = mSel.value; mSel.innerHTML = '<option value="TODOS">Todas las Máquinas</option>';
    machines.forEach(m => mSel.innerHTML += `<option value="${m}">${m}</option>`); mSel.value = currentM ? currentM : 'TODOS';
}

function populateSelectors(data) {
    const payments = new Set(); data.forEach(r => { if(r.pago) payments.add(r.pago); });
    const pSel = document.getElementById('filterPayment'); if(pSel) { const currentP = pSel.value; pSel.innerHTML = '<option value="TODOS">Todos los Medios</option>'; payments.forEach(p => pSel.innerHTML += `<option value="${p}">${p}</option>`); pSel.value = currentP ? currentP : 'TODOS'; }
    updateMachineSelectorDropdown(data);
}

function processAndRenderAll() {
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;
    const paymentSel = document.getElementById('filterPayment').value; const machineSel = document.getElementById('filterMachine').value.toUpperCase();
    let filtered = DATABASE_STATE.filter(r => {
        if (sDate && r.fecha < sDate) return false; if (eDate && r.fecha > eDate) return false;
        if (paymentSel !== 'TODOS' && r.pago !== paymentSel) return false; 
        if (machineSel !== 'TODOS' && r.maquina.toUpperCase() !== machineSel) return false; return true;
    });
    renderKPIs(filtered); renderMetaAnual(filtered); renderHistoryChart(filtered); renderPaymentsChart(filtered); renderTopProductsSection(filtered); renderAdvancedProducts(filtered); renderDataTableSection(filtered); renderStockKardexModule(filtered); renderSimulationOrderTable(filtered); renderTelemetryMasterTable(); recalcularCuadroDeductorGastos();
}

function renderKPIs(data) {
    const totalSales = data.reduce((sum, r) => sum + r.valor, 0); const totalQty = data.reduce((sum, r) => sum + r.cantidad, 0);
    let gananciaRealExacta = 0; data.forEach(r => { const meta = DICCIONARIO_PRODUCTOS[r.rawCode]; if (meta) { gananciaRealExacta += (r.valor - meta.costo); } else { gananciaRealExacta += (r.valor * 0.40); } });
    document.getElementById('kpiTotalSales').innerText = `S/ ${totalSales.toFixed(2)}`; document.getElementById('kpiTotalQty').innerText = totalQty; document.getElementById('kpiTotalProfit').innerText = `S/ ${gananciaRealExacta.toFixed(2)}`;
    const avg = totalQty > 0 ? (totalSales / data.length) : 0; document.getElementById('kpiAvgTicket').innerText = `S/ ${avg.toFixed(2)}`;
}

function renderMetaAnual(data) {
    const META_ANUAL = 15000; const accumulated = data.reduce((sum, r) => sum + r.valor, 0); let totalProfit = 0; data.forEach(r => { const meta = DICCIONARIO_PRODUCTOS[r.rawCode]; if (meta) totalProfit += (r.valor - meta.costo); else totalProfit += (r.valor * 0.40); });
    const percentage = Math.min((accumulated / META_ANUAL) * 100, 100); const missing = Math.max(META_ANUAL - accumulated, 0);
    document.getElementById('metaPercentage').innerText = `${percentage.toFixed(1)}%`; document.getElementById('metaProgressBar').style.width = `${percentage}%`; document.getElementById('metaAccumulated').innerText = `S/ ${accumulated.toFixed(2)}`; document.getElementById('metaProfit').innerText = `S/ ${totalProfit.toFixed(2)}`; document.getElementById('metaMissing').innerText = `S/ ${missing.toFixed(2)}`;
}

function renderHistoryChart(data) {
    const canvas = document.getElementById('chartHistory'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); const grouped = {}; data.forEach(r => { grouped[r.fecha] = (grouped[r.fecha] || 0) + r.valor; });
    let sortedDates = Object.keys(grouped).sort();
    if (chartHistory) chartHistory.destroy();
    chartHistory = new Chart(ctx, { type: 'line', data: { labels: sortedDates, datasets: [{ label: 'Ventas (S/)', data: sortedDates.map(d => grouped[d]), borderColor: '#1e40af', backgroundColor: 'rgba(59, 130, 246, 0.05)', fill: true, tension: 0.1 }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderPaymentsChart(data) {
    const canvas = document.getElementById('chartPayments'); if (!canvas) return;
    const ctx = canvas.getContext('2d'); const group = {}; data.forEach(r => { group[r.pago] = (group[r.pago] || 0) + r.valor; });
    if (chartPayments) chartPayments.destroy();
    chartPayments = new Chart(ctx, { type: 'doughnut', data: { labels: Object.keys(group), datasets: [{ data: Object.values(group), backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899'] }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function renderTopProductsSection(data) {
    const metrics = {}; data.forEach(r => { if(!metrics[r.codigo]) metrics[r.codigo] = { nombre: r.producto, qty: 0, total: 0 }; metrics[r.codigo].qty += r.cantidad; metrics[r.codigo].total += r.valor; });
    const sorted = Object.keys(metrics).map(c => ({ codigo: c, ...metrics[c] })).sort((a,b) => b.qty - a.qty).slice(0, 10);
    const tbody = document.querySelector('#tableTopProducts tbody'); if(tbody) { tbody.innerHTML = ''; sorted.forEach((p, idx) => { tbody.innerHTML += `<tr><td><span class="badge ${idx < 3 ? 'bg-warning text-dark':'bg-secondary'}">${idx + 1}</span></td><td class="font-monospace fw-bold">${p.codigo}</td><td>${p.nombre}</td><td class="text-end fw-bold">${p.qty}</td><td class="text-end text-success">S/ ${p.total.toFixed(2)}</td></tr>`; }); }
}

function renderAdvancedProducts(data) {
    const metrics = {}; data.forEach(r => { if(!metrics[r.codigo]) metrics[r.codigo] = { nombre: r.producto, qty: 0, total: 0 }; metrics[r.codigo].qty += r.cantidad; metrics[r.codigo].total += r.valor; });
    const arr = Object.keys(metrics).map(c => ({ codigo: c, ...metrics[c] })); const menosVendidos = [...arr].sort((a,b) => a.qty - b.qty).slice(0, 5);
    const listMargen = Object.keys(DICCIONARIO_PRODUCTOS).map(code => { let p = DICCIONARIO_PRODUCTOS[code]; return { codigo: `COD-${code}`, nombre: p.nombre, margen: (p.precio - (p.costo || 0)) }; }).sort((a,b) => b.margen - a.margen).slice(0, 3);
    const fillList = (id, items, badgeClass, suffix) => { const list = document.getElementById(id); if(!list) return; list.innerHTML = ''; items.forEach(p => { let val = suffix === 'S/' ? `S/ ${p.margen.toFixed(2)}` : `${p.qty} ud.`; list.innerHTML += `<li class="list-group-item bg-transparent d-flex justify-content-between align-items-center px-0 py-1 small border-0"><span><strong>${p.codigo}</strong> <small class="text-muted">(${p.nombre})</small></span><span class="badge ${badgeClass}">${val}</span></li>`; }); };
    fillList('listProfitable', listMargen, 'bg-success', 'S/'); fillList('listLessSold', menosVendidos, 'bg-warning text-dark', 'ud.');
}

function renderStockKardexModule(data) {
    const sDate = document.getElementById('filterStartDate').value; const eDate = document.getElementById('filterEndDate').value;
    const ventasPorCodigo = {}; data.forEach(r => { const codeNum = r.codigo.replace('COD-', ''); ventasPorCodigo[codeNum] = (ventasPorCodigo[codeNum] || 0) + r.cantidad; });
    const comprasTotalesPorCodigo = {}; HISTORIAL_COMPRAS_LOTES.forEach(l => { if (sDate && l.fecha_compra < sDate) return; if (eDate && l.fecha_compra > eDate) return; comprasTotalesPorCodigo[l.rawCode] = (comprasTotalesPorCodigo[l.rawCode] || 0) + l.cantidad; });
    const tbody = document.querySelector('#tableStockKardex tbody'); if(!tbody) return; tbody.innerHTML = '';
    Object.keys(DICCIONARIO_PRODUCTOS).forEach(code => {
        const compras = comprasTotalesPorCodigo[code] || 0, ventas = ventasPorCodigo[code] || 0, stockActual = compras - ventas; const meta = DICCIONARIO_PRODUCTOS[code];
        tbody.innerHTML += `<tr><td class="font-monospace fw-bold">COD-${code}</td><td><strong>${meta.nombre}</strong></td><td class="text-end font-monospace text-danger">S/ ${meta.costo.toFixed(2)}</td><td class="text-end text-success font-monospace fw-bold">${compras}</td><td class="text-end text-danger font-monospace fw-bold">${ventas}</td><td class="text-end font-monospace fw-bold">${stockActual}</td><td><span class="badge ${stockActual<=5?'bg-danger':'bg-success'}">${stockActual<=5?'Bajo':'OK'}</span></td></tr>`;
    });
}

function renderDataTableSection(data) {
    if (dtInstance) { dtInstance.clear(); dtInstance.rows.add(data); dtInstance.draw(); return; }
    dtInstance = $('#dtTransactions').DataTable({ data: data, columns: [ { data: 'fecha' }, { data: 'hora' }, { data: 'maquina' }, { data: 'codigo' }, { data: 'producto' }, { data: 'estado', render: () => `<span class="badge bg-success">ACEPTADA</span>` }, { data: 'pago' }, { data: 'cantidad', className: 'text-end' }, { data: 'valor', className: 'text-end', render: v => `S/ ${v.toFixed(2)}` } ], order: [[0, 'desc']], pageLength: 10, dom: 'Bfrtip', buttons: [{ extend: 'excelHtml5', text: 'Exportar Ventas', className: 'btn btn-success btn-sm mt-2' }], language: { url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-ES.json' } });
}