const loginSubmit = document.querySelector(".login-form");

loginSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailLogin = event.target.elements.email.value;
  const passwordLogin = event.target.elements.password.value;

  if (emailLogin === "" || passwordLogin === "") {
    alert("Toate câmpurile trebuie completate!");
  }
  console.log(`Data = {Email: ${emailLogin}, Password: ${passwordLogin}}`);
  event.target.reset();
});
