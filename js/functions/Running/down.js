const img = document.querySelector("div");
img.style.height = "115px";
img.style.width = "65px";
// img.style.backgroundColor = "red";
img.style.position = "absolute";
img.style.left = "700px";
img.style.bottom = "250px";
img.style.backgroundImage = "url('./running.gif')";
img.style.backgroundSize = "400px";
img.style.backgroundPosition = "center";
img.style.backgroundPositionY = "-135px";
img.style.backgroundPositionX = "625px";






function down() {

    document.addEventListener("keydown" , (event) => {
        if ( event.keyCode == 40) {
            img.style.backgroundImage = "url('./roulade.gif')";
            img.style.backgroundPositionY = "-155px"
            img.style.width = "80px";
            img.style.height = "85px";
            setTimeout(() => { 
            img.style.backgroundImage = "url('./running.gif')"; 
            img.style.height = "115px";
            img.style.width = "65px";
            img.style.backgroundPositionY = "-135px";
            }, 550)
        }
      })

}
down();
