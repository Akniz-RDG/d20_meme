const btn = document.getElementById('lanzar');
const resultado = document.getElementById('resultado');
const pantallaEvento = document.getElementById('pantalla-evento');
const imagenEvento = document.getElementById('imagen-evento');
const audioEvento = document.getElementById('audio-evento');

btn.addEventListener('click', () => {
  const numero = Math.floor(Math.random() * 20) + 1;
  resultado.textContent = numero;

  if (numero === 1) {
    mostrarEvento('assets/fallo.png', 'assets/fallo.mp3');
  } else if (numero === 20) {
    mostrarEvento('assets/critico.png', 'assets/critico.mp3');
  }
});

function mostrarEvento(img, audio) {
  imagenEvento.src = img;
  audioEvento.src = audio;
  pantallaEvento.classList.add('visible');
  audioEvento.play();

  setTimeout(() => {
    pantallaEvento.classList.remove('visible');
  }, 4000);
}