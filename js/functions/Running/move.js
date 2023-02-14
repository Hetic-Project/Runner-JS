

function colision(blocks, content){

    blocks.forEach((block) => {
        block.addEventListener("scroll", (e) => {
            console.log(e.currentTarget)
        })
    } )
    

  
}

function move(element, animationWidth, level) {
    // bouger la map
    element.animate({
        left : `-${animationWidth}px`, // taile d'un bloc A multiplié par le nombre de bloc A
        transition : 2000
    }, {
        duration: level, // le temps de l'effet de slide jusqu'à (x)px
        iterations: Infinity,

    })
}

export {move, colision}