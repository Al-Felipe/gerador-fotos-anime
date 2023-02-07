// Variaveis
const container = document.querySelector(".container");
const iconContainer = document.querySelector(".icon-container");
const imgEl = document.querySelector("img");
const btnEl = document.getElementById("btn");

//evento
btnEl.addEventListener("click", generateImage);

async function generateImage() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3ee62ab72fmsh5311cd2e221f00dp1fb5b3jsn54be4ca3fe45",
      "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
    },
  };
  btnEl.innerText = "Carregando...";
  btnEl.disabled = true;
  const response = await fetch(
    "https://any-anime.p.rapidapi.com/anime",
    options
  );
  const data = await response.json();
  iconContainer.style.display = "block";
  imgEl.src = data.stuff[0].image;
  btnEl.innerText = "Gerar Foto";
  btnEl.disabled = false;
}
