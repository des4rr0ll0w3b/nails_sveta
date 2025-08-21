<?php
require 'db.php';
if(isset($_GET['action']) && $_GET['action'] == 'list'){
  $result = $conn->query("SELECT * FROM reservas ORDER BY fecha DESC");
  $reservas = [];
  while($row = $result->fetch_assoc()){
    $reservas[] = $row;
  }
  header('Content-Type: application/json');
  echo json_encode($reservas);
  exit;
}
if(isset($_POST['id']) && isset($_POST['estado'])){
  $stmt = $conn->prepare("UPDATE reservas SET estado=? WHERE id=?");
  $stmt->bind_param("si", $_POST['estado'], $_POST['id']);
  $stmt->execute();
  echo json_encode(['success'=>true]);
}
?>