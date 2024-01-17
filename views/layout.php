<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Puissance4</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Frijole&family=Oxanium:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./styles.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>
    <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <header class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a href="?page=homepage" id='titleLink'><h1 id="title">Connect 4</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="?page=homepage">Jeu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?page=rules" id="rules">Règles du jeu</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class='container' id="main">
            <?php require './views/'. $route . '_view.php'?>
        </div>
    </main>
    <footer>
        <div class='container'>

        </div>
    </footer>
    </body>
</html>