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

initSignature();
initObservers();
