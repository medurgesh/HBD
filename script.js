// Funny memes array
const raheeshRoasts = [
    "Raheesh be like: 'I'm coming!' *arrives next week* 😂",
    "Raheesh's diet: See food → Eat food 🍕",
    "Raheesh + Dance floor = National Emergency 🚨",
    "Raheesh's WiFi: 5G speed, 2G connection 📶",
    "Raheesh's gaming: Controller broken? Nah, skill issue 🎮"
];

function createStars() {
    // Same star creation
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

function createCrazyConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const crazyColors = ['#ff4757', '#ffa502', '#74b9ff', '#00b894', '#fdcb6e', '#e17055'];
    
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = crazyColors[Math.floor(Math.random() * crazyColors.length)];
        confetti.style.width = (5 + Math.random() * 15) + 'px';
        confetti.style.height = (5 + Math.random() * 15) + 'px';
        confetti.style.animationDuration = (1 + Math.random() * 3) + 's';
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

function explodeMeme() {
    const memeDiv = document.getElementById('memeExplosion');
    const randomRoast = raheeshRoasts[Math.floor(Math.random() * raheeshRoasts.length)];
    memeDiv.textContent = randomRoast;
    memeDiv.classList.add('show');
    setTimeout(() => memeDiv.classList.remove('show'), 3000);
}

function danceParty() {
    document.body.style.animation = 'shake 0.5s infinite';
    createCrazyConfetti();
    explodeMeme();
    
    // Play sound (if supported)
    const audio = document.getElementById('partySound');
    audio.play().catch(() => {});
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    flickerCandles(); // From previous version
    
    const wishBtn = document.getElementById('wishBtn');
    const danceBtn = document.getElementById('danceBtn');
    const personalSection = document.getElementById('personalSection');
    const title = document.getElementById('title');
    
    let roastCount = 0;
    
    wishBtn.addEventListener('click', function() {
        roastCount++;
        createCrazyConfetti();
        
        if (roastCount === 1) {
            personalSection.classList.add('show');
            title.textContent = "RAHEESH IS OLD NOW! 👴😂";
            this.textContent = 'ROAST AGAIN! 🔥';
        } else if (roastCount === 2) {
            title.innerHTML = "RAHEESH = DANCE KING? 🕺🤡";
            explodeMeme();
        } else {
            title.innerHTML = "HAPPY BDAY LEGEND RAHEESH! 🎉";
            danceParty();
            this.style.display = 'none';
        }
    });
    
    danceBtn.addEventListener('click', danceParty);
    
    // Auto-roast every 10 seconds
    setInterval(explodeMeme, 10000);
    
    // Shake on load
    setTimeout(() => document.querySelector('.cake').style.animation = 'shake 1s ease-in-out', 1000);
});