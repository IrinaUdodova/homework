<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel='stylesheet' href='css/style.css'>
</head>
<body>
<?php
if (key_exists("name", $_GET)){
    $name = $_GET["name"];
    $password =$_GET["password"];
    echo "Hello $name, your password is $password";
}
?>
<br>
<span  class ="col"> <?php
echo "hello, world";
    ?> </span>
<br/>
<form action = "index.php" method ="get">
    <input type ="text" name ="name">
    <input type ="text" name ="password">
    <input type ="submit" value="Submit">
</form>
</body>
</html>