// Scroll-based animation trigger
document.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.animationPlayState = "running";
    }
  });
});

// Login button interactivity
const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Login functionality coming soon! 🔐");
  });
}

// Get Started button interactivity
const getStartedBtn = document.querySelector(".hero .cta");
if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    alert("Welcome to EZ English! Start your learning journey now. 🎓");
    document.querySelector(".languages").scrollIntoView({ behavior: "smooth" });
  });
}

// French Lesson button
const frenchBtn = document.querySelector(".languages .cta");
if (frenchBtn) {
  frenchBtn.addEventListener("click", () => {
    alert("French Lesson:\n\n✨ Bonjour = Hello\n✨ Je m'appelle = My name is\n✨ Comment ça va? = How are you?\n\nGreat job! Keep learning! 🇫🇷");
  });
}

// Math Lesson button
const mathBtn = document.querySelector(".math .cta");
if (mathBtn) {
  mathBtn.addEventListener("click", () => {
    alert("Math Lesson:\n\n📚 Basic Arithmetic: 2 + 2 = 4\n📚 Fractions: ½ = 0.5\n📚 Geometry: Area = length × width\n📚 Algebra: x + 5 = 10, so x = 5\n\nExcellent progress! 🧮");
  });
}

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      alert("This section is coming soon! Stay tuned. 🚀");
    }
  });
});

// Page load animation
window.addEventListener("load", () => {
  console.log("✨ EZ English website loaded successfully!");
});