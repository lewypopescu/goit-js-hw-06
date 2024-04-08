const categoriesP = document.querySelector("#categories");
console.log("Number of categories:", categoriesP.children.length);

const firstElementC = categoriesP.firstElementChild;
console.log("Category:", firstElementC.firstElementChild.textContent);
const firstElementLiTotal = firstElementC.querySelector("ul");
console.log("Elements:", firstElementLiTotal.children.length);

const secondElementC = firstElementC.nextElementSibling;
console.log("Category:", secondElementC.firstElementChild.textContent);
const secondElementLiTotal = secondElementC.querySelector("ul");
console.log("Elements:", secondElementLiTotal.children.length);

const lastElementC = categoriesP.lastElementChild;
console.log("Category:", lastElementC.firstElementChild.textContent);
const lastElementLiTotal = lastElementC.querySelector("ul");
console.log("Elements:", lastElementLiTotal.children.length);
