//==================================================
// Belmonte OS
// script.js
//==================================================

const screen = document.getElementById("screen");

//========================
// Inicialização
//========================

Boot();


//========================
// Boot
//========================

function Boot()
{
    screen.innerHTML = `
        <h1>BELMONTE</h1>
        <h2>OS</h2>
        <p>Initializing...</p>
    `;

    setTimeout(Home, 3000);
}


//========================
// Tela Inicial
//========================

function Home()
{
    screen.innerHTML = `

        <h1>BELMONTE</h1>
        <h2>OS</h2>

        <div class="app-container">

            <div class="card" onclick="SendCommand('OPEN_YOUTUBE')">
                <div class="icon">📺</div>
                <div class="name">YouTube</div>
            </div>

            <div class="card">
                <div class="icon">🌐</div>
                <div class="name">Browser</div>
            </div>

            <div class="card">
                <div class="icon">🎵</div>
                <div class="name">Music</div>
            </div>

            <div class="card">
                <div class="icon">⭐</div>
                <div class="name">Favorites</div>
            </div>

            <div class="card">
                <div class="icon">⚙</div>
                <div class="name">Settings</div>
            </div>

        </div>

    `;
}


//========================
// Apps
//========================

function OpenYoutube()
{
    window.location.href = "https://www.youtube.com/";
}


//========================
// Comandos
//========================

function SendCommand(command)
{
    console.log("Command sent:", command);

    switch(command)
    {
        case "OPEN_YOUTUBE":
            OpenYoutube();
            break;

        default:
            console.log("Unknown command:", command);
            break;
    }
}
