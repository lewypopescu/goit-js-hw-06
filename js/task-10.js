const boxesDiv = document.querySelector("#boxes");
const inputStart = document.querySelector("#input-control");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const spanMessage = document.querySelector("#span-message");

buttonCreate.addEventListener("click", (e) => {
  const amountValue = inputStart.value;
  if (!amountValue) {
    return;
  }
  if (amountValue < 1 || amountValue > 100) {
    spanMessage.textContent = "Amount must be between 1 and 100!";
    spanMessage.style.color = "blue";
    inputStart.value = "";
    return;
  }
  inputStart.value = "";
  createBoxes(amountValue);
  spanMessage.textContent = "";
});

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let dimensions = 30;
  const boxesDone = [];
  for (let i = 0; i < amount; i++) {
    const boxMade = document.createElement("div");
    boxMade.style.width = `${dimensions}px`;
    boxMade.style.height = `${dimensions}px`;
    boxMade.style.backgroundColor = getRandomHexColor();
    dimensions += 10;
    boxesDone.push(boxMade);
  }
  destroyBoxes();
  boxesDiv.append(...boxesDone);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
