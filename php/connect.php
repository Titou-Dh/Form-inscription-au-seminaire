<?php
$con = mysqli_connect('localhost', 'root', '','atitdb');
if (!$con) {
	die("database connection failed" . mysqli_error($con));
}

$select_db = mysqli_select_db($con, 'atitdb');
if (!$select_db) {
	die("database selected failed" . mysqli_error($con));
}


?>