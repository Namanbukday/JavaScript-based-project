let z,m;
function computerPlay(){
    z = Math.floor((Math.random() * 3) + 1 );
    if (z == 1){
        return "rock";
    }
    else if(z == 2){
        return "paper";
    }
    else if (z == 3){
        return "scissor";
    }
}

let userpoint = 0;
let comppoint = 0;

function game(x,m){
	if(x == "rock" && m == "scissor"){
			//alert("comp wins..rock beats scissor");
			comppoint++;
		}
	else if(x == "paper" && m == "rock"){
			//alert("comp wins..paper beats rock");
			comppoint++;
		}
	else if(x == "scissor" && m == "paper"){
			//alert("comp wins..scissor beats paper");
			comppoint++;
		}
	else if(m == "rock" && x == "scissor"){
			//alert("user wins..rock beats scissor");
			userpoint++;
		}
	else if(m == "paper" && x == "rock"){
			//alert("user wins..paper beats rock");
			userpoint++;
		}
	else if(m == "scissor" && x == "paper"){
			//alert("user wins..scissor beats paper");
			userpoint++;
		}
	else {
			//alert("Draw");
			console.log("DRAW")
		}
	//console.log(`comppoint : ${comppoint}`);
	//console.log(`userpoint : ${userpoint}`);
	showResult(comppoint,userpoint);
}

function showResult(cp,up){
	const resdiv = document.querySelector(".resultDiv");
	//textContent to add content to your html file
	resdiv.textContent = `user wins ${up} and computer wins ${cp}`;
	if (up == 5){
		resdiv.textContent = `Rounds up, USER wins by ${up}-${cp}!!! --RESET--`;
		reset();
	}
	else if (cp == 5){
		resdiv.textContent = `Rounds up, computer wins by ${cp}-${up}!!! --RESET--`;
		reset();
	}
}

//function to reset points
function reset(){
	userpoint = 0;
	comppoint = 0;
}

// function responds when click happen on rock div
function forRock(e){
	m = 'rock';
	let x = computerPlay();
	console.log("comp selection :",x);
	game(x,m);
	//console.log("1");
}

// function responds when click happen on paper div
function forPaper(e){
	m = 'paper';
	let x = computerPlay();
	console.log("comp selection :",x);
	game(x,m);
	//console.log("2");
}

// function responds when click happen on scissor div
function forScissor(e){
	m = 'scissor';
	let x = computerPlay();
	console.log("comp selection :",x);
	game(x,m);
	//console.log("3");
}

const rock = document.querySelector('#rock');
//IF I USE WINDOW.ADDEVENTLISTNER THEN ONE CLICK WILL FIRE ALL EVENTS ON THE SCREEN
// SO , YOU HAVE TO USE THE INSTANCE THAT YOU MADE FOR THE PARTICULAR DIV
rock.addEventListener("click",forRock);

//creating instance and adding evevnt listener

const paper = document.querySelector('#paper');
paper.addEventListener("click",forPaper);

const scissor = document.querySelector('#scissor');
scissor.addEventListener("click",forScissor);

