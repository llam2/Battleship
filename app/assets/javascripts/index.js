window.onload = function() {
 
};

function playclip() {

var audio = document.getElementsByTagName("audio")[1];
audio.volume=.5;
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
audio.volume=.5;
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
audio.volume=.5;
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
audio.volume=.5;
audio.play();

}



