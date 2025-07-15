export function addEventListenerToPasswordToggleButtonButton(): void {
    const passwordToggleBtn = document.querySelector('.toggle-password') as HTMLButtonElement
    const passwordInput = document.getElementById('password') as HTMLInputElement

    passwordToggleBtn.addEventListener('click', (event) => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
        passwordInput.setAttribute('type', type)
    })
}