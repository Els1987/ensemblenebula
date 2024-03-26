"use strict";

let profiel = document.getElementById("profiellink");
let agenda = document.getElementById("agendalink");
let video = document.getElementById("videolink");
let foto = document.getElementById("fotolink");
let muziek = document.getElementById("muzieklink");

let ster = document.getElementsByClassName("ster");
let planeet = document.getElementsByClassName("planeet");
let arraysterren = [ster[0],ster[1],ster[2],ster[3], ster[4], ster[5]];
let arrayseconds = ["510","520","570","590","595"];
let seconds = "";

let stereffect="";
let screensize = screen.width;
let myInterval= "";

//muziek 
let speelmuziek="";
let timeout=""

let titel = document.getElementById("titel");


titel.addEventListener("click", muziekplay);
titel.style.cursor = "pointer";



function muziekplay(){
    titel.style.cursor = "default";
    speelmuziek= new Audio("./Return.mp3");
    speelmuziek.play();
    titel.removeEventListener("click", muziekplay);
    timeout=setTimeout(stop, 6800);
}

function stop(){
speelmuziek.pause();
titel.addEventListener("click", muziekplay);
titel.style.cursor = "pointer";
}
    

//schermgrootte
window.addEventListener("load", checksize);

function checksize(){
    if(screensize < 700){
     
}
else{
    shuffle();
    sterren();
    myInterval= setInterval(sterren
    , 700);

    for(var i=0;i<planeet.length;i++)
    planeet[i].addEventListener('mouseover', showmenutitle);

    for(var i=0;i<planeet.length;i++)
    planeet[i].addEventListener('mouseout', removemenutitle);
}
}

//sterren
function shuffle(){
    for(let i = 0; i < arraysterren.length; i++){
    let t = arraysterren[i];
    let r = Math.floor(Math.random() * arraysterren.length);
    arraysterren[i] = arraysterren[r];
    arraysterren[r] = t;
    }
    }


function sterren(){
    arrayseconds = arrayseconds.sort(() => Math.random()-0.5);
    seconds = arrayseconds.pop();
    arraysterren = [ster[0],ster[1],ster[2],ster[3],ster[4], ster[5]];
    shuffle();
    console.log(arraysterren);
    stereffect = arraysterren.pop();
    console.log(stereffect);

    stereffect.style.display = "block";
    setTimeout(
    function stop(){stereffect.style.display = "none"}, 500)
}

    
//menu tekst cursor

function showmenutitle(event){
    switch(event.target.id){
        case "profiel":
            clearInterval(myInterval);
        profiel.style.cursor = "url('./imgnebula/cursorzwart1.png'), auto"; 
     
        break;

        case "agenda":
            clearInterval(myInterval);
            agenda.style.cursor = "url('./imgnebula/cursorzwart2.png'), auto";
        break;

        case "video":
            clearInterval(myInterval);
            video.style.cursor = "url('./imgnebula/cursorzwart3.png'), auto";
        break;

        case "foto":
            clearInterval(myInterval);
        foto.style.cursor = "url('./imgnebula/cursorzwart4.png'), auto";
        break;

        case "muziek":
            clearInterval(myInterval);
            muziek.style.cursor = "url('./imgnebula/cursorzwart5.png'), auto";
        break;

        default:
        ;

    }
};



function removemenutitle(event){
    switch(event.target.id){
        case "profiel":
        myInterval= 
        setInterval(sterren
        , 350)
        break;

        case "agenda":
    
        myInterval= 
setInterval(sterren
, 350)
        break;

        case "video":

        myInterval= 
setInterval(sterren
, 350)
        break;

        case "foto":
       
        myInterval= 
setInterval(sterren
, 350)
        break;

        case "muziek":
        
        myInterval= 
setInterval(sterren
, 350)
        break;

        default:
        ;

    }
};


    
