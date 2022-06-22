<?php



$data= array(

      "firstName" => $_POST["firstName"],
      "lastName" => $_POST["lastName"],
      "email" => $_POST["email"],
      "telephone" => $_POST["telephone"],
);

var_dump(json_encode($data));

$ch = curl_init();

$header = [
  "X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4",
  "accept: application/json",
  "content-Type: text/json",
];


curl_setopt($ch, CURLOPT_URL, 'https://api.smartr365.com/api/v1/mortgage/lead/create');
curl_setopt($ch, CURLOPT_HEADER, $header);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);

$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$responseData = json_decode($response, true);

var_dump($status_code);
//var_dump($response);

curl_close ($ch)

?>
