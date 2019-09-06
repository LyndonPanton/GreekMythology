window.onload = function(event) {
	const copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	const hamburger = document.getElementById("hamburger");
	hamburger.addEventListener("click", function(event) {
		const contents = document.getElementById("contents");
		if (Array.from(contents.classList).indexOf("contents-open") === -1) {
			contents.classList.add("contents-open");
		} else {
			contents.classList.remove("contents-open");
		}
	});
};