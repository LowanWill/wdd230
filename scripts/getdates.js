const d = new Date();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${new Date().toLocaleString("default", "long")}`;
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
copyright.innerHTML = `© ${new Date().getFullYear()}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//page visits
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
