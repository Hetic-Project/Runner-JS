// Définition du personnage
const img = document.querySelector("div");
img.style.height = "105px"
img.style.width = "65px"
img.style.backgroundColor = "red"
img.style.borderRadius = "40%"
img.style.position = "absolute"
img.style.left = "700px"
img.style.top = "250px"
img.style.backgroundImage = "url('./running.gif')";
img.style.backgroundSize = "400px"
img.style.backgroundPosition = "center"
img.style.backgroundPositionY = "-135px"
img.style.backgroundPositionX = "625px"


// FONCTION JUMP
let animationInProgress = false;

function jump() {
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 73 && !animationInProgress && parseInt(img.style.top) === 250) {
            animationInProgress = true;
            img.style.backgroundImage = "url('./jump.gif')";
            img.style.backgroundPositionY = "-95px"
            img.style.height = "140px"
            let jumpUp = setInterval(() => {
                img.style.top = parseInt(img.style.top) - 10 + "px"
                if (parseInt(img.style.top) <= 120) {
                    clearInterval(jumpUp)
                    let jumpDown = setInterval(() => {
                        img.style.top = parseInt(img.style.top) + 10 + "px"
                        if (parseInt(img.style.top) >= 250) {
                            clearInterval(jumpDown)
                            animationInProgress = false;
                            img.style.backgroundImage = "url('./running.gif')";
                            img.style.height = "105px"
                            img.style.backgroundSize = "400px";
                            img.style.backgroundPositionY = "-135px";
                        }
                    }, 30)
                }
            }, 30)
        }
    });
}
jump();

// keyCode : I = 73
// keyCode : K = 75 