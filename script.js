// Header scroll effect
const bottomHeader = document.querySelector(".bottom-header");
window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		bottomHeader.classList.add("scrolled");
	} else {
		bottomHeader.classList.remove("scrolled");
	}
});

// Mobile menu handling
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.add("active");
	hamburger.style.display = "none";
	closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
	navLinks.classList.remove("active");
	closeMenu.style.display = "none";
	hamburger.style.display = "block";
});

// Enhanced scroll to top
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		scrollToTopButton.classList.add("visible");
	} else {
		scrollToTopButton.classList.remove("visible");
	}
});

scrollToTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll animations for cards
const observerOptions = {
	threshold: 0.2,
	rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		}
	});
}, observerOptions);

// Observe elements for animation
document
	.querySelectorAll(".faculty-card, .achievement-card, .batch-card")
	.forEach((el) => {
		observer.observe(el);
	});
