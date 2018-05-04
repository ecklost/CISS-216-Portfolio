function showPage() {
	var labNum;
	labNum = document.getElementById("numBox").value;
	if (labNum > 11) {
		alert("You have selected a lab number that is not valid. Only 1-11 are acceptable.");
	}
		else if (labNum < 1) {
			alert("You have selected a lab number that is not valid. Only 1-11 are acceptable.");
		}
			else {
				window.open("Lab" + labNum + "/lab" + labNum + ".html");
			}
}