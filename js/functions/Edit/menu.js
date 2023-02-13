const madiv = document.createElement("div");
madiv.style.width = "100%";
madiv.style.height = "100vh";

madiv.id = "madiv"
document.querySelector(".game-content").appendChild(madiv)


function menu () {
    
    menuJouer()

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
            buttun_area.style.justifyContent = "space-around";

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



                const buttun_choise_difficulty = document.createElement ("div")

                buttun_choise_difficulty.style.display = "flex"
                buttun_choise_difficulty.style.justifyContent = "center"
                buttun_choise_difficulty.style.alignItems = "center";
                buttun_choise_difficulty.style.height = "25%"
                buttun_choise_difficulty.style.width = "50%"
                buttun_choise_difficulty.style.border ="solid 2px white"
                buttun_choise_difficulty.style.borderRadius = "25px"


                buttun_choise_difficulty.id = "choise_difficulty"
                document.querySelector("#buttun_area").appendChild(buttun_choise_difficulty)


                    const text_choise_difficulty = document.createElement("span")

                    text_choise_difficulty.innerText = "Choisir la difficulé"
                    text_choise_difficulty.style.fontSize = "40px"
                    text_choise_difficulty.style.fontWeight = "500"
                    text_choise_difficulty.style.color = "#C28F0B"
                    text_choise_difficulty.style.fontWeight = "700";
                    text_choise_difficulty.style.fontSize = "45px";
                    

                    document.querySelector("#choise_difficulty").appendChild(text_choise_difficulty)


                const buttun_launch = document.createElement ("div")

                buttun_launch.style.display = "flex"
                buttun_launch.style.justifyContent = "center"
                buttun_launch.style.alignItems = "center";
                buttun_launch.style.height = "25%"
                buttun_launch.style.width = "50%"
                buttun_launch.style.border ="solid 2px white"
                buttun_launch.style.borderRadius = "25px"

                buttun_launch.id = "buttun_launch"
                document.querySelector("#buttun_area").appendChild(buttun_launch)


                    const text_launch = document.createElement("span")

                    text_launch.innerText = "Lancer la partie"
                    text_launch.style.fontSize = "40px"
                    text_launch.style.fontWeight = "500"
                    text_launch.style.color = "white"
                    text_launch.style.fontWeight = "700";
                    text_launch.style.fontSize = "45px";

                    document.querySelector("#buttun_launch").appendChild(text_launch)

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

export default menu;