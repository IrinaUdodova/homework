<!doctype html>
<?php global $data; ?>
<html>
<?php require 'indexParts/index.globals.php' ?>
<?php require 'indexParts/Header.html' ?>
<body>
<?php
if (!$data -> IsAuthorized){
    require  'indexParts/key.php';
}?>
<br>
<span  class ="col"> <?php
echo "hello, world";
    ?> </span>
<br/>

<?php
if ($data -> IsFormDataExist){
    if ($data -> IsAuthorized){
        require 'indexParts/LoggedIn.php';
        require 'indexParts/menu.php';
    } else {
        require 'indexParts/LoginFail.php';
    }
} else {
    require 'indexParts/form.html';
}
?>
</body>
</html>