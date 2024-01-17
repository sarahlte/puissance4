<?php 

$availableRoutes = ['homepage', 'game', 'rules']; 
$route = 'homepage';

if (isset($_GET['page']) === true && in_array($_GET['page'], $availableRoutes)){ //est-ce que page est dans le tableau availableRoutes pour inarray
    $route= $_GET['page'];
}

// '=== true' n'est pas obligatoire, il est sous-entendu de base

require './views/layout.php';

?>
