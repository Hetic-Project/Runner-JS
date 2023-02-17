// Entre accolade car c'est des exports
import { move} from './move.js';
import {menuDuJeu} from '../Edit/menu.js'
import {jump} from './jump.js';
import {down} from './down.js';


const gameWindows = document.querySelector('.game-content');
const content = document.createElement('div');

// gameWindows est notre jeu qui fait toute la page web (la div qui contient toutes les fonctions)
gameWindows.style.height = "100vh";
gameWindows.style.position = "relative";
gameWindows.appendChild(content); //  ajoute content dans la div principal

// Le contenant qui contient les blocs A, B et C 
content.style.minHeight = "400px";
content.style.position = "absolute";
content.style.bottom = "0px";
content.style.left = "0px";
content.style.display = "flex";
content.style.alignItems = "flex-end";
content.style.backgroundColor = "transparent"; 

const blocks = []; // prends les blocs de types B et C
const widthOfBlockA = 200; // largeur du bloc A
let positionBlock = 400; // la distance qui separe chaque bloc B et C par rapport à leur left
let numberBlockA = 100; // le nombre de bloc A
// calcule du slide de la map par rapport a la taille de l'écran de l'utilisateur
const animationWidh = (widthOfBlockA * numberBlockA) - window.screen.availWidth;
let initialSpeed = 100000; // vitesse de départ du jeu
let SpaceBetweenObstacles = 3; // espacement en nombre de blocks A entre chaque obstacle
const obstacles = ["B", "C"];

function createBlockA(block) {
    block = document.createElement('div'); // créer le bloc A qui sera le sol du jeu 
    block.classList.add("A");
    block.style.backgroundColor = "transparent"; // a enlever si vous voulez voir les blocs A
    block.style.width = `${widthOfBlockA}px`;
    block.style.height = "100px";
    content.appendChild(block);
    gameWindows.appendChild(content); //ajoute le bloc dans la div content 
};

function createObstacle(block) {
    if (block === 'B') {
        block = document.createElement('div'); // créer un bloc B
        block.classList.add("B");
        block.style.width = "10px";
        block.style.height = "50px";
        block.style.position = "absolute";
        block.style.bottom = "100px"; // pousse l'élément à partir de son bottom de (x)px
        block.style.left = `${positionBlock}px`;
        block.style.backgroundImage = "url(../../../img/spike.png)";
        blocks.push(block) // push(ajoute) le bloc B dans notre tableau blocks
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
        block.style.backgroundPositionY = "29px";
        blocks.push(block);
        content.appendChild(block);
    };
}

//Fonction qui va ajouter notre personne dans le bloc content avec le style du personnage
function createCharacter() {
    const character = document.createElement("div");
    character.style.height = "200px";
    character.classList.add("character");
    character.style.width = "65px";
    character.style.position = "fixed"; // Colle le personnage sur l'écran
    character.style.left = "0px";
    character.style.bottom = "100px";
    character.style.backgroundImage = "url('./running.gif')";
    character.style.backgroundSize = "400px";
    character.style.backgroundPosition = "center";
    character.style.backgroundPositionY = "-40px";
    character.style.backgroundPositionX = "625px";
    character.style.borderRadius = "20%";
    content.appendChild(character);
    jump(character);
    down(character);
}


// Fonction qui créer notre jeu avec le menu, le personnage ainsi que le choix du niveau 
function runLevel(blockA) {

    menuDuJeu();

    let i = 0;
    let j = 0;

    while (i < numberBlockA) { // tant que le I est inférieur a la valeur de A on créer des blocs A
      createBlockA(blockA);
      i++;
    }
  
    while (j < Math.trunc((numberBlockA / SpaceBetweenObstacles) - 4)) {
      const randomObstacle = Math.round(Math.random(0, 2)); // soit 0 = B, soit 1 = C avec 2 exclu
      createObstacle(obstacles[randomObstacle]); // génère aléatoirement un bloc B ou C en fonction du random
      // la distance entre les éléments B et C (A = 200px donc 600px représente 3 blocs A)
      positionBlock = positionBlock + 600; 
      j++;
    }
  
    createCharacter(); // appel du personnage
    move(content, animationWidh, 200000, blocks); // appel la fonction move de move.js
  }

  
  function score() 
  {
    let value = parseInt(prompt()) //prends la valeur du joueur 

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
    
    // scoreElement.textContent = `SCORE : ${Math.floor(score)}`;
    // scoreElement.style.position = "fixed";
    // scoreElement.style.color = "#ffffff";
    // scoreElement.style.paddingLeft = "20px"
    // divNavRight.appendChild(scoreElement);
  }

export {score};
export default runLevel;
