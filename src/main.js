import { createMainGridSection } from './builders/createMainGridSection'

const app = document.getElementById('app')
const main = document.createElement('main')
const h1 = document.createElement('h1')
const mainGrid = createMainGridSection()

h1.textContent = 'Learning Path Projects'

main.appendChild(h1)
main.appendChild(mainGrid)
app.appendChild(main)