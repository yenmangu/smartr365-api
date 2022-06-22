<?php

$url = "https://api.smartr365.com/api/v1/mortgage/lead/create";

$curl = curl_init($url);
$headers = array(
   "accept: application/json",
   "X-API-KEY: 2528e9b2-7250-48fc-9371-4c13cd5991a4",
   "Content-Type: text/json",
);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = <<<DATA
{
  buyer
  "applicants": [
    {

      "email": "string@string.com",
      "firstName": "string",
      "lastName": "string",
      "telephone": "01245545454"
    }
  ],

}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
$status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
var_dump($status_code);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);

?>
