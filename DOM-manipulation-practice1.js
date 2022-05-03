const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('newclass');
content.textContent = 'this is my first class';
content.setAttribute('style','background:blue');

container.appendChild(content);

//............... EXERCISE NO. 1.....................//

//Add a <p> with red text that says “Hey I’m red!”

const p = document.createElement('p');
p.setAttribute('style','color:red');
p.textContent = "Hey I'm red!";

container.appendChild(p);

//............... EXERCISE NO. 2.....................//

// Add an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3');
h3.setAttribute('style','color:darkblue');
h3.textContent = "Hey I'm blue h3!";

container.appendChild(h3);

//............... EXERCISE NO. 3.....................//

const div = document.createElement('div');
div.setAttribute('style','border-color:black; border-style:solid; background:pink');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div"

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);
