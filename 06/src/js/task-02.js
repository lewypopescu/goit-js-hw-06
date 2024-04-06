const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsLi = ingredients.forEach((ingredient) => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  createLi.className = "item";
  ingredientsList.appendChild(createLi);
  console.log(createLi);
});
