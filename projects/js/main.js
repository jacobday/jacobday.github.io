let projectsJSON = {};
let projectIndex = 0;

function getCopyrightYear() {
  return `&copy; Jacob Day ${new Date().getFullYear()}`;
}

function initLayout(layoutJSON) {
  const caseStudyJSON = layoutJSON.caseStudy;
  const metaJSON = caseStudyJSON.meta;

  const layoutTemplate = document
    .querySelector("#projectLayout")
    .content.cloneNode(true);

  // Page title
  document.title = `${layoutJSON.name} Case Study`;

  // Set CSS variables
  document.documentElement.style.setProperty(
    "--color-primary",
    caseStudyJSON.primaryColor
  );
  document.documentElement.style.setProperty(
    "--color-button",
    caseStudyJSON.buttonColor
  );

  // Header image
  const headerImg = layoutTemplate.querySelector("header img");

  for (attribute of Object.entries(caseStudyJSON.images.header)) {
    headerImg[attribute[0]] = attribute[1];
  }

  // Visit link
  layoutTemplate.querySelector(".meta .visit").href = layoutJSON.url;

  // Meta
  for (entry of Object.entries(metaJSON)) {
    layoutTemplate.querySelector(`.${entry[0]}`).innerHTML = entry[1];
  }

  // Tags
  for (tag of Object.entries(caseStudyJSON.tags)) {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = `<span>•</span> ${tag[1]}`;

    // Append new tag
    layoutTemplate.querySelector(".tags").appendChild(newListItem);
  }

  // Video demo
  if ("demo" in caseStudyJSON) {
    layoutTemplate.querySelector(".demo iframe").src = caseStudyJSON.demo;
  } else {
    layoutTemplate.querySelector(".demo").remove();
  }

  // Copyright
  layoutTemplate.querySelector(".copyright").innerHTML = getCopyrightYear();

  // Next project
  let nextIndex = projectIndex + 1;
  nextIndex = nextIndex > projectsJSON.length - 1 ? 0 : nextIndex;

  const nextJSON = projectsJSON[nextIndex];

  // Next project name
  layoutTemplate.querySelector(".next h2").innerHTML = nextJSON.name;

  // Next project link
  layoutTemplate.querySelector(".next a").href = `../${nextJSON.caseStudy.url}`;

  // Next project image
  if ("preview" in nextJSON.caseStudy.images) {
    layoutTemplate.querySelector(
      "footer"
    ).style.backgroundImage = `url(../${nextJSON.caseStudy.url}/${nextJSON.caseStudy.images.preview.src})`;
  } else {
    layoutTemplate.querySelector(
      "footer"
    ).style.backgroundImage = `url(../${nextJSON.caseStudy.url}/${nextJSON.caseStudy.images.header.src})`;
  }

  document.querySelector("body").appendChild(layoutTemplate);

  initObservers();
}

function initObservers() {
  // Scroll trigger observers
  let scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.location.href = document
            .querySelector(".next a")
            .getAttribute("href");
        }
      });
    },
    { threshold: 0.9 }
  );

  // Observe scroll triggers
  const signatures = document.querySelectorAll(".scrollTrigger");
  signatures.forEach((signature) => {
    scrollObserver.observe(signature);
  });
}

// Load projects data
function loadJSON(fileName) {
  // make a JSON loading object
  const xobj = new XMLHttpRequest();

  // prepare to read JSON files
  xobj.overrideMimeType("application/json");

  // specify the request type
  xobj.open("GET", fileName);

  // what to do once you read the file
  xobj.onreadystatechange = () => {
    // check if the file is loaded correctly
    if (xobj.readyState == 4 && xobj.status == 200) {
      // ready to read the JSON and process it
      // first get the file content
      const responseText = xobj.responseText;

      // this is a raw string, convert from string to JSON object
      const dataJSON = JSON.parse(responseText);
      projectsJSON = dataJSON;

      const projectName = document
        .querySelector("#projectLayout")
        .getAttribute("data-project-id");

      const projectLayout = dataJSON.filter((project, index) => {
        if (project.id == projectName) {
          projectIndex = index;
          return true;
        }
      })[0];

      initLayout(projectLayout);
    }
  };

  xobj.send();
}

function init() {
  window.scrollTo(0, 0);
  loadJSON("../assets/data/projects.json");
}

init();
