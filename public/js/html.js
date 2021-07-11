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

let clearButton = document.createElement("button");
clearButton.setAttribute("class", "clear");
section.appendChild(clearButton);
clearButton.innerText="CLEAR LIST"


let valeur;

inputTask.addEventListener("keyup",  (e)=> {
    if (e.keyCode == 13) {
        valeur=inputTask.value;
        inputTask.value="";
        let divGlob = document.createElement("div");
        divGlob.setAttribute("class", "divGlob");
        let divLabel = document.createElement("div");
        divLabel.setAttribute("class","divLabel");
        let divIcon = document.createElement("div");
        divIcon.setAttribute("class", "divIcon");

        let inputCheck = document.createElement("input");
        inputCheck.setAttribute("type","checkbox");
        inputCheck.setAttribute("name", "checkbox")
        let label = document.createElement("label");
        label.textContent=`${valeur}`;
        let icon1 = document.createElement("i");
        icon1.setAttribute("class","far fa-edit");
        let icon2 = document.createElement("i");
        icon2.setAttribute("class","fas fa-trash-alt");

        let bEdit=document.createElement("a");
        bEdit.setAttribute("class", "bEdit");
        bEdit.setAttribute("href", "#");
        
        let bDelete=document.createElement("a");
        bDelete.setAttribute("class", "bDelete");
        bDelete.setAttribute("href", "#");

        section.appendChild(divGlob);
        divGlob.appendChild(divLabel);
        divGlob.appendChild(divIcon);
        
        divLabel.appendChild(inputCheck);
        divLabel.appendChild(label);
        divIcon.appendChild(bEdit);
        divIcon.appendChild(bDelete);
        
        bEdit.appendChild(icon1);
        bDelete.appendChild(icon2);

        

        let checkbox = document.querySelector("input[name=checkbox]");

        checkbox.addEventListener('change', function() {
        if (this.checked) {
            divGlob.style.backgroundColor="rgba(52,58,64,255)"
        } else {
            divGlob.style.backgroundColor="white"
        }
        });
        buttonAll.addEventListener("click", () => {
           if (inputCheck.checked == true || inputCheck.checked == false){
               divGlob.style.display = "flex";
           }
        });

        buttonDone.addEventListener("click", () => {
           if (inputCheck.checked == true){
               divGlob.style.display = "flex";
             } else {
               divGlob.style.display = "none";
             }
        });
        buttonTodo.addEventListener("click", () => {
            if (inputCheck.checked == false){
                divGlob.style.display = "flex";
                console.log("hello");
              } else {
                divGlob.style.display = "none";
                console.log("hello");
              }
         });

         bEdit.addEventListener("click", () =>{
            label.innerText = "";
            let newinput = document.createElement("input");
            divGlob.appendChild(newinput);
            newinput.addEventListener("keyup", (e) =>{
                          if(e.keyCode == 13){
                             label.innerText = newinput.value
                             newinput.remove()
                          }
            })
         });

         bDelete.addEventListener("click",()=>{
             divGlob.remove();
         })
         clearButton.addEventListener("click",()=>{
            divGlob.remove();
    
        })
    
    

        

    }
})















