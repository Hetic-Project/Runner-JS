import { move, colision } from './move.js';
import jump from './jump.js';
import down from './down.js'

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
content.style.backgroundColor = "lightblue";
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
    block.style.backgroundColor = "#ffffaa";
    block.style.width = `${widthOfBlockA}px`;
    block.style.height = "200px";
    block.textContent = i;
    content.appendChild(block);
    gameWindows.appendChild(content);
};

function createObstacle(block, j) {
    if (block === 'B') {
        block = document.createElement('div'); // créer un bloc B
        block.style.backgroundColor = "lightgreen";
        block.classList.add("B");
        block.style.width = "20px";
        block.style.height = "50px";
        block.style.position = "absolute";
        block.style.top = "150px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j;
        blocks.push(block)
        content.appendChild(block);
    } else {
        block = document.createElement('div'); // créer un bloc C
        block.style.backgroundColor = "grey";
        block.classList.add("C");
        block.style.width = "50px";
        block.style.height = "100px";
        block.style.position = "absolute";
        block.style.top = "0px";
        block.style.left = `${positionBlock}px`;
        block.textContent = j;
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
    character.style.bottom = "200px"
    character.style.backgroundImage = "url('./running.gif')";
    character.style.backgroundSize = "400px"
    character.style.backgroundPosition = "center"
    character.style.backgroundPositionY = "-40px"
    character.style.backgroundPositionX = "625px"
    character.style.backgroundColor = "red"
    character.style.borderRadius = "20%"
    content.appendChild(character)
    jump(character)
    down(character)
}


function runLevel(blockA, blockB, blockC) {
    let i = 0;
    let j = 0;

    let value = parseInt(prompt())
  
    while (i < numberBlockA) {
      createBlockA(blockA, i);
      i++;
    }
  
    while (j < Math.trunc(numberBlockA / blockB_By_BlockA)) {
      const randomObstacle = Math.round(Math.random(0, 2));
      createObstacle(obstacles[randomObstacle], j);
      positionBlock = positionBlock + 600;
      j++;
    }
  
    createCharacter();
  
    let speedMultiplier = 1;
    let points = 0; // initialisation des points
    switch (value) {
      case 1:
        speedMultiplier = 0.9;
        move(content, animationWidh, initialSpeed * speedMultiplier);
        points = (i + j) * 10; // calcul les points pour chaque bloc créé
        break;
      case 2:
        speedMultiplier = 0.6;
        move(content, animationWidh, initialSpeed * speedMultiplier);
        points = (i + j) * 12; // calcul les points pour chaque bloc créé
        break;
      default:
        break;
    }
    
    const score = points * (1 - speedMultiplier); // Calcul du score final en inversant le "speedMultiplier"
    
    console.log(`Nombre de blocs créés : ${i + j}`);
    console.log(`Nombre de points : ${points}`);
    console.log(`Multiplicateur de vitesse : ${speedMultiplier}`);
    console.log(`Score : ${Math.floor(score)}`);

    let options = {
        threshold : 0 
    }

    const observer = new IntersectionObserver(handleIntersection, options);


    function handleIntersection(entries){

        if (entries[0].isIntersecting){
            setInterval(() => {
                console.log(entries[0].target.offsetLeft)
                if(entries[0].target.offsetLeft === -400){
                    console.log('colision')
                }

            }, 1)
        }
    }
    

    observer.observe(content)
    
    colision();
  }

export default runLevel;
