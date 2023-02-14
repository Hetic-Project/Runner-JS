const madiv = document.createElement("div");
madiv.style.width = "100%";
madiv.style.height = "100vh";

madiv.id = "madiv"
document.querySelector(".game-content").appendChild(madiv)

function menu() {
    // menuDuJeu()
    // madiv.innerHTML = ""
    menuBienvenue()
    // menuJouer()

}

function menuDuJeu (){

    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/back.png)";
    menu.style.backgroundSize = "100% 100%";
    menu.style.backgroundRepeat = "no-repeat";

    menu.id = "menu"
    document.querySelector("#madiv").appendChild(menu)

    
        const divNav = document.createElement("div");

        divNav.style.display = "flex";
        divNav.style.justifyContent = "space-between";
        divNav.style.alignItems = "center";
        divNav.style.height = '15vh';
        divNav.style.background = 'none';

        divNav.id = "divNav";
        document.querySelector("#menu").appendChild(divNav);


        // const divNavTitle = document.createElement("div");

        // divNavTitle.style.display = "flex";
        // divNavTitle.style.margin = "30px";

        // divNavTitle.id = "divNavTitle";
        // document.querySelector("#divNav").appendChild(divNavTitle);

            const Title = document.createElement("h1");

            Title.textContent = 'RUNNING';
            Title.style.fontSize = '80px';
            Title.style.fontWeight = '900'
            Title.style.fontStyle = 'normal';
            Title.style.color = '#FFBB0B';
            Title.style.lineHeight = '97px';

            Title.id = "Title";
            document.querySelector("#divNav").appendChild(Title)

        const divNavRight = document.createElement("div");

        divNavRight.style.display ='flex';
        divNavRight.style.justifyContent = 'space-between';
        divNavRight.style.alignItems = 'center';
        divNavRight.style.width = "30vh";        divNavRight.style.marginLeft ="130%";

        divNavRight.id = "divNavRight";
        document.querySelector("#divNav").appendChild(divNavRight);

            const btnMenu = document.createElement("btn");

            btnMenu.textContent = 'Menu';
            btnMenu.style.backgroundColor = '#FFBB0B';
            btnMenu.style.padding = '10px';
            btnMenu.style.borderRadius = '20px';
            btnMenu.style.width = '130px';
            btnMenu.style.color = "#ffffff";

            btnMenu.id = "btnMenu";
            document.querySelector("#divNavRight").appendChild(btnMenu);


            const score = document.createElement("h3");

            score.textContent = "score : 50 pts";
            score.style.color = "#ffffff";
            score.style.paddingLeft = "20px"
            // score.style.fontSize = "25px";

            score.id = "score";
            document.querySelector("#divNavRight").appendChild(score);


        const divPause = document.createElement("div");

        divPause.style.display = "flex";
        divPause.style.borderRadius = "50%";
        divPause.style.backgroundColor = "#ffffff";
        divPause.style.width = "50px";
        divPause.style.height = "50px";
        divPause.style.margin = "6% 0% 0% 41%";
        divPause.code = '<i class="uil uil-pause-circle"></i>';

        divPause.id = "divPause";
        document.querySelector("#menu").appendChild(divPause);

            
        const pause = document.createElement("span")

        pause.innerHTML = '<i class="uil uil-pause-circle"></i>';
        pause.style.width = "50px";
        pause.style.height = "50px";

        pause.id = "pause";
        document.querySelector("#divPause").appendChild(pause);


        const divFooter = document.createElement("div");

        divFooter.style.display = "flex";
        divFooter.style.width = "100%";
        divFooter.style.height = "50px";
        divFooter.style.border = '3px solid #FFBB0B';
        divFooter.style.backgroundImage = "url('./img/back.png')";
        divFooter.style.margin = "400px";

        divFooter.id = "divFooter";
        document.querySelector("#menu").appendChild(divFooter);

        const obstacle = document.createElement("img")
        obstacle.src = "./img/corboitachi.png";
        obstacle.style.width = "60px";
        obstacle.style.height = "60px";

        obstacle.id = "obstacle";
        document.querySelector("#divFooter").appendChild(obstacle);
};


function menuBienvenue () {

    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/back.png)";
    menu.style.backgroundSize = "100% 100%";
    menu.style.backgroundRepeat = "no-repeat";

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

                const bienvenue =document.createElement("h2")

                bienvenue.innerText = "BIENVENUE SUR LE"
                bienvenue.style.marginTop = "5px"
                bienvenue.style.fontSize = "60px"
                bienvenue.style.fontWeight = "800"
                bienvenue.style.lineHeight = "73px";
                bienvenue.style.color = "#C28F0B"



                document.querySelector("#big_text").appendChild(bienvenue)

                const runner_text =document.createElement("h1")

                runner_text.innerText = "RUNNER"
                runner_text.style.fontSize = "150px"
                runner_text.style.fontWeight = "900"
                runner_text.style.lineHeight = "182px";
                runner_text.style.color = "#FFFFFF"

                document.querySelector("#big_text").appendChild(runner_text)

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


                const buttun_jouer = document.createElement ("div")

                buttun_jouer.style.display = "flex"
                buttun_jouer.style.justifyContent = "center"
                buttun_jouer.style.alignItems = "center";
                buttun_jouer.style.height = "25%"
                buttun_jouer.style.width = "50%"
                buttun_jouer.style.border ="solid 2px white"
                buttun_jouer.style.borderRadius = "25px"

                buttun_jouer.id = "buttun_jouer"
                document.querySelector("#buttun_area").appendChild(buttun_jouer)


                    const text_jouer = document.createElement("span")

                    text_jouer.innerText = "JOUER"
                    text_jouer.style.fontSize = "40px"
                    text_jouer.style.fontWeight = "500"
                    text_jouer.style.color = "white"
                    text_jouer.style.fontWeight = "700";
                    text_jouer.style.fontSize = "45px";

                    document.querySelector("#buttun_jouer").appendChild(text_jouer)



                const buttun_edition = document.createElement ("div")

                buttun_edition.style.display = "flex"
                buttun_edition.style.justifyContent = "center"
                buttun_edition.style.alignItems = "center";
                buttun_edition.style.height = "25%"
                buttun_edition.style.width = "50%"
                buttun_edition.style.border ="solid 2px white"
                buttun_edition.style.borderRadius = "25px"


                buttun_edition.id = "buttun_edition"
                document.querySelector("#buttun_area").appendChild(buttun_edition)


                    const text_edition = document.createElement("span")

                    text_edition.innerText = "EDITION"
                    text_edition.style.fontSize = "40px"
                    text_edition.style.fontWeight = "500"
                    text_edition.style.color = "#C28F0B"
                    text_edition.style.fontWeight = "700";
                    text_edition.style.fontSize = "45px";
                    

                    document.querySelector("#buttun_edition").appendChild(text_edition)


                const buttun_parametre = document.createElement ("div")

                buttun_parametre.style.display = "flex"
                buttun_parametre.style.justifyContent = "center"
                buttun_parametre.style.alignItems = "center";
                buttun_parametre.style.height = "25%"
                buttun_parametre.style.width = "50%"
                buttun_parametre.style.border ="solid 2px white"
                buttun_parametre.style.borderRadius = "25px"

                buttun_parametre.id = "buttun_parametre"
                document.querySelector("#buttun_area").appendChild(buttun_parametre)


                    const text_parametre = document.createElement("span")

                    text_parametre.innerText = "EDITION"
                    text_parametre.style.fontSize = "40px"
                    text_parametre.style.fontWeight = "500"
                    text_parametre.style.color = "white"
                    text_parametre.style.fontWeight = "700";
                    text_parametre.style.fontSize = "45px";

                    document.querySelector("#buttun_parametre").appendChild(text_parametre)

};

function menuJouer () {
    
    const menu = document.createElement("div")

    menu.style.display = "flex"
    menu.style.justifyContent = "center"
    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.backgroundImage = "url(./img/back.png)";
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