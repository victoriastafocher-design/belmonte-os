@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Orbitron:wght@500;700&display=swap');

/* ==========================================
   BELMONTE OS 2.0
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,
body{

    width:100%;
    height:100%;

    overflow:hidden;

    background:#050505;

    color:white;

    font-family:'Inter',sans-serif;

}


/* ==========================================
   Tela Principal
========================================== */

#screen{

    width:100vw;
    height:100vh;

    display:flex;

    flex-direction:column;

}


/* ==========================================
   Barra Superior
========================================== */

.topbar{

    height:70px;

    padding:0 35px;

    display:flex;

    justify-content:space-between;

    align-items:center;

    background:#111;

    border-bottom:1px solid #222;

}

.logo{

    font-family:'Orbitron',sans-serif;

    font-size:28px;

    letter-spacing:4px;

    color:#4aa3ff;

}

.status{

    display:flex;

    gap:30px;

    font-size:18px;

    color:#8fc7ff;

}


/* ==========================================
   Conteúdo
========================================== */

.content{

    flex:1;

    display:flex;

    justify-content:center;

    align-items:center;

}


/* ==========================================
   Apps
========================================== */

.app-container{

    display:grid;

    grid-template-columns:repeat(3,170px);

    gap:35px;

}


/* ==========================================
   Cards
========================================== */

.card{

    width:170px;
    height:145px;

    background:#101010;

    border:1px solid #2a2a2a;

    border-radius:20px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    cursor:pointer;

    transition:.25s;

}

.card:hover{

    transform:scale(1.08);

    border-color:#4aa3ff;

    background:#181818;

    box-shadow:0 0 18px rgba(74,163,255,.35);

}


/* ==========================================
   Ícones
========================================== */

.icon{

    font-size:48px;

    margin-bottom:14px;

}


/* ==========================================
   Texto
========================================== */

.name{

    font-size:17px;

    font-weight:600;

}


/* ==========================================
   Boot
========================================== */

.boot{

    width:100%;
    height:100%;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

}

.boot h1{

    font-family:'Orbitron',sans-serif;

    font-size:70px;

    letter-spacing:10px;

}

.boot h2{

    margin-top:10px;

    color:#4aa3ff;

    letter-spacing:12px;

}

.boot p{

    margin-top:45px;

    color:#999;

}
