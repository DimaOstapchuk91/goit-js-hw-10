const checkForm = document.querySelector('.login-form');
checkForm.addEventListener('input', getUserData);
checkForm.addEventListener('submit', handleSubmit);

const FEEDBACK_KEY = 'feedback-form-state';

populateForm();

let formData = { email: '', message: '' };

function getUserData(event) {
  const nameEl = event.currentTarget.elements;
  formData.email = nameEl.email.value.trim();
  formData.message = nameEl.message.value.trim();

  try {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
  } catch (err) {
    console.log(err);
    return;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value.trim() &&
    event.currentTarget.elements.message.value.trim()
  ) {
    console.log({
      email: event.currentTarget.elements.email.value.trim(),
      message: event.currentTarget.elements.message.value.trim(),
    });
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
  } else {
    return alert('All form fields must be filled in !!!');
  }
}

function populateForm() {
  let feedbackData = {};

  try {
    feedbackData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  } catch (err) {
    return;
  }

  if (!feedbackData) {
    return;
  }

  for (const key in feedbackData) {
    checkForm.elements[key].value = feedbackData[key];
  }
}
