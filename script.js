// Thembela Memela portfolio interactions — no frameworks required.

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.querySelector(".theme-label");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// Set the year automatically so the footer stays current.
document.getElementById("year").textContent = new Date().getFullYear();

// Theme preference is stored locally in the visitor's browser.
function setTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === "light";
  themeIcon.textContent = isLight ? "☾" : "☼";
  themeLabel.textContent = isLight ? "Dark mode" : "Light mode";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  try {
    localStorage.setItem("thembela-portfolio-theme", theme);
  } catch (error) {
    // The theme still works if browser storage is unavailable.
  }
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("thembela-portfolio-theme");
} catch (error) {
  // Continue with the default theme if storage is unavailable.
}
setTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

// Mobile navigation opens and closes with the menu button.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Frontend-only contact form: prepare a message in the visitor's email app.
// It does not send data to a server or store submissions.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = "Please complete all fields before continuing.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(
    `Hi Thembela,\n\n${message}\n\nKind regards,\n${name}\n${email}`
  );
  formFeedback.textContent = "Opening your email app. If it does not open, email memelathembela232@gmail.com directly.";
  window.location.href = `mailto:memelathembela232@gmail.com?subject=${subject}&body=${body}`;
});
