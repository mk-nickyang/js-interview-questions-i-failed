const CONTAINER_HEIGHT = window.innerHeight - 200; // px
const DISTANCE_TO_EDGE = 10; // px

let speed = 50; // px per seconds

const initSpeedSlider = () => {
  const sliderEle = document.getElementById("slider-input");
  const speedTextEle = document.getElementById("slider-speed-text");

  sliderEle.defaultValue = speed;
  sliderEle.addEventListener("change", (e) => {
    speed = Number(e.target.value);
    speedTextEle.innerHTML = speed;
  });
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

const onScoreDot = (dotSize) => {
  const point = Math.round(100 / dotSize);
  const scoreEle = document.getElementById("score");
  scoreEle.innerHTML = Number(scoreEle.innerHTML) + point;
};

const createNewDot = () => {
  // Create dot element
  const newDotEle = document.createElement("div");
  newDotEle.classList.add("dot");

  // Get random dot size
  const dotSize = getRandomInt(10, 100);
  newDotEle.style.width = `${dotSize}px`;
  newDotEle.style.height = `${dotSize}px`;
  newDotEle.style.top = `${-dotSize}px`;

  // Get random dot spawn position
  const minLeft = DISTANCE_TO_EDGE;
  const maxLeft = window.innerWidth - dotSize - DISTANCE_TO_EDGE;
  const dotLeft = getRandomInt(minLeft, maxLeft);
  newDotEle.style.left = `${dotLeft}px`;

  // Add onclick to dot element
  newDotEle.onclick = (e) => {
    e.stopPropagation();
    // Remove current dot
    e.target.remove();
    // Create a new dot after 1000ms
    setTimeout(createNewDot, 1000);
    // Score point
    onScoreDot(dotSize);
  };
  // Add onclick element role
  newDotEle.setAttribute("role", "button");

  // Add created dot element to dots container
  const dotsContainerEle = document.getElementById("dots-container");
  dotsContainerEle.appendChild(newDotEle);

  // Add dot fall animation
  let previousTimestamp;
  let done = false;

  const dotFall = (timestamp) => {
    if (newDotEle) {
      // Check if dot element exists
      if (previousTimestamp === undefined) {
        previousTimestamp = timestamp;
      }

      // Animation continues if not done
      if (!done) {
        const timePerFrame = timestamp - previousTimestamp; // millisecond
        const currentFrameFallDistance = (speed / 1000) * timePerFrame; // px
        const previousFallDistance = parseFloat(newDotEle.style.top); // px
        const currentFallDistance =
          previousFallDistance + currentFrameFallDistance; // px

        // Math.min() is used here to make sure the element stops at exactly CONTAINER_HEIGHT
        const finalFallDistance = Math.min(
          currentFallDistance,
          CONTAINER_HEIGHT
        );

        if (finalFallDistance === CONTAINER_HEIGHT) {
          done = true;
        }

        newDotEle.style.top = `${finalFallDistance}px`;

        previousTimestamp = timestamp;

        window.requestAnimationFrame(dotFall);
      } else {
        // Remove dot element from dom if done
        newDotEle.remove();
      }
    }
  };

  window.requestAnimationFrame(dotFall);
};

const init = () => {
  initSpeedSlider();

  createNewDot();

  setInterval(createNewDot, 1000);
};

window.onload = init;
