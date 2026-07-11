const screen = document.getElementById("screen");

Boot();

function Boot()
{
    screen.innerHTML = `
        <h1>BELMONTE</h1>
        <h2>OS</h2>
        <p>Initializing...</p>
    `;

    setTimeout(Home, 3000);
}

function Home()
{
    screen.innerHTML = `
        <h1>BELMONTE TV</h1>

        <br>

        <button onclick="OpenYoutube()">📺 YouTube</button>

        <button>🌐 Browser</button>

        <button>🎵 Music</button>

        <button>⭐ Favorites</button>

        <button>⚙ Settings</button>
    `;
}

function OpenYoutube()
{
    screen.innerHTML = `
        <h1>Launching...</h1>

        <p>YouTube</p>
    `;
}
