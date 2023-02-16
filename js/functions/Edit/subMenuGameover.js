function subMenuGameover (nombre_de_point) {
    const game_content = document.querySelector(".game-content")


    var nombre_de_point = 0

    const madiv = document.createElement("div")

    madiv.style.height = "100vh"
    madiv.style.width = "100vw"

    madiv.id = "madiv"
    game_content.appendChild(madiv)


        const menu = document.createElement("div")

        menu.style.display = "flex"
        menu.style.justifyContent = "center"
        menu.style.alignItems = "center"
        menu.style.height = "100%"
        menu.style.width = "100%"
        menu.style.backgroundColor = "#0C0F21"

        menu.id = "menu"
        madiv.appendChild(menu)

            const div_content = document.createElement("div")

            div_content.style.display = "flex"
            div_content.style.justifyContent = "center"
            div_content.style.width = "50%"
            div_content.style.height = "60%"
            div_content.style.flexWrap = "wrap";

            div_content.id = "div_content"
            menu.appendChild(div_content)


                const div_titre = document.createElement("div")

                div_titre.style.display = "flex"

                div_titre.style.alignItems = "center"
                div_titre.style.justifyContent = "space-around"
                div_titre.style.width = "80%"
                div_titre.style.height = "20%"
                div_titre.style.border = "2px solid #C03030"
                div_titre.style.borderRadius = "15px"
                div_titre.style.fontSize = "3.3vw"

                div_titre.id = "div_titre"
                div_content.appendChild(div_titre)


                    const skull = document.createElement("img")
                    
                    skull.src = "./img/skull-icon.png"
                    skull.style.width = "50px";
                    skull.style.height = "50px";
                    skull.style.marginBottom = "4px"
                    skull.style.marginLeft = "6px"

                    div_titre.appendChild(skull)


                    const titre = document.createElement("span")

                    titre.innerText = "GAME OVER"
                    titre.style.color = "#C03030"
                    titre.style.fontWeight = "900";
                    titre.style.lineHeight = "97px";

                    div_titre.appendChild(titre)


                    const skull_two = document.createElement("img")
                    
                    skull_two.src = "./img/skull-icon.png"
                    skull_two.style.width = "50px";
                    skull_two.style.height = "50px";
                    skull_two.style.marginBottom = "4px"
                    skull_two.style.marginRight = "6px"

                    div_titre.appendChild(skull_two)

                

                const div_area_score = document.createElement("div")

                div_area_score.style.display = "flex"
                div_area_score.style.justifyContent = "center"
                div_area_score.style.width = "100%"
                div_area_score.style.height = "20%"
                
                div_content.appendChild(div_area_score)


                    const div_score = document.createElement("div")

                    div_score.style.display = "flex"
                    div_score.style.justifyContent = "space-around"
                    div_score.style.border = "2px solid white"
                    div_score.style.borderRadius = "15px"
                    div_score.style.width = "40%"
                    div_score.style.height = "48%";

                    div_area_score.appendChild(div_score)

                        const text_score = document.createElement("span")

                        text_score.innerText = "SCORE :"
                        text_score.style.display = "flex";
                        text_score.style.color = "white"
                        text_score.style.height = "100%"
                        text_score.style.alignItems = "center";
                        text_score.style.justifyContent = "center";
                        text_score.style.fontWeight = "900";
                        text_score.style.fontSize = "2.5vw";

                        div_score.appendChild(text_score)

                        const score = document.createElement("span")

                        score.innerText = nombre_de_point
                        score.style.display = "flex";
                        score.style.color = "white"
                        score.style.height = "100%"
                        score.style.alignItems = "center";
                        score.style.justifyContent = "center";
                        score.style.fontWeight = "900";
                        score.style.fontSize = "2.5vw";

                        div_score.appendChild(score)


            const area_buttun = document.createElement("div")


            area_buttun.style.display = "flex"
            area_buttun.style.flexWrap = "wrap";
            area_buttun.style.justifyContent = "space-around"
            area_buttun.style.borderRadius = "15px"
            area_buttun.style.width = "100%"
            area_buttun.style.height = "40%";

            area_buttun.id = "area_buttun"
            div_content.appendChild(area_buttun)

                const area_buttun_restart = document.createElement ("div")

                area_buttun_restart.style.display = "flex"
                area_buttun_restart.style.justifyContent = "center"
                area_buttun_restart.style.height = "40%"
                area_buttun_restart.style.width = "100%"

                area_buttun_restart.id = "area_buttun_restart"
                document.querySelector("#area_buttun").appendChild(area_buttun_restart)

                    const buttun_restart = document.createElement ("div")

                    buttun_restart.style.height = "100%"
                    buttun_restart.style.width = "40%"
                    

                    buttun_restart.classList.add("buttun")
                    buttun_restart.id = "buttun_restart"
                    document.querySelector("#area_buttun_restart").appendChild(buttun_restart)


                            const text_restart = document.createElement("span")

                            text_restart.innerText = "RESTART"
                            
                            text_restart.classList.add("text_buttun_yellow")
                            document.querySelector("#buttun_restart").appendChild(text_restart)


                const buttun_exit = document.createElement ("div")

                buttun_exit.style.height = "40%"
                buttun_exit.style.width = "40%"


                buttun_exit.classList.add("buttun")
                buttun_exit.id = "buttun_exit"
                document.querySelector("#area_buttun").appendChild(buttun_exit)


                        const text_exit = document.createElement("span")

                        text_exit.innerText = "EXIT"
                        
                        text_exit.classList.add("text_buttun_yellow")
                        document.querySelector("#buttun_exit").appendChild(text_exit)

    document.querySelector("#buttun_restart").onclick = function redirection_jouer(){
        alert("redemarage de la partie")
    };

    document.querySelector("#buttun_exit").onclick = function redirection_jouer(){
        alert("fonction quitter")
    };






}

export default subMenuGameover