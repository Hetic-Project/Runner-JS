const madiv = document.createElement("div");
madiv.style.width = "100%";
madiv.style.height = "100vh";

madiv.id = "madiv"
document.querySelector(".game-content").appendChild(madiv)


function menu () {
    
    menuParametre()

    document.querySelector("#div_buttun_back").onclick = () => {
        madiv.innerHTML = ""
    }

};

function menuJouer () {
    
    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/background.png)";
    menu.style.backgroundSize = "100% 100%";
    menu.style.backgroundRepeat = "no-repeat";
    menu.style.flexWrap = "wrap";
    
    menu.id = "menu"
    document.querySelector("#madiv").appendChild(menu)


        const div_content = document.createElement("div")

        div_content.style.height = "75%"
        div_content.style.width = "55%"
        div_content.style.marginTop = "25px"

        div_content.id = "div_content"
        document.querySelector("#menu").appendChild(div_content)

            // text

            const big_text = document.createElement("div")

            big_text.style.display = "flex"
            big_text.style.alignItems = "center"
            big_text.style.justifyContent = "center"
            big_text.style.flexDirection = "column";
            big_text.style.alignContent = "space-around";
            big_text.style.height = "40%"
            big_text.style.width = "100%"
            
            big_text.id = "big_text"
            document.querySelector("#div_content").appendChild(big_text)

                const jouer =document.createElement("h2")

                jouer.innerText = "JOUER"
                jouer.style.marginTop = "5px"
                jouer.style.fontSize = "80px"
                jouer.style.fontWeight = "900"
                jouer.style.lineHeight = "73px";
                jouer.style.color = "#C28F0B"



                document.querySelector("#big_text").appendChild(jouer)


            // bouton

            const buttun_area = document.createElement("div")

            buttun_area.style.display = "flex"
            buttun_area.style.alignItems = "center"
            buttun_area.style.justifyContent = "center"
            buttun_area.style.flexDirection = "column";
            buttun_area.style.justifyContent = "center";

            buttun_area.style.height = "60%"
            buttun_area.style.width = "100%"

            buttun_area.id = "buttun_area"
            document.querySelector("#div_content").appendChild(buttun_area)


                const buttun_import = document.createElement ("div")

                buttun_import.style.display = "flex"
                buttun_import.style.justifyContent = "center"
                buttun_import.style.alignItems = "center";
                buttun_import.style.height = "25%"
                buttun_import.style.width = "50%"
                buttun_import.style.border ="solid 2px white"
                buttun_import.style.borderRadius = "25px"
                buttun_import.style.marginBottom = "40px"

                buttun_import.id = "buttun_import"
                document.querySelector("#buttun_area").appendChild(buttun_import)


                    const text_import = document.createElement("span")

                    text_import.innerText = "Importer un niveau"
                    text_import.style.fontSize = "40px"
                    text_import.style.fontWeight = "500"
                    text_import.style.color = "white"
                    text_import.style.fontWeight = "700";
                    text_import.style.fontSize = "45px";

                    document.querySelector("#buttun_import").appendChild(text_import)


                const area_launch = document.createElement ("div")

                area_launch.style.display = "flex"
                area_launch.style.justifyContent = "center"
                area_launch.style.alignItems = "center";
                area_launch.style.height = "25%"
                area_launch.style.width = "100%"

                area_launch.id = "area_launch"
                document.querySelector("#buttun_area").appendChild(area_launch)


                const buttun_launch = document.createElement ("div")

                buttun_launch.style.display = "flex"
                buttun_launch.style.justifyContent = "center"
                buttun_launch.style.alignItems = "center";
                buttun_launch.style.height = "100%"
                buttun_launch.style.width = "50%"
                buttun_launch.style.border ="solid 2px white"
                buttun_launch.style.borderRadius = "25px"
                buttun_launch.style.marginLeft = "65px"
                buttun_launch.style.marginRight = "30px"


                buttun_launch.id = "buttun_launch"
                document.querySelector("#area_launch").appendChild(buttun_launch)
                

                    const text_launch = document.createElement("span")

                    text_launch.innerText = "Lancer la partie"
                    text_launch.style.fontSize = "40px"
                    text_launch.style.fontWeight = "500"
                    text_launch.style.color = "white"
                    text_launch.style.fontWeight = "700";
                    text_launch.style.fontSize = "45px"; 

                    document.querySelector("#buttun_launch").appendChild(text_launch)


                    const liste_deroulante = document.createElement("select");

                    const options = ["1", "2", "3","4","5"];
                    for(var i = 0; i < options.length; i++) {
                      var option = document.createElement("option");
                      option.text = options[i];
                      liste_deroulante.add(option);
                    }

                    document.querySelector("#area_launch").appendChild(liste_deroulante)


        const div_back = document.createElement("div")

        div_back.style.height = "20%"
        div_back.style.width = "100%"
        div_back.style.marginTop = "25px"
        div_back.style.margin = "0"

        div_back.id = "div_back"
        document.querySelector("#menu").appendChild(div_back)


            const div_buttun_back = document.createElement("div")

            div_buttun_back.style.display = "flex"
            div_buttun_back.style.height = "30%"
            div_buttun_back.style.width = "35%"
            div_buttun_back.style.marginLeft = "40px"

            div_buttun_back.id = "div_buttun_back" 
            document.querySelector("#div_back").appendChild(div_buttun_back)

                const arrow_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                arrow_svg.setAttribute("width", "64");
                arrow_svg.setAttribute("height", "54");
                arrow_svg.setAttribute("viewBox", "0 0 64 54");
                arrow_svg.setAttribute("fill", "none");

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                path.setAttribute("fill", "#762929");
                arrow_svg.appendChild(path);

                document.querySelector("#div_buttun_back").appendChild(arrow_svg)

                const arrow_text = document.createElement("span")

                arrow_text.innerText = "RETOUR"
                arrow_text.style.fontWeight = "700"
                arrow_text.style.fontSize = "45px"
                arrow_text.style.color = "white"
                arrow_text.style.lineHeight = "54px";
                arrow_text.style.marginLeft = "20px"

                


                document.querySelector("#div_buttun_back").appendChild(arrow_text)


        
}

function menuEdition () {
    
    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/background.png)";
    menu.style.backgroundSize = "100% 100%";
    menu.style.backgroundRepeat = "no-repeat";
    menu.style.flexWrap = "wrap";
    
    menu.id = "menu"
    document.querySelector("#madiv").appendChild(menu)


        const div_content = document.createElement("div")

        div_content.style.height = "75%"
        div_content.style.width = "55%"
        div_content.style.marginTop = "25px"

        div_content.id = "div_content"
        document.querySelector("#menu").appendChild(div_content)

            // text

            const big_text = document.createElement("div")

            big_text.style.display = "flex"
            big_text.style.alignItems = "center"
            big_text.style.justifyContent = "center"
            big_text.style.flexDirection = "column";
            big_text.style.alignContent = "space-around";
            big_text.style.height = "40%"
            big_text.style.width = "100%"
            
            big_text.id = "big_text"
            document.querySelector("#div_content").appendChild(big_text)

                const jouer =document.createElement("h2")

                jouer.innerText = "EDITION"
                jouer.style.marginTop = "5px"
                jouer.style.fontSize = "80px"
                jouer.style.fontWeight = "900"
                jouer.style.lineHeight = "73px";
                jouer.style.color = "#C28F0B"



                document.querySelector("#big_text").appendChild(jouer)


            // bouton

            const buttun_area = document.createElement("div")

            buttun_area.style.display = "flex"
            buttun_area.style.alignItems = "center"
            buttun_area.style.justifyContent = "center"
            buttun_area.style.flexDirection = "column";
            buttun_area.style.justifyContent = "center";

            buttun_area.style.height = "60%"
            buttun_area.style.width = "100%"

            buttun_area.id = "buttun_area"
            document.querySelector("#div_content").appendChild(buttun_area)


                const buttun_import = document.createElement ("div")

                buttun_import.style.display = "flex"
                buttun_import.style.justifyContent = "center"
                buttun_import.style.alignItems = "center";
                buttun_import.style.height = "25%"
                buttun_import.style.width = "50%"
                buttun_import.style.border ="solid 2px white"
                buttun_import.style.borderRadius = "25px"
                buttun_import.style.marginBottom = "40px"


                buttun_import.id = "buttun_import"
                document.querySelector("#buttun_area").appendChild(buttun_import)


                    const text_import = document.createElement("span")

                    text_import.innerText = "Importer un niveau"
                    text_import.style.fontSize = "40px"
                    text_import.style.fontWeight = "500"
                    text_import.style.color = "white"
                    text_import.style.fontWeight = "700";
                    text_import.style.fontSize = "45px";

                    document.querySelector("#buttun_import").appendChild(text_import)


                const buttun_create = document.createElement ("div")

                buttun_create.style.display = "flex"
                buttun_create.style.justifyContent = "center"
                buttun_create.style.alignItems = "center";
                buttun_create.style.height = "25%"
                buttun_create.style.width = "50%"
                buttun_create.style.border ="solid 2px white"
                buttun_create.style.borderRadius = "25px"

                buttun_create.id = "buttun_create"
                document.querySelector("#buttun_area").appendChild(buttun_create)
                

                    const text_create = document.createElement("span")

                    text_create.innerText = "Lancer la partie"
                    text_create.style.fontSize = "40px"
                    text_create.style.fontWeight = "500"
                    text_create.style.color = "white"
                    text_create.style.fontWeight = "700";
                    text_create.style.fontSize = "45px"; 

                    document.querySelector("#buttun_create").appendChild(text_create)

        const div_back = document.createElement("div")

        div_back.style.height = "20%"
        div_back.style.width = "100%"
        div_back.style.marginTop = "25px"
        div_back.style.margin = "0"

        div_back.id = "div_back"
        document.querySelector("#menu").appendChild(div_back)


            const div_buttun_back = document.createElement("div")

            div_buttun_back.style.display = "flex"
            div_buttun_back.style.height = "30%"
            div_buttun_back.style.width = "35%"
            div_buttun_back.style.marginLeft = "40px"

            div_buttun_back.id = "div_buttun_back" 
            document.querySelector("#div_back").appendChild(div_buttun_back)

                const arrow_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                arrow_svg.setAttribute("width", "64");
                arrow_svg.setAttribute("height", "54");
                arrow_svg.setAttribute("viewBox", "0 0 64 54");
                arrow_svg.setAttribute("fill", "none");

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                path.setAttribute("fill", "#762929");
                arrow_svg.appendChild(path);

                document.querySelector("#div_buttun_back").appendChild(arrow_svg)

                const arrow_text = document.createElement("span")

                arrow_text.innerText = "RETOUR"
                arrow_text.style.fontWeight = "700"
                arrow_text.style.fontSize = "45px"
                arrow_text.style.color = "white"
                arrow_text.style.lineHeight = "54px";
                arrow_text.style.marginLeft = "20px"

                


                document.querySelector("#div_buttun_back").appendChild(arrow_text)


        
}

function menuParametre () {
    
    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/background.png)";
    menu.style.backgroundSize = "100% 100%";
    menu.style.backgroundRepeat = "no-repeat";
    menu.style.flexWrap = "wrap";
    
    menu.id = "menu"
    document.querySelector("#madiv").appendChild(menu)


        const div_content = document.createElement("div")

        div_content.style.height = "75%"
        div_content.style.width = "55%"
        div_content.style.marginTop = "25px"

        div_content.id = "div_content"
        document.querySelector("#menu").appendChild(div_content)

            // text

            const big_text = document.createElement("div")

            big_text.style.display = "flex"
            big_text.style.alignItems = "center"
            big_text.style.justifyContent = "center"
            big_text.style.flexDirection = "column";
            big_text.style.alignContent = "space-around";
            big_text.style.height = "40%"
            big_text.style.width = "100%"
            
            big_text.id = "big_text"
            document.querySelector("#div_content").appendChild(big_text)

                const PARAMETRE =document.createElement("h2")

                PARAMETRE.innerText = "PARAMETRE"
                PARAMETRE.style.marginTop = "5px"
                PARAMETRE.style.fontSize = "80px"
                PARAMETRE.style.fontWeight = "900"
                PARAMETRE.style.lineHeight = "73px";
                PARAMETRE.style.color = "#C28F0B"

                document.querySelector("#big_text").appendChild(PARAMETRE)


            // bouton

            const text_area = document.createElement("div")

            text_area.style.display = "flex"
            text_area.style.alignItems = "center"
            text_area.style.justifyContent = "center"
            text_area.style.flexDirection = "column";
            text_area.style.justifyContent = "center";

            text_area.style.height = "60%"
            text_area.style.width = "100%"

            text_area.id = "text_area"
            document.querySelector("#div_content").appendChild(text_area)


                const div_sauter = document.createElement ("div")

                div_sauter.style.display = "flex"
                div_sauter.style.justifyContent = "center"
                div_sauter.style.alignItems = "center";
                div_sauter.style.height = "25%"
                div_sauter.style.width = "50%"
                div_sauter.style.borderRadius = "25px"
                div_sauter.style.marginBottom = "40px"

                div_sauter.id = "div_sauter"
                document.querySelector("#text_area").appendChild(div_sauter)


                    const arrow_up = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    arrow_up.setAttribute("width", "64");
                    arrow_up.setAttribute("height", "54");
                    arrow_up.setAttribute("viewBox", "0 0 64 54");
                    arrow_up.setAttribute("fill", "none");
                    arrow_up.setAttribute("transform", "rotate(90)");
    
                    const path_arrow_up = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path_arrow_up.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                    path_arrow_up.setAttribute("fill", "white");
                    arrow_up.appendChild(path_arrow_up);

                    document.querySelector("#div_sauter").appendChild(arrow_up)

                    const text_up = document.createElement("span")

                    text_up.innerText = ": SAUTER"
                    text_up.style.marginLeft = "20px"
                    text_up.style.fontSize = "40px"
                    text_up.style.fontWeight = "500"
                    text_up.style.color = "white"
                    text_up.style.fontWeight = "700";
                    text_up.style.fontSize = "45px"; 

                    document.querySelector("#div_sauter").appendChild(text_up)

                const div_glisser = document.createElement ("div")

                div_glisser.style.display = "flex"
                div_glisser.style.justifyContent = "center"
                div_glisser.style.alignItems = "center";
                div_glisser.style.height = "25%"
                div_glisser.style.width = "50%"
                div_glisser.style.borderRadius = "25px"

                div_glisser.id = "div_glisser"
                document.querySelector("#text_area").appendChild(div_glisser)
                
                    const arrow_down = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                    arrow_down.setAttribute("width", "64");
                    arrow_down.setAttribute("height", "54");
                    arrow_down.setAttribute("viewBox", "0 0 64 54");
                    arrow_down.setAttribute("fill", "none");
                    arrow_down.setAttribute("transform", "rotate(270)");

                    const path_arrow_down = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path_arrow_down.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                    path_arrow_down.setAttribute("fill", "white");
                    arrow_down.appendChild(path_arrow_down);

                    document.querySelector("#div_glisser").appendChild(arrow_down)

                    const text_down = document.createElement("span")

                    text_down.innerText = ": GLISSER"
                    text_down.style.marginLeft = "20px"
                    text_down.style.fontSize = "40px"
                    text_down.style.fontWeight = "500"
                    text_down.style.color = "white"
                    text_down.style.fontWeight = "700";
                    text_down.style.fontSize = "45px"; 

                    document.querySelector("#div_glisser").appendChild(text_down)

        const div_back = document.createElement("div")

        div_back.style.height = "20%"
        div_back.style.width = "100%"
        div_back.style.marginTop = "25px"
        div_back.style.margin = "0"

        div_back.id = "div_back"
        document.querySelector("#menu").appendChild(div_back)


            const div_buttun_back = document.createElement("div")

            div_buttun_back.style.display = "flex"
            div_buttun_back.style.height = "30%"
            div_buttun_back.style.width = "35%"
            div_buttun_back.style.marginLeft = "40px"

            div_buttun_back.id = "div_buttun_back" 
            document.querySelector("#div_back").appendChild(div_buttun_back)

                const arrow_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                arrow_svg.setAttribute("width", "64");
                arrow_svg.setAttribute("height", "54");
                arrow_svg.setAttribute("viewBox", "0 0 64 54");
                arrow_svg.setAttribute("fill", "none");

                const path_arrow_back = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path_arrow_back.setAttribute("d", "M13.3617 13.462L26.7234 0L35.219 0C39.8916 0 43.7146 0.0511006 43.7146 0.113557C43.7146 0.176013 39.2683 4.70662 33.8339 10.1816C28.2907 15.7662 23.9532 20.2518 23.9532 20.3999C23.9532 20.6496 25.0245 20.6658 43.9766 20.702L64 20.7402V27.0754V33.4106L44.0515 33.4489C25.1705 33.4851 24.1029 33.5013 24.1029 33.751C24.1029 33.899 28.4083 38.3523 33.9088 43.8939C39.302 49.3273 43.7146 53.824 43.7146 53.8864C43.7146 53.9489 39.8923 54 35.2207 54H26.7267L13.3634 40.5389C6.01351 33.1352 -1.00432e-06 27.0431 -1.00432e-06 27.0008C-1.00432e-06 26.9585 6.01277 20.8661 13.3617 13.462Z");
                path_arrow_back.setAttribute("fill", "#762929");
                arrow_svg.appendChild(path_arrow_back);

                document.querySelector("#div_buttun_back").appendChild(arrow_svg)

                const arrow_text = document.createElement("span")

                arrow_text.innerText = "RETOUR"
                arrow_text.style.fontWeight = "700"
                arrow_text.style.fontSize = "45px"
                arrow_text.style.color = "white"
                arrow_text.style.lineHeight = "54px";
                arrow_text.style.marginLeft = "20px"

                


                document.querySelector("#div_buttun_back").appendChild(arrow_text)


        
}

export default menu;