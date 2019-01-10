var player="X";

function playGame(cell_id){
	var cell=document.getElementById(cell_id);
	if(cell.innerHTML.trim()==""){
		cell.innerHTML=player;
		if(player=="X"){
			player="O";
		}else{
			player="X";
		}
		checkWinner();
	}
	console.log(player);
}

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
function checkWinner(){

}