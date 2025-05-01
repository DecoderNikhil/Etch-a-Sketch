const board = document.querySelector(".board");
const changeSize = document.querySelector(".changeSize");
const erase = document.querySelector(".erase");
const reset = document.querySelector(".reset");
const colorPicker = document.querySelector(".colorPicker");
const colorInput = document.querySelector(".penColor");
const magicColors = document.querySelector(".randomColor");
const shading = document.querySelector(".shading");

let isBlack = false;
let isRandomColor = false;
let isShading = false;
let isErase = false;
let isColor = false;
let penColor;

// Functions
const layGrid = function (size) {
  // while (board.hasChildNodes()) {
  //   board.removeChild(board.firstChild);
  // }
  board.innerHTML = "";

  const boxHW = 540 / size;
  const ele = `<div class="box" style="width:${boxHW}px;height:${boxHW}px;outline:solid lightgray 1px"></div>`;
  for (let i = 0; i < size * size; i++) {
    board.insertAdjacentHTML("beforeend", ele);
  }
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// Event listeners
board.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("box")) {
    // console.log(e);

    // 1st method
    e.target.style.backgroundColor = "black";

    // 2nd method
    // e.target.classList.add("blackBG");
  }
});

changeSize.addEventListener("click", function (e) {
  let size = prompt("Enter the size of the grid, it should be less than 100");

  if (typeof Number(size) === "number" && size <= 100 && size >= 1) {
    layGrid(size);
  } else {
    alert("Enter a valid number between 1-100");
  }
});

reset.addEventListener("click", function (e) {
  const boxes = document.querySelectorAll(".box");
  layGrid(Math.sqrt(boxes.length));

  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.style.backgroundColor = "black";
    }
  });
});

colorPicker.addEventListener("click", () => {
  colorInput.click();
});

colorInput.addEventListener("input", (e) => {
  const penColor = e.target.value;

  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.style.backgroundColor = penColor;
    }
  });
});

magicColors.addEventListener("click", function (e) {
  console.log("happening");
  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.style.backgroundColor = randomColor();
    }
  });
});

shading.addEventListener("click", function (e) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => (box.dataset.opacity = 0.1));

  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      let currentOpacity = parseFloat(e.target.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        e.target.dataset.opacity = currentOpacity;
      }
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    }
  });
});

erase.addEventListener("click", function (e) {
  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box")) {
      e.target.style.backgroundColor = "transparent";
    }
  });
});

// Initialisation
function init() {
  layGrid(16);
  isBlack = true;
}

init();
