
const showButton = document.getElementById("showButton");
const closeButton = document.getElementById("closeButton");
const christmasMessage = document.getElementById("as");
const guideInfo = document.getElementById("guideInfo");

showButton.addEventListener("click", function () {
  showButton.classList.add("hidden");
  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

closeButton.addEventListener("click", function () {
  guideInfo.classList.remove("show");
  setTimeout(function () {
    guideInfo.classList.add("hidden");
    showButton.classList.remove("hidden");
  }, 500);
});




const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");
  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});


function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

   
    const size = Math.random() * 15 + 5; 
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `${Math.random() * 10}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    
    if (Math.random() > 0.7) {
      snowflake.classList.add("sparkle");
    }

    snowflakesContainer.appendChild(snowflake);
  }
}


function addChristmasMusic() {
  const audio = document.createElement("audio");
  audio.src = "/assets/music/christmas.mp3";
  audio.loop = true;
  audio.volume = 0.5;

  // Phát nhạc khi người dùng nhấp chuột vào trang
  document.body.addEventListener("click", function () {
    audio.play();
  });

  document.body.appendChild(audio);
}


window.onload = function () {
  createSnowflakes();
  addChristmasMusic();
};
