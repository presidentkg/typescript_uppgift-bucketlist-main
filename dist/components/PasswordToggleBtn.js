export function addEventListenerToPasswordToggleButtonButton() {
    const passwordToggleBtn = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    passwordToggleBtn.addEventListener('click', (event) => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
    });
}
//# sourceMappingURL=PasswordToggleBtn.js.map