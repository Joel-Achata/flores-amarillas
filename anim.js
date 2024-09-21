// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El universo te puedo dar", time: 15 },
  { text: "Solo por un instante de tu mirar", time: 18 },
  { text: "Puedo parar el tiempo", time: 27 },
  { text: "Cuando estás cerca de mí", time: 32 },
  { text: "Quiero borrar todas las dudas que me hacen mal", time: 33 },
  { text: "Saber el camino para encontrar", time: 41 },
  { text: "Ese destino que siempre imagino junto a ti", time: 47 },
  { text: "Tantas cosas que quiero decirte", time: 54 },
  { text: "Se quedan en silencio, no encuentro el momento", time: 59 },
  { text: "El ruido de la ciudad", time: 67 },
  { text: "No me permite llegar a tu corazón", time: 72 },
  { text: "Y aunque trato de ocultar lo que siento", time: 78 },
  { text: "Siempre ocupas tú mi pensamiento", time: 83 },
  { text: "Ya no puedo fingir", time: 91 },
  { text: "Lo que el corazón siente por ti", time: 97 },
  { text: "Tú me atrapas con esa sonrisa", time: 104 },
  { text: "Ya no vivo esta vida de prisa", time: 108 },
  { text: "Ven dame tu mano", time: 144 },
  { text: "Para huir de esta terrible oscuridad", time: 148 },
  { text: "Mi corazón encantado vibra", time: 153 },
  { text: "Por el polvo de esperanza y magia", time: 158 },
  { text: "Del universo que", time: 164 },
  { text: "Ambicionan todos poseer", time: 169 },
  { text: "Voy a amarte para toda la vida", time: 176 },
  { text: "No me importa si aún no te intereso", time: 183 },
  { text: "Ven toma mi mano", time: 188 },
  { text: "Para huir de esta terrible oscuridad", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);