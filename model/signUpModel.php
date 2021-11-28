<?php
require '../config/dbConfig.php';

function saveUserDetails($aUserDetails){
	
	
	$sql = "INSERT INTO user_details (first_name, last_name, email,phone_number,password,conf_password,country,state,district,address_line_1,address_line_2,postal_code) VALUES ('$aUserDetails[first_name]', '$aUserDetails[last_name]', '$aUserDetails[email]','$aUserDetails[phone_number]','$aUserDetails[password]','$aUserDetails[conf_password]','$aUserDetails[country]','$aUserDetails[state]','$aUserDetails[district]','$aUserDetails[address_line_1]','$aUserDetails[address_line_2]','$aUserDetails[postal_code]')";

	$link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
	if($link === false){
	    die("ERROR: Could not connect. " . mysqli_connect_error());
	}
		
	if(mysqli_query($link, $sql)){
		$last_id = mysqli_insert_id($link);
    	echo "Records added successfully.";
	} else{
    	echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
	}
	return $last_id;
}