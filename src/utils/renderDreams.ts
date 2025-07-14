import { getDreams, removeDream } from "../models/Dream.js"

export function renderDreams(): void {
    let dreamsToRender = getDreams()
    const dreamList = document.querySelector('.dream-list') as HTMLUListElement
    dreamList.innerHTML = ''

    dreamsToRender.forEach(dream => {
        const listItem = document.createElement('li')
        listItem.classList.add('dream-list_item')

        const checkbox = document.createElement('input')
        checkbox.className = 'dream-check'
        checkbox.type = 'checkbox'
        checkbox.name = `dream-check`
        checkbox.id = `dream-check-${dream.id}`
        checkbox.checked = dream.checked
        listItem.appendChild(checkbox)

        const label = document.createElement('label')
        label.htmlFor = `dream-check-${dream.id}`
        const labelText = document.createElement('span')
        labelText.textContent = dream.name + ', '
        label.appendChild(labelText)
        const themeSpan = document.createElement('span')
        themeSpan.className = 'dream-theme'
        themeSpan.textContent = dream.theme
        label.appendChild(themeSpan)
        listItem.appendChild(label)

        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.addEventListener('click', () => {
            removeDream(dream.id)
            renderDreams()
        })
        const deleteIcon = document.createElement('img')
        deleteIcon.src = '../assets/images/trash_delete.png'
        deleteButton.appendChild(deleteIcon)
        listItem.appendChild(deleteButton)

        dreamList.appendChild(listItem)
    })
}
