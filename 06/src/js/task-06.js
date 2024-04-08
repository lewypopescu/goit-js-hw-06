const inputText = document.querySelector("#validation-input");
const inputLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", () => {
  if (inputText.value.length == inputLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
