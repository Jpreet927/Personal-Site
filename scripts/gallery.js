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

        let shadowColour = "";
        Vibrant.from(project.previewImg).getPalette((err, palette) => {
            let rgb = palette.Muted._rgb;
            shadowColour = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`;
        }).then(
            projectContainer.addEventListener('mouseenter', () => {
                projectContainer.style.boxShadow = `0px 24px 48px ${shadowColour}`;
            }),
            projectContainer.addEventListener('mouseleave', () => {
                projectContainer.style = "";
            })
        );
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

        let projectThumbnailShadow = projectThumbnail;

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

        let shadowColour = "";
        Vibrant.from(project.previewImg).getPalette((err, palette) => {
            let rgb = palette.Vibrant._rgb;
            shadowColour = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`;
        }).then(
            projectContainer.addEventListener('mouseenter', () => {
                projectContainer.style.boxShadow = `0px 24px 48px ${shadowColour}`;
            }),
            projectContainer.addEventListener('mouseleave', () => {
                projectContainer.style = "";
            })
        );
    }
}

// render artwork
function renderArtwork() {
    let column1 = document.getElementById("column-1");
    let column2 = document.getElementById("column-2");
    let column3 = document.getElementById("column-3");
    let counter = 0;

    for (let key in artwork) {
        let project = artwork[key];

        let projectContainer = document.createElement("div");
        projectContainer.classList.add("artwork");

        let projectThumbnail = document.createElement("img");
        projectThumbnail.src = project.previewImg;
        projectThumbnail.alt = `${project.title} thumbnail.`;

        let projectEnlargeBtn = document.createElement("button");
        projectEnlargeBtn.classList.add("artwork-enlarge-button");
        projectEnlargeBtn.textContent = "Click To Enlarge";

        let projectInformationContainer = document.createElement("div");
        projectInformationContainer.classList.add("artwork-information");

        let projectInformation = document.createElement("div");
        projectInformation.classList.add("artwork-information-details");

        let projectInformationTitle = document.createElement("h5");
        projectInformationTitle.classList.add("artwork-information-title");
        projectInformationTitle.textContent = project.title;

        let projectInformationDescription = document.createElement("p");
        projectInformationDescription.classList.add("artwork-information-description");
        projectInformationDescription.textContent = project.description;

        projectInformation.append(projectInformationTitle, projectInformationDescription);
        projectInformationContainer.append(projectEnlargeBtn, projectInformation);
        projectContainer.append(projectInformationContainer, projectThumbnail);

        projectEnlargeBtn.addEventListener('click', () => {
            localStorage.setItem('scrollPosition', window.scrollY);

            let enlargeprojectContainer = document.querySelector(".gallery-enlarge-image");
            let enlargedproject = document.createElement("img");
            enlargedproject.src = project.previewImg;

            enlargeContainer.style.display = "block";
            galleryContainer.style.display = "none";
            enlargeprojectContainer.innerHTML = "";
            enlargeprojectContainer.appendChild(enlargedproject);
        });

        if (counter % 3 == 0) {
            column1.appendChild(projectContainer);
        } else if (counter % 3 == 1) {
            column2.appendChild(projectContainer);
        } else {
            column3.appendChild(projectContainer);
        }

        counter++;

        let shadowColour = "";
        Vibrant.from(project.previewImg).getPalette((err, palette) => {
            let rgb = palette.Muted._rgb;
            shadowColour = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`;
        }).then(
            projectContainer.addEventListener('mouseenter', () => {
                projectContainer.style.boxShadow = `0px 24px 48px ${shadowColour}`;
            }),
            projectContainer.addEventListener('mouseleave', () => {
                projectContainer.style = "";
            })
        );
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

let hamburgerMenu = document.querySelector(".gallery-hamburger");
let navbar = document.querySelector(".gallery-navbar ul");
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("visible");
    navbar.classList.toggle("visible");
});

(function renderProjects() {
    renderSoftwareProjects();
    renderDesignProjects();
    renderArtwork();
})()