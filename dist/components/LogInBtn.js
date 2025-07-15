import { checkInputEmpty, checkInputLength } from '../utils/checkInput.js';
export function addEventListenerToLogInButton() {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const usernameErrorMessage = document.getElementById('username-error-message');
    const passwordInput = document.getElementById('password');
    const passwordErrorMessage = document.getElementById('password-error-message');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.clear();
        usernameErrorMessage.style.display = 'none';
        passwordErrorMessage.style.display = 'none';
        if (!checkInputEmpty(usernameInput.value, usernameErrorMessage))
            return;
        if (!checkInputLength(passwordInput.value, passwordErrorMessage))
            return;
        const username = usernameInput.value;
        localStorage.setItem('username', username);
        window.location.href = 'Dashboard.html';
    });
}
//# sourceMappingURL=LogInBtn.js.map