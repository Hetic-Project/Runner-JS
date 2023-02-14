import {move, colision} from './move.js';
import jump from './jump.js';
import down from './down.js'

const gameWindows = document.querySelector('.game-content');
const content = document.createElement('div');

// gameWindows est notre jeu qui fait toute la page web 
gameWindows.style.height = "100vh";
gameWindows.style.position = "relative";
gameWindows.appendChild(content);

// Le contenant qui contient les blocs A, B et C 
content.style.minHeight = "400px";
content.style.position = "absolute";
content.style.bottom = "0px"
content.style.left = "0px"
content.style.display = "flex";
content.style.alignItems = "flex-end";
content.style.backgroundColor = "lightblue";
content.style.transition = "2s"

const widthOfBlockA = 200;
let positionBlock = 400; // la distance qui separe chaque bloc B par rapport
let numberBlockA = 100; // le nombre de bloc A
const animationWidh = (widthOfBlockA * numberBlockA) - window.screen.availWidth;
let easySpeedLevel = 200000;
let NormalSpeedLevel = 10000;
let blockB_By_BlockA = 3; // un block B tous les 3 block 
const obstacles = ["B", "C"]; 

function createBlockA(block, i){

    block = document.createElement('div'); // créer le bloc A qui sera le sol du jeu 
    block.classList.add("A");
    block.style.backgroundColor = "#ffffaa";
    block.style.width = `${widthOfBlockA}px`;
    block.style.height = "200px";
    block.textContent = i;
    content.appendChild(block);
    gameWindows.appendChild(content);
};

function createObstacle(block, j){
    
    if (block === 'B'){
        
        block = document.createElement('div'); // créer un bloc B
        block.style.backgroundColor = "lightgreen";
        block.classList.add("B");
        block.style.width = "20px";
        block.style.height = "50px";
        block.style.position = "absolute";
        block.style.top = "150px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j;
        content.appendChild(block);
        
    }else {

        block = document.createElement('div'); // créer un bloc C
        block.style.backgroundColor = "grey";
        block.classList.add("C");
        block.style.width = "50px";
        block.style.height = "100px";
        block.style.position = "absolute";
        block.style.top = "0px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j;
        content.appendChild(block);

    };
}

function createCharacter(){

    const character = document.createElement("div");
    character.style.height = "200px"
    character.style.width = "65px"
    character.style.position = "fixed"
    character.style.left = "0px"
    character.style.bottom = "200px"
    character.style.backgroundImage = "url('./running.gif')";
    character.style.backgroundSize = "400px"
    character.style.backgroundPosition = "center"
    character.style.backgroundPositionY = "-50px"
    character.style.backgroundPositionX = "625px"
    character.style.backgroundColor = "red"
    content.appendChild(character)
    jump(character)
    down(character)
}

function runLevel (blockA, blockB, blockC){
   let i = 0;
   let j = 0;

   let value = parseInt(prompt())

   while(i < numberBlockA){
        createBlockA(blockA , i);
        i++
    };
    
    while(j < Math.trunc(numberBlockA / blockB_By_BlockA)){
        const randomObstacle = Math.round(Math.random(0, 2));
        createObstacle(obstacles[randomObstacle], j);
        positionBlock = positionBlock + 600;
        j++;
    };

    createCharacter()

    switch (value) {
        case value: 1,
            move(content, animationWidh, easySpeedLevel);
            console.log(value);
            break;
        case value: 2,
            move(content, animationWidh, NormalSpeedLevel);
            console.log(value)
            break;
        default:
            break;
    }

    colision()

}



export default runLevel