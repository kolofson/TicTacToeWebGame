// JavaScript Document

function turn(event) {
	
	var getBoxId = event.target.id;
	var getBox = document.getElementById(getBoxId);
	var player1 = document.getElementById("message").innerHTML[0];
	
	if (getBox.innerHTML === "" && player1 === "X") {
		
		getBox.innerHTML = "X";
		document.getElementById("message").innerHTML = "O's Turn!";

	} else if (getBox.innerHTML === "" && player1 === "O") {
		
		getBox.innerHTML = "O";
		document.getElementById("message").innerHTML = "X's Turn!";
	}
	
	winner();
}
	
function winner() {
	
	var b1 = document.getElementById("box_1").innerHTML;
	var b2 = document.getElementById("box_2").innerHTML;
	var b3 = document.getElementById("box_3").innerHTML;
	var b4 = document.getElementById("box_4").innerHTML;
	var b5 = document.getElementById("box_5").innerHTML;
	var b6 = document.getElementById("box_6").innerHTML;
	var b7 = document.getElementById("box_7").innerHTML;
	var b8 = document.getElementById("box_8").innerHTML;
	var b9 = document.getElementById("box_9").innerHTML;
	
	if (b1 === b2 && b1 === b3 && b2 === b3 && b1 !== "" && b2 !== "" && b3 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
		
	} else if (b4 === b5 && b4 === b6 && b5 === b6 && b4 !== "" && b5 !== "" && b6 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b7 === b8 && b7 === b9 && b8 === b9 && b7 !== "" && b8 !== "" && b9 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b1 === b4 && b1 === b7 && b4 === b7 && b1 !== "" && b4 !== "" && b7 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b2 === b5 && b2 === b8 && b5 === b8 && b2 !== "" && b5 !== "" && b8 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b3 === b6 && b3 === b9 && b6 === b9 && b3 !== "" && b6 !== "" && b9 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b1 === b5 && b1 === b9 && b5 === b9 && b1 !== "" && b5 !== "" && b9 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";
	} else if (b3 === b5 && b3 === b7 && b5 === b7 && b3 !== "" && b5 !== "" && b7 !== "") {
		
		document.getElementById("message").innerHTML = "WINNER!";	
	}			
}

function reset() {
	//grabs collection of elements
	var slots = document.getElementsByTagName("td");
	//loop through all spots on board 
	for (var i = 0; i <= 9; i++) {
		//grab each element one by one and reset it to empty
		slots[i].innerHTML = "";
	}
}
		