function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorClick = document.querySelector(".change-color");
const showColor = document.querySelector(".color");

const colorShow = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  showColor.textContent = getRandomHexColor();
};

colorClick.addEventListener("click", colorShow);
