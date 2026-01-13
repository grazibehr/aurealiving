window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("heroImg").style.transform = "scale(1)";
  }, 1500);
});

const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

document
  .querySelectorAll("a, button, .gallery-item, .portfolio-item, .service-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".section-label, .section-title, .gold-line, .about-text, .about-images, .service-card, .gallery-item, .portfolio-item, .location-card, .contact-info, .contact-form"
  )
  .forEach((el) => observer.observe(el));

document.querySelectorAll(".service-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll(".gallery-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll(".portfolio-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll(".location-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  const btn = contactForm.querySelector(".btn-primary");
  const originalText = btn.textContent;
  btn.textContent = "Mensagem Enviada!";
  btn.style.background = "#25d366";

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = "";
    contactForm.reset();
  }, 3000);
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");

  if (scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / 700;
  }
});
