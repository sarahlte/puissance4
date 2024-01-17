<!doctype html> 

<html>
<body>
    <script src='./scripts/script.js'></script>
    <div id='params'>
        <div class='parameters' id='sizeOfBoard'>
            <p id="dimension">Dimension de la grille : </p>
            <input type="number" value="10" id="x" onchange='dashBoard();'>
            <input type="number" value="7" id="y" onchange='dashBoard();'>
        </div>
        <div class='parameters' id="stop-play">
            <button onclick="loadGame()" id="loading">
                <span class="material-symbols-outlined">
                    play_circle
                </span>
            </button>
            <button onclick="dashBoard()" id='stop'>
                <span class="material-symbols-outlined">
                stop_circle
                </span>
            </button>
        </div>
        <div class='parameters'>
            <p>Tour du joueur : </p>
            <div id="player"></div>
        </div>
        <p id="timeElapsed"></p>        
    </div>
    <div id="template">
        <script>
            document.addEventListener("DOMContentLoaded", function(){
                dashBoard();
                let currentPlayer = document.getElementById('player');
                currentPlayer.classList.add('red')
            });

        </script>
    </div>
</body>
</html>




