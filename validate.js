const form = document.getElementById("feedbackForm"); //Form Select
const count = document.getElementById("count"); //Count Select
const message = document.getElementById("message"); //Message Input Select

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name"); // Name Input Select
  const email = document.getElementById("email"); // Email Input Select
  const message = document.getElementById("message"); // Message Input Select

  const nameBorder = document.querySelector(".input-gp-name");
  const emailBorder = document.querySelector(".input-gp-email");
  const messageBorder = document.querySelector(".input-gp-message");

  const nameValue = name.value.trim(); // Name Value
  const emailValue = email.value.trim(); // Email Value
  const msgValue = message.value.trim(); // Message Value

  const nameError = document.getElementById("nameFormError"); // Name Error
  const emailError = document.getElementById("emailFormError"); // Email Error
  const messageError = document.getElementById("messageFormError"); // Message Error

  // const formCorrectMessage = document.getElementById("formMessage"); // Correct Message Select
  //NameValue checked Empty
  if (nameValue === "") {
    nameError.innerHTML = "Name is required!";
    nameError.style.display = "block";
    nameBorder.style.border = "1px solid red";
  } else {
    nameError.style.display = "none";
    nameBorder.style.border = "1px solid #ccc";
  }

  //EmailValue checked Empty
  if (emailValue === "") {
    emailError.innerHTML = "Email is required!";
    emailError.style.display = "block";
    emailBorder.style.border = "1px solid red";
  } else {
    emailError.style.display = "none";
    emailBorder.style.border = "1px solid #ccc";
  }

  //Message checked Empty
  if (msgValue === "") {
    messageError.innerHTML = "Message is required!";
    messageError.style.display = "block";
    messageBorder.style.border = "1px solid red";
  } else {
    messageError.style.display = "none";
    messageBorder.style.border = "1px solid #ccc";
  }

  //Name Regex
  // const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  if (!nameRegex.test(nameValue) && nameValue !== "") {
    nameError.innerHTML =
      "Invalid Name!, name must not be contain numbers and contains 2 or more letter";
    nameError.style.display = "block";
    nameBorder.style.border = "1px solid red";
  }

  //Email Regex
  const emailRegex = /^[\w.-]+@[\w-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(emailValue) && emailValue !== "") {
    emailError.innerHTML =
      "Invalid Email, email must be contain @ and (.com or other)!";
    emailError.style.display = "block";
    emailBorder.style.border = "1px solid red";
  }

  //Length
  if (msgValue.length < 10 && msgValue !== "") {
    messageError.innerHTML = "Message must be contain 10 or more word!";
    messageError.style.display = "block";
    messageBorder.style.border = "1px solid red";
  }

  // //Name,Email,Message is not empty
  if (
    nameValue &&
    emailValue &&
    msgValue &&
    nameError.style.display == "none" &&
    emailError.style.display == "none" &&
    messageError.style.display == "none"
  ) {
    window.alert(`Thank you ${nameValue}  for your feedback!`);
    count.textContent = "";
    form.reset();
  }
});

//Counting Function
message.addEventListener("keyup", () => {
  var messageValue = message.value;
  var messageCount = messageValue.length;
  count.textContent = `Character Count: ${messageCount}`;
});
