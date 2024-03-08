const sendBtn = document.querySelector(".send-btn");
const nameInput = document.querySelector(".input-field-name");
const secondNameInput = document.querySelector(".input-field-second-name");
const surNameInput = document.querySelector(".input-field-surname");
const inputBox = document.querySelector('input')
sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const nameInputTitle = nameInput.value;
  const secondNameInputTitle = secondNameInput.value;
  const surNameInputTitle = surNameInput.value;

  if (nameInputTitle === "" || secondNameInputTitle === "" || surNameInputTitle === "") {
    showError(nameInput, "Введите данные");
    showError(secondNameInput, "Введите данные");
    showError(surNameInput, "Введите данные");
  } else {
    hideError(nameInput);
    hideError(secondNameInput);
    hideError(surNameInput);

    if (nameInputTitle.length <= 2) {
      showError(nameInput, "Имя должно состоять минимум из 2 символов");
    } else {
      hideError(nameInput);
    }

    if (secondNameInputTitle.length <= 2) {
      showError(secondNameInput, "Фамилия должна состоять минимум из 2 символов");
    } else {
      hideError(secondNameInput);
    }

    if (surNameInputTitle.length <= 2) {
      showError(surNameInput, "Отчество должно состоять минимум из 2 символов");
    } else {
      hideError(surNameInput);
    }
  }
});

function showError(input, message) {
  const errorLabel = input.nextElementSibling;
  errorLabel.textContent = message;
  errorLabel.style.display = "block";
  input.classList.add("error");
}

function hideError(input) {
  const errorLabel = input.nextElementSibling;
  errorLabel.textContent = "";
  errorLabel.style.display = "none";
  input.classList.remove("error");
  errorLabel.classList.remove('error-label')
}