function subMenuEdition(){
    const madiv = document.createElement("div");
    const divContent = document.createElement("div");
    const divNav = document.createElement("div");
    const divLR = document.createElement("div");
    const divRight = document.createElement("div");
    const divRightInfo = document.createElement("div");
    const divLeft = document.createElement("div");

    const Title = document.createElement("h1");
    const rightTitle = document.createElement("h2");
    const btnExport = document.createElement("button");
    const form = document.createElement("form");

    // madiv.style.display = "flex";
    madiv.style.width = "100%";
    madiv.style.height = "100vh";
    // madiv.style.border = "3px solid #ffffff";

    // divContent.style.display = "flex";
    divContent.style.width = "100%";
    divContent.style.height = "100vh";

    divNav.style.display = "flex";
    divNav.style.alignContent = "center";
    divNav.style.justifyContent = 'center';
    divNav.style.padding = '5px';
    divNav.style.width = "100%";
    divNav.style.height = "10vh";
    divNav
    divNav.style.backgroundColor = "#ffffff";
    Title.innerText = "EDITION DE MAP";
    Title.style.fontSize = '60px';


    divLR.style.display = 'flex';
    divLR.style.position = 'relative';
    divLR.style.width = '100%';
    divLR.style.height = '100vh';

    // divLeft.style.display = "flex";
    divLeft.style.width = "50%";
    divLeft.style.height = "90vh";
    divLeft.style.backgroundColor = "#FFBB0B";

    // divRight.style.display = "flex";
    divRight.style.width = "50%";
    divRight.style.height = "90vh";
    divRight.style.backgroundImage = "url('./img/back.png')";
    madiv.style.backgroundSize = "100% 100%";
    madiv.style.backgroundRepeat = "no-repeat";
    divRight.style.justifyContent = "center";
    rightTitle.textContent = " PARAMETRE";
    rightTitle.style.color = "#ffffff";
    rightTitle.style.textAlign = "center";
    


    document.body.appendChild(madiv);
    madiv.appendChild(divContent);
    divContent.append(divNav,divLR);
    divLR.append(divLeft,divRight);
    divNav.appendChild(Title);
    divRight.append(rightTitle, form, btnExport);
   



}   
export default subMenuEdition;