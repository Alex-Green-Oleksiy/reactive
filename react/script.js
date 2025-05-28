const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");
const fireworks = document.getElementById("fireworks");

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

function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight - 200) + 100;

    // Випадкові кольори для салюту
    const colors = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF"
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 230; i++) {
        const trail = document.createElement("div");
        trail.className = "trail";
        trail.style.backgroundColor = color;

  
        const angle = i * 12 * (Math.PI / 180);
        const distance = Math.random() * 150 + 50;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        trail.style.transform = `translate(${dx}px, ${dy}px)`;
        firework.appendChild(trail);
    }

    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    fireworks.appendChild(firework);


    setTimeout(() => {
        firework.remove();
    }, 2000);
}


setInterval(createFirework, 300);
