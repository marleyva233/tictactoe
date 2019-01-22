var player="X";
var gameOn=true;
var moves=0;
function playGame(cell_id){
	if(gameOn){
		var cell=document.getElementById(cell_id);
		if(cell.innerHTML.trim()==""){
			cell.innerHTML=player;
			if(player=="X"){
				player="O";
				cell.classList.add("red");
			}else{
				player="X";
				cell.classList.add("blue");
			}
			moves++;
			checkWinner();
			console.log("move: "+moves);
			console.log("player: "+ player);
		}
	}
}

function checkWinner(){
	var winningCombos=[
	// horizontal
	["sq1", "sq2", "sq3"],
	["sq4", "sq5", "sq6"],
	["sq7", "sq8", "sq9"],
	// vertical
	["sq1", "sq4", "sq7"],
	["sq2", "sq5", "sq8"],
	["sq3", "sq6", "sq9"],
	// diagonal
	["sq1", "sq5", "sq9"],
	["sq3", "sq5", "sq7"]
	];
	if (moves===9){
			gameOn=false;
			document.getElementById("winner").innerText="It's a draw! Try again!";
	}
	for (var i=0; i<8; i++){
		var cell1=document.getElementById(winningCombos[i][0]).innerText.trim();
		var cell2=document.getElementById(winningCombos[i][1]).innerText.trim();
		var cell3=document.getElementById(winningCombos[i][2]).innerText.trim();
		if(cell1 !=="" && cell2==cell1 && cell3==cell1){
			document.getElementById("winner").innerText=cell1 + " won!";
			gameOn=false;
			document.getElementById(winningCombos[i][0]).classList.add("winner");
			document.getElementById(winningCombos[i][1]).classList.add("winner");
			document.getElementById(winningCombos[i][2]).classList.add("winner");
		}
	}
}

function reset(){
	for (var i=1; i<10; i++){
		document.getElementById("sq"+i).innerText="";
		document.getElementById("sq"+i).classList.remove("winner", "red", "blue");
	}
	gameOn=true;
	player="X";
	moves=0;
	document.getElementById("winner").innerText="";
}