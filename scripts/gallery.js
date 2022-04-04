import { softwareProjects, designProjects, artwork } from "../data/GalleryData.js";

let enlargeCloseBtn = document.getElementById("gallery-enlarge-close");
let enlargeContainer = document.querySelector(".gallery-enlarge-container");
let galleryContainer = document.querySelector(".gallery-main-container");

// render software projects
function renderSoftwareProjects() {
    let container = document.querySelector(".development-projects-container");
    console.log("if ur reading this i love u")
    
    for (let key in softwareProjects) {
        let project = softwareProjects[key];

        let projectContainer = document.createElement("div");
        projectContainer.classList.add("development-project");

        let projectThumbnail = document.createElement("img");
        projectThumbnail.src = project.previewImg;
        projectThumbnail.alt = `${project.title} thumbnail.`;

        let projectInfoContainer = document.createElement("div");
        projectInfoContainer.classList.add("project-information");

        let projectInfoDetails = document.createElement("div");
        projectInfoDetails.classList.add("project-information-details");

        let projectInfoTitle = document.createElement("h5");
        projectInfoTitle.textContent = project.title;
        projectInfoTitle.classList.add("project-information-title");

        let projectInfoDescription = document.createElement("p");
        projectInfoDescription.textContent = project.description;
        projectInfoDescription.classList.add("project-information-description");

        let projectLinksContainer = document.createElement("div");
        projectLinksContainer.classList.add("project-preview");

        let projectPreviewLink = document.createElement("a");
        projectPreviewLink.textContent = "Live Preview";
        projectPreviewLink.href = project.preview;
        projectPreviewLink.target = "_blank";

        let projectRepoLink = document.createElement("a");
        projectRepoLink.textContent = "Source Code";
        projectRepoLink.href = project.repo;
        projectRepoLink.target = "_blank";

        let projectLinkSeparator = document.createElement("p");
        projectLinkSeparator.textContent = "|";

        projectLinksContainer.append(projectPreviewLink, projectLinkSeparator, projectRepoLink);
        projectInfoDetails.append(projectInfoTitle, projectInfoDescription, projectLinksContainer);
        projectInfoContainer.append(projectInfoDetails);
        projectContainer.append(projectInfoContainer, projectThumbnail);
        container.append(projectContainer);
    }
}

// render design projects
function renderDesignProjects() {
    let container = document.querySelector(".design-projects-container");

    for (let key in designProjects) {
        let project = designProjects[key];

        let projectContainer = document.createElement("div");
        projectContainer.classList.add("design-project");

        let projectThumbnail = document.createElement("img");
        projectThumbnail.src = project.previewImg;
        projectThumbnail.alt = `${project.title} thumbnail.`;

        let projectInfo = document.createElement("div");
        projectInfo.classList.add("design-project-information");

        let projectInfoDetails = document.createElement("div");
        projectInfoDetails.classList.add("design-project-information-details");

        let projectInfoTitle = document.createElement("h5");
        projectInfoTitle.textContent = project.title;
        projectInfoTitle.classList.add("design-project-information-title");

        let projectInfoDescription = document.createElement("p");
        projectInfoDescription.textContent = project.description;
        projectInfoDescription.classList.add("design-project-information-description");

        let projectLinksContainer = document.createElement("div");
        let projectBehanceLink = document.createElement("a");
        projectLinksContainer.classList.add("design-project-preview");
        projectBehanceLink.textContent = "Link to Project";
        projectBehanceLink.href = project.behanceLink;
        projectBehanceLink.target = "_blank";

        projectLinksContainer.append(projectBehanceLink);
        projectInfoDetails.append(projectInfoTitle, projectInfoDescription, projectLinksContainer);
        projectInfo.append(projectInfoDetails);

        projectContainer.append(projectInfo, projectThumbnail);
        container.append(projectContainer);
    }
}

// render artwork
function renderArtwork() {
    let column1 = document.getElementById("column-1");
    let column2 = document.getElementById("column-2");
    let column3 = document.getElementById("column-3");
    let counter = 0;

    for (let key in artwork) {
        let image = artwork[key];

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("artwork");

        let imageThumbnail = document.createElement("img");
        imageThumbnail.src = image.previewImg;
        imageThumbnail.alt = `${image.title} thumbnail.`;

        let imageEnlargeBtn = document.createElement("button");
        imageEnlargeBtn.classList.add("artwork-enlarge-button");
        imageEnlargeBtn.textContent = "Click To Enlarge";

        let imageInformationContainer = document.createElement("div");
        imageInformationContainer.classList.add("artwork-information");

        let imageInformation = document.createElement("div");
        imageInformation.classList.add("artwork-information-details");

        let imageInformationTitle = document.createElement("h5");
        imageInformationTitle.classList.add("artwork-information-title");
        imageInformationTitle.textContent = image.title;

        let imageInformationDescription = document.createElement("p");
        imageInformationDescription.classList.add("artwork-information-description");
        imageInformationDescription.textContent = image.description;

        imageInformation.append(imageInformationTitle, imageInformationDescription);
        imageInformationContainer.append(imageEnlargeBtn, imageInformation);
        imageContainer.append(imageInformationContainer, imageThumbnail);

        imageEnlargeBtn.addEventListener('click', () => {
            localStorage.setItem('scrollPosition', window.scrollY);

            let enlargeImageContainer = document.querySelector(".gallery-enlarge-image");
            let enlargedImage = document.createElement("img");
            enlargedImage.src = image.previewImg;

            enlargeContainer.style.display = "block";
            galleryContainer.style.display = "none";
            enlargeImageContainer.innerHTML = "";
            enlargeImageContainer.appendChild(enlargedImage);
        })

        if (counter % 3 == 0) {
            column1.appendChild(imageContainer);
        } else if (counter % 3 == 1) {
            column2.appendChild(imageContainer);
        } else {
            column3.appendChild(imageContainer);
        }

        counter++;
    }
}

enlargeCloseBtn.addEventListener('click', (e) => {
    enlargeContainer.style.display = "none";
    galleryContainer.style.display = "block";

    let scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    } 
});

(function renderProjects() {
    renderSoftwareProjects();
    renderDesignProjects();
    renderArtwork();
})()