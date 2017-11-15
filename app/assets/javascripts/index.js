window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	audio.volume = .5;
	audio2.volume = .5;
	slide();
};


function playclip() {

	var audio = document.getElementsByTagName("audio")[1];
	audio.play();

};

function onePlayer() {

	var audio = document.getElementsByTagName("audio")[2];
	var y = document.getElementById("options");
	y.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	var a = document.getElementById("shipWindow");
	a.style.display = "block";
	var b = document.getElementById("divGrid2");
	b.style.display = "block";
	/*var x = document.getElementById("wholeGrid");
	x.style.display = "block";*/
	var start = document.getElementById("nameForm");
	start.style.display = "none";
	audio.play();

};

function options() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "none";
	var a = document.getElementById("shipWindow");
	a.style.display = "none";
	var b = document.getElementById("divGrid2");
	b.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "block";
	var start = document.getElementById("nameForm");
	start.style.display = "none";
	audio.play();

};

function scores() {

	var audio = document.getElementsByTagName("audio")[2];
	var x = document.getElementById("wholeGrid");
	x.style.display = "none";
	var y = document.getElementById("options");
	y.style.display = "none";
	var a = document.getElementById("shipWindow");
	a.style.display = "none";
	var z = document.getElementById("scores");
	z.style.display = "block";
	var b = document.getElementById("divGrid2");
	b.style.display = "none";
	var start = document.getElementById("nameForm");
	start.style.display = "none";
	audio.play();

};

function musicToggle(cb) {

	/*alert("Clicked, new value = " + cb.checked);*/
	var audio = document.getElementById("backgroundMusic");

	if (cb.checked == true){
		audio.volume = 0;
	}
	else if (cb.checked == false){
		audio.volume = 1;
	}

};

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
};

function start() {

/*alert("Hi");*/
	var audio2 = document.getElementsByTagName("audio")[2];
	audio2.play();

	var show = document.getElementsByTagName("main")[0];
	show.style.display = "block";

	var navClass1 = document.getElementsByClassName("navigation")[0];
	navClass1.style.animationName = "fadeIn";

	var navClass2 = document.getElementsByClassName("navigation")[1];
	navClass2.style.animationName = "fadeIn"

	var navClass3 = document.getElementsByClassName("navigation")[2];
	navClass3.style.animationName = "fadeIn"

	var mainTag = document.getElementsByTagName("main")[0];
	mainTag.style.animationName = "fadeIn";

	var button1 = document.getElementsByClassName("navigation")[0];
	button1.style.display = "inline-block";

	var button2 = document.getElementsByClassName("navigation")[1];
	button2.style.display = "inline-block";

	var button3 = document.getElementsByClassName("navigation")[2];
	button3.style.display = "inline-block";

	var start = document.getElementById("start");
	start.style.display = "none";

	var start = document.getElementById("nameForm");
	start.style.display = "block";


	var titleClass = document.getElementsByClassName("title")[0];
	titleClass.style.animationName = "shrink";
};

function slide() {
	var titleClass = document.getElementsByClassName("title")[0];
	titleClass.style.animationName = "slide";
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



