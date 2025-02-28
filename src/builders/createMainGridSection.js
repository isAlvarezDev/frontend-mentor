import projects from "../data/projects.json";
import {
  createMainGridDescription,
  createMainGridImgContainer,
  createMainGridSubtitle,
} from "./mainGridParts/";

export const createMainGridSection = () => {
  const mainGridSection = document.createElement("section");
  const documentFragment = document.createDocumentFragment();
  mainGridSection.className = "main__grid";

  projects.forEach((project) => {
    const mainGridItemDiv = document.createElement("div");
    mainGridItemDiv.className = "main__grid-item";
    const mainGridImgContainer = createMainGridImgContainer(
      project.url,
      project.imgSrc,
      project.alt
    );
    const mainGridSubtitleDiv = createMainGridSubtitle(
      project.languages,
      project.difficulty
    );
    const createMainGridDescriptionDiv = createMainGridDescription(
      project.title,
      project.description,
      mainGridSubtitleDiv
    );

    mainGridItemDiv.appendChild(mainGridImgContainer);
    mainGridItemDiv.appendChild(createMainGridDescriptionDiv);
    documentFragment.appendChild(mainGridItemDiv);
  });

  mainGridSection.appendChild(documentFragment);
  return mainGridSection;
};
