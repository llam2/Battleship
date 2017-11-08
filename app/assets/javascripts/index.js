window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	audio.volume = .5;
	audio2.volume = .5;
};


function playclip() {

	var audio = document.getElementsByTagName("audio")[1];
	audio.play();

}

function onePlayer() {

	var audio = document.getElementsByTagName("audio")[2];
	var y = document.getElementById("options");
	y.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	var x = document.getElementById("wholeGrid");
	x.style.display = "block";
	audio.play();

}

function options() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "block";
	audio.play();

}

function scores() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "block";
	audio.play();

}

function musicToggle(cb) {

	/*alert("Clicked, new value = " + cb.checked);*/
	var audio = document.getElementById("backgroundMusic");

	if (cb.checked == true){
		audio.volume = 0;
	}
	else if (cb.checked == false){
		audio.volume = 1;
	}

}

function soundFXToggle(cb) {

	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];

	if (cb.checked == true){
		audio.volume = 0;
		audio2.volume = 0;
	}
	else if (cb.checked == false){
		audio.volume = .5;
		audio2.volume = .5;
	}

}



