// Typing animation for the "Welcome" text on Home section
const text = "Welcome to my portfolio!";
let i = 0;
const typingElement = document.querySelector(".typing");

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

// Scroll to sections when menu items are clicked
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Efek mengetik
new TypeIt("#typing", {
  speed: 60,
  loop: true
})
.type("Hello, welcome to my world ")
.pause(1000)
.delete()
.type("I am Ipit, a Developer and Programmer")
.pause(1000)
.delete()
.type("Nice to meet you")
.pause(1000)
.delete()
.go();

// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "PROGRAMER";
const fontSize = 15;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 35);

// Mode gelap/terang toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});