var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleContentsNavigation);
hamburger.addEventListener("keydown", function(event) {
	if (event.keyCode === 13 || event.keyCode === 32) {
		toggleContentsNavigation();
	}
});

var navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", toggleLargeContentsNavigation);
navToggle.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		toggleLargeContentsNavigation();
	}
});

var toggleClose = document.getElementById("toggle-close");
toggleClose.addEventListener("click", closeNavigation);
toggleClose.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		closeNavigation();
	}
});

function closeNavigation() {
	var toggleContents = document.getElementById("toggle-contents");
	toggleContents.style.display = "none";
}

function toggleContentsNavigation() {
	var contents = document.getElementById("contents");

	if (Array.from(contents.classList).indexOf("contents-open") === -1) {
		contents.classList.add("contents-open");
	} else {
		contents.classList.remove("contents-open");
	}
}

function toggleLargeContentsNavigation() {
	var toggleContents = document.getElementById("toggle-contents");

	if (toggleContents.style.display === "block") {
		toggleContents.style.display = "none"
	} else {
		toggleContents.style.display = "block"
	}
}