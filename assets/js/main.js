// Imports
import Slides from "./slides.js";

// DOM Elements
// Contact from
const contactForm = document.querySelector("#contactForm");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const contactMessage = document.querySelector("#contactMessage");

// Newsletter form
const newsletterForm = document.querySelector("#newsletterForm");
const newsletterEmail = document.querySelector("#newsletterEmail");

// Event Listeners
contactName.addEventListener("change", (event) => {
	validateNameInput(event.target.value, event.target.id);
});
contactEmail.addEventListener("change", (event) => {
	validateEmailInput(event.target.value, event.target.id);
});
contactMessage.addEventListener("change", (event) => {
	validateMessageInput(event.target.value, event.target.id);
});
contactForm.addEventListener("submit", (event) => {
	event.preventDefault();
	let name = validateNameInput(contactName.value, contactName.id);
	let email = validateEmailInput(contactEmail.value, contactEmail.id);
	let message = validateMessageInput(contactMessage.value, contactMessage.id);
	if (name && email && message) {
		event.target.submit();
	}
});

newsletterEmail.addEventListener("change", (event) => {
	validateEmailInput(event.target.value, event.target.id);
});
newsletterForm.addEventListener("submit", (event) => {
	event.preventDefault();
	let email = validateEmailInput(newsletterEmail.value, newsletterEmail.id);
	if (email) {
		event.target.submit();
	}
});

// Functions
function validateNameInput(value, inputName) {
	let input = document.querySelector("#" + inputName);
	let error = document.querySelector("#" + inputName + "Error");
	if (value.length === 0) {
		input.classList.add("errorInput");
		error.innerHTML = "Please enter your name";
		return false;
	} else {
		input.classList.remove("errorInput");
		error.innerHTML = "";
		return true;
	}
}

function validateEmailInput(value, inputName) {
	let input = document.querySelector("#" + inputName);
	let error = document.querySelector("#" + inputName + "Error");
	if (value.length === 0) {
		input.classList.add("errorInput");
		error.innerHTML = "Please enter your email";
		return false;
	} else if (!validateEmail(value)) {
		input.classList.add("errorInput");
		error.innerHTML = "Please enter a valid email";
		return false;
	} else {
		input.classList.remove("errorInput");
		error.innerHTML = "";
		return true;
	}
}

function validateMessageInput(value, inputName) {
	let input = document.querySelector("#" + inputName);
	let error = document.querySelector("#" + inputName + "Error");
	if (value.length === 0) {
		input.classList.add("errorInput");
		error.innerHTML = "Please enter your message";
		return false;
	} else {
		input.classList.remove("errorInput");
		error.innerHTML = "";
		return true;
	}
}

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

new Slides(document.querySelector("#slides"), [
	{
		src: "/assets/img/gallery1.jpg",
		alt: "Wish Stone Building",
		heading: "Wish Stone Building",
		description: "2972 Westheimer Rd. Santa Ana, Illinois",
	},
	{
		src: "/assets/img/gallery2.jpg",
		alt: "Wildstone Infra Hotel",
		heading: "Wildstone Infra Hotel",
		description: "2715 Ash Dr. San Jose, South Dakota",
	},
	{
		src: "/assets/img/gallery3.jpg",
		alt: "Mr. Parkinston's House",
		heading: "Mr. Parkinston's House",
		description: "3517 W. Gray St. Utica, Pennsylvania",
	},
	{
		src: "/assets/img/gallery4.jpg",
		alt: "Oregano Height",
		heading: "Oregano Height",
		description: "2464 Royal Ln. Mesa, New Jersey",
	},
]);
