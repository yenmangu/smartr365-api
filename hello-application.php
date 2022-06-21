<?php


$headers = [
  "X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4",
];

$ch = curl_init();

curl_setopt_array($ch, [ 
  CURLOPT_HTTPHEADER => $headers,
  //CURLOPT_RETURNTRANSFER => true
]);

curl_setopt($ch, CURLOPT_URL, "https://api.smartr365.com/api/v1/hello/application");
$response = curl_exec($ch);

curl_close($ch);

$data = json_decode($response, true); //associative array
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
var_dump($status_code);
?>

