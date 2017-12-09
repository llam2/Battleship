window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	var audio3 = document.getElementsByTagName("audio")[3];
	audio.volume = .3;
	audio2.volume = .3;
	audio3.volume = .8;
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
	var y = document.getElementById("wholeGrid2");
	y.style.display = "block";
	audio.play();
	var show = document.getElementsByTagName("main")[0];
	show.style.display = "block";
}

function flyPlane() {
	var plane = document.getElementById("jet");
	plane.style.display = "block";
	plane.style.animationName = "fly";
	var audio = document.getElementsByTagName("audio")[3]
	setTimeout(function() { audio.play(); }, 500);
	setTimeout(function() { byePlane(); }, 2000);
}

function byePlane() {
	var plane = document.getElementById("jet");
	plane.style.display = "none";	
}

function validate() {
	alert("button works");
	var letter1 = document.getElementById("letterCoord1");
	var letter2 = document.getElementById("letterCoord2");
	var letter3 = document.getElementById("letterCoord3");
	var letter4 = document.getElementById("letterCoord4");
	var letter5 = document.getElementById("letterCoord5");
	var letter6 = document.getElementById("letterCoord6");
	var letter7 = document.getElementById("letterCoord7");
	var number1 = document.getElementById("numberCoord1");
	var number2 = document.getElementById("numberCoord2");
	var number3 = document.getElementById("numberCoord3");
	var number4 = document.getElementById("numberCoord4");
	var number5 = document.getElementById("numberCoord5");
	var number6 = document.getElementById("numberCoord6");
	var number7 = document.getElementById("numberCoord7");
}

function createGridArray()
{
     var x = new Array(10);
  for (var i = 0; i < 10; i++) {
    x[i] = new Array(10);
  }	
  
  for (var i = 0; i < 10; i++)
		for (var j = 0; j < 10; j++)
		{
			x[i][j] = 0;
		}
  
  return x;
}



