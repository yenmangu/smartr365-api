<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>DAS Applicant Form</title>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
  </head>
  <body style="padding:40px">
  <main>

    <h1>Applicant Form</h1>

    <form action="new-create.php" method="POST">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" value="firstName" id="firstName">
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" value="lastName" id="lastName">
      <label for="email">Email</label>
      <input type="text" name="email" value="email" id="email">
      <label for="telephone">Telephone</label>
      <input type="text" name="telephone" value="telephone" id="telephone">
      <input type="submit" name="submit" id="submit">
      <input type="reset" name="reset" id="reset">
    </form>
    </main>
</body>
</html>
