function sendMail() {
  name = document.forms["mailForm"]["name"].value;
  email = document.forms["mailForm"]["email"].value;
  body = document.forms["mailForm"]["body"].value;
  console.log(name);
  console.log(email);
  console.log(body);
  return false;
}
