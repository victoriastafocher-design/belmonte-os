function Home()
{
    screen.innerHTML = `

    <div class="topbar">

        <div class="logo">
            🏠 BELMONTE OS
        </div>

        <div class="status">

            <span id="connection">📶 Connected</span>

            <span id="clock">00:00</span>

        </div>

    </div>

    <div class="divider"></div>

    <div class="content">

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

    </div>

    `;

    UpdateClock();
}
function UpdateClock()
{
    const clock = document.getElementById("clock");

    if(!clock)
        return;

    function Refresh()
    {
        const now = new Date();

        clock.textContent =
            now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });
    }

    Refresh();

    setInterval(Refresh, 1000);
}
