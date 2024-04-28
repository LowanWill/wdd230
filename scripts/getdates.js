const d = new Date();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${new Date().toLocaleString("default", "long")}`;
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
copyright.innerHTML = `© ${new Date().getFullYear()}`;