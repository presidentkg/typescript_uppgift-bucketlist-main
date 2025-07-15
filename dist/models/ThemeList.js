import { themes as initialThemes } from '../services/variables.js';
import { getDreams, updateDreams } from './DreamList.js';
export function getThemes() {
    let themes;
    const savedThemes = localStorage.getItem("themes");
    if (savedThemes)
        themes = JSON.parse(savedThemes);
    else
        themes = initialThemes.slice();
    return themes;
}
export function renderThemes() {
    let themesToRender = getThemes();
    const themeList = document.getElementById('theme-list');
    themeList.innerHTML = '';
    themesToRender.forEach(theme => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        listItem.addEventListener('click', () => {
            removeTheme(theme);
        });
        themeList.appendChild(listItem);
    });
}
export function addTheme() {
    const addTheme = document.querySelector(".add-theme");
    const themeInput = document.getElementById('theme-input');
    const addThemeButton = document.querySelector('.add-theme .confirm-input');
    addThemeButton.addEventListener('click', () => {
        const newTheme = themeInput.value.trim();
        let themes = getThemes();
        themes.push(newTheme);
        updateThemes(themes);
    });
}
function removeTheme(theme) {
    let themes = getThemes();
    themes = themes.filter(t => t !== theme);
    updateThemes(themes);
    let dreamList = getDreams();
    dreamList.forEach(dream => {
        if (dream.theme === theme) {
            dream.theme = '-';
        }
    });
    updateDreams(dreamList);
}
function updateThemes(updatedThemes) {
    localStorage.setItem("themes", JSON.stringify(updatedThemes));
    renderThemes();
}
//# sourceMappingURL=ThemeList.js.map