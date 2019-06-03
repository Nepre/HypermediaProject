<?php
$serveur='localhost';
$admin='root';
$pass='';
$bd="hypermedia";
// connexion à la base de données
try{
$pdo = new PDO("mysql:host=$serveur;dbname=$bd", $admin, $pass);
}
catch (PDOexception $e){
die ("Erreur : ". $e->getMessage());
}?>
