const createChild = () => {
  const addNewDiv = document.createElement("div");
  addNewDiv.className = "speed-child";

  const addText = document.createElement("p");
  addText.className = "speed-text";

  const nowRange = document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate;

  nowRange.toFixed(1);

  addText.textContent = "Speed: " + nowRange;

  addNewDiv.appendChild(addText);

  const rangeToString = nowRange.toString();

  if (nowRange) {
    const range = document.createElement("input");
    range.type = "range";
    range.min = "0.1";
    range.max = "5.0";
    range.step = "0.1";
    range.value = rangeToString;
    range.className = "speed-range";
    range.onchange = changeRange;
    addNewDiv.appendChild(range);
  }
  return addNewDiv;
};

const changeRange = () => {
  const changeText = document.getElementsByClassName("speed-text")[0];

  const range = document.getElementsByClassName("speed-range")[0];
  const speed = range.value;

  changeText.textContent = "Speed: " + speed;

  document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate = speed;
};

const interval = setInterval(() => {
  const findSettings = document.querySelector(".ytp-panel-menu");
  if (findSettings) {
    findSettings.appendChild(createChild());
    clearInterval(interval);
  }
}, 1000);
