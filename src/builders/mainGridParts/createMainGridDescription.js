export const createMainGridDescription = (title, description, mainGridSubtitleDiv) => {
    const mainGridDescriptionDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    mainGridDescriptionDiv.className = "main__grid-description"
    h2.className = "main__grid-title"
    h2.textContent = title
    p.textContent = description

    mainGridDescriptionDiv.appendChild(h2)
    mainGridDescriptionDiv.appendChild(mainGridSubtitleDiv)
    mainGridDescriptionDiv.appendChild(p)
    return mainGridDescriptionDiv
}