// ── DATOS DE ALIMENTOS ──
const alimentos = [
  { nombre: "Pechuga de pollo", categoria: "carnes", cal: 165, prot: 31, carb: 0, gras: 3.6 },
  { nombre: "Muslo de pollo", categoria: "carnes", cal: 209, prot: 26, carb: 0, gras: 11 },
  { nombre: "Carne molida (90% magra)", categoria: "carnes", cal: 176, prot: 20, carb: 0, gras: 10 },
  { nombre: "Carne molida (80% magra)", categoria: "carnes", cal: 215, prot: 18, carb: 0, gras: 15 },
  { nombre: "Bife de chorizo", categoria: "carnes", cal: 271, prot: 26, carb: 0, gras: 18 },
  { nombre: "Lomo", categoria: "carnes", cal: 158, prot: 26, carb: 0, gras: 5.5 },
  { nombre: "Asado de tira", categoria: "carnes", cal: 294, prot: 22, carb: 0, gras: 23 },
  { nombre: "Pechuga de pavo", categoria: "carnes", cal: 135, prot: 30, carb: 0, gras: 1 },
  { nombre: "Jamón cocido", categoria: "carnes", cal: 107, prot: 17, carb: 2, gras: 4 },
  { nombre: "Jamón crudo", categoria: "carnes", cal: 145, prot: 21, carb: 0, gras: 7 },
  { nombre: "Salchicha de pavo", categoria: "carnes", cal: 130, prot: 14, carb: 2, gras: 7 },
  { nombre: "Atún en agua", categoria: "pescados", cal: 108, prot: 24, carb: 0, gras: 1 },
  { nombre: "Atún en aceite", categoria: "pescados", cal: 198, prot: 25, carb: 0, gras: 11 },
  { nombre: "Salmón", categoria: "pescados", cal: 208, prot: 20, carb: 0, gras: 13 },
  { nombre: "Merluza", categoria: "pescados", cal: 82, prot: 18, carb: 0, gras: 1 },
  { nombre: "Trucha", categoria: "pescados", cal: 148, prot: 21, carb: 0, gras: 7 },
  { nombre: "Tilapia", categoria: "pescados", cal: 96, prot: 20, carb: 0, gras: 2 },
  { nombre: "Sardinas en agua", categoria: "pescados", cal: 135, prot: 23, carb: 0, gras: 5 },
  { nombre: "Camarones", categoria: "pescados", cal: 85, prot: 18, carb: 1, gras: 1 },
  { nombre: "Leche entera", categoria: "lacteos", cal: 61, prot: 3.2, carb: 4.7, gras: 3.3 },
  { nombre: "Leche descremada", categoria: "lacteos", cal: 34, prot: 3.4, carb: 5, gras: 0.1 },
  { nombre: "Yogur griego natural", categoria: "lacteos", cal: 97, prot: 9, carb: 4, gras: 5 },
  { nombre: "Yogur griego 0%", categoria: "lacteos", cal: 59, prot: 10, carb: 3.6, gras: 0.4 },
  { nombre: "Queso cottage", categoria: "lacteos", cal: 98, prot: 11, carb: 3, gras: 4.5 },
  { nombre: "Queso mozzarella", categoria: "lacteos", cal: 280, prot: 22, carb: 2, gras: 22 },
  { nombre: "Queso rallado", categoria: "lacteos", cal: 420, prot: 38, carb: 1, gras: 29 },
  { nombre: "Ricota", categoria: "lacteos", cal: 174, prot: 11, carb: 3, gras: 13 },
  { nombre: "Kéfir", categoria: "lacteos", cal: 52, prot: 3.5, carb: 4.5, gras: 1.5 },
  { nombre: "Huevo entero", categoria: "huevos", cal: 143, prot: 13, carb: 1, gras: 10 },
  { nombre: "Clara de huevo", categoria: "huevos", cal: 52, prot: 11, carb: 0.7, gras: 0.2 },
  { nombre: "Yema de huevo", categoria: "huevos", cal: 322, prot: 16, carb: 4, gras: 27 },
  { nombre: "Avena", categoria: "cereales", cal: 389, prot: 17, carb: 66, gras: 7 },
  { nombre: "Arroz blanco cocido", categoria: "cereales", cal: 130, prot: 2.7, carb: 28, gras: 0.3 },
  { nombre: "Arroz integral cocido", categoria: "cereales", cal: 111, prot: 2.6, carb: 23, gras: 0.9 },
  { nombre: "Papa hervida", categoria: "cereales", cal: 87, prot: 1.9, carb: 20, gras: 0.1 },
  { nombre: "Batata hervida", categoria: "cereales", cal: 86, prot: 1.6, carb: 20, gras: 0.1 },
  { nombre: "Pan integral", categoria: "cereales", cal: 247, prot: 9, carb: 41, gras: 4 },
  { nombre: "Pan blanco", categoria: "cereales", cal: 265, prot: 8, carb: 49, gras: 3.5 },
  { nombre: "Pasta cocida", categoria: "cereales", cal: 158, prot: 5.8, carb: 31, gras: 0.9 },
  { nombre: "Quinoa cocida", categoria: "cereales", cal: 120, prot: 4.4, carb: 21, gras: 1.9 },
  { nombre: "Granola", categoria: "cereales", cal: 471, prot: 10, carb: 64, gras: 20 },
  { nombre: "Lentejas cocidas", categoria: "legumbres", cal: 116, prot: 9, carb: 20, gras: 0.4 },
  { nombre: "Garbanzos cocidos", categoria: "legumbres", cal: 164, prot: 8.9, carb: 27, gras: 2.6 },
  { nombre: "Porotos negros cocidos", categoria: "legumbres", cal: 132, prot: 8.9, carb: 24, gras: 0.5 },
  { nombre: "Edamame", categoria: "legumbres", cal: 121, prot: 11, carb: 8.9, gras: 5.2 },
  { nombre: "Tofu firme", categoria: "legumbres", cal: 76, prot: 8, carb: 2, gras: 4.5 },
  { nombre: "Brócoli", categoria: "verduras", cal: 34, prot: 2.8, carb: 7, gras: 0.4 },
  { nombre: "Espinaca", categoria: "verduras", cal: 23, prot: 2.9, carb: 3.6, gras: 0.4 },
  { nombre: "Lechuga", categoria: "verduras", cal: 15, prot: 1.4, carb: 2.9, gras: 0.2 },
  { nombre: "Tomate", categoria: "verduras", cal: 18, prot: 0.9, carb: 3.9, gras: 0.2 },
  { nombre: "Zanahoria", categoria: "verduras", cal: 41, prot: 0.9, carb: 10, gras: 0.2 },
  { nombre: "Zapallito", categoria: "verduras", cal: 17, prot: 1.2, carb: 3.1, gras: 0.3 },
  { nombre: "Berenjena", categoria: "verduras", cal: 25, prot: 1, carb: 6, gras: 0.2 },
  { nombre: "Pepino", categoria: "verduras", cal: 16, prot: 0.7, carb: 3.6, gras: 0.1 },
  { nombre: "Cebolla", categoria: "verduras", cal: 40, prot: 1.1, carb: 9.3, gras: 0.1 },
  { nombre: "Pimiento rojo", categoria: "verduras", cal: 31, prot: 1, carb: 6, gras: 0.3 },
  { nombre: "Kale", categoria: "verduras", cal: 49, prot: 4.3, carb: 9, gras: 0.9 },
  { nombre: "Apio", categoria: "verduras", cal: 16, prot: 0.7, carb: 3, gras: 0.2 },
  { nombre: "Banana", categoria: "frutas", cal: 89, prot: 1.1, carb: 23, gras: 0.3 },
  { nombre: "Manzana", categoria: "frutas", cal: 52, prot: 0.3, carb: 14, gras: 0.2 },
  { nombre: "Naranja", categoria: "frutas", cal: 47, prot: 0.9, carb: 12, gras: 0.1 },
  { nombre: "Frutilla", categoria: "frutas", cal: 32, prot: 0.7, carb: 7.7, gras: 0.3 },
  { nombre: "Arándanos", categoria: "frutas", cal: 57, prot: 0.7, carb: 14, gras: 0.3 },
  { nombre: "Mango", categoria: "frutas", cal: 60, prot: 0.8, carb: 15, gras: 0.4 },
  { nombre: "Kiwi", categoria: "frutas", cal: 61, prot: 1.1, carb: 15, gras: 0.5 },
  { nombre: "Durazno", categoria: "frutas", cal: 39, prot: 0.9, carb: 10, gras: 0.3 },
  { nombre: "Uva", categoria: "frutas", cal: 67, prot: 0.6, carb: 17, gras: 0.4 },
  { nombre: "Sandía", categoria: "frutas", cal: 30, prot: 0.6, carb: 7.6, gras: 0.2 },
  { nombre: "Aceite de oliva", categoria: "grasas", cal: 884, prot: 0, carb: 0, gras: 100 },
  { nombre: "Aceite de coco", categoria: "grasas", cal: 862, prot: 0, carb: 0, gras: 100 },
  { nombre: "Mantequilla de maní", categoria: "grasas", cal: 588, prot: 25, carb: 20, gras: 50 },
  { nombre: "Almendras", categoria: "grasas", cal: 579, prot: 21, carb: 22, gras: 50 },
  { nombre: "Nueces", categoria: "grasas", cal: 654, prot: 15, carb: 14, gras: 65 },
  { nombre: "Palta (aguacate)", categoria: "grasas", cal: 160, prot: 2, carb: 9, gras: 15 },
  { nombre: "Semillas de chía", categoria: "grasas", cal: 486, prot: 17, carb: 42, gras: 31 },
  { nombre: "Semillas de lino", categoria: "grasas", cal: 534, prot: 18, carb: 29, gras: 42 },
  { nombre: "Maní", categoria: "grasas", cal: 567, prot: 26, carb: 16, gras: 49 },
  { nombre: "Proteína whey (1 scoop)", categoria: "suplementos", cal: 120, prot: 25, carb: 3, gras: 2 },
  { nombre: "Caseína (1 scoop)", categoria: "suplementos", cal: 120, prot: 24, carb: 4, gras: 1 },
  { nombre: "Creatina (5g)", categoria: "suplementos", cal: 0, prot: 0, carb: 0, gras: 0 },
  { nombre: "Gainer (1 scoop)", categoria: "suplementos", cal: 380, prot: 25, carb: 60, gras: 5 },
  { nombre: "BCAA (1 scoop)", categoria: "suplementos", cal: 20, prot: 5, carb: 0, gras: 0 },
];

// ── PLATOS ──
const platos = [
  { nombre: "Avena con leche y banana", momento: "desayuno", desc: "80g avena + 250ml leche entera + 1 banana mediana", cal: 480, prot: 18, carb: 82, gras: 9 },
  { nombre: "Tostadas integrales con huevo", momento: "desayuno", desc: "2 tostadas integrales + 2 huevos revueltos + queso", cal: 390, prot: 22, carb: 35, gras: 15 },
  { nombre: "Yogur griego con granola y frutas", momento: "desayuno", desc: "200g yogur griego 0% + 40g granola + frutillas", cal: 320, prot: 22, carb: 42, gras: 5 },
  { nombre: "Omelette de claras con verduras", momento: "desayuno", desc: "4 claras + 1 huevo entero + espinaca + pimiento", cal: 210, prot: 24, carb: 5, gras: 9 },
  { nombre: "Arroz con pollo y ensalada", momento: "almuerzo", desc: "200g arroz cocido + 150g pechuga + lechuga + tomate", cal: 580, prot: 52, carb: 68, gras: 6 },
  { nombre: "Pasta con atún y tomate", momento: "almuerzo", desc: "200g pasta cocida + 1 lata atún + salsa de tomate", cal: 490, prot: 35, carb: 68, gras: 5 },
  { nombre: "Lentejas con verduras", momento: "almuerzo", desc: "250g lentejas cocidas + zanahoria + cebolla + tomate", cal: 380, prot: 25, carb: 60, gras: 2 },
  { nombre: "Bife con batata y brócoli", momento: "almuerzo", desc: "200g bife de lomo + 200g batata + 150g brócoli", cal: 560, prot: 48, carb: 45, gras: 12 },
  { nombre: "Salmón con papa y espinaca", momento: "cena", desc: "150g salmón + 200g papa hervida + espinaca salteada", cal: 520, prot: 38, carb: 42, gras: 18 },
  { nombre: "Pechuga a la plancha con quinoa", momento: "cena", desc: "150g pechuga + 150g quinoa cocida + ensalada verde", cal: 440, prot: 46, carb: 38, gras: 8 },
  { nombre: "Revuelto de huevos con vegetales", momento: "cena", desc: "3 huevos enteros + cebolla + pimiento + tomate", cal: 310, prot: 21, carb: 12, gras: 19 },
  { nombre: "Merluza al horno con ensalada", momento: "cena", desc: "200g merluza + ensalada mixta + aceite de oliva", cal: 280, prot: 38, carb: 8, gras: 9 },
  { nombre: "Yogur griego con frutos secos", momento: "snack", desc: "150g yogur griego + 20g almendras + miel", cal: 290, prot: 15, carb: 18, gras: 17 },
  { nombre: "Manzana con mantequilla de maní", momento: "snack", desc: "1 manzana mediana + 2 cucharadas mantequilla de maní", cal: 270, prot: 7, carb: 32, gras: 14 },
  { nombre: "Huevos duros", momento: "snack", desc: "2 huevos duros enteros", cal: 155, prot: 13, carb: 1, gras: 11 },
  { nombre: "Queso cottage con frutas", momento: "snack", desc: "150g queso cottage + arándanos + frutillas", cal: 185, prot: 17, carb: 18, gras: 5 },
  { nombre: "Banana con mantequilla de maní", momento: "pre", desc: "1 banana + 1 cucharada mantequilla de maní", cal: 235, prot: 6, carb: 32, gras: 9 },
  { nombre: "Avena con miel y whey", momento: "pre", desc: "60g avena + 1 scoop whey + 1 cdita miel + agua", cal: 380, prot: 30, carb: 50, gras: 5 },
  { nombre: "Tostada integral con jamón", momento: "pre", desc: "2 tostadas integrales + 3 fetas jamón cocido", cal: 280, prot: 20, carb: 34, gras: 6 },
  { nombre: "Whey con banana y leche", momento: "post", desc: "1 scoop whey + 1 banana + 300ml leche descremada", cal: 390, prot: 33, carb: 50, gras: 4 },
  { nombre: "Arroz con pechuga y verduras", momento: "post", desc: "200g arroz cocido + 180g pechuga + brócoli", cal: 580, prot: 55, carb: 68, gras: 5 },
  { nombre: "Yogur griego con avena y miel", momento: "post", desc: "200g yogur griego 0% + 40g avena + 1 cdita miel", cal: 370, prot: 28, carb: 52, gras: 4 },
];

// ── ESTADO ──
let categoriaActiva      = "todos";
let platosMomentoActivo  = "todos";
let calcItems            = [];
let alimentoSeleccionado = null;

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  renderTabla();
  document.getElementById("buscador-alimentos").addEventListener("input", renderTabla);
  renderPlatos();

  // Botones platos rápidos en calculadora
  const btnsCont = document.getElementById("calcPlatosBtns");
  if (btnsCont) {
    const momentoLabel = { desayuno:"🌅", almuerzo:"☀️", cena:"🌙", snack:"🍎", pre:"⚡", post:"💪" };
    btnsCont.innerHTML = platos.map((p, i) => `
      <button class="plato-quick-btn" onclick="agregarPlatoCompleto(${i})">
        ${momentoLabel[p.momento]} ${p.nombre}
        <span>${p.cal} kcal · ${p.prot}g P · ${p.carb}g C · ${p.gras}g G</span>
      </button>
    `).join("");
  }

  // Buscador calculadora con debounce
  const calcBuscador = document.getElementById("calc-buscador");
  if (calcBuscador) {
    let debounceTimer;
    calcBuscador.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(buscarParaCalc, 400);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement.id === "calc-gramos") agregarAlimento();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".calc-search-wrap")) {
      const dd = document.getElementById("calcDropdown");
      if (dd) dd.style.display = "none";
    }
  });

  renderCalcLista();
});

// ── TABS ──
function switchTab(tab, btn) {
  document.querySelectorAll(".nutri-tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".nutri-panel").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(`panel-${tab}`).classList.add("active");
}

// ── TABLA ALIMENTOS ──
function renderTabla() {
  const busqueda = document.getElementById("buscador-alimentos").value.toLowerCase();
  const filtrados = alimentos.filter(a => {
    const matchCat = categoriaActiva === "todos" || a.categoria === categoriaActiva;
    const matchBus = a.nombre.toLowerCase().includes(busqueda);
    return matchCat && matchBus;
  });

  const tbody = document.getElementById("tablaBody");
  if (!filtrados.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#444;padding:2rem">No se encontraron alimentos</td></tr>`;
    return;
  }

  tbody.innerHTML = filtrados.map(a => `
    <tr>
      <td class="td-nombre">
        ${a.nombre}
        <span class="td-cat">${a.categoria}</span>
      </td>
      <td>${a.cal} kcal</td>
      <td class="td-prot">${a.prot}g</td>
      <td class="td-carb">${a.carb}g</td>
      <td class="td-gras">${a.gras}g</td>
    </tr>
  `).join("");
}

function filtrarCategoria(cat, btn) {
  categoriaActiva = cat;
  document.querySelectorAll(".categoria-btns .cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderTabla();
}

// ── PLATOS ──
function renderPlatos() {
  const filtrados = platos.filter(p => platosMomentoActivo === "todos" || p.momento === platosMomentoActivo);
  const momentoLabel = {
    desayuno: "🌅 Desayuno", almuerzo: "☀️ Almuerzo", cena: "🌙 Cena",
    snack: "🍎 Snack", pre: "⚡ Pre-entreno", post: "💪 Post-entreno"
  };

  document.getElementById("platosGrid").innerHTML = filtrados.map(p => `
    <div class="plato-card">
      <div class="plato-momento">${momentoLabel[p.momento]}</div>
      <div class="plato-nombre">${p.nombre}</div>
      <div class="plato-desc">${p.desc}</div>
      <div class="plato-macros">
        <div class="plato-macro">
          <div class="plato-macro-num" style="color:#fff">${p.cal}</div>
          <div class="plato-macro-label">kcal</div>
        </div>
        <div class="plato-macro">
          <div class="plato-macro-num" style="color:#ff6a00">${p.prot}g</div>
          <div class="plato-macro-label">prot</div>
        </div>
        <div class="plato-macro">
          <div class="plato-macro-num" style="color:#3a7bd5">${p.carb}g</div>
          <div class="plato-macro-label">carb</div>
        </div>
        <div class="plato-macro">
          <div class="plato-macro-num" style="color:#2a9d5c">${p.gras}g</div>
          <div class="plato-macro-label">gras</div>
        </div>
      </div>
    </div>
  `).join("");
}

function filtrarPlatos(momento, btn) {
  platosMomentoActivo = momento;
  document.querySelectorAll(".platos-filtros .cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderPlatos();
}

// ── CALCULADORA — búsqueda unificada local + API ──
async function buscarParaCalc() {
  const q        = document.getElementById("calc-buscador").value.trim().toLowerCase();
  const dropdown = document.getElementById("calcDropdown");
  alimentoSeleccionado = null;

  if (q.length < 2) { dropdown.style.display = "none"; return; }

  const localPlatos    = platos.filter(p => p.nombre.toLowerCase().includes(q)).slice(0, 4);
  const localAlimentos = alimentos.filter(a => a.nombre.toLowerCase().includes(q)).slice(0, 5);

  let html = '';

  if (localPlatos.length) {
    const momentoLabel = { desayuno:"🌅", almuerzo:"☀️", cena:"🌙", snack:"🍎", pre:"⚡", post:"💪" };
    html += `<div class="dropdown-separador">Platos</div>`;
    html += localPlatos.map(p => `
      <div class="dropdown-item" onclick="seleccionarPlato(${platos.indexOf(p)})">
        ${momentoLabel[p.momento]} ${p.nombre}
        <div class="dropdown-item-cat">Plato completo · ${p.cal} kcal · ${p.prot}g P · ${p.carb}g C · ${p.gras}g G</div>
      </div>
    `).join('');
  }

  if (localAlimentos.length) {
    html += `<div class="dropdown-separador">Alimentos (por 100g)</div>`;
    html += localAlimentos.map(a => `
      <div class="dropdown-item" onclick="seleccionarAlimentoLocal('${a.nombre}')">
        ${a.nombre}
        <div class="dropdown-item-cat">${a.cal} kcal · ${a.prot}g P · ${a.carb}g C · ${a.gras}g G</div>
      </div>
    `).join('');
  }

  if (html) {
    dropdown.style.display = 'block';
    dropdown.innerHTML = html;
  }

  if (q.length >= 3) {
    if (!html) {
      dropdown.style.display = 'block';
      dropdown.innerHTML = '<div class="dropdown-item" style="color:#555;font-style:italic">Buscando...</div>';
    }

    const fetchConTimeout = (url, ms = 4000) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), ms);
      return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
    };

    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?` +
        `search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1` +
        `&page_size=12&fields=product_name,nutriments,brands,countries_tags,lang&sort_by=unique_scans_n`;

      const res  = await fetchConTimeout(url);
      const data = await res.json();

      const todos = (data.products || []).filter(p =>
        p.product_name &&
        p.nutriments?.["energy-kcal_100g"] !== undefined &&
        p.nutriments["energy-kcal_100g"] > 0
      );

      const argentina = todos.filter(p => p.countries_tags?.includes('en:argentina'));
      const espanol   = todos.filter(p => !p.countries_tags?.includes('en:argentina') && p.lang === 'es');
      const resto     = todos.filter(p => !p.countries_tags?.includes('en:argentina') && p.lang !== 'es');
      const ordenados = [...argentina, ...espanol, ...resto].slice(0, 8);

      window._apiResultados = ordenados;

      if (ordenados.length) {
        const sepLabel = argentina.length > 0 ? 'Productos argentinos y más' : 'Base de datos global';
        const apiHtml  = ordenados.map((p, i) => {
          const cal  = Math.round(p.nutriments["energy-kcal_100g"] || 0);
          const prot = Math.round((p.nutriments["proteins_100g"]      || 0) * 10) / 10;
          const carb = Math.round((p.nutriments["carbohydrates_100g"] || 0) * 10) / 10;
          const gras = Math.round((p.nutriments["fat_100g"]           || 0) * 10) / 10;
          const esArg = p.countries_tags?.includes('en:argentina') ? ' 🇦🇷' : '';
          return `
            <div class="dropdown-item" onclick="seleccionarAlimentoAPI(${i})">
              ${p.product_name}${esArg}
              <div class="dropdown-item-cat">${cal} kcal · ${prot}g P · ${carb}g C · ${gras}g G (por 100g)</div>
            </div>
          `;
        }).join('');
        dropdown.innerHTML = html + `<div class="dropdown-separador">${sepLabel}</div>` + apiHtml;
        dropdown.style.display = 'block';
      } else if (!html) {
        dropdown.innerHTML = '<div class="dropdown-item" style="color:#555">No se encontraron resultados</div>';
      }

    } catch (err) {
      // Si falla la API, solo muestra locales sin mensaje de error
      if (!html) {
        dropdown.innerHTML = '<div class="dropdown-item" style="color:#555">No se encontraron resultados locales.</div>';
      }
    }
  }
}

function seleccionarPlato(idx) {
  const p = platos[idx];
  calcItems.push({
    nombre: p.nombre,
    gramos: null,
    cal: p.cal, prot: p.prot, carb: p.carb, gras: p.gras,
    esPlato: true,
  });
  document.getElementById("calc-buscador").value        = '';
  document.getElementById("calcDropdown").style.display = 'none';
  alimentoSeleccionado = null;
  renderCalcLista();
  actualizarTotales();
}

function seleccionarAlimentoLocal(nombre) {
  const a = alimentos.find(al => al.nombre === nombre);
  if (!a) return;
  alimentoSeleccionado = { nombre: a.nombre, cal: a.cal, prot: a.prot, carb: a.carb, gras: a.gras };
  document.getElementById("calc-buscador").value        = nombre;
  document.getElementById("calcDropdown").style.display = 'none';
}

function seleccionarAlimentoAPI(idx) {
  const p = window._apiResultados[idx];
  if (!p) return;
  alimentoSeleccionado = {
    nombre: p.product_name,
    cal:  Math.round(p.nutriments["energy-kcal_100g"]      || 0),
    prot: Math.round((p.nutriments["proteins_100g"]        || 0) * 10) / 10,
    carb: Math.round((p.nutriments["carbohydrates_100g"]   || 0) * 10) / 10,
    gras: Math.round((p.nutriments["fat_100g"]             || 0) * 10) / 10,
  };
  document.getElementById("calc-buscador").value        = p.product_name;
  document.getElementById("calcDropdown").style.display = 'none';
}

function cambiarGramos(delta) {
  const input = document.getElementById("calc-gramos");
  let val = parseInt(input.value) || 0;
  val = Math.max(1, Math.min(2000, val + delta));
  input.value = val;
}

function agregarAlimento() {
  if (!alimentoSeleccionado) {
    document.getElementById("calc-buscador").style.borderColor = "#ff6a00";
    setTimeout(() => document.getElementById("calc-buscador").style.borderColor = "", 2000);
    return;
  }
  const gramos = parseInt(document.getElementById("calc-gramos").value);
  if (!gramos || gramos < 1) {
    document.getElementById("calc-gramos").style.borderColor = "#ff6a00";
    setTimeout(() => document.getElementById("calc-gramos").style.borderColor = "", 2000);
    return;
  }

  const factor = gramos / 100;
  calcItems.push({
    nombre: alimentoSeleccionado.nombre,
    gramos,
    cal:  Math.round(alimentoSeleccionado.cal  * factor),
    prot: Math.round(alimentoSeleccionado.prot * factor * 10) / 10,
    carb: Math.round(alimentoSeleccionado.carb * factor * 10) / 10,
    gras: Math.round(alimentoSeleccionado.gras * factor * 10) / 10,
  });

  document.getElementById("calc-buscador").value = "";
  document.getElementById("calc-gramos").value   = "";
  alimentoSeleccionado = null;

  renderCalcLista();
  actualizarTotales();
}

function agregarPlatoCompleto(idx) {
  const p = platos[idx];
  calcItems.push({
    nombre: p.nombre,
    gramos: null,
    cal: p.cal, prot: p.prot, carb: p.carb, gras: p.gras,
    esPlato: true,
  });
  renderCalcLista();
  actualizarTotales();
}

function renderCalcLista() {
  const lista = document.getElementById("calc-lista");
  if (!lista) return;
  if (!calcItems.length) {
    lista.innerHTML = '<div class="calc-lista-vacio">Agregá alimentos para calcular los macros del día</div>';
    return;
  }
  lista.innerHTML = calcItems.map((item, i) => `
    <div class="calc-lista-item">
      <div>
        <div class="calc-lista-nombre">${item.nombre}</div>
        <div class="calc-lista-gramos">${item.esPlato ? "Plato completo" : item.gramos + "g"}</div>
      </div>
      <div class="calc-lista-macros">
        <span class="m-cal">${item.cal} kcal</span>
        <span class="m-prot">${item.prot}g P</span>
        <span class="m-carb">${item.carb}g C</span>
        <span class="m-gras">${item.gras}g G</span>
      </div>
      <button class="calc-lista-delete" type="button" onclick="eliminarItem(${i})">✕</button>
    </div>
  `).join("");
}

function eliminarItem(i) {
  calcItems.splice(i, 1);
  renderCalcLista();
  actualizarTotales();
}

function actualizarTotales() {
  const total = calcItems.reduce((acc, item) => ({
    cal:  acc.cal  + item.cal,
    prot: acc.prot + item.prot,
    carb: acc.carb + item.carb,
    gras: acc.gras + item.gras,
  }), { cal: 0, prot: 0, carb: 0, gras: 0 });

  document.getElementById("total-cal").textContent  = Math.round(total.cal);
  document.getElementById("total-prot").textContent = Math.round(total.prot * 10) / 10 + "g";
  document.getElementById("total-carb").textContent = Math.round(total.carb * 10) / 10 + "g";
  document.getElementById("total-gras").textContent = Math.round(total.gras * 10) / 10 + "g";

  const totalKcal = total.cal || 1;
  document.getElementById("barra-prot").style.flex = (total.prot * 4) / totalKcal;
  document.getElementById("barra-carb").style.flex = (total.carb * 4) / totalKcal;
  document.getElementById("barra-gras").style.flex = (total.gras * 9) / totalKcal;
}

function limpiarCalc() {
  calcItems = [];
  renderCalcLista();
  actualizarTotales();
}