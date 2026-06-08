import { auth, db, onAuthStateChanged, signOut, doc, getDoc } from './firebase.js';

let dropdownAbierto = false;

onAuthStateChanged(auth, async user => {
  const navUser = document.getElementById('nav-user');
  if (!navUser) return;

  if (user) {
    let nombre = 'U';
    try {
      const snap = await getDoc(doc(db, 'usuarios', user.uid));
      if (snap.exists()) nombre = snap.data().nombre || 'U';
    } catch(e) {}

    const inicial = nombre.charAt(0).toUpperCase();
    const isPages = window.location.pathname.includes('/pages/');
    const perfilUrl = isPages ? 'perfil.html' : 'pages/perfil.html';

    navUser.innerHTML = `
      <div id="navAvatarWrap" style="position:relative">
        <div id="navAvatar" style="
          width:34px;height:34px;border-radius:50%;
          background:rgba(255,106,0,0.15);border:2px solid #ff6a00;
          display:flex;align-items:center;justify-content:center;
          font-size:14px;font-weight:bold;color:#ff6a00;cursor:pointer;
          font-family:'Poppins',sans-serif;user-select:none;
          transition:background 0.15s;
        ">${inicial}</div>
        <div id="navDropdown" style="
          position:absolute;top:calc(100% + 10px);right:0;
          background:#111;border:1px solid #1e1e1e;border-radius:12px;
          padding:8px;min-width:190px;z-index:1000;
          display:none;flex-direction:column;gap:2px;
          box-shadow:0 8px 30px rgba(0,0,0,0.5);
        ">
          <div style="padding:8px 12px;font-size:14px;font-weight:bold;color:#fff">${nombre}</div>
          <div style="padding:0 12px 8px;font-size:11px;color:#444;border-bottom:1px solid #1e1e1e;margin-bottom:4px">${user.email}</div>
          <button onclick="location.href='${perfilUrl}'" style="
            padding:9px 12px;border-radius:8px;font-size:13px;color:#888;
            cursor:pointer;border:none;background:transparent;
            font-family:'Poppins',sans-serif;text-align:left;width:100%;
            transition:all 0.15s;
          " onmouseover="this.style.background='#1a1a1a';this.style.color='#fff'"
             onmouseout="this.style.background='transparent';this.style.color='#888'">
            ⚙️ Mi cuenta
          </button>
          <button id="btnCerrarSesion" style="
            padding:9px 12px;border-radius:8px;font-size:13px;color:#888;
            cursor:pointer;border:none;background:transparent;
            font-family:'Poppins',sans-serif;text-align:left;width:100%;
            transition:all 0.15s;
          " onmouseover="this.style.background='rgba(207,122,122,0.1)';this.style.color='#cf7a7a'"
             onmouseout="this.style.background='transparent';this.style.color='#888'">
            ← Cerrar sesión
          </button>
        </div>
      </div>
    `;

    document.getElementById('navAvatar').addEventListener('click', e => {
      e.stopPropagation();
      const dd = document.getElementById('navDropdown');
      dropdownAbierto = !dropdownAbierto;
      dd.style.display = dropdownAbierto ? 'flex' : 'none';
    });

    document.getElementById('btnCerrarSesion').addEventListener('click', async () => {
      await signOut(auth);
      // Punto 8 — manda al index, no al login
      const isPages = window.location.pathname.includes('/pages/');
      location.href = isPages ? '../index.html' : 'index.html';
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('#navAvatarWrap')) {
        const dd = document.getElementById('navDropdown');
        if (dd) dd.style.display = 'none';
        dropdownAbierto = false;
      }
    });

  } else {
    // Punto 9 — solo mostrar botón de login si estamos en index.html
    const enIndex = !window.location.pathname.includes('/pages/');
    if (enIndex) {
      navUser.innerHTML = `
        <button onclick="location.href='pages/login.html'" style="
          padding:6px 16px;border-radius:6px;background:#ff6a00;
          border:none;color:#fff;font-size:13px;font-weight:bold;
          cursor:pointer;font-family:'Poppins',sans-serif;transition:all 0.15s;
        " onmouseover="this.style.background='#e55e00'"
           onmouseout="this.style.background='#ff6a00'">
          Iniciar sesión
        </button>
      `;
    } else {
      navUser.innerHTML = '';
    }
  }
});