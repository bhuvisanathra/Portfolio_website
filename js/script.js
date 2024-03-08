// Toggle Icon NavBar (Icon change jyre Navbar menu khule tyre)
// Menu -> X and X->Menu
// -----------------------------------------------------------------------------------------------------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// How to Change the Active State of NavBar
// -----------------------------------------------------------------------------------------------------------
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky NavBar
  // -----------------------------------------------------------------------------------------------------------
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //Remove Toggle item and Navbar when select link from navbar
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Revel
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: [
    "Student",
    "Frontend Devloper",
    "Fitness Freak",
    "Graphics Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
