import data from "./data/data.js"
import {
    createMainGridImgContainer,
    createMainGridDescription,
    createMainGridSubtitle,
} from "./modules/index.js"

const mainGridSection = document.querySelector(".main__grid")
const documentFragment = document.createDocumentFragment()

data.forEach((data) => {
    const mainGridItemDiv = document.createElement("div")
    mainGridItemDiv.className = "main__grid-item";
    const mainGridImgContainer = createMainGridImgContainer(
        data.url,
        data.imgSrc,
        data.alt
    )
    const mainGridSubtitleDiv = createMainGridSubtitle(data.languages, data.difficulty)
    const mainGridDescriptionDiv = createMainGridDescription(data.title, data.description, mainGridSubtitleDiv)

    mainGridItemDiv.appendChild(mainGridImgContainer)
    mainGridItemDiv.appendChild(mainGridDescriptionDiv)
    documentFragment.appendChild(mainGridItemDiv)
})

mainGridSection.appendChild(documentFragment)