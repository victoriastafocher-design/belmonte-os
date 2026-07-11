const screen = document.getElementById("screen");

screen.innerHTML = `
    <h1>BELMONTE</h1>
    <h2>OS</h2>
    <p>Initializing...</p>
`;

setTimeout(() => {

    screen.innerHTML = `
        <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
            title="Belmonte Smart TV"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;

}, 3000);
