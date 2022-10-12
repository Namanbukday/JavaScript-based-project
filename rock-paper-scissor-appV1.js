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
    // alert(z)
}

//let userCount = 0;
//let compCount = 0;

function game(x,m){
    if(x == "rock" && m == "scissor"){
        alert("comp wins..rock beats scissor");
        //compCount++;
    }
    else if(x == "paper" && m == "rock"){
        alert("comp wins..paper beats rock");
        //compCount++;
    }
    else if(x == "scissor" && m == "paper"){
        alert("comp wins..scissor beats paper");
        //compCount++;
    }
    else if(m == "rock" && x == "scissor"){
        alert("user wins..rock beats scissor");
        //userCount++;
    }
    else if(m == "paper" && x == "rock"){
        alert("user wins..paper beats rock");
        //userCount++;
    }
    else if(m == "scissor" && x == "paper"){
        alert("user wins..scissor beats paper");
        //userCount++;
    }
    else {
        alert("Draw");
    }
}

//for (let i = 0; i<5; i++){
//    m = prompt("rock , paper or scissor");
//    m = m.toLowerCase();
//    let x = computerPlay();
//    game(x,m);
//}

//let x = computerPlay();
//console.log("computer value");
//console.log(x);

function forRock(e){
	m = 'rock';
	let x = computerPlay();
	console.log(x);
	game(x,m);
	console.log("1");
}

function forPaper(e){
	m = 'paper';
	let x = computerPlay();
	console.log(x);
	game(x,m);
	console.log("2");
}

function forScissor(e){
	m = 'scissor';
	let x = computerPlay();
	console.log(x);
	game(x,m);
	console.log("3");
}

const rock = document.querySelector('#rock');
rock.addEventListener("click",forRock);

const paper = document.querySelector('#paper');
paper.addEventListener("click",forPaper);

const scissor = document.querySelector('#scissor');
scissor.addEventListener("click",forScissor);

//console.log("user wins:${userCount}");
//alert("comp wins:,${compCount}");