window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	audio.volume = .5;
	audio2.volume = .5;
};


function playclip() {

	var audio = document.getElementsByTagName("audio")[1];
	audio.play();

};

function shipSubmit() {
	var divGrid2 = document.getElementById("divGrid2");
	divGrid2.style.display = "none";
	var shipWindow = document.getElementById("shipWindow");
	shipWindow.style.display = "none";
	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "block";
	audio.play();
}




