$(document).ready(function(){
	let player1= "<h1>X</h1>";
	let player2= "<h1>0</h1>";

	let currentTurn=1;
	let movesMade=0;

	let square=$(".square");

	square.on("click", function(e){
		movesMade++;
		if(currentTurn===1){
			event.target.innerHTML=player1;
			event.target.style.color="red";
			currentTurn++;
		}else{
			event.target.innerHTML=player2;
			event.target.style.color="blue";
			currentTurn--;
		};
		function checkForWinner(){
			if (movesMade>4){
				let moves=Array.prototype.slice.call($(".square"));
				console.log(moves);
			};
		};
		checkForWinner();
	});
});
