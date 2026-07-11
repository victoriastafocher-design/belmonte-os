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


function OpenYoutube()
{
    screen.innerHTML = `

        <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
            title="YouTube"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>

    `;
}

function SendCommand(command)
{
    console.log("Command sent:", command);


    fetch(
        "https://simhost-059d114e20ca42176.agni.secondlife.io:12043/cap/f85c2cb6-4403-7492-fb02-a0c7c7161781,
        {
            method: "POST",
            mode: "no-cors",
            body: command
        }
    );
}
