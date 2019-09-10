var hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleContentsNavigation);
hamburger.addEventListener("keydown", function(event) {
	if (event.keyCode === 13 || event.keyCode === 32) {
		toggleContentsNavigation();
	}
});

function toggleContentsNavigation() {
	var contents = document.getElementById("contents");

	if (Array.from(contents.classList).indexOf("contents-open") === -1) {
		contents.classList.add("contents-open");
	} else {
		contents.classList.remove("contents-open");
	}
}