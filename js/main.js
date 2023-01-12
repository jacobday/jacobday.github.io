// Initialize signature animation
function initSignature() {
  const pathProperties = {
    "Jacob-J1": { length: 0.8, function: "ease-in" },
    "Jacob-J2": { length: 0.6, function: "ease-out" },
    "Jacob-b": { length: 0.3, function: "ease-out" },
    "Day-D1": { length: 0.9, function: "ease" },
    "Day-D2": { length: 0.6, function: "ease" },
    "Day-y3": { length: 0.4, function: "ease-out" },
  };

  let animDelay = 0;

  document.querySelectorAll(".signature > svg path").forEach((path) => {
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    let animLength = 0.15;
    let animFunction = "linear";

    if (path.id in pathProperties) {
      const pathObj = pathProperties[path.id];

      animLength = pathObj.length;
      animFunction = pathObj.function;
    }

    path.style.animationDuration = `${animLength}s`;
    path.style.animationDelay = `${animDelay}s`;
    path.style.animationTimingFunction = animFunction;

    animDelay += animLength;
  });
}

function initProjects(dataJSON) {
  dataJSON.forEach((element, index) => {
    const cardTemplate = document
      .querySelector("#projectCard")
      .content.cloneNode(true);

    // Image container
    const cardImage = cardTemplate.querySelector("img");
    const imageObject = element.featureImage;

    for (attribute of Object.entries(imageObject)) {
      cardImage[attribute[0]] = attribute[1];
    }

    cardTemplate.querySelector(".label .index").innerHTML = `0${index + 1}`;
    cardTemplate.querySelector(".label .name").innerHTML = element.name;

    // Meta container
    cardTemplate.querySelector(".description").innerHTML = element.description;

    const primaryLink = cardTemplate.querySelector("a.primary");
    const secondaryLink = cardTemplate.querySelector("a.secondary");

    if ("caseStudy" in element) {
      primaryLink.href = element.caseStudy.url;
    } else {
      primaryLink.style.display = "none";
      secondaryLink.style.paddingLeft = 0;
    }

    secondaryLink.href = element.url;

    document.querySelector(".projects .container").appendChild(cardTemplate);
  });

  initGallery();
}

function initObservers() {
  // Signature observers
  let signatureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const paths = entry.target.querySelectorAll("path");

          paths.forEach((path) => {
            path.classList.add("signature-reveal");
          });
          signatureObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.9, rootMargin: "-5%" }
  );

  // Observe signatures
  const signatures = document.querySelectorAll(".signature");
  signatures.forEach((signature) => {
    signatureObserver.observe(signature);
  });
}

let scrollBuffer = 0;

// Set gallery container height
function setStickyContainersSize() {
  requestAnimationFrame(function () {
    document.querySelectorAll(".gallery-sticky").forEach(function (container) {
      const stickyElement = container.querySelector(
        ".container > div:first-of-type"
      );

      const stickyElementWidth = stickyElement.scrollWidth;
      const stickyElementHeight = stickyElement.offsetHeight;

      const stickyContainerHeight =
        stickyElementHeight > stickyElementWidth
          ? stickyElementHeight +
            container.querySelector(".container").scrollWidth
          : container.querySelector(".container").scrollWidth +
            container.querySelector(".card").offsetHeight -
            container.querySelector(".card").scrollWidth +
            scrollBuffer * 2;

      container.setAttribute(
        "style",
        "height: " + stickyContainerHeight + "px"
      );
    });
  });
}

function trackScroll() {
  // Find all the container elements
  const containers = document.querySelectorAll(".gallery-sticky");

  // Create an IntersectionObserver to track the containers
  const observer = new IntersectionObserver((entries) => {
    // Find the first container that is fully in view
    const containerInViewPort = entries.find((entry) => entry.isIntersecting);
    if (!containerInViewPort) return;

    // Get the gallery element and the current scroll position
    const gallery = containerInViewPort.target.querySelector(".gallery");
    const scrollTop = document.documentElement.scrollTop;
    const containerTop = containerInViewPort.target.offsetTop;

    // Scroll the gallery horizontally
    const pxToScroll = scrollTop - containerTop;
    gallery.scrollLeft = pxToScroll;
  });

  // Start observing the containers
  for (const container of containers) {
    observer.observe(container);
  }
}

function initGallery() {
  setStickyContainersSize();

  let galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          document.addEventListener("scroll", trackScroll);
        } else if (entry.intersectionRatio <= 0.1) {
          document.removeEventListener("scroll", trackScroll);
        }
      });
    },
    { threshold: [0, 0.5] }
  );

  // Observe galleries
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    galleryObserver.observe(gallery);
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

      initProjects(dataJSON);
    }
  };

  xobj.send();
}

loadJSON("./assets/data/projects.json");

initSignature();
initObservers();

window.addEventListener("resize", setStickyContainersSize);
