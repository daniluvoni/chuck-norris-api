const iconChuck = document.getElementById("icon");
const fraseChuck = document.getElementById("frase");
const autor = document.getElementById("autor");
const botonLoad = document.getElementById("reload");

searchJoke();

botonLoad.addEventListener("click", () => {
    reloadWeb();
});

//setInterval("reloadWeb()",5000);
function reloadWeb() {
    location.reload();
}

function searchJoke() {

    const url = `https://api.chucknorris.io/jokes/random`;

    fetch(url)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "Respuesta incorrecta del servidor";
            }
        })
        .then((result) => {
            drawJoke(result);
        })
        .catch(err => {
            console.log("catch", err);
        })
}

function drawJoke(responseJson) {

    iconChuck.src = responseJson.icon_url;
    fraseChuck.textContent = responseJson.value;
    autor.textContent = "Chuck Norris";
}