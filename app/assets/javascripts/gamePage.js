    var letterC = [0,0,0,0,0,0,0];
	var numberC = [0,0,0,0,0,0,0];
	var pletterC = [0,0,0,0,0,0,0];
	var pnumberC = [0,0,0,0,0,0,0];
	var direction = [0,0,0,0,0,0,0];
	var pdirection = [0,0,0,0,0,0,0];
	var score = 10011;
	var playerGrid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];
	var botGrid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

var buttonsPressedSplash = 0;
var buttonsPressedSmoke = 0;
var buttonsPressedExplode = 0;

window.onload = function() {
	var audio = document.getElementsByTagName("audio")[1];
	var audio2 = document.getElementsByTagName("audio")[2];
	var audio3 = document.getElementsByTagName("audio")[3];
	audio.volume = .3;
	audio2.volume = .3;
	audio3.volume = .8;
};

function loadingWheel() {
	var load = document.getElementById("loadingWheel");
	load.style.display = "block";
	
}

function transparentBG() {
	var bg = document.getElementById("transparentBG");
	bg.style.display = "block";
	setTimeout(function() { bg.style.display="none"; }, 5000);
}

function explode(ID) {
	alert("explosion is running");
	document.getElementById(ID).setAttribute("class", "explode");
		setTimeout(function() { 
		var explode = document.getElementsByClassName("explode");
		explode[buttonsPressedExplode].style.display = "none";
		buttonsPressedExplode++;
		document.getElementById(ID).setAttribute("class", "clickedBox");
		document.getElementById(ID).setAttribute("class", "smoke");
		alert("works");
	}, 2500);
}

function splash(ID) {
	document.getElementById(ID).setAttribute("class", "splash");
	setTimeout(function() { 
		var splash = document.getElementsByClassName("splash");
		splash[buttonsPressedSplash].style.display = "none";
		buttonsPressedSplash++;
		document.getElementById(ID).setAttribute("class", "clickedBox");
	}, 2500);
	alert(ID);
}

function smoke(ID) {
	alert("smoke is running");
	document.getElementById(ID).setAttribute("class", "smoke");
}

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

function getPlayerGrid()
{
	return playerGrid;
}

function createPlayerGrid()
{
		
	var size = 0;
	for(var i = 0; i < 7; i++)
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
		   {
		   	playerGrid[letterC[i]+j][numberC[i]] = 1;
		 
		   }
		   else if(direction[i] == 2)
		   {
		   	playerGrid[letterC[i]][numberC[i]-j] = 1;
		   }
		}
	}
	
		var msg = "Player Grid:\n";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= playerGrid[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
}


function getBotGrid()
{
	return botGrid;
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

function hideValidation()
{
	var validate = document.getElementById("shipValidate");
	validate.style.display="none";
	var form = document.getElementById("shipForm");
	form.style.display="none";
	var submit = document.getElementById("shipSubmit");
	submit.style.display="block";
}

function putShipsOnPage()
{
	
	addPlayerShipsToBattlefield();
	createPlayerGrid();
	generateBotShips();

	
}

function turnBoxBlack(boxID)
{
	var box = document.getElementById(boxID);
	
	box.style.backgroundColor="Brown";
}

function updatePageWhenPlayerHit(valueID)
{
	
}

function updatePageWhenPlayerMiss(valueID)
{
	
}

function updatePageWhenBotHit(valueID)
{
	
}

function updatePageWhenBotMiss(valueID)
{
	
}

function updateScoreWhenHit(valueID)
{
	score += 2000;
}

function updateScoreWhenMiss()
{
	score -= 300;
}
function updateScoreWhenWin()
{
	score+=10000
}

function startEvents()
{
	
}

function botTurn()
{
	
	//add code for front end visual changes
	aiTurn();
	loadingWheel();
	setTimeout(function(){flyPlane();}, 5000);
	setTimeout(function(){yourTurn();}, 2000);


	//transparent background blacking grid function here
//	transparentBG();
	
	

	
	//add 3 second delay function here
	
	var lCoord = Math.floor((Math.random() * 9) + 0);
	var nCoord = Math.floor((Math.random() * 9) + 0);
	
	var player = getPlayerGrid();
	
	//0 = nothing just water, 1 = ship, 2 = ship already hit, -1 = water already missed
	
	if(player[lCoord][nCoord] == 0 || player[lCoord][nCoord] == -1)
	{
		
		
		//code to get box to show water gif
		setTimeout(function(){splash("box" + lCoord + nCoord);}, 2000);
		playerGrid[lCoord][nCoord] = -1;
	
	}
	else if(player[lCoord][nCoord] == -1)
	{
			
		
		//code to get box to show water gif
		playerGrid[lCoord][nCoord] = -1;
	}
	else if(player[lCoord][nCoord] == 1)
	{
		
		
		//code to constantly display smoking gif
		setTimeout(function(){smoke("box" + lCoord + nCoord);}, 2000);
		
		playerGrid[lCoord][nCoord] = 2;
	}
		else if(player[lCoord][nCoord] == 2)
	{
	
	}
	
	checkStatusOfGame();
	//FUNCTION BELOW NEEDS TO BE IMPLEMENTED
	//changeTurn(true);
	
//setTimeout(function() { yourTurn(); }, 5000);
	
	var msg = "";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= playerGrid[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
	
}

function dropBomb(boxId)
{
	
}



function playerTurn(value)
{
	//add animations for clicking box here
	
	flyPlane2();
	
	var letter = value.substring(0, 1);
	var nCoord = value.substring(1, 2);
	var lCoord;
	if(letter == 'A')
		lCoord = 0;
	else if(letter == 'B')
		lCoord = 1;
	else if(letter == 'C')
		lCoord = 2;
	else if(letter == 'D')
		lCoord = 3;
	else if(letter == 'E')
		lCoord = 4;
	else if(letter == 'F')
		lCoord = 5;
	else if(letter == 'G')
		lCoord = 6;
	else if(letter == 'H')
		lCoord = 7;
	else if(letter == 'I')
		lCoord = 8;
	else if(letter == 'J')
		lCoord = 9;
		
	
	//add code for front end visual changes
	//yourTurn();
	
	
	//var bot = getBotGrid();
	
	var bot = [
  [1,0,0,0,0,0,0,1,0,0],
  [1,0,0,0,0,0,1,1,1,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,1,0],
  [1,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0]
];


	//0 = nothing just water, 1 = ship, 2 = ship already hit, -1 = water already missed
	
	if(botGrid[lCoord][nCoord] == 0)
	{
	//	updatePageWhenPlayerMiss();
		alert("It was a miss!");
		//code to get box to show water gif
		setTimeout(function() {splash("botBox" + lCoord + nCoord);}, 2000);
		updateScoreWhenMiss();
	}
	else if(botGrid[lCoord][nCoord] == -1)
	{
		//	updatePageWhenPlayerMiss();
			alert("It was a miss! You already tried this box -.-");
			updateScoreWhenMiss();
		
		
		//code to get box to show water gif
		//botGrid[lCoord][nCoord] = -1;
	}
	else if(botGrid[lCoord][nCoord] == 1)
	{
	//	updatePageWhenPlayerHit();
		alert("It was a hit!");
		
		//code to constantly display smoking gif
		
		botGrid[lCoord][nCoord] = 2;
		updateScoreWhenHit();
		setTimeout(function() {explode("botBox" + lCoord + nCoord);}, 2000);
		
		
	}
		else if(botGrid[lCoord][nCoord] == 2)
	{
		alert("You already damaged this part of the ship.... :L");
	}
	
	var msg = "";
		
		for(var i = 0; i < 10; i++)
		{
			for(var j = 0; j < 10; j++)
			{
				msg+= botGrid[i][j] + " ";
			}
			msg+="\n";
		}
		
		alert(msg);
	
	checkStatusOfGame();
	//FUNCTION BELOW NEEDS TO BE IMPLEMENTED
	changeTurn(false);
	
	
	
   setTimeout(function() {botTurn();}, 3000);
	
	
}

 function changeTurn(isTurn)
 {
 
 }

function endGame()
{
	//End Message
	//submit playerId, Name and Score to db
	//send score to rails
	//redirect to leaderboard
}

	function checkStatusOfGame()
	{
		var numOfHitForPlayer = 0;
		var numOfHitForBot = 0;
		for(var i = 0; i < 10; i++)
			for(var j = 0; j < 10; j++)
				{
					if(playerGrid[i][j] == 2)
						numOfHitForBot++;
					if(botGrid[i][j] == 2)
					    numOfHitForPlayer++;
					
				}
				
			if(numOfHitForPlayer >= 23)
			{
				alert("You win!");
			    endGame();
			}
			else if(numOfHitForBot >= 23)
			{
				alert("AI wins..... Ripperino");
				endGame();
			}
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
	var validationMessage = "";
	
	for(var i = 0; i < 7; i++)
		{
		if(!(/^([A-Ja-j])$/.test(letterChar[i])))
		{
			validationMessage += "You have one or more invalid letter Coordinates! ReEnter for the " + (i+1) + "ship!\n\n";
			
			//abort validation
			validation = false;
		}
		if(!(/^([0-9])$/.test(number[i])))
		{
		validationMessage += "You have one or more invalid number Coordinates! ReEnter for the " + (i+1) + "ship!\n\n";
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
		    	validationMessage += "You did not choose a direction for ship " + (i+1) + "!\n\n";
		    }
	}
	
	
	//setting directions
	var direct = [0,0,0,0,0,0,0];
	for(var n = 0; n < 7; n++)
	{
		if(directionV[n] == true)
		{
			direct[n] = 1;
		}
		else 
		{
			direct[n] = 2;
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
		
		//collision validation
		var size = 0;
		for(var i = 0; i < 7; i++)
		{
		if(i == 0)
			size = 5;
		else if (i == 1 || i == 2)
			size = 4;
		else if (i == 3 || i == 4)
			size = 3;
		else if (i == 5 || i == 6)
			size = 2;
			
				if(direct[i] == 1)
				{
					if((letter[i]+size-1) <= 9)
					{
						for(var j = 0; j < size; j++)
						if(x[letter[i]+j][number[i]] == 0)
							x[letter[i]+j][number[i]] = 1;
						else
						validation = false;
					}
					else
						validation = false;
				}
				else if(direct[i] == 2)
				{
					if((number[i]-size+1) >= 0)
					{
						for(var j = 0; j < size; j++)
						if(x[letter[i]][number[i]-j] == 0)
							x[letter[i]][number[i]-j] = 1;
						else
							validation = false;
					}
					else
						validation = false;
				}
			
			
		}
		
		
/*		
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
*/		
		if(validation == true)
		{
			pletterC = letter;
			pnumberC = number;
			pdirection = direct;
			//enable submit button
			hideValidation();
		}
		else
		{
			//Failed vlidation code here
			validationMessage += "Validation failed..... Please Enter valid coordinates and ensure your ships do not collide!!!!\n\n";
			
			alert(validationMessage);
			//Keep submit button disabled
		}
		
		
		
		
		
		
	
	
	
}

function createBotGrid()
{
	var size = 0;
	x = createGridArray();
	for(var i = 0; i < 7; i++)
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
		   	x[letterC[i]+j][numberC[i]] = 1;
		   else if(direction[i] == 2)
		   	x[letterC[i]][numberC[i]-j] = 1;
		}
	}
	
	return x;
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

	var score = 343434;
	jQuery.ajax({
  data: 'score=' + score,
  dataType: 'script',
  type: 'post',
  url: "/scores/create"
    });

	alert("suhh");
   
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
	//TEST
	letterC = pletterC;
	numberC = pnumberC;
	direction = pdirection;
//TEST
	var size = 0;
	for(var i = 0; i < 7; i++)
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
		   {
		   	var s = "box" + (letterC[i]+j) + numberC[i];
		   turnBoxBlack(s);
		   }
		   else if(direction[i] == 2)
		   {
		   	var s = "box" + (letterC[i]) + (numberC[i]-j)
		   turnBoxBlack(s);
		   }
		}
	}
}

function generateBotShips()
{
	/*
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
	
	botGrid = x;
	*/	
	
		botGrid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,1,0],
  [1,0,1,1,1,1,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,1,0,1,1,0],
  [0,0,0,0,0,1,0,1,1,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0]
];
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
				
				else if(direction[i] == 2)
				{
					alert("loopingsdas for direction 2");
					
						for(var s = 2; s <= 5; s++)					
						{
							alert("inside if");
						if((numberC[i]-s-1) >= 0)
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
					alert("before foorlooop");
					for(var s = 2; s <= 5; s++)
					{
						if((numberC[i]-s-1)>= 0)
						{
							alert("looping for direction 2");
							for(var j = 1; j < s; j++)
							{
								if(x[letterC[i]][numberC[i]-j] == 0)
								x[letterC[i]][numberC[i]-j] = 1;
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
