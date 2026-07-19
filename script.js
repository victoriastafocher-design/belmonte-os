//==================================================
// BELMONTE OS v1
// Script.js
//==================================================

const screen = document.getElementById("screen");

const Apps =
[
    {
        icon:"📺",
        name:"YouTube",
        command:"OPEN_YOUTUBE"
    },

    {
        icon:"🎬",
        name:"Netflix",
        command:"OPEN_NETFLIX"
    },

    {
        icon:"🌐",
        name:"Browser",
        command:"OPEN_BROWSER"
    },

    {
        icon:"🎵",
        name:"Music",
        command:"OPEN_MUSIC"
    },

    {
        icon:"⭐",
        name:"Favorites",
        command:"OPEN_FAVORITES"
    },

    {
        icon:"⚙",
        name:"Settings",
        command:"OPEN_SETTINGS"
    }
];

Boot();

//==================================================

function Boot()
{
    screen.innerHTML = `

    <div class="boot">

        <h1>BELMONTE</h1>

        <h2>OS</h2>

        <p>Initializing...</p>

        <div class="loading"></div>

    </div>

    `;

    setTimeout(Home,2500);
}

//==================================================

function Home()
{

    let html = "";

    for(const app of Apps)
    {

        html += `

        <div
            class="app"
            onclick="OpenApp('${app.command}')">

            <div class="icon">

                ${app.icon}

            </div>

            <div class="label">

                ${app.name}

            </div>

        </div>

        `;

    }

    screen.innerHTML = `

    <div class="topbar">

        <div class="logo">

            🏠 BELMONTE OS

        </div>

        <div class="status">

            <span>

                📶 Connected

            </span>

            <span id="clock">

                00:00

            </span>

        </div>

    </div>

    <div class="content">

        <div class="app-grid">

            ${html}

        </div>

    </div>

    `;

    UpdateClock();

}

//==================================================

function UpdateClock()
{

    const clock =
        document.getElementById("clock");

    if(!clock)
        return;

    function Tick()
    {

        const now = new Date();

        clock.textContent =
            now.toLocaleTimeString(
                [],
                {
                    hour:"2-digit",
                    minute:"2-digit"
                });

    }

    Tick();

    if(window.ClockTimer)
        clearInterval(window.ClockTimer);

    window.ClockTimer =
        setInterval(Tick,1000);

}
//==================================================
// Open App
//==================================================

function OpenApp(command)
{
    console.log("Opening:", command);

    switch(command)
    {
        case "OPEN_YOUTUBE":

            OpenURL(
                "https://www.youtube.com"
            );

            break;

        case "OPEN_NETFLIX":

            alert(
                "Netflix será integrado na próxima versão."
            );

            break;

        case "OPEN_BROWSER":

            OpenURL(
                "https://www.google.com"
            );

            break;

        case "OPEN_MUSIC":

            OpenURL(
                "https://music.youtube.com"
            );

            break;

        case "OPEN_FAVORITES":

            alert(
                "Favorites em desenvolvimento."
            );

            break;

        case "OPEN_SETTINGS":

            alert(
                "Settings em desenvolvimento."
            );

            break;

    }

}

//==================================================
// Open URL
//==================================================

function OpenURL(url)
{
    screen.innerHTML = `

    <div class="boot">

        <h1>Launching...</h1>

        <p>

            Aguarde...

        </p>

    </div>

    `;

    setTimeout(function()
    {
        window.location.href = url;

    },800);

}

//==================================================
// Receiver (Preparado para o SL)
//==================================================

window.addEventListener(
    "message",
    function(event)
    {

        console.log(
            "Receiver:",
            event.data
        );

    }
);
