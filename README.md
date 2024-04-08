# goit-js-hw-06

Exercițiul 1
Codul HTML conține o listă de categorii ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Scrieți un script care:

1.Va număra și afișa în consolă numărul total de categorii din ul#categories, adică elementele li.item.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

2.Pentru fiecare element li.item din lista ul#categories, va găsi și afișa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).

Ca rezultat, în consolă vor fi afișate astfel de mesaje:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

Exercițiul 2
Codul HTML conține o listă goală ul#ingredients.

<ul id="ingredients"></ul>

În fișierul JavaScript se află o matrice cu următoarele șiruri.

const ingredients = [
"Potatoes",
"Mushrooms",
"Garlic",
"Tomatos",
"Herbs",
"Condiments",
];

Scrieți un script care pentru fiecare element al matricei ingredients:

1.Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().

2.Adăugați numele ingredientului ca conținut text.

3.Adăugați clasa item la element.

4.Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

Exercițiul 3
Scrieți un script care creează o galerie de imagini pe baza unei matrice cu date. HTML-ul are o listă ul.gallery.

1.Folosiți matricea de obiecte images, pentru a crea elementele <img> imbricate în <li>. Pentru a crea marcajul, vor fi de mare ajutor template strings și metoda insertAdjacentHTML().

2.Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
3.Adăugați un stil minim de poziționare a galeriei (flexbox sau grid) prin intermediul claselor CSS.

const images = [
{
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
alt: "White and Black Long Fur Cat",
},
{
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
alt: "Orange and White Koi Fish Near Yellow Koi Fish",
},
{
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
alt: "Group of Horses Running",
},
];

Exercițiul 4
Contorul este format dintr-un tag span și două butoane care, atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

1.Declarați o variabilă counterValue ce va stoca valoarea curentă a contorului și asignați-i valoarea 0 pentru început.
2.Adăugați click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
3.Actualizați interfața cu noua valoare a variabilei counterValue.

Exercițiul 5
Scrieți un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

Exercițiul 6
Scrieți un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

1.Numărul de caractere admis trebuie specificat în atributul data-length.
2.acă este introdus numărul corect de caractere, atunci border-ul devine verde, în caz contrar - roșu.
3.Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și invalid pe care le-am adăugat deja la fișierele sursă ale acestui exercițiu.

#validation-input {
border: 3px solid #bdbdbd;
}

#validation-input.valid {
border-color: #4caf50;
}

#validation-input.invalid {
border-color: #f44336;
}

Exercițiul 7
Scrieți un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

Exercițiul 8
Scrieți un script de control al formularului de login.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

1.Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
2.La trimiterea formularului, pagina nu trebuie să se reîncarce.
3.Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
4.Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
5.Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset.

Exercițiul 9
Scrieți un script care schimbă culorile de fundal al elementului <body>, prin stiluri inline, atunci când se face click pe button.change-color și afișați valoarea culorii în span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

Exercițiul 10 (nu este obligatoriu)
Scrieți un script pentru crearea și ștergerea unei colecții de elemente. Utilizatorul introduce numărul de elemente în input și dă click pe butonul Create, după care colecția este afișată în pagină. Când se dă click pe butonul Destroy, colecția de elemente va fi ștearsă.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Creați o funcție createBoxes(amount), care ia ca parametru un număr. Funcția va crea atâtea <div>-uri câte sunt specificate în amount și le va adăuga la div#boxes.

1.Dimensiunile primului <div> vor fi 30px pe 30px.
2.Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai lat și mai înalt decât cel anterior.
3.Toate elementele trebuie să aibă o culoare de fundal aleatoare în format HEX. Folosiți funcția getRandomHexColor deja existentă pentru a obține o culoare.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes, ștergând astfel toate elementele create.
