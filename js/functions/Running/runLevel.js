import { move, colision } from './move.js';
import {divNavRight, menuDuJeu} from '../Edit/menu.js'
import jump from './jump.js';
import down from './down.js';

const gameWindows = document.querySelector('.game-content');
const content = document.createElement('div');
const pointsPerBlock = 10;
let score = 0;

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
let initialSpeed = 100000;
let blockB_By_BlockA = 3; // un block B tous les 3 block 
const obstacles = ["B", "C"];

function createBlockA(block, i) {
    block = document.createElement('div'); // créer le bloc A qui sera le sol du jeu 
    block.classList.add("A");
    block.style.backgroundColor = "transparent";
    block.style.width = `${widthOfBlockA}px`;
    block.style.height = "100px";
    content.appendChild(block);
    gameWindows.appendChild(content);
};

function createObstacle(block, j) {
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
        // block.style.backgroundPositionX = "625px"
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


function runLevel(blockA, blockB, blockC) {

    menuDuJeu();

    let i = 0;
    let j = 0;

    let value = parseInt(prompt())
  
    while (i < numberBlockA) {
      createBlockA(blockA, i);
      i++;
    }
  
    while (j < Math.trunc(numberBlockA / blockB_By_BlockA)) { // créer un bloc B tous les 3 bloc A
      const randomObstacle = Math.round(Math.random(0, 2)); // génère un nombre aléatoire entre 0 et 1
      createObstacle(obstacles[randomObstacle], j); // créer un bloc B ou C
      positionBlock = positionBlock + 600; // la distance qui separe chaque bloc B par rapport
      j++; // incrémente le nombre de bloc B
    }
  
    createCharacter();
  
    let speedMultiplier = 1; // initialisation du multiplicateur de vitesse
    let pointsPerBlock = 0; // initialisation des points
    switch (value) { 
      case 1:
        speedMultiplier = 0.9; // définit le multiplicateur de vitesse
        move(content, animationWidh, initialSpeed * speedMultiplier); // déplace la map
        pointsPerBlock = (i + j) * 10; // calcul les points pour chaque bloc créé
        break;
      case 2:
        speedMultiplier = 0.6; // définit le multiplicateur de vitesse
        move(content, animationWidh, initialSpeed * speedMultiplier); // déplace la map
        pointsPerBlock = (i + j) * 12; // calcul les points pour chaque bloc créé
        break;
      default:
        break;
    }
    
    const score = pointsPerBlock * (1 - speedMultiplier); // Calcul du score final en inversant le "speedMultiplier" pour avoir un score plus élevé car speedMultiplier < 1
    const scoreElement = document.createElement("h3"); 

    console.log(`Nombre de blocs créés : ${i + j}`); 
    console.log(`Nombre de points : ${pointsPerBlock}`); 
    console.log(`Multiplicateur de vitesse : ${speedMultiplier}`);
    // console.log(`Score : ${Math.floor(score)}`);
    
    scoreElement.textContent = `SCORE : ${Math.floor(score)}`;
    scoreElement.style.position = "fixed";
    scoreElement.style.color = "#ffffff";
    scoreElement.style.paddingLeft = "20px"
    divNavRight.appendChild(scoreElement);

    let options = {
        threshold : 0 
    }

    const observer = new IntersectionObserver(handleIntersection, options);


    function handleIntersection(entries){

        if (entries[0].isIntersecting){
            setInterval(() => {
                // console.log(entries[0].target.offsetLeft)
                if(entries[0].target.offsetLeft === -400){
                    console.log('colision')
                }

            }, 2)
        }
    }
    

    observer.observe(content)
    
    colision();
  }

export default runLevel;
