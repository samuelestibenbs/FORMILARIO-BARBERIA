const form = document.querySelector("#appointment-form");
const appointmentDate = document.querySelector("#appointment-date");
const successMessage = document.querySelector("#success-message");

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
  .toISOString()
  .slice(0, 10);

appointmentDate.min = localToday;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    form.querySelector(":invalid").focus();
    return;
  }

  form.reset();
  form.classList.remove("was-validated");
  appointmentDate.min = localToday;
  successMessage.classList.remove("d-none");
  successMessage.focus();
});