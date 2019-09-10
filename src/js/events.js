window.onload = function(event) {
	function toggleContentsNavigation() {
		const contents = document.getElementById("contents");

		if (Array.from(contents.classList).indexOf("contents-open") === -1) {
			contents.classList.add("contents-open");
		} else {
			contents.classList.remove("contents-open");
		}
	}
};