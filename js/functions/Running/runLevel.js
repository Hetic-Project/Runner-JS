import { move} from './move.js';
import {menuDuJeu} from '../Edit/menu.js'
import {jump} from './jump.js';
import {down} from './down.js';

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
content.style.backgroundColor = "transparent";
content.style.transition = "2s"

const blocks = [];
const widthOfBlockA = 200;
let positionBlock = 400; // la distance qui separe chaque bloc B par rapport
let numberBlockA = 100; // le nombre de bloc A
const animationWidh = (widthOfBlockA * numberBlockA) - window.screen.availWidth;
let blockB_By_BlockA = 3; // un block B tous les 3 block 
const obstacles = ["B", "C"];

function createBlockA(block) {
    block = document.createElement('div'); // créer le bloc A qui sera le sol du jeu 
    block.classList.add("A");
    block.style.backgroundColor = "transparent";
    block.style.width = `${widthOfBlockA}px`;
    block.style.height = "100px";
    content.appendChild(block);
    gameWindows.appendChild(content);
};

function createObstacle(block) {
    if (block === 'B') {
        block = document.createElement('div'); // créer un bloc B
        block.classList.add("B");
        block.style.width = "10px";
        block.style.height = "50px";
        block.style.position = "absolute";
        block.style.bottom = "100px";
        block.style.left = `${positionBlock}px`;
        block.style.backgroundImage = "url(../../../img/spike.png)";
        blocks.push(block)
        content.appendChild(block);
    } else {
        block = document.createElement('div'); // créer un bloc C
        block.style.backgroundColor = "transparent";
        block.classList.add("C");
        block.style.width = "100px";
        block.style.height = "100px";
        block.style.position = "absolute";
        block.style.top = "100px";
        block.style.left = `${positionBlock}px`;
        block.style.backgroundImage = "url(../../../img/corboitachi.png)";
        block.style.backgroundSize = "cover";
        block.style.backgroundPositionY = "29px"
        blocks.push(block)
        content.appendChild(block);
    };
}

function createCharacter() {
    const character = document.createElement("div");
    character.style.height = "200px"
    character.classList.add("character")
    character.style.width = "65px"
    character.style.position = "fixed"
    character.style.left = "0px"
    character.style.bottom = "100px"
    character.style.backgroundImage = "url('./running.gif')";
    character.style.backgroundSize = "400px"
    character.style.backgroundPosition = "center"
    character.style.backgroundPositionY = "-40px"
    character.style.backgroundPositionX = "625px"
    character.style.borderRadius = "20%"
    content.appendChild(character)
    jump(character)
    down(character)
}


function runLevel(blockA) {

    menuDuJeu();

    let i = 0;
    let j = 0;
  
    while (i < numberBlockA) {
      createBlockA(blockA);
      i++;
    }
  
    while (j < Math.trunc(numberBlockA / blockB_By_BlockA)) {
      const randomObstacle = Math.round(Math.random(0, 2));
      createObstacle(obstacles[randomObstacle]);
      positionBlock = positionBlock + 600;
      j++;
    }
  
    createCharacter();
    move(content, animationWidh, 200000, blocks)

  }

export default runLevel;
