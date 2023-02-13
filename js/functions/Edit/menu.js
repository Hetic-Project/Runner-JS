function menu (){
    const madiv = document.createElement("div");
    const divFooter = document.createElement("div");
    const divNav = document.createElement("div");
    const divNavTitle = document.createElement("div");
    // const divNavBtnMenu = document.createElement("div");
    // const divNavScore = document.createElement("div");
    const divNavRight = document.createElement("div");
    const divPause = document.createElement("div");

    const Title = document.createElement("h1");
    const btnMenu = document.createElement("btn");
    const score = document.createElement("h3");


    madiv.style.width = "100%";
    madiv.style.height = "100vh";
    madiv.style.backgroundImage = "url('./img/back.png')";

    divFooter.style.width = "100%";
    divFooter.style.border = '3px solid #FFBB0B';
    divFooter.style.height = "50px";
    divFooter.style.backgroundImage = "url('./img/platform.png')";

    divNav.style.display = 'flex';
    divNav.style.justifyContent = 'space-between';
    divNav.style.alignItems = 'center';
    divNav.style.height = '10vh';
    divNav.style.background = 'none';

    divNavRight.style.display ='flex';
    divNavRight.style.justifyContent = 'space-between';
    divNavRight.style.alignItems = 'center';
    // divNavRight.style.height = '10vh';

    Title.textContent = 'RUNNING';
    Title.style.fontSize = '80px';
    Title.style.fontWeight = '900'
    Title.style.fontStyle = 'normal';
    Title.style.color = '#FFBB0B';
    Title.style.lineHeight = '97px';

    score.textContent = "score : 50 pts";
    score.style.color = "#ffffff";

    btnMenu.textContent = 'Menu';
    btnMenu.style.backgroundColor = '#FFBB0B';
    // btnMenu.style.border = '3px solid #FFBB0B';
    btnMenu.style.padding = '10px';
    btnMenu.style.borderRadius = '20px';
    btnMenu.style.width = '148px';
    btnMenu.style.color = "#ffffff";

    
    


    document.body.appendChild(madiv);
    madiv.appendChild(divNav);
    madiv.appendChild(divFooter);
    madiv.appendChild(divPause);
    divNav.append(divNavTitle, divNavRight);
    divNavTitle.appendChild(Title);
    divNavRight.append(btnMenu, score);
    // divNavBtnMenu.appendChild(btnMenu);
    // divNavScore.appendChild(score);
    
    



};
export default menu;