<?php

$data = array(
    "buyerType" => $_POST["buyerType"],
        "applicants" => array(
          "firstName" => $_POST["firstName"],
          "lastName" => $_POST["lastName"],
          "email" => $_POST["email"],
          "telephone" => $_POST["telephone"]
        ),
    "organisationId" => "d75acf39-07c4-4c63-995a-e7055c58c973",
    "introducerId" => "0",
    "introducerBranchId" => "0",
    "introducerNegotiatorId" => "0"
);

var_dump(json_encode($data));

$ch = curl_init();

$headers = [
  "X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4",
  "organisationId: d75acf39-07c4-4c63-995a-e7055c58c973",
  "accept: text/plain",
  "content-Type: application/json",
  "content-Length: 150"
];


curl_setopt($ch, CURLOPT_URL, 'https://api.smartr365.com/api/v1/mortgage/lead/create');
curl_setopt($ch, CURLOPT_HEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);

$status_code = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);

$responseData = json_decode($response, true);

var_dump($status_code);
var_dump($response);

curl_close ($ch);

?>
