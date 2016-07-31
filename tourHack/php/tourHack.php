<?php
$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "test";
$name=$_GET["name"];
$year=$_GET["year"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM tourhack where activities like '%".$name."%' and Year like 'YEDec ".$year."'";

$result = $conn->query($sql);

while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
