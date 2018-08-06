<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Registration Form</title>
<center>
<style type="text/css">.number { font-weight: bolder;}
	body { background-color: #2f0238;
    text-decoration: bolder;
     color: red;
	}

	div {
    width: 850px;
    border: 25px solid grey;
    padding: 25px;
    margin: 25px;
	}
</style>
<?php
/* -- register.php This page lets people register for the site (in theory). */
require('../../db_connection.php');
$sql = "SELECT * FROM USER";
$result = mysqli_query($dbc, $sql);

if (!result)
{ 
 die("Database connection failed." . mysqli_error($connection));
}


while ($row = mysqli_fetch_array($result))
{
 
 }

mysqli_free_result($result);


mysqli_close($dbc);

// Set the page title and include the header file:
define('Title' , 'Register');
include('template_header.html');

 print '<div><p> Please Register so that you can take advantage of our amazing features.</p>' ;
	
// Check if the form has been submitted:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$problem = false; //No problem so far
	}
//Push Message For Required Fields
if (empty($_POST['first_name'])) {
	$problem = true; 
	print '<p class="text--error">Please enter your First Name!</p>';
	}
if (empty($_POST['last_name'])) {
	$problem = true;
	print '<p class="text--error">Please enter your Last Name!</p>';
	}
if (empty($_POST['email'])||(substr_count($_POST['email'], '@') != 1)) {
	$problem = true;
	print '<p class="text--error">Please enter your Email Address!</p>';
	}
if (empty($_POST['password1'])) {
	$problem = true;
	print '<p class="text--error">Please enter a Password!</p>';
	}
if ($_POST['password1'] != $_POST['password2']) {
	$problem = true;
	print '<p class="text--error">Your Password does not match your Confirm Password!</p>';
	}
// If there is not a problem

if (!$problem) {
	print '<p class="text--success">Thank You! You are now registered!<br></p>';
	
//Send Email Confirmation
$body = "Thank you, {$_POST['first_name']}, for registering with us!'.";  
mail($_POST['email'], 'Registration Confirmation', $body, 'From: team3@example.com');
	
// Book says clear post values
$_POST = [];
	} else {
	print '<p class="text--error">Please Try Again!</p>';
	}
 //End of handle form IF

// Now we can create the form!
?>

<form action ="register.php" method="post" class="form--inline">

<p><label for="first_name">First Name:</label><input type="text" name="first_name" size="20"
value="<?php if (isset($_POST['first_name'])) {print htmlspecialchar($_POST
['first_name']); } ?>"></p>

<p><label for="last_name">Last Name:</label><input type="text" name="last_name" size="20"
value="<?php if (isset ($_POST['last_name'])) { print htmlspecialchars($_POST
['last_name']); } ?>"></p>

<p><label for="email">Email:</label><input type="email" name="email" size="20"
value="<?php if (isset($_POST['email'])) { print htmlspecialchar($_POST
['email']); } ?>"></p>

<p><label for="password1">Password:</label><input type="password" name="password1" size="20"
value="<?php if (isset($_POST['password1'])) { print htmlspecialchars($_POST
['password1']);  } ?>"></p>

<p><label for="password2">Confirm Password:</label><input type="password" name="password2" size="20" 
value="<?php if (isset($_POST['password2'])) { print  htmlspecialchars($_POST['password2']); } ?>"></p>

<p><input type="submit" name="submit" value="Register!" class="button--pill"></p>
</div>
</form>
</center>
<?php include ('template_footer.html');
//Need footer. ?>
