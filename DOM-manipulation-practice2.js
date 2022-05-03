// .............................EVENTS...........................

// ..........METHOD N0.2..........
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World!!");

// ...............MTHOD N0.3..........
// const btn = document.querySelector("#btn");
// btn.addEventListener('click',() =>{
//     alert("Hello World");
// });

const btn = document.querySelector('#btn');

function alertFunction(){
    alert("Yay!! you did it.");
}

// btn.onclick = alertFunction;

// btn.addEventListener('click',alertFunction); // "alertFunction" used as a callback function

btn.addEventListener('click', function(e){
    // console.log(e.target);
    // e.target.style.background = "blue";
})
