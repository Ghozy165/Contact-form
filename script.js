document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    let isValid = true;

    function showError(input, errorMessageId) {
      document.getElementById(errorMessageId).style.display = 'block';
      input.classList.add('invalid');
      isValid = false;
    }

    function hideError(input, errorMessageId) {
      document.getElementById(errorMessageId).style.display = 'none';
      input.classList.remove('invalid');
    }

    function formValidate()  {

        const firstName = document.getElementById('first-name');
        const firstNameParent = document.querySelector('.form-group.first-name');
        if (firstName.value.trim() === '') {
          showError(firstNameParent, 'first-name-error');
        } else {
          hideError(firstNameParent, 'first-name-error');
        }
      
        const lastName = document.getElementById('last-name');
        const lastNameParent = document.querySelector('.form-group.last-name');
        if (lastName.value.trim() === '') {
          showError(lastNameParent, 'last-name-error');
        } else {
          hideError(lastNameParent, 'last-name-error');
        }
      
        const email = document.getElementById('email');
        const emailParent = document.querySelector('.form-group.email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (email.value.trim() === '') {
          showError(emailParent, 'email-error');
          emailError.textContent = 'This field is required';
        } else if (!emailRegex.test(email.value)) {
          showError(emailParent, 'email-error');
          emailError.textContent = 'Please enter a valid email';
        } else {
          hideError(emailParent, 'email-error');
        }
      
        const queryType = document.querySelector('input[name="query-type"]:checked');
        const queryTypeFieldset = document.querySelector('.query-type fieldset');
        if (!queryType) {
          showError(queryTypeFieldset, 'query-type-error');
        } else {
          hideError(queryTypeFieldset, 'query-type-error');
        }
      
        const message = document.getElementById('message');
        const messageParent = document.querySelector('.form-group.message');
        if (message.value.trim() === '') {
          showError(messageParent, 'message-error');
        } else {
          hideError(messageParent, 'message-error');
        }
      
        const consent = document.getElementById('consent');
        if (!consent.checked) {
          showError(consent, 'consent-error');
        } else {
          hideError(consent, 'consent-error');
        }
    }   

    function sendForm() {
        const formData = new FormData(form);
        const formValues = {};

        formData.forEach((value, key) => {
          formValues[key] = value.trim();
        });

        console.table(formValues); 
    }

    const toast = document.getElementById('toast');
    function successToast() {
        setTimeout(() => {
           toast.classList.add('show');
        }, 1000);
        setTimeout(() => {
           toast.classList.remove('show');
        }, 10000);
    }

   toast.addEventListener('click', () => {
       toast.classList.remove('show');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formValidate();
  
        if (isValid) {
            sendForm();
            form.reset();
            successToast();
        }
    });
  });
  
