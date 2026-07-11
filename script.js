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

        <h1>BELMONTE</h1>
        <h2>OS</h2>


        <div class="app-container">


            <div class="card" onclick="OpenYoutube()">
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


function OpenYoutube()
{
    screen.innerHTML = `
        <h1>Launching...</h1>

        <p>YouTube</p>
    `;
}
