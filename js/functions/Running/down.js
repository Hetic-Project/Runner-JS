
function down(character) {

    document.addEventListener("keydown" , (event) => {
        if ( event.keyCode == 40) {
            character.style.backgroundImage = "url('./roulade.gif')";
            character.style.backgroundPositionY = "-155px"
            character.style.width = "80px";
            character.style.height = "85px";
            character.style.bottom = "200px"

            setTimeout(() => { 
            character.style.backgroundImage = "url('./running.gif')"; 
            character.style.height = "200px"
            character.style.width = "65px";
            character.style.backgroundPositionY = "-50px"
            }, 1500)
        }
      })

}

export default down;
