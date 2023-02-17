function subMenuPause () {
    const gamecontent = document.querySelector(".game-content")

    const madiv = document.createElement("div");
        madiv.style.display = "flex";
        madiv.style.alignItems = "center";
        madiv.style.justifyContent = "center";
        madiv.style.backgroundColor = "#FFBB0B";
        madiv.style.width = "100%";
        madiv.style.height = "100vh";

    const divBtn = document.createElement("div");
        divBtn.style.position ='absolute';
        divBtn.style.display = "flex";
        divBtn.style.flexDirection = "column";
        divBtn.style.gap = "1px";
        divBtn.style.width = '189px';
        divBtn.style.height = '284px';

        const btnContinu = document.createElement("button");
            btnContinu.textContent = "Continue";
            btnContinu.id = "btnContinu";
            btnContinu.className = "btnf";
            btnContinu.className = 'btn';
            // document.getElementById("#btnContinu").autofocus()
        // window.onload = function() {
        //     var button = document.getElementById("btnContinu");
        //     button.focus();
        //     };
              
        const btnRestart = document.createElement("button");
            btnRestart.textContent = "Restart";
            btnRestart.className = 'btn';
        const btnExit = document.createElement("button");
            btnExit.textContent = "Exit";
            btnExit.className = 'btn';

    const divTitle = document.createElement("div");
        divTitle.style.border = '3px solid #FFFFFF';
        divTitle.style.borderRadius = '14px';
        divTitle.style.alignContent = "center";
        divTitle.style.width = '322px';
        divTitle.style.height = '123px';
        divTitle.style.margin = "-160px";

        const Title = document.createElement("h1");
            Title.textContent = 'PAUSE';
            Title.style.fontSize = '80px';
            Title.style.color = '#FFFFFF';
            Title.style.textAlign= "center";
            Title.style.border = "3px solid #FFFFFF";
            Title.style.borderRadius = '14px';

    const divContentMenu = document.createElement("div");
        divContentMenu.style.display = "flex";
        divContentMenu.style.flexDirection = "column";
        divContentMenu.style.justifyContent = "space-between";
        divContentMenu.style.alignItems = 'center';
        divContentMenu.style.marginBottom = '-100px';
        divContentMenu.style.height = "20%";
        divContentMenu.style.width = "10%";

    gamecontent.appendChild(madiv);
    madiv.appendChild(divContentMenu)
    divContentMenu.appendChild(divTitle)
    divContentMenu.appendChild(divBtn);
    divTitle.appendChild(Title);
    divBtn.append(btnContinu, btnRestart, btnExit);
}
export default subMenuPause