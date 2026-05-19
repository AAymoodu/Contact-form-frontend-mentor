const successNotification = () => {
  // form submited Successfully
  const errors = document.querySelectorAll(".error");
  const success = document.querySelector(".success");
  console.log(errors);

  // conditions within a loop (did not work) 👇

  // errors.forEach((value) => {
  //   if (value.textContent == "") {
  //     success.style.transform = "translateY(0)";
  //   }
  // });
  // ----------------------------------------👆
  if (
    errors[0].textContent == "" &&
    errors[1].textContent == "" &&
    errors[2].textContent == "" &&
    errors[3].textContent == "" &&
    errors[4].textContent == "" &&
    errors[5].textContent == ""
  ) {
    success.style.transform = "translateY(-10%)";
  } else {
    success.style.transform = "translateY(-150%)";
  }
};

const validateform = () => {
  // clear error messages
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("invalid"));

  // clear textarea error messages
  const textarea = document.querySelectorAll("textarea");
  textarea.forEach((value) => {
    value.classList.remove("invalid");
  });
  //

  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.textContent = ""));

  // firstname Validation
  const firstname = document.querySelector(".firstname");
  const firstname_err = document.querySelector(".firstname-err");

  if (firstname.value == "") {
    firstname_err.textContent = "This field is required";
    firstname.classList.add("invalid");
  }

  // lastname Validation
  const lastname = document.querySelector(".lastname");
  const lastname_err = document.querySelector(".lastname-err");

  if (lastname.value == "") {
    lastname_err.textContent = "This field is required";
    lastname.classList.add("invalid");
  }

  // Email Verification
  const email = document.querySelector(".email");
  const email_err = document.querySelector(".email-err");
  if (email.value == "") {
    email_err.textContent = "Please enter a valid email address";
    email.classList.add("invalid");
  }

  // button Verification
  const button_err = document.querySelector(".button-err");
  if (!(button1.className == "selected" || button2.className == "selected")) {
    button_err.textContent = "Please select a query type";
  }

  // Message Verification
  const message = document.querySelector(".message");
  const message_err = document.querySelector(".message-err");
  if (message.value == "") {
    message.classList.add("invalid");
    message_err.textContent = "This field is required";
  }

  // Consent Verification
  const consent_err = document.querySelector(".consent-err");
  if (consentGiven.className == "") {
    consent_err.textContent =
      " To submit this form, please consent to being contacted";
  }

  // loop within a condition (did not work) 👇

  // const success = document.querySelector(".success");
  // if (errors.forEach((value) => (value.textContent == ""))) {
  //   success.style.transform = "translateY(0)";
  // }
  // ----------------------------------------👆
};

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  validateform();
  successNotification();
});

// BUTTON SELECTION
// button 1
const button1 = document.querySelector("#query-button1");
// button 2
const button2 = document.querySelector("#query-button2");
// button image
const btn_image = document.querySelectorAll("button span img");

button1.addEventListener("click", (btnclick) => {
  // select button 1
  button1.setAttribute("class", "selected");
  btn_image[0].style.display = "block";

  //  deselect button 2
  if (button2.getAttribute("class") == "selected") {
    button2.setAttribute("class", "");
    btn_image[1].style.display = "none";
  }
}
);

button2.addEventListener("click", (btnclick) => {
  // select button 2
  button2.setAttribute("class", "selected");
  btn_image[1].style.display = "block";

  // deselect button 1
  if (button1.getAttribute("class") == "selected") {
    button1.setAttribute("class", "");
    btn_image[0].style.display = "none";
  }
});

//
//
// CONSENT SELECTION
const consent = document.querySelector(".consent-click");
const consentGiven = document.querySelector(".consent-click img");

consent.addEventListener("click", () => {
  // Select or Deselect Consent

  if (consentGiven.className == "") {
    consentGiven.classList.add("display-image");
  } 
  else {
    consentGiven.classList.remove("display-image");
  }
});

// if (consentGiven.style.display === "none") {

//   consent.addEventListener('click',() => {
//   consentGiven.style.display = "block";
//   })

// } else {
//   consent.addEventListener('click', () => {
//     consentGiven.style.display = "none";
//   });
// }

// this is working 👇
// consent.addEventListener('dblclick',() => {
// consentGiven.style.display = "block";
// })

// consent.addEventListener('click', () => {
//   consentGiven.style.display = "none";
// });
// --------------- 👆

// Deselect Consent
// consent.addEventListener("click", () => {
//   consentGiven.style.display = "none";
// });
