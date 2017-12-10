    var letterC = [4];
	var numberC = [4];

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
	var z = document.getElementById("turn");
	z.style.display = "block";
	audio.play();
	var show = document.getElementsByTagName("main")[0];
	show.style.display = "block";
}

function submitBoxValue(value)
{
	alert(value);
}

function flyPlane() {
	var plane = document.getElementById("jet");
	plane.style.display = "block";
	plane.style.animationName = "fly";
	var audio = document.getElementsByTagName("audio")[3]
	setTimeout(function() { audio.play(); }, 500);
	setTimeout(function() { byePlane(); }, 2000);
}

function flyPlane2() {
	var plane = document.getElementById("jet2");
	plane.style.display = "block";
	plane.style.animationName = "fly2";
	var audio = document.getElementsByTagName("audio")[3]
	setTimeout(function() { audio.play(); }, 500);
	setTimeout(function() { byePlane(); }, 2000);
}

function byePlane() {
	var plane = document.getElementById("jet");
	plane.style.display = "none";
	var plane2 = document.getElementById("jet2");
	plane2.style.display = "none";
}

function aiTurn() {
	var image = document.getElementById("imgBorder");
	image.src="/assets/theirTurn.jpg";
	
	var text = document.getElementById("turnText");
	text.textContent="AI's Turn";
	text.style.color="red";
}

function yourTurn() {
	var image = document.getElementById("imgBorder");
	image.src="/assets/yourTurn.gif";
	
	var text = document.getElementById("turnText");
	text.textContent="Your Turn";
	text.style.color="black";
}

function putShipsOnPage()
{
	letterC = [0,0,5];
	numberC = [0,9,9];
	direction = [1,2,1];
	var size = 0;
			
	for(int i = 0; i < 7; i++)
	{
		if(i == 0)
			size = 5;
		else if (i == 1 || i == 2)
			size = 4;
		else if (i == 3 || i == 4)
			size = 3;
		else if (i == 5 || i == 6)
			size = 2;
		for(var j = 0; j < size; j++)
		{
		   if(direction[i] == 1)
		   turnsBoxBlack("box" + (letterC[i]+j) + numberC[i]);
		   else if(direction[i] == 2)
		   turnsBoxBlack("box" + (letterC[i]) + (numberC[i]-j));
		}
	}
}

function turnBoxBlack(boxID)
{
	
	
}
function validate() {
	
	
	var letter1 = document.getElementById("letterCoord1").value;
	var letter2 = document.getElementById("letterCoord2").value;
	var letter3 = document.getElementById("letterCoord3").value;
	var letter4 = document.getElementById("letterCoord4").value;
	var letter5 = document.getElementById("letterCoord5").value;
	var letter6 = document.getElementById("letterCoord6").value;
	var letter7 = document.getElementById("letterCoord7").value;
	var number1 = document.getElementById("numberCoord1").value;
	var number2 = document.getElementById("numberCoord2").value;
	var number3 = document.getElementById("numberCoord3").value;
	var number4 = document.getElementById("numberCoord4").value;
	var number5 = document.getElementById("numberCoord5").value;
	var number6 = document.getElementById("numberCoord6").value;
	var number7 = document.getElementById("numberCoord7").value;

	var direction1V = document.getElementById("shipDirection1V").checked;
	var direction1H = document.getElementById("shipDirection1H").checked;
	var direction2V = document.getElementById("shipDirection2V").checked;
	var direction2H = document.getElementById("shipDirection2H").checked;
	var direction3V = document.getElementById("shipDirection3V").checked;
	var direction3H= document.getElementById("shipDirection3H").checked;
	var direction4V = document.getElementById("shipDirection4V").checked;
	var direction4H = document.getElementById("shipDirection4H").checked;
	var direction5V = document.getElementById("shipDirection5V").checked;
	var direction5H = document.getElementById("shipDirection5H").checked;
	var direction6V = document.getElementById("shipDirection6V").checked;
	var direction6H = document.getElementById("shipDirection6H").checked;
	var direction7V = document.getElementById("shipDirection7V").checked;
	var direction7H = document.getElementById("shipDirection7H").checked;


	var number = [number1, number2, number3, number4, number5, number6, number7];
	var letterChar = [letter1, letter2, letter3, letter4, letter5, letter6, letter7];
	var directionV = [direction1V, direction2V, direction3V, direction4V, direction5V, direction6V, direction7V];
	var directionH = [direction1H, direction2H, direction3H, direction4H, direction5H, direction6H, direction7H];
	

	
	
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
		
		//direction validation
	for(var i = 0; i < 7; i++)
	{
		if(directionV[i] == false && directionH[i] == false)
		    {
		    	//Direction Validation Failed
		    	validation = false;
		    	alert("You did not choose a direction for ship " + (i+1) + "!");
		    }
	}
	
	//IN DEVELOPMENT... FOR COLLISION VALIDATION
	for(var i = 0; i < 7; i++)
		{
			if(letterChar[i] == 'A' || letterChar[i] == 'a')
				letter[i] = 0;
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
			
		}
		

		
	
	var x = createGridArray();
	var msg = "";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= x[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
	var j = 0;
	for (var i = 0; i < 7; i++)
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
			
			j++;
		}
		
		var msg = "";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= x[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
		
		
	
	
	
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

function addPlayerShipsToBattlefield()
{
	
}

function generateBotShips()
{
	var x = createGridArray();
	 letterC = [0,0,0,0,0,0,0];
     numberC = [0,0,0,0,0,0,0];
	var direction = [0,0,0,0,0,0,0];
	var i;
	var size;
			for(i = 0; i < 7; i++)
			{
				alert("iteration" + (i+1));
				generateCoords(letterC, numberC, i, x, direction);
			}
			
}

function generateCoords(letterC, numberC, i, x, direction)
{
  
		var size = 0;
		
		if(i == 0)
			size = 5;
		else if (i == 1 || i == 2)
			size = 4;
		else if (i == 3 || i == 4)
			size = 3;
		else if (i == 5 || i == 6)
			size = 2;
		
		
			letterC[i] = Math.floor((Math.random() * 9) + 0);
			numberC[i] = Math.floor((Math.random() * 9) + 0);
			direction[i] = Math.floor((Math.random() * 2) + 1);
		    
		    alert(letterC[i] + " " + numberC[i] + " " + direction[i] + " " + i);	
			//1 is vertical and 2 is horizontal
			
			if(i==0)
			{
				if(direction[i] == 1)
				{
					
					for(var s = 2; s <= 5; s++)
	
					{
						if((letterC[i]+s-1)<=9)
						{
							for(var j = 1; j < s; j++)
								x[letterC[i]+j][numberC[i]] = 1;
						}
						else
						{
							//does not fit in grid
							generateCoords(letterC, numberC, i, x, direction);
						}
					}
				}
				
				else //if(direction[i] == 2)
				{
					alert("loopingsdas for direction 2");
					
						for( s = 2; s <= 5; s++)					
						{
							alert("inside if");
						if(numberC[i]-s-l>= 0)
						{ 
							alert("inside if");
							for(var j = 1; j <= s; j++)
							{
							alert("looping for direction 2");
								x[letterC[i]][numberC[i]-j] = 1;
							}
						}
						else
						{
							//does not fit in grid
							alert("rip");
							generateCoords(letterC, numberC, i, x, direction);
						}
						alert("loopingsdas for direction asdsad2");
					    }
				
				}
				
			}
			else
			{
		        
		     if(x[numberC[i]][letterC[i]] == 0)
		     {
				if(direction[i] == 1)
				{
					for(var s = 2; s <= 5; s++)
					{
						if((letterC[i]+s-1)<=9)
						{
							for(var j = 1; j < s; j++)
							{
								if(x[letterC[i]+j][numberC[i]] == 0)
								x[letterC[i]+j][numberC[i]] = 1;
								else
								generateCoords(letterC, numberC, i, x, direction);
							}
						}
						else
						{
							//does not fit in grid
							generateCoords(letterC, numberC, i, x, direction);
						}
					}
				}
			
				
				else //if(direction[i] == 2)
				{
					for(var s = 2; s <= 5; s++)
					{
						if((numberC[i]-s-l)>= 0)
						{
							alert("looping for direction 2");
							for(var j = 1; j < s; j++)
							{
								if(x[letterC[i]][(numberC[i]-j)] == 0)
								x[letterC[i]][(numberC[i]-j)] = 1;
								else
								{
										alert("meh");
								generateCoords(letterC, numberC, i, x, direction);
								}
							}
						}
						else
						{
							//does not fit in grid
							generateCoords(letterC, numberC, i, x, direction);
						}
					}
				
				}
			//	x[letterC[i]][numberC[i]] = 1;
		     }
		     else
		    	generateCoords(letterC, numberC, i, x, direction);
				
			}
			
//TESTING BELOW		
	var msg = "";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= x[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
		
		var msg2 = "";
		for(var i = 0; i < 7; i++)
		{
			msg2+= letterC[i] + " " + numberC[i] + "\n";
		}
	alert(msg2);
}

function test()
{
	
	for(var s = 2; s <= 5; s++)
		{
				if(letterC[i+(s-1)]<=9)
						{
							for(var j = 1; j <= s; j++)
								if(x[letterC[i+(s-1)]][numberC[i]] == 0)
								x[letterC[i+(s-1)]][numberC[i]] = 1;
								else
								generateCoords(letterC, numberC, i, x, direction);
						}
						else
						{
							//does not fit in grid
							generateCoords(letterC, numberC, i, x, direction);
						}
		}
}
