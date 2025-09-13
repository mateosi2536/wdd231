const lastMod = document.getElementById("lastModified");
lastMod.textContent = `Última modificación: ${document.lastModified}`;

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();