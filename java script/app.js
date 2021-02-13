console.log("Hey I am Rahul Mondal");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progressLine = document.querySelector(".progress-line");
const num = document.querySelectorAll(".num");

let currentItem = 1;
next.addEventListener("click", function () {
  currentItem++;

  if (currentItem > num.length) {
    currentItem = num.length;
  }

  update();
});

prev.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 1) {
    currentItem = 1;
  }

  update();
});

function update() {
  num.forEach((element, index) => {
    if (index < currentItem) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  unlockButtons();
}
function unlockButtons() {
  if (currentItem === 1) {
    prev.classList.add("disable");
  } else if (currentItem === num.length) {
    next.classList.add("disable");
  } else {
    prev.classList.remove("disable");
    next.classList.remove("disable");
  }
  lineWidthUpdate();
}

function lineWidthUpdate() {
  const active = document.querySelectorAll(".active");

  console.log((active.length - 1) / (num.length - 1));

  let width = ((active.length - 1) / (num.length - 1)) * 100;

  progressLine.style.width = width + "%";
}
