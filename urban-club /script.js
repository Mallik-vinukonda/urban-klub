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

// Scroll to Top Button
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		scrollToTopButton.style.display = "block";
	} else {
		scrollToTopButton.style.display = "none";
	}
});

scrollToTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
