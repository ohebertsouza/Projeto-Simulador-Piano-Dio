// Seleciona todas as teclas do piano
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Seleciona o controle deslizante de volume
const volumeSlider = document.querySelector(".volume-slider input");

// Seleciona o checkbox para mostrar/ocultar as teclas
const keysCheck = document.querySelector(".keys-check input");

// Array para mapear as teclas do piano
let mappedKeys = [];

// Cria um novo objeto de áudio com uma nota padrão
let audio = new Audio("./src/tunes/a.wav");

// Função para tocar uma nota do piano
const playTune = (key) => {
  // Define o arquivo de áudio com base na tecla pressionada
  audio.src = `./src/tunes/${key}.wav`;
  audio.play();

  // Adiciona a classe "active" à tecla correspondente para animação
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  // Remove a classe "active" após 150ms para simular o efeito de pressionar
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

// Adiciona evento de clique para cada tecla do piano
pianoKeys.forEach(key => {
  key.addEventListener("click", () => playTune(key.dataset.key)); // Toca a nota ao clicar na tecla
  mappedKeys.push(key.dataset.key); // Mapeia as teclas no array
});

// Adiciona evento para detectar teclas pressionadas no teclado
document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key)) {
    playTune(e.key); // Toca a nota correspondente se estiver no mapeamento
  }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
  audio.volume = e.target.value; // Define o volume com base no valor do controle deslizante
}

// Função para mostrar ou ocultar as teclas do piano
const showHideKeys = () => {
  pianoKeys.forEach(key => {
    key.classList.toggle("hide"); // Adiciona ou remove a classe "hide" para alternar visibilidade
  });
}

// Adiciona evento para o controle deslizante de volume
volumeSlider.addEventListener("input", handleVolume);

// Adiciona evento ao checkbox para mostrar/ocultar as teclas
keysCheck.addEventListener("click", showHideKeys);