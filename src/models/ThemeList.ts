import { themes as initialThemes } from '../services/variables.js';
import { getDreams, updateDreams } from './DreamList.js';

export function getThemes(): string[] {
    let themes: string[]
    const savedThemes = localStorage.getItem("themes")
    if (savedThemes)
        themes = JSON.parse(savedThemes)
    else
        themes = initialThemes.slice()
    return themes
}

export function renderThemes(): void {
    let themesToRender = getThemes()
    const themeList = document.getElementById('theme-list') as HTMLUListElement
    themeList.innerHTML = ''

    themesToRender.forEach(theme => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`
        listItem.addEventListener('click', () => {
            removeTheme(theme)
        })
        themeList.appendChild(listItem)
    })
}

export function addTheme(): void {
    const addTheme = document.querySelector(".add-theme") as HTMLDivElement;
    const themeInput = document.getElementById('theme-input') as HTMLInputElement;
    const addThemeButton = document.querySelector('.add-theme .confirm-input') as HTMLButtonElement
    addThemeButton.addEventListener('click', () => {
        const newTheme = themeInput.value.trim()
        let themes = getThemes();
        themes.push(newTheme)
        updateThemes(themes)
    })

}

function removeTheme(theme: string): void {
    let themes = getThemes()
    themes = themes.filter(t => t !== theme)
    updateThemes(themes)

    let dreamList = getDreams()
    dreamList.forEach(dream => {
        if (dream.theme === theme) {
            dream.theme = '-'
        }
    })
    updateDreams(dreamList)
}

function updateThemes(updatedThemes: string[]): void {
    localStorage.setItem("themes", JSON.stringify(updatedThemes))
    renderThemes()
}

