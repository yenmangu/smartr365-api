<?php

$data = array(

    "applicants"=> [
      array(
        "annualIncome"=> 0,
        "email"=> "string",
        "firstName"=> "string",
        "lastName"=> "string",
        "telephone"=> "string"
      )
    ],

  
  )

  $data = array(

    "applicants"=> [
      array(
        "email"=> $_POST["email"],
        "firstName"=> $_POST["firstName"],
        "lastName"=> $_POST["lastName"],
        "telephone"=> $_POST["telephone"]
      )
    ],
    "buyerType" => $_POST["buyerType"],
  );
  



?>