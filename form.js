// Course and Branch mapping
const courseOptions = {
	ecet: [
		"Civil Engineering",
		"Mechanical Engineering",
		"Electrical Engineering",
		"Electronics & Communication",
		"Computer Science",
	],
	emcet: ["MPC", "BiPC"],
	core: ["Mathematics", "Physics", "Chemistry"],
};

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Get form elements
	const courseSelect = document.getElementById("course");
	const branchSelect = document.getElementById("branch");
	const registrationForm = document.getElementById("courseRegistration");

	if (courseSelect && branchSelect) {
		// Update branch options based on course selection
		courseSelect.addEventListener("change", function () {
			const selectedCourse = this.value;

			// Clear existing options
			branchSelect.innerHTML = '<option value="">Choose your branch</option>';

			// Enable/disable branch select based on course selection
			if (selectedCourse) {
				branchSelect.disabled = false;

				// Add new options based on selected course
				if (courseOptions[selectedCourse]) {
					courseOptions[selectedCourse].forEach((branch) => {
						const option = document.createElement("option");
						option.value = branch.toLowerCase().replace(/\s+/g, "-");
						option.textContent = branch;
						branchSelect.appendChild(option);
					});
				}
			} else {
				branchSelect.disabled = true;
			}
		});
	}

	// Form submission handling
	if (registrationForm) {
		registrationForm.addEventListener("submit", function (e) {
			e.preventDefault();

			// Validate Google Drive link
			const driveLinkInput = document.getElementById("driveLink");
			const driveLink = driveLinkInput.value;

			if (!driveLink.includes("drive.google.com")) {
				alert("Please enter a valid Google Drive link");
				driveLinkInput.focus();
				return;
			}

			// Validate course and branch selection
			const selectedCourse = courseSelect.value;
			const selectedBranch = branchSelect.value;

			if (!selectedCourse) {
				alert("Please select a course");
				courseSelect.focus();
				return;
			}

			if (!selectedBranch) {
				alert("Please select a branch");
				branchSelect.focus();
				return;
			}

			// Collect form data
			// Collect form data
			const formData = {
				Name: document.getElementById("name").value, // Capitalized
				Email: document.getElementById("email").value, // Capitalized
				Phone: document.getElementById("phone").value, // Capitalized
				Course: selectedCourse, // Capitalized
				Branch: selectedBranch, // Capitalized
				DriveLink: driveLink, // Capitalized
				Message: document.getElementById("message").value, // Capitalized
			};

			// Log form data (replace with your actual form submission logic)
			console.log("Form submitted:", formData);

			// Show success message
			alert("Registration submitted successfully!");
			this.reset();

			// Reset branch select
			branchSelect.innerHTML = '<option value="">Choose your branch</option>';
			branchSelect.disabled = true;
		});
	}

	// Add form validation styles
	const formInputs = registrationForm.querySelectorAll(
		"input, select, textarea"
	);
	formInputs.forEach((input) => {
		input.addEventListener("blur", function () {
			if (this.value) {
				this.classList.add("touched");
			} else {
				this.classList.remove("touched");
			}
		});
	});
});
