const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentDate = new Date();
const targetDate = new Date(currentDate);
targetDate.setMonth(currentDate.getMonth() + 1, 3);
targetDate.setHours(18, 0, 0, 0);

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference <= 0) {
        days.innerText = "0";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";
        return;
    }

    const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
    const currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const currentMinutes = Math.floor(difference / 1000 / 60) % 60;
    const currentSeconds = Math.floor(difference / 1000) % 60;

    days.innerText = currentDays;
    hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
    minutes.innerText =
        currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
    seconds.innerText =
        currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}

const targetDateString = targetDate.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
});
year.innerText = targetDateString;

setTimeout(() => {
    loading.remove();
    countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);

// Функція для створення GIF
function createGif() {
    const gif = document.createElement("img");

    // Випадковий вибір GIF (від gif2 до gif5)
    const gifNumber = Math.floor(Math.random() * 4) + 2; // випадкове число від 2 до 5
    gif.src = `./img/gif${gifNumber}.gif`;
    gif.className = "random-gif";

    // Випадкове розташування
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    // Випадковий розмір (від 100 до 200 пікселів)
    const size = Math.random() * 100 + 100;

    gif.style.position = "absolute";
    gif.style.left = `${x}px`;
    gif.style.top = `${y}px`;
    gif.style.width = `${size}px`;
    gif.style.height = `${size}px`;
    gif.style.zIndex = "0";

    // Додаємо GIF до body
    document.body.appendChild(gif);

    // Видаляємо після рандомного часу (від 2 до 5 секунд)
    const disappearDelay = Math.random() * 3000 + 2000;
    setTimeout(() => {
        gif.style.opacity = "0";
        // Видаляємо після анімації зникнення
        setTimeout(() => {
            gif.remove();
        }, 500);
    }, disappearDelay);
}

// Створюємо GIF рандомно (від 1 до 3 секунд)
let lastGifTime = 0;
function createRandomGif() {
    const currentTime = new Date().getTime();
    if (currentTime - lastGifTime > 2000) {
        // мінімальний інтервал 1 секунда
        createGif();
        lastGifTime = currentTime;
    }
}

// Викликаємо функцію кожні 200 мс
setInterval(createRandomGif, 200);

// Додаємо обробник розміру вікна
window.addEventListener("resize", () => {
    // При зміні розміру вікна видаляємо всі GIF
    const gifs = document.querySelectorAll(".random-gif");
    gifs.forEach((gif) => gif.remove());
});
