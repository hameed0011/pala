const text = document.getElementById("text");
const startScreen = document.getElementById("startScreen");
const audio = document.getElementById("bg-audio");

const fonts = [
  'Pacifico', 'Raleway', 'Orbitron', 'Playfair Display', 'Press Start 2P',
  'Lobster', 'Bebas Neue', 'Monoton', 'Righteous', 'Poiret One',
  'Fjalla One', 'Great Vibes', 'Rubik Moonrocks', 'Shrikhand', 'Fredoka One'
];

const symbols = ['★', '♡', '✦', '❀', '❁', '♥', '✨', '✧', '❣', '☁','😔','💤','🐾'];
const colors = [
  '#a06cd5', '#c77dff', '#9d4edd', '#6a4c93',
  '#7b2cbf', '#f28482', '#ff99ac', '#0077b6',
  '#e75480', '#9b5de5'
];

let fontInterval;

function createSymbol() {
  const symbol = document.createElement('div');
  symbol.classList.add('symbol');
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + 'vw';
  symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
  symbol.style.animationDuration = 3 + Math.random() * 3 + 's';
  symbol.style.fontSize = 15 + Math.random() * 25 + 'px';
  document.body.appendChild(symbol);
  symbol.addEventListener('animationend', () => symbol.remove());
}

startScreen.addEventListener("click", () => {
  startScreen.classList.add("fade-out");
  setTimeout(() => startScreen.remove(), 1000);

  text.style.display = "block";

  let i = 0;
  fontInterval = setInterval(() => {
    text.style.fontFamily = fonts[i];
    i = (i + 1) % fonts.length;
  }, 1000);

  setInterval(createSymbol, 150);

  audio.play().catch(err => console.log("Autoplay blocked:", err));
});
