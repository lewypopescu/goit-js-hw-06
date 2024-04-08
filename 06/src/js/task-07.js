const inputFontSize = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

const changeFontSize = (a) => {
  textChange.style.fontSize = `${a.target.value}px`;
};

inputFontSize.addEventListener("input", changeFontSize);
