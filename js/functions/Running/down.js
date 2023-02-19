const isDown = {
    down : false
}

function down(character) {
    // evenement lorsque l'on presse sur la fleche directionnelle du bas, reduit la height du personnage pour donner l'illusion qu'il se baisse
    document.addEventListener("keydown" , (event) => { 
        if ( event.keyCode == 40) {
            isDown.down = true;
            character.style.backgroundImage = "url('./img/roulade.gif')";
            character.style.backgroundPositionY = "-155px";
            character.style.width = "80px";
            character.style.height = "85px";
            character.style.bottom = "100px";

            setTimeout(() => { // après 1.5sec si le personnage est baissé alors le remet sur l'image ou il est debout 
            isDown.down = false
            character.style.backgroundImage = "url('./img/running.gif')"; 
            character.style.height = "200px";
            character.style.width = "65px";
            character.style.backgroundPositionY = "-50px";
            }, 1500)
        }
      })

}

export {down, isDown};
