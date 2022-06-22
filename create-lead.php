<?php

// function test_input($data) {
//   $data = trim ($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// };

// function filterEmail($field){
//   // Sanitize e-mail address
//   $field = filter_var(trim($field), FILTER_SANITIZE_EMAIL);

//   // Validate e-mail address
//   if(filter_var($field, FILTER_VALIDATE_EMAIL)){
//       return $field;
//   } else{
//       return FALSE;
//   }
// }

// // Define variables and initialize with empty values
// $nameErr = $lastNameErr = $emailErr = "";
// $firstName = $lastName = $email = "";

// // Processing form data when form is submitted
// if($_SERVER["REQUEST_METHOD"] == "POST"){

//   // Validate first name
//   if(empty($_POST["firstName"])){
//       $nameErr = "Please enter your name.";
//   } else {
//       $name = Test_input($_POST["firstName"]);
//       if($name == FALSE){
//           $nameErr = "Please enter a valid first name.";
//       }
//   }

//   if(empty($_POST["lastName"])){
//       $lastNameErr = "Please enter your name.";
//   } else {
//       $lastName = Test_input($_POST["lastName"]);
//       if($lastName == FALSE){
//           $lastNameErr = "Please enter a valid last name.";
//       }
//   }

//     // Validate email address
//   if(empty($_POST["email"])){
//     $emailErr = "Please enter your email address.";
// } else {
//     $email = filterEmail($_POST["email"]);
//     if($email == FALSE){
//         $emailErr = "Please enter a valid email address.";
//     }
//   }
// }

/*
curl -X 'POST' \
  'https://api.smartr365.com/api/v1/mortgage/lead/create' \
  -H 'accept: text/plain' \
  -H 'X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4' \
  -H 'Content-Type: application/json' \
  -d '{
"applicants": [
    {
      "email": "string@string.com",
      "firstName": "string",
      "lastName": "string",
      "telephone": "01245454545"
    }
  ],
}'
*/
//

// $applicants = array();
// for ($i = 1; $i <= $_POST['key']; $i++) {
//     if (!empty($_POST['applicants'.$i]))
//        $applicants[] = $_POST['applicants'.$i];

//
// $data = applicants(
//   'firstName' =>
//   )
//

// $data = array($_POST['firstName'],$_POST['lastName'],$_POST['email'],$_POST['telephone']);

// foreach ($data as $data)
//   ${$data} = sanitize($_POST[$data]);
// return $data;

// $data = ($_POST);
// print_r($data);
//
// var_dump($applicants);
//
// exit;
/*

$data= [

    applicants => [

      ["firstName"] => $_POST["firstName"],
      ["lastName" =>] $_POST["lastName"],
      ["email"] => $_POST["email"],
      ["telephone"] => $_POST["telephone"],
    ]
];

*/
//
// $data = array(
//   "firstName" => $_POST("firstName"),
//   "lastName" => $_POST("lastName"),
//   "email" => $_POST("email"),
//   "telephone" => $_POST("telephone")
// );

$data = array(
  "BuyerType" => $_POST["BuyerType"],
      "applicants" => array(
        "firstName" => $_POST["firstName"],
        "lastName" => $_POST["lastName"],
        "email" => $_POST["email"],
        "telephone" => $_POST["telephone"]
      )
);

$ch = curl_init();

$headers = [
  "X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4",
  "accept: text/plain",
  "content-Type: application/json",
];


curl_setopt($ch, CURLOPT_URL, 'https://api.smartr365.com/api/v1/mortgage/lead/create');
curl_setopt($ch, CURLOPT_HEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);

$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$responseData = json_decode($response, true);

var_dump($status_code);
var_dump($response);

curl_close ($ch)

?>
