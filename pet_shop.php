<?php
$host='localhost';
$user='root';
$pass='';
$db='team3_pet_shop';

$con=mysqli_connect($host,$user,$pass,$db);
if($con)
echo 'connected successfully to team3_pet_shop database';

$sql="insert into grooming (username,password, email) values;
$query=mysqli_query($con,$sql);
if($query)
echo 'data inserted successfully';
?>