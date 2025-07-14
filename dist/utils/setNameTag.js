export function setNameTag() {
    const username = localStorage.getItem('username');
    const usernameTag = document.getElementById('user-name');
    if (username) {
        usernameTag.innerText = username;
    }
}
//# sourceMappingURL=setNameTag.js.map