//step-1...add event listener with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {

    //step-2...get the user email inside the email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3....get the password from the password input..
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //step-4---email and password validation

    if (email === 'mizan@gmail.com' && password === 'Mohsina389') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please write correct password!!');
    }
})