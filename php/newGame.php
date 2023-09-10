<html lang ="en">
<?php require 'indexParts/Header.html' ?>
<body>
<?php
require_once "Classes/Card.php";
//use \Classes\Card as Card;

$card = new \Classes\Card();

for ($counter =0; $counter <80; $counter++){
    echo $card ->GetCardImage($counter);
}
?>

</body>
</html>