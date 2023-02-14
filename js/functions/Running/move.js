const blocks = [];

function colision(){
    const BlockB = document.querySelectorAll(".B")
    blocks.push(BlockB)
    const BlockC = document.querySelectorAll(".C")
    blocks.push(BlockC)
}
console.log(blocks)
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