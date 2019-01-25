var player="<img src='img/cat3.png' class='w-100'>";
var dog="<img src='img/dog2.png' class='w-100'>";
var cat="<img src='img/cat3.png' class='w-100'>";
var gameOn=true;
var moves=0;

function getCell(id){
	return document.getElementById("sq"+id).innerHTML.trim();
	console.log(document.getElementById("sq"+id).innerHTML.trim());
}
function playGame(cell_id){
	if(gameOn){
		var cell=document.getElementById("sq"+cell_id);
		if(getCell(cell_id)==""){
			cell.innerHTML=player;
			// cell.classList.add(player);
			player = (player==cat) ? dog : cat;
			moves++;
			checkWinner();
		}
	}
}

function checkWinner(){
	var winningCombos=[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
	];
	if (moves===9){
			gameOn=false;
			document.getElementById("winner").innerText="It's a draw! Try again!";
	}
	for (var i=0; i<8; i++){
		var cell1=getCell(winningCombos[i][0]);
		var cell2=getCell(winningCombos[i][1]);
		var cell3=getCell(winningCombos[i][2]);
		if(cell1 !=="" && cell2==cell1 && cell3==cell1){
			document.getElementById("board").style.display="none";
			document.getElementById("winner").innerHTML=cell1 + " <h1>won!</h1>";
			gameOn=false;
			markWinner(winningCombos[i]);
		}
	}
}
function markWinner(combo){
	for (var i=0; i<3; i++){
		document.getElementById("sq"+combo[i]).classList.add("winner");
	}
}
function reset(){
	for (var i=1; i<10; i++){
		document.getElementById("sq"+i).innerText="";
		document.getElementById("sq"+i).classList.remove("winner", "X", "O");
	}
	gameOn=true;
	player="<img src='img/cat3.png' class='w-100'>";
	moves=0;
	document.getElementById("board").style.display="initial";
	document.getElementById("winner").innerText="";
}