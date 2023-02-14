// FONCTION JUMP
function jump(character) {
    let jumping = false;
    let maxHeight = 100; // taille de saut maximum
    let duration = 1200; // durée de l'animation
    let start = null; // l'animation commence à null
    let initialY = parseInt(character.style.bottom); // j'initialise la position du personnage
  
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 38 && !jumping) {
        jumping = true;
        start = performance.now();
        requestAnimationFrame(jumpAnimation);
      }
    });
  
    function jumpAnimation(timestamp) {
      if (!start) start = timestamp;
      character.style.backgroundImage = "url('./jump.gif')"; // change l'image du personnage
      let timeElapsed = timestamp - start;
      let progress = Math.min(timeElapsed / duration, 1); // calcul le pourcentage de progression de l'animation
      let height = maxHeight * (-4 * progress * (progress - 1)); // j'utilise la formule d'une parabole pour définir le saut
      character.style.bottom = `${initialY + height}px`;
      if (progress < 1) {
        requestAnimationFrame(jumpAnimation); // continuer l'animation
      } else {
        jumping = false;
        character.style.backgroundImage = "url('./running.gif')"; // réinitialise l'image du personnage
        character.style.bottom = `${initialY}px`; // réinitialise la position du personnage
      }
    }
  }
  
  export default jump;
  
  
    //         animationInProgress = true;
    //         character.style.backgroundImage = "url('./jump.gif')";
    //         character.style.backgroundPositionY = "-85px"
    //         character.style.bottom = "280px";
    //         character.style.left = "15px";
    //         character.style.height = "120px"

    //         setTimeout(() => {
    //             character.style.bottom = "200px"
    //             character.style.backgroundPositionY = "-50px"
    //             character.style.height = "200px"
    //             character.style.backgroundImage = "url('./running.gif')";
    //             animationInProgress = false;
    //         }, 1100)

// keyCode : I = 73
// keyCode : K = 75 