<?php
$host = 'localhost';
$port = '3307';
$user = 'root';
$pass = 'bs33c_TF';
$dbname = 'salon_nails';
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>