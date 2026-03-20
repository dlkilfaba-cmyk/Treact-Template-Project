console.log("JavaScript is connected.");

const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {
	getStartedBtn.addEventListener("click", () => {
		console.log("Get Started button clicked.");
	});
}
