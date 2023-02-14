
function down(character) {

    document.addEventListener("keydown" , (event) => {
        if ( event.keyCode == 40) {
            character.style.backgroundImage = "url('./roulade.gif')";
            character.style.backgroundPositionY = "-155px"
            character.style.width = "80px";
            character.style.height = "85px";
            character.style.top = "625px"
            setTimeout(() => { 
            character.style.backgroundImage = "url('./running.gif')"; 
            character.style.height = "200px"
            character.style.width = "65px";
            character.style.backgroundPositionY = "-50px"
            character.style.top = "510px"
            character.style.transition = "0.5s"
            }, 1500)
        }
      })

}

export default down;
