// const container = document.querySelector("#container");
// // this will create a variable container that will have access the container in the main program.

// console.dir(container.firstElementChild);

// const divx = document.createElement("div");

// // divx.style.cssText = "";
// divx.setAttribute("style","background:bisque ; height : 50px; width : 50px; left : 200px; border-radius : 25%");
// // divx.style.height = "40px";
// divx.style.width = "70px";
// // divx.style.left = "250px";

// divx.style.margin = "auto";

// container.appendChild(divx);

//........................................................

const container = document.querySelector("#container");
container.classList.add('display');

const p = document.createElement('p');
p.setAttribute('style','color:red');
p.textContent = "hey, im red!";
container.appendChild(p);

// const instanceOfHead = document.querySelector('head');

const instanceOfH3 = document.createElement('h3');
instanceOfH3.setAttribute('style','color:cyan');
instanceOfH3.textContent = "and im blue, maybe.";
p.appendChild(instanceOfH3); 

const div = document.createElement('div');
div.setAttribute('style','border:solid; border-color:black; background-color:pink');

const h1 = document.createElement('h1');
h1.textContent = "I'm in div!!!";

const p1 = document.createElement('p');
p1.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p1);

container.appendChild(div);

// ...............................

function functionForEvents(){
    alert("You pressed the button!!");
}

// Events : Method 2 = using " onEvent"(ex. onclick) in JS using arrow function
// const instanceForButton = document.querySelector('#b1');
// instanceForButton.onclick = () => alert("2nd method for events, baby!!!!!!!!!!");

const instanceForButton = document.querySelector('#b1');
instanceForButton.onclick = functionForEvents;


// Events : Method 3 = using "addEventListner"
// const btn = document.querySelector('#b1');
// btn.addEventListener('click', () => {       // you can either use a arrow function or use a user dynamic function(user created)
    // alert("3rd method : addEventListner, baby!!!!1");
// });


const btn = document.querySelector('#b1');
btn.addEventListener('click', functionForEvents(e){
    console.log(e);
    });



