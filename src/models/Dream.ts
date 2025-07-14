import { dreams as initialDreams, themes } from '../services/variables.js'
import { checkInputEmpty } from '../utils/checkInput.js'

export function getDreams(): { id: number, name: string, theme: string, checked: boolean } [] {
    let dreams: { id: number, name: string, theme: string, checked: boolean }[]
    const savedDreams = localStorage.getItem("dreams")
    if (savedDreams)
        dreams = JSON.parse(savedDreams)
    else
        dreams = initialDreams.slice()
    return dreams
}

export function updateDreams(updateDreams: { id: number, name: string, theme: string, checked: boolean } []) {
    localStorage.setItem("dreams", JSON.stringify(updateDreams))
}

export function addDream(): void {
    const addDreamForm = document.querySelector('form') as HTMLFormElement
    const dreamInput = document.getElementById('dream') as HTMLInputElement
    const themeSelect = document.getElementById('dream-select') as HTMLSelectElement
    themes.forEach(theme => {
        const option = document.createElement('option')
        option.value = theme
        option.textContent = theme
        themeSelect.appendChild(option)
    })
    const dreamErrorMessage = document.getElementById('dream-error-message') as HTMLParagraphElement
    const themeErrorMessage = document.getElementById('theme-error-message') as HTMLParagraphElement
    let userDreams = getDreams()
    
    addDreamForm.addEventListener('submit', (event) => {
        event.preventDefault()
        dreamErrorMessage.style.display = 'none'
        themeErrorMessage.style.display = 'none'

        if(!checkInputEmpty(dreamInput.value, dreamErrorMessage))
            return
        if(!checkInputEmpty(themeSelect.value, themeErrorMessage))
            return
    
        /*if (dreamInput.value.trim() === '') {
            dreamErrorMessage.style.display = 'block'
            return
        }
    
        if (themeSelect.value.trim() === '') {
            themeErrorMessage.style.display = 'block'
            return
        }*/
    
        const dream = {
            id: userDreams.length + 1,
            name: dreamInput.value,
            theme: themeSelect.value,
            checked: false
        }
        userDreams.push(dream)
        updateDreams(userDreams)
    
        window.location.href = 'Dashboard.html'
    })
}

export function removeDream(dreamId: number): void {
    let dreams = getDreams()
    dreams = dreams.filter(dream => dream.id !== dreamId)
    updateDreams(dreams)
}