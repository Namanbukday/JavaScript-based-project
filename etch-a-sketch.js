const gridContainer = document.querySelector("#mainGrid");

const gridItem = document.createElement("div");
gridItem.classlist.add('girdItems');
gridContainer.appendChild(gridItem);

for(let i = 0; i<20; i++){
	const t = document.createElement("div");
	t.classlist.add('girdItems');
	gridContainer.appendChild(t);
}

alert("wwwwwwww");