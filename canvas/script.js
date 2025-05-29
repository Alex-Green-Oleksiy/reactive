'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
let x, y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = document.getElementById('color').value;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = document.getElementById('color').value;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener('mousedown', (e) => {
<<<<<<< HEAD
  e.preventDefault();
=======
>>>>>>> b2e437dd8c41fb6244ba1ba1efe545d4e5784142
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

<<<<<<< HEAD
canvas.addEventListener('mouseup', () => {
  isPressed = false;
});
=======
canvas.addEventListener('mouseup', () => isPressed = false);
>>>>>>> b2e437dd8c41fb6244ba1ba1efe545d4e5784142

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

<<<<<<< HEAD
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  isPressed = true;
  x = e.touches[0].clientX - canvas.offsetLeft;
  y = e.touches[0].clientY - canvas.offsetTop;
});

canvas.addEventListener('touchend', () => {
  isPressed = false;
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  if (isPressed) {
    const x2 = e.touches[0].clientX - canvas.offsetLeft;
    const y2 = e.touches[0].clientY - canvas.offsetTop;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

=======
>>>>>>> b2e437dd8c41fb6244ba1ba1efe545d4e5784142
document.getElementById('increase').onclick = () => {
  size = Math.min(50, size + 5);
  document.getElementById('size').innerText = size;
};

document.getElementById('decrease').onclick = () => {
  size = Math.max(5, size - 5);
  document.getElementById('size').innerText = size;
};

<<<<<<< HEAD
document.getElementById('clear').onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
=======
document.getElementById('clear').onclick = () => 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
>>>>>>> b2e437dd8c41fb6244ba1ba1efe545d4e5784142
