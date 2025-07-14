export function validateEmptyInput(input, errorMessage) {
    if (input.trim() === '') {
        errorMessage.style.display = 'block';
        return false;
    }
    else
        return true;
}
export function validateInputLength(input, errorMessage) {
    if (input.length < 4) {
        errorMessage.style.display = 'block';
        return false;
    }
    else
        return true;
}
//# sourceMappingURL=validation.js.map