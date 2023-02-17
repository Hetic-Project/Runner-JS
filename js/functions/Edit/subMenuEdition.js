function subMenuEdition(){
    // console.log("coucou"); A dé-commenter si il faut 
    const gamecontent = document.querySelector(".game-content"); //sélectionne la div game content de l'index.html
    const madiv = document.createElement("div");
    const divContent = document.createElement("div");
    const divNav = document.createElement("div");
    const divLR = document.createElement("div");
    const divRight = document.createElement("div");
    const divLeft = document.createElement("div");

    const btnExport = document.createElement("button");
    const Title = document.createElement("h1");
    const rightTitle = document.createElement("h2");
    const text_import = document.createElement("span");
    

    madiv.style.display = "flex";
    madiv.style.width = "100%";
    madiv.style.height = "100vh";
    madiv.style.overflow = "hidden";
    madiv.backgroundColor = "yellow"

    divContent.style.width = "100%";
    divContent.style.height = "100vh";
    divContent.style.overflow = "hidden";

    divNav.style.display = "flex";
    divNav.style.alignContent = "center";
    divNav.style.justifyContent = 'center';
    divNav.style.padding = '5px';
    divNav.style.width = "100%";
    divNav.style.height = "10vh";
    divNav.style.backgroundColor = "#ffffff";
    divNav.style.border = "2px solid #FFBB0B";
    Title.innerText = "EDITION DE MAP";
    Title.style.fontSize = '60px';


    divLR.style.display = 'flex';
    divLR.style.position = 'relative';
    divLR.style.width = '100%';
    divLR.style.height = '100vh';

    divLeft.style.width = "60%";
    divLeft.style.height = "90vh";
    divLeft.style.backgroundColor = "#FFBB0B";

    divRight.style.width = "40%";
    divRight.style.height = "90vh";
    divRight.style.backgroundImage = "url('./img/back.png')";
    divRight.style.backgroundSize = "100% 100%";
    divRight.style.backgroundRepeat = "no-repeat";
    divRight.style.justifyContent = "center";

    rightTitle.textContent = " PARAMETRES";
    rightTitle.style.color = "#ffffff";
    rightTitle.style.textAlign = "center";
    rightTitle.style.fontSize = "40px"
    rightTitle.style.fontWeight = "900";

<<<<<<< HEAD
    
=======
    btnExport.style.display = "flex"
    btnExport.style.backgroundColor = "#FFBB0B"
    btnExport.style.justifyContent = "center"
    btnExport.style.alignItems = "center";
    btnExport.style.height = "12%"
    btnExport.style.width = "35%"
    btnExport.style.border ="solid 3px #FFFFFF"
    btnExport.style.borderRadius = "25px"
    btnExport.style.margin = "17% 35%";
    btnExport.style.cursor = "pointer";
    btnExport.id = "buttun_export"
>>>>>>> 455568d084f84d0ff9bb20c812cf200a28072db1

    

    //form

    const divForm = document.createElement("div");
        divForm.style.display = "flex";
        divForm.style.width = "50vh";
        divForm.style.height = "50vh";
        divForm.style.padding = "20px 30px 0px 20px"

    const form = document.createElement("form");
        form.setAttribute('action', '#');
        form.style.margin = "20% 10% 0% 20%"
        // form.style.backgroundColor = "#FFBB0B";

    const div_el1 = document.createElement("div");
        div_el1.style.display = "flex";
        div_el1.style.alignContent = "center";
        div_el1.style.paddingBottom = "20px";

    const inputLabel = document.createElement('label');
        inputLabel.textContent = 'TITRE : ';
        inputLabel.style.color = 'white';
        inputLabel.style.fontWeight = "900";
        inputLabel.style.fontSize = "30px";
        inputLabel.style.paddingRight = "20px";

    const inputTitre = document.createElement("input");
        inputTitre.setAttribute('type', 'text');
        inputTitre.setAttribute('name', 'nom');
        inputTitre.style.background = "none";
        inputTitre.style.border = "1px solid white";
        inputTitre.style.borderRadius = "15px";
        inputTitre.style.marginLeft = "74px";
        inputTitre.style.color = "white";
        inputTitre.style.paddingLeft ="10px";
        div_el1.append(inputLabel, inputTitre);
        form.appendChild(div_el1);

    const div_el2 = document.createElement("div");
        div_el2.style.display = "flex";
        div_el2.style.alignContent = "center";
        div_el2.style.paddingBottom = "20px";
    const inputLabel2 = document.createElement('label');
        inputLabel2.textContent = 'CREATEUR : ';
        inputLabel2.style.color = 'white';
        inputLabel2.style.fontWeight = "900";
        inputLabel2.style.fontSize = "30px";
        inputLabel2.style.paddingRight = "20px";

    const inputCreateur = document.createElement('input');
        inputCreateur.setAttribute('name', 'prenom');
        inputCreateur.setAttribute('type', 'text');
        inputCreateur.style.background = "none";
        inputCreateur.style.border = "1px solid white";
        inputCreateur.style.borderRadius = "15px";
        inputCreateur.style.color = "white";
        inputCreateur.style.paddingLeft ="10px";
        div_el2.append(inputLabel2, inputCreateur);
        form.appendChild(div_el2);

    const div_el3 = document.createElement("div");
        
    const inputLabel3 = document.createElement('label');
        inputLabel3.textContent = 'DIFFICULTY : ';
        inputLabel3.style.color = 'white';
        inputLabel3.style.fontWeight = "900";
        inputLabel3.style.fontSize = "30px";
        inputLabel3.style.paddingRight = "70px";

    // la liste déroulante pour le niveau 
    const inputSelect = document.createElement('select');
    const options = ["1", "2", "3","4","5"];
        for(var i = 0; i < options.length; i++) {
            var option = document.createElement("option");
            option.text = options[i];
            inputSelect.add(option);
        }
      
    inputSelect.setAttribute('type', 'number');
    div_el3.append(inputLabel3, inputSelect);
    form.appendChild(div_el3);
    divForm.appendChild(form);

    const div_buttun_back = document.createElement("div")

            div_buttun_back.style.display = "flex"
            div_buttun_back.style.height = "30%"
            div_buttun_back.style.width = "35%"
            div_buttun_back.style.marginLeft = "40px"

            div_buttun_back.id = "div_buttun_back" 
            // div_buttun_back.appendChild(div_buttun_back)

                const arrow_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                arrow_svg.setAttribute("width", "64");
                arrow_svg.setAttribute("height", "54");
                arrow_svg.setAttribute("viewBox", "0 0 64 54");
                arrow_svg.setAttribute("fill", "none");

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                path.setAttribute("fill", "#762929");
                arrow_svg.appendChild(path);

                div_buttun_back.appendChild(arrow_svg)

                const arrow_text = document.createElement("span")

                arrow_text.innerText = "RETOUR"
                arrow_text.style.fontWeight = "700"
                arrow_text.style.fontSize = "45px"
                arrow_text.style.color = "black"
                arrow_text.style.lineHeight = "54px";
                arrow_text.style.marginLeft = "20px"

                div_buttun_back.appendChild(arrow_text)

    gamecontent.appendChild(madiv);
    madiv.appendChild(divContent)
    divContent.append(divNav,divLR);
    divLR.append(divLeft,divRight);
    divNav.append(Title, div_buttun_back);
    divRight.append(rightTitle, form, divForm);
    
}
export default subMenuEdition