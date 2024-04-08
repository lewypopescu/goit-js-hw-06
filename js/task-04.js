let counterValue = 0;
const finalValue = document.querySelector("#value");

const incrementAction = document.querySelector(
  `#counter button[data-action="increment"]`
);
const decrementAction = document.querySelector(
  `#counter button[data-action="decrement"]`
);

const plusButton = () => {
  counterValue += 1;
  finalValue.textContent = counterValue;
};

const minusButton = () => {
  counterValue -= 1;
  finalValue.textContent = counterValue;
};

incrementAction.addEventListener("click", plusButton);

decrementAction.addEventListener("click", minusButton);
