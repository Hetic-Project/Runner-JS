function createLevel(blockA,blockB,blockC){
    
    createButtons()
    let addBlocA = document.getElementById('bloc_A');
    addBlocA.addEventListener("click", function(){
        createBlockA(blockA);
    })
    let addBlocB = document.getElementById('bloc_B');
    addBlocB.addEventListener("click", function(){
        let divContainer = document.querySelector(".container");
        
        createBlockB(blockB);
    })
    let addBlocC = document.getElementById('bloc_C');
    addBlocC.addEventListener("click",function(){
        let divContainer = document.querySelector(".container");
                createBlockC(blockC);
    })
     document.getElementById("bloc_Aremove").addEventListener("click", function(){
        let BlocAremove = document.getElementById("A");
        BlocAremove.remove();
     })
     document.getElementById("bloc_Bremove").addEventListener("click", function(){
        let BlocBremove = document.getElementById("B");
        BlocBremove.remove();
     })
     document.getElementById("bloc_Cremove").addEventListener("click", function(){
        let BlocCremove = document.getElementById("C");
        BlocCremove.remove();
     }) 
    document.getElementsByClassName(".btn_save").onclick = saveLevel()          

}

function createButtons(){
        let leveldiv = document.createElement("div")
        leveldiv.classList.add("leveldiv")
        leveldiv.style.display = "flex";
        leveldiv.style.width = "100%";
        leveldiv.style.height = "100vh";
        leveldiv.style.position = "relative"
        

    let buttons = document.createElement("div");
    buttons.classList.add("buttons")
    let button1 = document.createElement("button");
    button1.classList.add("btn_level");
    let button1Remove = document.createElement("button");
    button1Remove.classList.add("btn_level");
    let button2 = document.createElement("button");
    button2.classList.add("btn_level");
    let button2Remove = document.createElement("button");
    button2Remove.classList.add("btn_level");   
    let button3 = document.createElement("button");
    button3.classList.add("btn_level");
    let button3Remove = document.createElement("button");
    button3Remove.classList.add("btn_level");
    button1.innerHTML = "+"
    button1Remove.innerHTML = "-"
    button2.innerHTML = "+"
    button2Remove.innerHTML = "-"
    button3.innerHTML = "+"
    button3Remove.innerHTML = "-"
    button1.id = "bloc_A"
    button1Remove.id = "bloc_Aremove"
    button2.id = "bloc_B"
    button2Remove.id = "bloc_Bremove"
    button3.id = "bloc_C" 
    button3Remove.id = "bloc_Cremove" 
    let text = document.createElement("p")
    text.classList.add("text")
    text.innerHTML = "BlOC A &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;"
    text.innerHTML += "BlOC B &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;"
    text.innerHTML += "BlOC C "
    

    leveldiv.appendChild(text)
    buttons.appendChild(button1)
    buttons.appendChild(button1Remove)
    buttons.appendChild(button2)
    buttons.appendChild(button2Remove)
    buttons.appendChild(button3)
    buttons.appendChild(button3Remove)
    leveldiv.appendChild(buttons)
    document.body.appendChild(leveldiv)
// creation du bouton save
    let divSave = document.createElement("div");
    let buttonSave = document.createElement("button");
    buttonSave.innerText = "save"
    buttonSave.classList.add("btn_save")
    divSave.appendChild(buttonSave)
    leveldiv.appendChild(divSave);
    document.body.appendChild(leveldiv)
}
function createBlockA(blockA){
    let leveldiv = document.querySelector(".leveldiv");
    let divContainer = document.querySelector(".container");
    if (!divContainer) {
        divContainer = document.createElement("div");
        divContainer.classList.add("container");
        divContainer.style.display = "flex";
        divContainer.style.alignItems = "flex-end";
        divContainer.style.position = "absolute"
        divContainer.style.bottom ="0"
        
    }
    blockA = document.createElement("div");
    blockA.classList.add("blockA");
    blockA.style.width = "50px";
    blockA.id ="A"
    blockA.style.height = "30px";
    blockA.style.backgroundColor = "green";
    blockA.style.border = "1px solid black";
    blockA.style.display = "inline-block";
    leveldiv.appendChild(divContainer)
    divContainer.appendChild(blockA);
    number_blockAnumber_blockA++;

}
function createBlockB(blockB){
    let divContainer = document.querySelector(".container");
    blockB = document.createElement("div");
    blockB.classList.add("blockB");
    blockB.id ="B"
    blockB.style.width = "50px";
    blockB.style.height = "80px";
    blockB.style.backgroundColor = "red";
    blockB.style.border = "1px solid black";
    blockB.style.display = "inline-block";

    divContainer.appendChild(blockB);


}

function createBlockC(blockC){
    let divContainer = document.querySelector(".container");
    blockC = document.createElement("div");
    blockC.classList.add("blockC");
    blockC.id ="C"
    blockC.style.width = "50px";
    blockC.style.height = "80px";
    blockC.style.backgroundColor = "yellow";
    blockC.style.border = "1px solid black";
    blockC.style.display = "inline-block";
    divContainer.appendChild(blockC);


}

function saveLevel(){
    let level = createLevel(blockA,blockB,blockC);
    // Convertir l'objet level en une chaîne de caractères JSON
    let levelJSON = JSON.stringify(level);
    // Enregistrer la chaîne de caractères JSON dans le stockage local
    localStorage.setItem('levelData', levelJSON);
    // Confirmer que le level a été enregistré
    console.log('Le level a été enregistré avec succès !');    
}

export {createLevel}


