const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

window.toggleDarkMode = function () {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);

  const themeChanger = document.querySelector(".theme-changer");
  themeChanger.innerHTML = isDarkMode
    ? `<i class="fa-regular fa-sun"></i>&nbsp;Light Mode`
    : `<i class="fa-regular fa-moon"></i>&nbsp;Dark Mode`;
};

if (isDarkModeEnabled) {
  window.toggleDarkMode();
}
