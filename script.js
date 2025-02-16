// Set the current year in the footer
const currentYearElem = document.getElementById("currentYear");
if (currentYearElem) {
  currentYearElem.textContent = new Date().getFullYear();
}
