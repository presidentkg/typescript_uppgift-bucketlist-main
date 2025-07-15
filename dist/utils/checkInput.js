export function checkInputEmpty(input, errorMessage) {
    if (input.trim() === '') {
        errorMessage.style.display = 'block';
        return false;
    }
    else
        return true;
}
export function checkInputLength(input, errorMessage) {
    if (input.length < 4) {
        errorMessage.style.display = 'block';
        return false;
    }
    else
        return true;
}
export function createErrorMessage(changeName) {
    const usernameErrorMessage = document.createElement('p');
    usernameErrorMessage.classList.add('error-message');
    usernameErrorMessage.setAttribute('role', 'alert');
    usernameErrorMessage.style.display = 'none';
    usernameErrorMessage.style.color = "black";
    usernameErrorMessage.innerHTML = 'Användarnamnet kan inte vara tomt';
    changeName.appendChild(usernameErrorMessage);
    return usernameErrorMessage;
}
//# sourceMappingURL=checkInput.js.map