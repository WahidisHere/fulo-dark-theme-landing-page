'strict mode';
const submitBtn = document.getElementById('submit-btn');
const mailInput = document.getElementById('email');
const inputContainer = document.getElementById('input-data');

const showMessage = function (e) {
  e.preventDefault();
  const mail = mailInput.value.trim();

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(mail)) {
    inputContainer.classList.toggle('show');
  } else {
    inputContainer.classList.toggle('show');
  }
};

submitBtn.addEventListener('click', showMessage);
