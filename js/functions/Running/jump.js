
// FONCTION JUMP
let animationInProgress = false;

function jump(character) {

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 38 && animationInProgress === false) {

            animationInProgress = true;
            character.style.backgroundImage = "url('./jump.gif')";
            character.style.backgroundPositionY = "-85px"
            character.style.top = "510px";
            character.style.left = "15px";
            character.style.height = "120px"

            setTimeout(() => {
                character.style.top = "510px"
                character.style.backgroundPositionY = "-50px"
                character.style.height = "200px"
                character.style.backgroundImage = "url('./running.gif')";
                animationInProgress = false;
            }, 1100)
            
            // let jumpUp = setInterval(() => {
            //     // character.style.top = parseInt(character.style.top) - 10 + "px"
            //     if (character.style.height === "120px") {
            //         clearInterval(jumpUp)
            //         let jumpDown = setInterval(() => {
            //             character.style.top = parseInt(character.style.top) + 10 + "px"
            //             if (parseInt(character.style.top) >= 250) {
            //                 clearInterval(jumpDown)
            //                 animationInProgress = false;
            //                 character.style.backgroundImage = "url('./running.gif')";
            //                 character.style.height = "200px"
            //                 // character.style.backgroundSize = "400px";
            //                 character.style.backgroundPositionY = "-50px"
            //             }
            //         }, 30)
            //     }
            // }, 30)
        }
    });
}

export default jump;

// keyCode : I = 73
// keyCode : K = 75 