
// --- Menu hamburgesa xp (para móvil) ---

var botonMenu = document.getElementById("navToggle");
var listaLinks = document.getElementById("navLinks");

botonMenu.addEventListener("click", function () {
  listaLinks.classList.toggle("open");
});



var links = listaLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    listaLinks.classList.remove("open");
  });
});

/* boton de idioma */
const langBtn = document.getElementById("langBtn");

if (langBtn) {

    let currentLang = localStorage.getItem("language") || "es";

    updateLanguage();

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";

        localStorage.setItem("language", currentLang);

        updateLanguage();
    });

    function updateLanguage() {

        const spanish = document.querySelectorAll(".es");
        const english = document.querySelectorAll(".en");

        if (currentLang === "en") {

            spanish.forEach(el => el.style.display = "none");
            english.forEach(el => el.style.display = "block");

            langBtn.textContent = "Español";

        } else {

            spanish.forEach(el => el.style.display = "block");
            english.forEach(el => el.style.display = "none");

            langBtn.textContent = "English";
        }
    }
}