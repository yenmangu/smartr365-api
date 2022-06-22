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

    <form action="create-lead.php" method="POST">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName">
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName">
      <label for="email">Email</label>
      <input type="text" name="email" id="email">
      <label for="telephone">Telephone</label>
      <input type="text" name="telephone" id="telephone">
      <label for="applicType">Application Type</label>
      <select class="secondary" name="applicType" id="applicType">
        <option value="1">option1</option>
        <option value="2">option2</option>
        <option value="3">option3</option>
        <option value="4">option4</option>
        <option value="5">option5</option>
      </select>
      <label for="terms">
        <input type="checkbox" name="terms" value="">
        I agree to the terms and conditions
      </label>

      <input class="outline " type="submit" name="submit" id="submit">
      <input class="outline secondary" type="reset" name="reset" id="reset">
    </form>
    </main>
</body>
</html>
