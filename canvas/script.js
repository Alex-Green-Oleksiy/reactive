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
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', () => isPressed = false);

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

document.getElementById('increase').onclick = () => {
  size = Math.min(50, size + 5);
  document.getElementById('size').innerText = size;
};

document.getElementById('decrease').onclick = () => {
  size = Math.max(5, size - 5);
  document.getElementById('size').innerText = size;
};

document.getElementById('clear').onclick = () => 
  ctx.clearRect(0, 0, canvas.width, canvas.height);