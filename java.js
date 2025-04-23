// Typing animation
const typingElement = document.querySelector('.typing');
const roles = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typing() {
  let current = roles[i];
  if (!isDeleting && j <= current.length) {
    typingElement.innerHTML = current.substring(0, j++);
  } else if (isDeleting && j >= 0) {
    typingElement.innerHTML = current.substring(0, j--);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typing, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typing, 300);
  } else {
    setTimeout(typing, isDeleting ? 50 : 100);
  }
}
typing();

// Galaxy background effect (stars)
const canvas = document.getElementById("galaxy-bg");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}
createStars(200);

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    s.x += s.dx;
    s.y += s.dy;

    if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
    if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
  }
  requestAnimationFrame(animateStars);
}
animateStars();
