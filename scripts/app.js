const d = new Date();
const lastUpdated = document.querySelector("#lastUpdated");
lastUpdated.innerHTML = `Last Updated: ${new Date().toLocaleString("default", "long")}`;
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
copyright.innerHTML = `© ${new Date().getFullYear()}`;
