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
	
	var letter1 = document.getElementById("letterCoord1").value;
	var letter2 = document.getElementById("letterCoord2").value;
	var letter3 = document.getElementById("letterCoord3").value;
	var letter4 = document.getElementById("letterCoord4").value;
	var letter5 = document.getElementById("letterCoord5").value;
	var letter6 = document.getElementById("letterCoord6").value;
	var letter7 = document.getElementById("letterCoord7").value;
	var number1 = document.getElementById("numberCoord1").value;
	var number2 = document.getElementById("numberCoord2").value;
	var number3 = document.getElementById("numberCoord3").value
	var number4 = document.getElementById("numberCoord4").value;
	var number5 = document.getElementById("numberCoord5").value;
	var number6 = document.getElementById("numberCoord6").value;
	var number7 = document.getElementById("numberCoord7").value;
	
	var number = [number1, number2, number3, number4, number5, number6, number7];
	var letterChar = [letter1, letter2, letter3, letter4, letter5, letter6, letter7];
	var letter = [0,0,0,0,0,0,0];
	
	var validation = true;
	
	for(var i = 0; i < 7; i++)
		{
		if(!(/^([A-Ja-j])$/.test(letterChar[i])))
		{
			alert("You have one or more invalid letter Coordinates! ReEnter for the " + (i+1) + "ship!");
			alert(letterChar[i])
			//abort validation
			validation = false;
		}
		if(!(/^([0-9])$/.test(number[i])))
		{
			alert("You have one or more invalid number Coordinates! ReEnter for the " + (i+1) + "ship!");
			//abort validation
			validation = false;
		}
		}
	
	//IN DEVELOPMENT... FOR COLLISION VALIDATION
	for(var i = 0; i < 7; i++)
		{
			if(letterChar[i] == 'A' || letterChar[i] == 'a')
			{
				letter[i] = 0;
				//alert("OI");
			}
			else if(letterChar[i] == 'B' || letterChar[i] == 'b')
				letter[i] = 1;
			else if(letterChar[i] == 'C' || letterChar[i] == 'c')
				letter[i] = 2;
			else if(letterChar[i] == 'D' || letterChar[i] == 'd')
				letter[i] = 3;
			else if(letterChar[i] == 'E' || letterChar[i] == 'e')
				letter[i] = 4;
			else if(letterChar[i] == 'F' || letterChar[i] == 'f')
				letter[i] = 5;
			else if(letterChar[i] == 'G' || letterChar[i] == 'g')
				letter[i] = 6;
			else if(letterChar[i] == 'H' || letterChar[i] == 'h')
				letter[i] = 7;
			else if(letterChar[i] == 'I' || letterChar[i] == 'i')
				letter[i] = 8;
			else if(letterChar[i] == 'J' || letterChar[i] == 'j')
				letter[i] = 9;
			else
			{
			//	alert("Invalid letter input!");
			}
		}
		

		
	
	var x = createGridArray();
	
	for (var i = 0; i < 10; i++)
		for (var j = 0; j < 10; j++)
		{
			if(j == 0 && i == 0)
			              {
			              x[letter[i], number[j]] = 1;
			             // alert(x[letter[i], number[j]])
			              }
					for (var p = 0; p < 10; p++)
						for (var q = 0; q < 10; q++)
						{
						 
							if(x[p][q] == 0)
								if(p == letter[i] && q == number[i])
								x[letter[i]][number[j]] = 1;
							else
							{
								if(p == letter[i] && q == number[i])
								alert("One or more of your ships are colliding! Please Fix!" );
								
							}
						}
			
		}
	
	
	
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

function sendScoresToRails()
{
	//----------------------
	var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

	var score = 12343124;
	jQuery.ajax({
  data: 'score=' + score,
  dataType: 'script',
  type: 'post',
  url: "/scores/create"
    });

	alert("suhh");
    var score = 12345;
if (score){
    //Passing mdate and phone variables to rails controller(book_date & phone)
    window.open("localhost:3000//controller/create?scores="+score,"_self")
}
else
{
    alert("Cancelled");
}
//-----------------------
}

