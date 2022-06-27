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
      <input type="text" name="firstName" pattern="[A-Z][a-z]" id="firstName">
      <span class="firstNameError" aria-live="polite"></span>
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" pattern="[A-Z][a-z]" id="lastName">
      <span class="lastNameError" aria-live="polite"></span>
      <label for="email">Email</label>
      <input type="text" name="email" id="email">
      <span class="Error" aria-live="polite"></span>
      <label for="telephone">Telephone</label>
      <input type="text" name="telephone" pattern="[0-9]+" id="telephone">
      <span class="telephoneError" aria-live="polite"></span>
      <label for="buyerType">Application Type</label>
        <select class="secondary" name="buyerType" id="buyerType">
          <option value="Purchase">Purchase</option>
          <option value="FirstTimeBuyer">First Time Buyer</option>
          <option value="Remortgage">Remortgage</option>
          <option value="RaiseFunds">Raise Funds</option>
        </select>
      <label for="terms">
        <input type="checkbox" name="terms" value="">
        I agree to the terms and conditions <a href="#">See terms</a>
      </label>
      <input class="outline " type="submit" name="submit" id="submit">
      <input class="outline secondary" type="reset" name="reset" id="reset">
    </form>
    </main>
</body>
</html>
