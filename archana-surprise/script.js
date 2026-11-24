const starContainer = document.getElementById("stars");

for (let i = 0; i < 110; i++) {
  const star = document.createElement("span");
  star.className = "star";
  const size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 4 + "s";
  starContainer.appendChild(star);
}

function enterWorld() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("experience").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  for (let i = 0; i < 15; i++) setTimeout(createFloatingHeart, i * 100);
}

function openGift() {
  const gift = document.getElementById("gift");
  if (gift.classList.contains("open")) return;
  gift.classList.add("open");
  document.getElementById("giftMessage").classList.remove("hidden");
  document.getElementById("giftHint").innerText =
    "A little happiness, specially for you! ❤️";
  for (let i = 0; i < 15; i++) setTimeout(createFloatingHeart, i * 100);
}

const comfortMessages = {
  hug: "Imagine me holding you close and saying: everything can wait. Just breathe. 🫂",
  rest: "Forget everything for a little while. Get cozy, close your eyes and give yourself a break. 🌙",
  love: "You are not difficult to love on your difficult days. You're precious to me, always. 💌",
  smile: "If I could steal one thing from the universe, it would be all the sadness keeping you from smiling. ✨"
};

function choose(type) {
  document.getElementById("comfortResult").innerText = comfortMessages[type];
  for (let i = 0; i < 4; i++) createFloatingHeart();
}

const answers = {
  hug: "Then imagine the biggest, warmest hug from me. No words needed. 🫂",
  food: "Done! Your favourite snacks, unlimited supply. 🍫",
  sleep: "A cozy blanket, a peaceful room and absolutely no worries. 🌙",
  together: "That's my favourite answer. I wish I could be right there beside you. ❤️"
};

function answer(type) {
  document.getElementById("answerResult").innerText = answers[type];
  for (let i = 0; i < 5; i++) createFloatingHeart();
}

function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  if (envelope.classList.contains("open")) {
    envelope.classList.remove("open");
    letter.classList.add("hidden");
    return;
  }

  envelope.classList.add("open");
  setTimeout(() => {
    letter.classList.remove("hidden");
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 500);
}

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  const symbols = ["♡", "♥", "✦", "💜", "✨"];
  heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("floatingHearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6500);
}

function celebrate() {
  document.getElementById("hugResponse").innerText =
    "HUG RECEIVED, Ponneeeehhhh..! 🫂❤️ Sending you a million more. You are loved, sunshine!";
  for (let i = 0; i < 35; i++) setTimeout(createFloatingHeart, i * 80);
}

// Make the two main interactive objects keyboard-accessible.
document.getElementById("gift").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openGift();
  }
});
document.getElementById("envelope").addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});
