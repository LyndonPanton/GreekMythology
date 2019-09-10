window.onload = function(event) {
	var copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();
};