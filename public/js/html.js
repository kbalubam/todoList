let h1 = document.createElement("h1");
h1.textContent="TODO LIST";

let section = document.createElement("section");
section.setAttribute("class", "section");
let div1 = document.createElement("div");
div1.setAttribute("class", "div1");
let div2 = document.createElement("div");
div2.setAttribute("class", "div2");
let inputTask = document.createElement("input");
inputTask.setAttribute("placeholder", "Task Name");
let buttonAll = document.createElement("span");
buttonAll.setAttribute("class", "buttonAll");
let buttonDone = document.createElement("span");
buttonDone.setAttribute("class", "buttonDone");
let buttonTodo = document.createElement("span");
buttonTodo.setAttribute("class", "buttonTodo");

let aAll = document.createElement("a");
aAll.setAttribute("class", "aAll");
aAll.setAttribute("href", "#");
let aDone = document.createElement("a");
aDone.setAttribute("class", "aDone");
aDone.setAttribute("href", "#");
let aTodo = document.createElement("a");
aTodo.setAttribute("class", "aTodo");
aAll.setAttribute("href", "#");
aTodo.setAttribute("href", "#");


div2.appendChild(aAll);
div2.appendChild(aDone);
div2.appendChild(aTodo);



section.appendChild(h1);
section.appendChild(div1);
document.body.appendChild(section);
div1.appendChild(inputTask);
div2.appendChild(buttonAll);
div2.appendChild(buttonDone);
div2.appendChild(buttonTodo);
div1.appendChild(div2);

buttonAll.textContent="ALL";
buttonDone.textContent="DONE";
buttonTodo.textContent="TODO";

aAll.appendChild(buttonAll);
aDone.appendChild(buttonDone);
aTodo.appendChild(buttonTodo);


// 
let divCheck = document.createElement("div");
let divLabel = document.createElement("div");
let divIcon = document.createElement("div");


