const message =
  "Your request has been received. The king will soon (not) read it and will (not) soon respond to it";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
