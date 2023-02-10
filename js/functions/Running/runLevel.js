function runLevel (blockA, blockB, blockC){
   let i = 0;

   while(i < 100){

    createBlockA(blockA)
    i++
   }
}

function createBlockA(blockA){
    const gameWindows = document.querySelector('.game-content')
    gameWindows.style.display = "flex"
    gameWindows.style.alignItems = "flex-end"
    gameWindows.style.height = "100vh"

    const content = document.createElement('div')
    content.style.minWidth = "100%"
    content.style.height = "200px"
    content.style.border = "1px solid black"
    content.style.display = "flex"


    blockA = document.createElement('div');
    blockA.classList.add("A");
    blockA.style.border = "1px solid black";
    blockA.style.width = "200px";
    blockA.style.height = "200px";
    blockA.style.display = "inline-block";

    content.appendChild(blockA)
    gameWindows.appendChild(content)
}


function createBlockB(blockB){
    const gameWindows = document.querySelector('.game-content')
    blockB = document.createElement('div');
    blockB.classList.add("B");
    blockB.style.border = "1px solid black";
    blockB.style.width = "200px";
    blockB.style.height = "300px";
    blockB.style.display = "inline-block";

    gameWindows.appendChild(blockB)
}


export  {runLevel}