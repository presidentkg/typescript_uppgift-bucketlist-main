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
//# sourceMappingURL=checkInput.js.map