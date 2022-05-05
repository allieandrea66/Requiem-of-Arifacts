const home = document.querySelector(".homeEye");
const ballpit = document.querySelector(".ballpitEye");
const bedroom = document.querySelector(".bedroomEye");
const chapel = document.querySelector(".chapelEye");
const sunset = document.querySelector(".sunsetEye");
const isolation = document.querySelector(".isolationEye");
let dilated = false;

eyesArray = new Array(home, ballpit, bedroom, chapel, sunset, isolation).forEach(eye => {
  eye.addEventListener("mouseover", (e) => {
    dilated = true
    eye.src = eye.src.replace("Blink", "Dilated")
    eye.src = eye.src.replace("Eye", "Dilated")
  });
  eye.addEventListener("mouseout", (e) => {
    dilated = false
    eye.src = eye.src.replace("Dilated", "Eye")
  });
  timedBlink(eye)
});

function timedBlink(eye) {
  if (!dilated) {
    eye.src = eye.src.replace("Blink", "Eye")
    setTimeout(() => {
      blink(eye)
    }, (Math.random() * 8500))
  }
};

function blink(eye) {
  if (!dilated) {
    eye.src = eye.src.replace("Eye", "Blink")
    setTimeout(() => {
      timedBlink(eye)
    }, (Math.random() * 500))
  }
};

window.addEventListener("load", (e) => {
  ballpitHeight = ballpit.height;
  ballpitWidth = ballpit.width;
  home.style.height = (ballpitHeight + 5) + "px";
  home.style.width = (ballpitWidth + 5) + "px";
  isolation.style.height = (ballpitHeight + 5) + "px";
  isolation.style.width = (ballpitWidth + 5) + "px";
})