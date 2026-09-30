const correctPassword = "vag2005";

document.addEventListener("DOMContentLoaded", () => createHearts());

function unlockWebsite() {
  const input = document.getElementById("passwordInput");
  const error = document.getElementById("wrongPassword");
  if (input.value === correctPassword) {
    document.getElementById("lockScreen").classList.remove("active");
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainWebsite").classList.remove("hidden");
    celebrate();
  } else {
    error.style.display = "block";
    setTimeout(() => error.style.display = "none", 2500);
  }
}

document.getElementById("passwordInput").addEventListener("keypress", e => {
  if (e.key === "Enter") unlockWebsite();
});

document.getElementById("showPassword").addEventListener("click", () => {
  const input = document.getElementById("passwordInput");
  input.type = input.type === "password" ? "text" : "password";
});

function scrollToMemories() {
  document.getElementById("memories").scrollIntoView({behavior:"smooth"});
}

function openGift() {
  const gift = document.getElementById("giftBox");
  gift.style.transform = "scale(0)";
  setTimeout(() => {
    document.getElementById("surpriseSection").classList.remove("hidden");
    document.getElementById("surpriseSection").scrollIntoView({behavior:"smooth"});
    celebrate();
  }, 500);
}

function celebrate() {
  const container = document.getElementById("confettiContainer");
  const symbols = ["💗","✨","💕","🌸","🎉","💖","⭐"];
  for (let i=0;i<80;i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    c.style.left = Math.random()*100 + "vw";
    c.style.fontSize = (10+Math.random()*20) + "px";
    c.style.animationDuration = (2+Math.random()*3) + "s";
    container.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function toggleMusic() {
  const music = document.getElementById("birthdayMusic");
  const button = document.getElementById("musicButton");
  if (music.paused) {
    music.play().then(() => button.textContent="⏸").catch(() => {
      alert("Add assets/birthday.mp3 first, then try again.");
    });
  } else {
    music.pause();
    button.textContent="▶";
  }
}

function createHearts() {
  const container = document.querySelector(".hearts");
  for (let i=0;i<15;i++) {
    const heart = document.createElement("span");
    heart.textContent = "♥";
    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = Math.random()*100 + "vh";
    heart.style.color = "#ff6fa9";
    heart.style.opacity = "0.25";
    heart.style.fontSize = (10+Math.random()*20) + "px";
    heart.style.pointerEvents = "none";
    container.appendChild(heart);
  }
}
