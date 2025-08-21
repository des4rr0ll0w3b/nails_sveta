<?php
$conexion = new mysqli("localhost", "usuario", "contraseña", "salon");

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];

$stmt = $conexion->prepare("INSERT INTO reservas (nombre, email, fecha, hora) VALUES (?, ?, ?, ?)");

if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conexion->error);
}

$stmt->bind_param("ssss", $nombre, $email, $fecha, $hora);

if ($stmt->execute()) {
    echo "Reserva realizada con éxito.";
} else {
    echo "Error al guardar la reserva: " . $stmt->error;
}

$stmt->close();
$conexion->close();
?>
