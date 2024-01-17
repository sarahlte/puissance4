let r = 'r'; //pion rouge
let yellow = 'y'; //pion jaune
let v = 'v'; //case vide       

let myVar;
let winning; 
let xChoose;
let yChoose;

let template=[];
function dashBoard(){
    xChoose = document.getElementById('x').value;
    yChoose = document.getElementById('y').value;
    if (xChoose > 12){
        xChoose = 12;
    }
    if (yChoose > 12){
        yChoose = 12;
    }
    template=[];
    for (let i = 0; i<=yChoose-1; i++){
        template[i]=[];
        for (let j = 0; j<xChoose; j++){
            template[i][j]=v;
        }
    }
    console.log(template);
    gameBoard();
    clearInterval(myVar);
    let time = document.getElementById('timeElapsed')
    time.innerHTML = 'Temps écoulé : 0:00';
    document.querySelector('#x').disabled = false;
    document.querySelector('#y').disabled = false;
    let loading = document.getElementById('loading');
    //loading.removeAttribute('onclick');
    //loading.setAttribute('onclick', 'loadGame()');
    loading.innerHTML= '<span class="material-symbols-outlined">play_circle</span>';
    
}

function gameBoard(){
    let elementTemplate = document.querySelector("#template");

    let html = "<table border=0 cellspacing=0 cellpadding=0'>";
    
    for(i=0;i<template.length;i++)
    {
    html+="<tr>";
        for(j=0;j<template[0].length;j++)
        {
            
            if (template[i][j] == v)
            {
            html+="<td>";
            html+="<div class='no coin'  data-y=" + i + " data-x=" + j + "></div>";
            html+="</td>";
            }
            if (template[i][j] == r)
            {
            html+="<td>";
            html+="<div class='coin red'></div>";
            html+="</td>";
            }
            if (template[i][j] == yellow)
            {
            html+="<td>";
            html+="<div class='coin yellow'></div>";
            html+="</td>";
            }
            

        }
        html+="</tr>";
    }  
        
    html+="</table>";
    elementTemplate.innerHTML = html;
}

function affichage() //ne rien modifier dans cette fonction
{
    console.log(template);
    let elementTemplate = document.querySelector("#template");

    let html = "<table border=0 cellspacing=0 cellpadding=0'>";
    

    for(i=0;i<template.length;i++)
    {
    html+="<tr>";
        for(j=0;j<template[0].length;j++)
        {
            
            if (template[i][j] == v)
            {
            html+="<td>";
            html+="<div class='no coin'  data-y=" + i + " data-x=" + j + " onclick='moveByClick(this);'></div>";
            html+="</td>";
            }
            if (template[i][j] == r)
            {
            html+="<td>";
            html+="<div class='coin red'></div>";
            html+="</td>";
            }
            if (template[i][j] == yellow)
            {
            html+="<td>";
            html+="<div class='coin yellow'></div>";
            html+="</td>";
            }
            

        }
        html+="</tr>";
    }  
        
    html+="</table>";
    elementTemplate.innerHTML = html;
}
function down(x, y, color){
    
    for (let i = (template.length-1); i<(template.length); i--){
        if (template[i][x] == v){
            template[i][x] = color;
            win(x, i, color);
            break;
        }
    }
    if (winning == true){
        gameBoard()
        clearInterval(myVar)
        winning = false;
    } else {
        affichage(template);
    }

}
function win(x, y, color){
    // Horizontal     
    let count=0; 
    for (let i = 0; i<(template[y].length); i++){
        
        if (template[y][i] == color){
            count = count + 1;
        } else {
            count = 0;
        }
        if (count >= 4){
            if (color == r){
                alert("Le joueur rouge a gagné");
                winning = true;
            }else{
                alert("Le joueur jaune a gagné");
                winning = true
            }
            //dashBoard()
        }                
    }

    // Vertical
    count = 0
    for (let i = 0; i<(template.length); i++){
        //let 
        if (template[i][x] == color){
            count += 1;
        } else {
            count = 0;
        }
        if (count >= 4){
            if (color == r){
                alert("Le joueur rouge a gagné");
                winning= true
            }else{
                alert("Le joueur jaune a gagné");
                winning= true;
            }
            //dashBoard()
        }
    }

    // diagonale
    count = 0;
    for (let a =0; y+a<(template.length)&&x+a<(template[y].length); a++){
        if (template[y+a][x+a] == color){
            count += 1
        } else {
            count = 0;
        }
        if (count >= 4){
            if (color == r){
                alert("Le joueur rouge a gagné");
                winning = true
            }else{
                alert("Le joueur jaune a gagné");
                winning = true
            }
            //dashBoard()
        }
    }

    // anti-diagonale
    count = 0
    for (let a =0; y+a<(template.length)&&x-a>=0; a++){
        if (template[y+a][x-a] == color){
            count += 1
        } else {
            count = 0;
        }
        if (count >= 4){
            if (color == r){
                alert("Le joueur rouge a gagné");
                winning = true;
            }else{
                alert("Le joueur jaune a gagné");
                winning = true
            }
            //dashBoard()
        }
    }

}

function moveByClick(e){
    let x = parseInt(e.getAttribute("data-x"));
    let y = parseInt(e.getAttribute("data-y"));
    let currentPlayer = document.getElementById('player');
    if (color == r){
        currentPlayer.classList.add('red')
        currentPlayer.classList.remove('yellow')
        color = yellow;
    } else {
        currentPlayer.classList.add('yellow')
        currentPlayer.classList.remove('red')
        color = r
    }
    down(x, y, color);
}

let color = r;  
function timer(startTime){
    let time = document.getElementById('timeElapsed')
    let timer = Math.round((Date.now() - startTime)/1000);
    let seconds = timer % 60;
    if (seconds<10){
        seconds = '0' + seconds;
    }
    modulo = timer/60
    minutes = parseInt(modulo);
    time.innerHTML = 'Temps écoulé : '+minutes+':'+seconds
    return minutes;
}



function loadGame(){
    clearInterval(myVar);
    let newStart = Date.now();
    timer(newStart);
    template=[];
    for (let i = 0; i<=yChoose-1; i++){
        template[i]=[];
        for (let j = 0; j<xChoose; j++){
            template[i][j]=v;
        }
    }
    console.log(template)
    affichage(template);
    myVar = setInterval(function(){timer(newStart)}, 1000);
    let loading = document.getElementById('loading');
    //loading.removeAttribute('onclick');
    //loading.setAttribute('onclick', 'dashBoard()')
    loading.innerHTML= '<span class="material-symbols-outlined" id="reload">forward_circle</span>';
    document.querySelector('#x').disabled = true;
    document.querySelector('#y').disabled = true;
}

