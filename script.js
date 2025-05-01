const conatiner = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  conatiner.insertAdjacentHTML("beforeend", '<div class="box"></div>');
}
