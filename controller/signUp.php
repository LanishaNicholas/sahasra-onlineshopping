<?php
require '../model/signUpModel.php';


$firstName 				= isset($_POST['firstName']) ? $_POST['firstName'] : ""; 
$lastName 				= isset($_POST['lastName']) ? $_POST['lastName'] : "";
$email 				    = isset($_POST['email']) ? $_POST['email'] : "";
$phoneNumber 		    = isset($_POST['phoneNumber']) ? $_POST['phoneNumber'] : "";
$password 		    	= isset($_POST['password']) ? $_POST['password'] : "";
$confPassword 		    = isset($_POST['confPassword']) ? $_POST['confPassword'] : "";
$country 		    	= isset($_POST['country']) ? $_POST['country'] : "";
$state 		    		= isset($_POST['state']) ? $_POST['state'] : "";
$district 		    	= isset($_POST['district']) ? $_POST['district'] : "";
$addressLine1 		    = isset($_POST['addressLine1']) ? $_POST['addressLine1'] : "";
$addressLine2 		    = isset($_POST['addressLine2']) ? $_POST['addressLine2'] : "";
$postalCode 		    = isset($_POST['postalCode']) ? $_POST['postalCode'] : "";

$aUserDetails           = array(
	'first_name'        => $firstName,
	'last_name'         => $lastName,
	'email'             => $email,
	'phone_number'      => $phoneNumber,
	'password'          => $password,
	'conf_password'     => $confPassword,
	'country'           => $country,
	'state'             => $state,
	'district'          => $district,
	'address_line_1'    => $addressLine1,
	'address_line_2'    => $addressLine2,
	'postal_code'       => $postalCode
);

/* Function for save userdetails*/
$saveUserDetails       =  saveUserDetails($aUserDetails);
print_r($saveUserDetails);
exit();