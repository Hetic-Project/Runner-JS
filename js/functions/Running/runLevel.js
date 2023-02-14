const gameWindows = document.querySelector('.game-content')
const content = document.createElement('div')

// gameWindows est notre jeu qui fait toute la page web 
gameWindows.style.display = "flex"
gameWindows.style.alignItems = "flex-end"
gameWindows.style.height = "100vh"
gameWindows.appendChild(content)

// Le contenant qui contient les blocs A, B et C 
content.style.minHeight = "400px"
content.style.position = "relative"
content.style.display = "flex"
content.style.alignItems = "flex-end"
content.style.backgroundColor = "lightblue"

let positionBlock = 400 // la distance qui separe chaque bloc B par rapport
let numberBlockA = 100 // le nombre de bloc A
let blockB_By_BlockA = 3 // un block B tous les 3 block 
const obstacles = ["B", "C"] 

function createBlockA(block, i){

    block = document.createElement('div'); // créer le bloc A qui sera le sol du jeu 
    block.classList.add("A");
    block.style.backgroundColor = "#ffffaa";
    block.style.width = "200px";
    block.style.height = "200px";
    block.textContent = i
    content.appendChild(block)
    gameWindows.appendChild(content)
}

function createObstacle(block, j){
    
    if (block === 'B'){
        
        block = document.createElement('div'); // créer un bloc B
        block.style.backgroundColor = "lightgreen";
        block.style.width = "100px";
        block.style.height = "50px";
        block.style.position = "absolute";
        block.style.top = "150px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j
        content.appendChild(block)
        
    }else {

        block = document.createElement('div'); // créer un bloc C
        block.style.backgroundColor = "grey";
        block.style.width = "100px";
        block.style.height = "100px";
        block.style.position = "absolute";
        block.style.top = "0px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j
        content.appendChild(block)

    }
}

function runLevel (blockA, blockB, blockC){
   let i = 0;
   let j = 0;

   while(i < numberBlockA){
        createBlockA(blockA , i)
        i++
    }
    
    while(j < Math.trunc(numberBlockA / blockB_By_BlockA)){
        const randomObstacle = Math.round(Math.random(0, 2));
        createObstacle(obstacles[randomObstacle], j)
        positionBlock = positionBlock + 600
        j++
    }
   
}





export  {runLevel}