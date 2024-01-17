<!doctype html> 

<html>
<head>
    <title>Labyrinthe</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
    <script src='./scripts/script.js'></script>
    <div id='params'>
        <div id='sizeOfBoard'>
            <p id="dimension">Dimension de la grille : </p>
            <input type="number" value="10" id="x" onchange='dashBoard();'>
            <input type="number" value="7" id="y" onchange='dashBoard();'>
        </div>
        <div>
            <button onclick="loadGame()">
                <span class="material-symbols-outlined">
                    play_arrow
                </span>
            </button>
        </div>
        <div>
            <p>Tour du joueur :</p>
            <div id="player"></div>
        </div>
        <p id="timeElapsed"></p>
        
    </div>
    <div id="template">
        <script>
            document.addEventListener("DOMContentLoaded", function(){
                dashBoard();
                let currentPlayer = document.getElementById('player');
                currentPlayer.classList.add('coin');
                currentPlayer.classList.add('red')
            });

        </script>
    </div>
</body>
</html>



