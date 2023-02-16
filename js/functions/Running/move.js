import { menuBienvenue } from "../Edit/menu.js";


function move(element, animationWidth, level, array) {
    // bouger la map
    
    const moveMap = element.animate({
        left : `-${animationWidth}px`, // taile d'un bloc A multiplié par le nombre de bloc A
    }, {
        duration: level, // le temps de l'effet de slide jusqu'à (x)px
        iterations: Infinity,

    })
    
    const allObstacles = [];
    array.map((obstacle) => {
        const positionObstacle = parseInt(obstacle.style.left.replace("px", ""))
        const typeObstacle = obstacle.className
        allObstacles.push({"type": typeObstacle, "distance": positionObstacle })
    })
   
    const divDistence = document.createElement('div')
    divDistence.style.position = "fixed"
    divDistence.style.bottom = "0px"
    divDistence.style.right = "0px"

    const input = document.createElement('input')
    input.style.border = "3px solid orange"
    input.style.borderRadius = "5px"
    input.style.padding = "5px"
    input.style.textAlign = "center"
    input.style.width = "100px"
    divDistence.appendChild(input)
    element.appendChild(divDistence)

    setInterval(() => {
            
        input.value = moveMap.effect.target.offsetLeft * (-1) 
        allObstacles.forEach((obstacle) => {
            
            if (input.value > (obstacle.distance - 38) && input.value < (obstacle.distance - 38) + 10)  {
                if (obstacle.type === "B"){
                    console.log("obstacle bas")
                }else {
                    console.log("obstacle haut")
                }

                // colision()
            }
        })
    
    })
    
    function colision(){
        moveMap.pause()
    }

}



export {move}