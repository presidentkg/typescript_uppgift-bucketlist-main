export function setNameTag(): void {
    const username = localStorage.getItem('username')
    const usernameTag = document.getElementById('user-name') as HTMLSpanElement
    if (username) {
        usernameTag.innerText = username
    }
}