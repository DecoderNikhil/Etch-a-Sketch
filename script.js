const conatiner = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  conatiner.insertAdjacentHTML("beforeend", '<div class="box"></div>');
}

const box = document.querySelector(".box");
conatiner.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("box")) {
    // console.log(e);

    // 1st method
    // e.target.style.backgroundColor = "black";

    // 2nd method
    e.target.classList.add("blackBG");
  }
});
