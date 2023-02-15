function createLevel(){
    createButtons()
    let addBlocA = document.getElementById('bloc_A');
    addBlocA.addEventListener("click", function(){
        
        createBlockA();
        
    })
    let addBlocB = document.getElementById('bloc_B');
    addBlocB.addEventListener("click", function(){

        createBlockB();
    })
    let addBlocC = document.getElementById('bloc_C');
    addBlocC.addEventListener("click", function(){

        createBlockC();
    })

    document.getElementById("bloc_Aremove").addEventListener("click", function(){
        console.log(numberBlockA)
        let BlocAremove = document.getElementById("A"+ (numberBlockA-1));
        BlocAremove.remove();
        numberBlockA = numberBlockA -1;
     })
     document.getElementById("bloc_Bremove").addEventListener("click", function(){
        let BlocBremove = document.getElementById("B"+ (numberBlockB-1));
        BlocBremove.remove();
        numberBlockB = numberBlockB -1;
     })
     document.getElementById("bloc_Cremove").addEventListener("click", function(){
        let BlocCremove = document.getElementById("C"+ (numberBlockC-1));
        BlocCremove.remove();
        numberBlockC = numberBlockC -1;
        
     })


}

function createButtons(){
        let leveldiv = document.createElement("div")
        leveldiv.classList.add("leveldiv")
        leveldiv.style.display = "flex";
        leveldiv.style.width = "100%";
        leveldiv.style.height = "100vh";
        leveldiv.style.position = "relative";

        let textdiv = document.createElement("div")
        textdiv.classList.add("textdiv")

        let text = document.createElement("p")
        let text2 = document.createElement("p")
        let text3 = document.createElement("p")
        text.classList.add("text")
        text.innerHTML = "Sol"
        text2.innerHTML = "Obstacle 1"
        text2.classList.add("text2")
        text3.innerHTML = "Obstacle 2"
        text3.classList.add("text3")


        leveldiv.appendChild(textdiv)
        textdiv.appendChild(text)
        textdiv.appendChild(text2)
        textdiv.appendChild(text3)
        

    let buttons = document.createElement("div");
    buttons.classList.add("buttons")
    let button1 = document.createElement("button");
    button1.classList.add("btn_level");
    let button1Remove = document.createElement("button");
    button1Remove.classList.add("btn_level");
    let button2 = document.createElement("button");
    button2.classList.add("btn_level");
    let button2Remove = document.createElement("button");
    button2Remove.classList.add("btn_level");
    let button3 = document.createElement("button");
    button3.classList.add("btn_level");
    let button3Remove = document.createElement("button");
    button3Remove.classList.add("btn_level");
    button1.innerHTML = "+"
    button1Remove.innerHTML = "-"
    button2.innerHTML = "+"
    button2Remove.innerHTML = "-"
    button3.innerHTML = "+"
    button3Remove.innerHTML = "-"

    button1.id = "bloc_A"
    button1Remove.id = "bloc_Aremove"
    button2.id = "bloc_B"
    button2Remove.id = "bloc_Bremove"
    button3.id = "bloc_C" 
    button3Remove.id = "bloc_Cremove" 
   


    
    buttons.appendChild(button1)
    buttons.appendChild(button1Remove)
    buttons.appendChild(button2)
    buttons.appendChild(button2Remove)
    buttons.appendChild(button3)
    buttons.appendChild(button3Remove)
    leveldiv.appendChild(buttons)
    document.body.appendChild(leveldiv)
    
}
var numberBlockA = 1
function createBlockA(){
    let leveldiv = document.querySelector(".leveldiv");
    let divContainer = document.querySelector(".container");
    if (!divContainer) {
        divContainer = document.createElement("div");
        divContainer.classList.add("container");
        divContainer.id = "floor"
        leveldiv.style.height = "100vh";
        divContainer.style.display = "flex";
        divContainer.style.alignItems = "flex-end";
        divContainer.style.position = "absolute";
        divContainer.style.bottom ="0";
        
    }
    let blockA = document.createElement("div");
    blockA.classList.add("blockA");
    blockA.style.width = "200px";
    blockA.style.height = "200px";
    blockA.id = "A" + numberBlockA;
    /*blockA.style.backgroundColor = "red";
    blockA.style.border = "1px solid black";*/
    blockA.style.display = "inline-block";
    let img1 = new Image(200,200)
    img1.src = './img/test.png'
    
    
    blockA.appendChild(img1)
    leveldiv.appendChild(divContainer);
    divContainer.appendChild(blockA);

    numberBlockA++;

}


var numberBlockB = 1
function createBlockB(){
    
    
    let divContainer = document.querySelector(".container");
    let blockB = document.createElement("div");
    blockB.classList.add("blockB");
    blockB.id="B"+numberBlockB;
    blockB.style.width = "200px";
    blockB.style.height = "300px";
    blockB.style.display = "inline-block";
    blockB.style.position = "relative";
    numberBlockB++;


    let floor = document.createElement("div");
    floor.classList.add("floor");
    floor.style.width = "200px";
    floor.style.height = "200px";
    floor.style.position = "absolute";
    floor.style.bottom ="0";
    
    let img1 = new Image(200,200)
    img1.src = './img/test.png'
    floor.appendChild(img1)
    blockB.appendChild(floor)

    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.width = "200px";
    obstacle.style.height = "100px";
    obstacle.style.position = "absolute";
    obstacle.style.bottom ="200px";

    let img2 = new Image(200,100)
    img2.src = './img/spikes.png'
    obstacle.appendChild(img2)

    blockB.appendChild(obstacle)


    divContainer.appendChild(blockB);

    
    
    

    




}



var numberBlockC = 1
/*let positionBlockC =floorwidth;*/
function createBlockC(){
    let floorwidth = document.getElementById("floor").offsetWidth;
    let leveldiv = document.querySelector(".leveldiv");
    
    let divContainerC = document.createElement("div");
        divContainerC.classList.add("containerC");
        divContainerC.style.display = "flex";
        divContainerC.style.alignItems = "flex-end";
        divContainerC.style.position = "absolute";
        divContainerC.style.bottom ="400px";
        divContainerC.style.left =`${floorwidth}px`;
        divContainerC.id = "C" + numberBlockC;
        
    

    let blockC = document.createElement("div");
    blockC.classList.add("blockC");
    blockC.style.width = "100px";
    blockC.style.height = "100px";
    
        

    blockC.style.display = "inline-block";
    let img1 = new Image(100,100)
    img1.src = './img/corbo_itachi.png'
    
    
    blockC.appendChild(img1)
    leveldiv.appendChild(divContainerC);
    divContainerC.appendChild(blockC);

    numberBlockC++;




}

export default createLevel;


