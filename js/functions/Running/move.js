import {isJump} from './jump.js';
import { isDown } from './down.js';
import subMenuPause from '../Edit/subMenuPause.js';
import subMenuGameover from '../Edit/subMenuGameover.js';
let gameOver = false 

function move(element, animationWidth, level, array) {
    // animation pour bouger la map
    const moveMap = element.animate({
        left : `-${animationWidth}px`, // taile d'un bloc A multiplié par le nombre de bloc A 
    }, {
        duration: level, // le temps de l'effet de slide jusqu'à (x)px
        iterations: 1,
        fill: "forwards",
    });
    
    const allObstacles = []; //récupere la distance et le type de l'obstacle sous forme de clé/valeur
    array.map((obstacle) => {
        // récupère la left des obstacles et remplace le "px" par "vide" donc enleve le px de la valeur de déplacement des obstacles pour pouvoir le parseInt
        const positionObstacle = parseInt(obstacle.style.left.replace("px", "")) ;
        const typeObstacle = obstacle.className; //récupère la class de l'obstacle, B ou C
        allObstacles.push({"type": typeObstacle, "distance": positionObstacle });
    });
   
    const divDistence = document.createElement('div');
    divDistence.style.position = "fixed";
    divDistence.style.bottom = "0px";
    divDistence.style.right = "0px";

    const input = document.createElement('input');
    input.style.border = "3px solid orange";
    input.style.borderRadius = "5px";
    input.style.padding = "5px";
    input.style.textAlign = "center";
    input.style.width = "100px";
    divDistence.appendChild(input);
    element.appendChild(divDistence);
    
    setInterval(() => { // tout les X temps, relance 
             
        input.value = moveMap.effect.target.offsetLeft * (-1); //- + - = +
        
        allObstacles.forEach((obstacle) => { // Pour tous les obstacles
            // si la distance de l'obstacle moins la largeur du personnage est inférieur à la valeur de la position des obstacles alors il y a colision
            if (input.value > (obstacle.distance - 38) && input.value < (obstacle.distance - 38) + 15)  {
                if (obstacle.type === "B"){ //si c'est un obstacle B
                    if (isJump.jumping) { // alors il faut sauter 
                        //la fonction score ici Lucas 
                        console.log("calcule du score"); //continuer le score
                    }else{
                        colision(moveMap); //ou sinon il y a colision
                    }
                    
                }else {
                    if (isDown.down) { //si il s'est baissé
                        //et la Lucas ^^
                        console.log("calcule du score"); //continuer le score
                    }else{
                        colision(moveMap);
                    }
                }
            }
        })
    
    })

 
    // event pause 
    document.addEventListener( "keydown", (e) => {
        if(e.keyCode === 27){
            moveMap.pause()
            subMenuPause(moveMap)
        }
    })
    
}

function colision(animation){
    
    animation.pause();// méthode pause lié à la méthode "animation"
    if (!gameOver) {
        subMenuGameover(0)
        gameOver = true
    }
    

}


export {move}