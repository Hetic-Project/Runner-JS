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
}

export default menu;