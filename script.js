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
const Favorites =
[
    {
        icon:"📺",
        name:"YouTube",
        url:"https://www.youtube.com"
    },

    {
        icon:"🎬",
        name:"Netflix",
        url:"https://www.netflix.com"
    },

    {
        icon:"🌐",
        name:"Google",
        url:"https://www.google.com"
    },

    {
        icon:"🤖",
        name:"ChatGPT",
        url:"https://chatgpt.com"
    },

    {
        icon:"🌎",
        name:"Second Life",
        url:"https://secondlife.com"
    },

    {
        icon:"💻",
        name:"GitHub",
        url:"https://github.com"
    }
];

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

            OpenURL(
                "https://www.netflix.com"
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

    ShowFavorites();

    break;

case "OPEN_SETTINGS":

    ShowSettings();

    break;
    }

}

//==================================================
// Open URL
//==================================================

function OpenURL(url)
{
    screen.style.background = "#000";

    setTimeout(function()
    {
        window.location.href = url;

    },300);
}
//==================================================
// FAVORITES
//==================================================

function ShowFavorites()
{
    screen.innerHTML = `

    <div class="topbar">

        <div class="logo">

            ⭐ FAVORITES

        </div>

        <div class="status">

            <span class="app" onclick="Home()">

                🏠 Home

            </span>

        </div>

    </div>

    <div class="content">

        <div class="app-grid">

            <div class="app" onclick="OpenURL('https://www.youtube.com')">

                <div class="icon">📺</div>

                <div class="label">YouTube</div>

            </div>

            <div class="app" onclick="OpenURL('https://www.google.com')">

                <div class="icon">🌐</div>

                <div class="label">Google</div>

            </div>

            <div class="app" onclick="OpenURL('https://chatgpt.com')">

                <div class="icon">🤖</div>

                <div class="label">ChatGPT</div>

            </div>

            <div class="app" onclick="OpenURL('https://secondlife.com')">

                <div class="icon">🌎</div>

                <div class="label">Second Life</div>

            </div>

        </div>

    </div>

    `;
}

//==================================================
// SETTINGS
//==================================================

function ShowSettings()
{
    screen.innerHTML = `

    <div class="topbar">

        <div class="logo">

            ⚙ SETTINGS

        </div>

        <div class="status">

            <span class="app" onclick="Home()">

                🏠 Home

            </span>

        </div>

    </div>

    <div class="content">

        <div style="text-align:center;">

            <h2>Belmonte OS</h2>

            <br>

            <p>Version 1.0</p>

            <br>

            <p>Designed by Victoria Belmonte</p>

            <br>

            <button onclick="location.reload()">

                Reboot TV

            </button>

        </div>

    </div>

    `;
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
