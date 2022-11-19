const setTimerToZero = function () {
  const getInnerText = document.querySelectorAll(".time");
  console.log(getInnerText.innerText);

  for (i = 0; i <= getInnerText.length; i++) {
    getInnerText[
      i
    ].innerHTML = `<div class="seconds" onclick="startCountDown(event)" id="${i}">60</div>`;
  }
};
let initialvalue = 0;
const endtime = function () {
  initialvalue.innerText = 0;
};

let ttime = 0;
let id = 0;
const startCountDown = function (event) {
  console.log(event.currentTarget);
  id = event.currentTarget.getAttribute("id");
  console.log(id);

  initialvalue = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  console.log(initialvalue);
  const countDown = setInterval(() => {
    initialvalue--;
    console.log(initialvalue);
    display(initialvalue);
    if (initialvalue < 1) {
      clearInterval(countDown);
    } else {
    }
  }, 1000);
};
const display = function (initi, eve) {
  initialvalue = initi;
  document.getElementById(`${id}`).innerText = initialvalue;
};
//event.currentTarget.innerText = i;

window.onload = function () {
  setTimerToZero();
};
