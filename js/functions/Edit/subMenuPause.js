function subMenuPause () {
    const madiv = document.createElement("div");
    const divBtn = document.createElement("div");
    const divTitle = document.createElement("div");
    const divContentMenu = document.createElement("div");

    const Title = document.createElement("h1");

    const btnContinu = document.createElement("button");
    const btnRestart = document.createElement("button");
    const btnExit = document.createElement("button");

    madiv.style.display = "flex";
    madiv.style.alignItems = "center";
    madiv.style.justifyContent = "center";
    madiv.style.backgroundColor = "#FFBB0B";
    madiv.style.width = "100%";
    madiv.style.height = "100vh";


    divTitle.style.boxSizing = 'border-box';
    divTitle.style.border = '3px solid #FFFFFF';
    divTitle.style.borderRadius = '14px';
    divTitle.style.width = '322px';
    divTitle.style.height = '123px';
    divTitle.style.position = 'absolute';
    divTitle.style.top = '199px';
    // divTitle.style.left = '50px';
    Title.textContent = 'PAUSE';
    Title.style.fontSize = '80px';
    Title.style.fontStyle = 'normal';
    Title.style.color = '#FFFFFF';
    Title.style.lineHeight = '97px';


    divBtn.style.position ='absolute';
    divBtn.style.display = "flex";
    divBtn.style.flexDirection = "column";
    divBtn.style;
    divBtn.style.gap = "3px";
    divBtn.style.width = '189px';
    divBtn.style.height = '284px';
    btnContinu.textContent = "Continu";
    btnRestart.textContent = "Restart";
    btnExit.textContent = "Exit";
    btnContinu.className = 'btn';
    btnRestart.className = 'btn';
    btnExit.className = 'btn';

    divContentMenu.style.display = "flex";
    divContentMenu.style.flexDirection = "column";
    divContentMenu.style.justifyContent = "space-between";
    divContentMenu.style.alignItems = 'center';
    divContentMenu.style.marginBottom = '-100px';
    divContentMenu.style.height = "20%";
    divContentMenu.style.width = "10%";



    document.body.appendChild(madiv);
    madiv.appendChild(divContentMenu)
    divContentMenu.appendChild(divTitle)
    divContentMenu.appendChild(divBtn);
    divTitle.appendChild(Title);
    divBtn.append(btnContinu, btnRestart, btnExit);
}
export default subMenuPause
