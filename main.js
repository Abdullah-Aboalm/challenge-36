let aFeatures = document.querySelector("#features");
let ulFeatures = document.querySelector(".drop-menu-features");
let arrowFeatures = document.querySelector("#arrow-features");

let aCompany = document.querySelector("#company");
let ulCompany = document.querySelector(".drop-menu-company");
let arrowCompany = document.querySelector("#arrow-company");

let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");
let overlay = document.querySelector(".overlay");
let mobileMenu = document.querySelector(".mobile-nav");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    aFeatures.addEventListener("click", () => {
      arrowFeatures.classList.toggle("active");
      if (arrowFeatures.classList.contains("active")) {
        ulFeatures.style.visibility = "visible";
        ulFeatures.style.opacity = "1";
        ulFeatures.style.maxHeight = "100%";
        ulFeatures.style.padding = "5px 10px";
      } else {
        ulFeatures.style.visibility = "hidden";
        ulFeatures.style.opacity = "0";
        ulFeatures.style.maxHeight = "0";
        arrowFeatures.style.transition = ".3s";
        ulFeatures.style.padding = "0";
      }
    });

    aCompany.addEventListener("click", () => {
      arrowCompany.classList.toggle("active");
      if (arrowCompany.classList.contains("active")) {
        ulCompany.style.visibility = "visible";
        ulCompany.style.opacity = "1";
        ulCompany.style.maxHeight = "100%";
        ulCompany.style.padding = "5px 10px";
      } else {
        ulCompany.style.visibility = "hidden";
        ulCompany.style.opacity = "0";
        ulCompany.style.maxHeight = "0";
        ulCompany.style.padding = "0";
        arrowCompany.style.transition = ".3s";
      }
    });
    menuOpen.addEventListener("click", () => {
      overlay.style.display = "block";
      mobileMenu.style.display = "flex";
    });

    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      mobileMenu.style.display = "none";
    });

    menuClose.addEventListener("click", () => {
      overlay.style.display = "none";
      mobileMenu.style.display = "none";
    });
  } else {
    aFeatures.addEventListener("click", () => {
      arrowFeatures.classList.toggle("active");
      if (arrowFeatures.classList.contains("active")) {
        ulFeatures.style.visibility = "visible";
        ulFeatures.style.opacity = "1";
      } else {
        ulFeatures.style.visibility = "hidden";
        ulFeatures.style.opacity = "0";
        arrowFeatures.style.transition = ".3s";
      }
    });
    aCompany.addEventListener("click", () => {
      arrowCompany.classList.toggle("active");
      if (arrowCompany.classList.contains("active")) {
        ulCompany.style.visibility = "visible";
        ulCompany.style.opacity = "1";
      } else {
        ulCompany.style.visibility = "hidden";
        ulCompany.style.opacity = "0";
        arrowCompany.style.transition = ".3s";
      }
    });
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
