const setTimerToZero = function () {
  const getInnerText = document.querySelectorAll(".time");
  console.log(getInnerText.innerText);

  for (i = 0; i <= getInnerText.length; i++) {
    getInnerText[
      i
    ].innerHTML = `<div class="seconds" onclick="startCountDown${i}(event)" id="${i}">60</div>`;
  }
};
let initialvalue = 0;
let initialvalue0 = 0;
let initialvalue1 = 0;
let initialvalue2 = 0;
let initialvalue3 = 0;
let initialvalue4 = 0;
let initialvalue5 = 0;
let initialvalue6 = 0;
let initialvalue7 = 0;
let initialvalue8 = 0;
let initialvalue9 = 0;
let initialvalue10 = 0;

const endtime = function () {
  initialvalue.innerText = 0;
};

let ttime = 60;
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
let id0 = 0;
let ttime0 = 60;
const originalvalue0 = function (event) {
  ttime0 = document.getElementById("0").innerText;
};
const startCountDown0 = function (event) {
  console.log(event.currentTarget);
  id0 = event.currentTarget.getAttribute("id");
  console.log(id0);
  document.querySelector("#circul1").classList.add("rotate");

  initialvalue0 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue0 < ttime0) {
    return;
  } else {
    console.log(initialvalue0);
    const countDown = setInterval(() => {
      initialvalue0--;
      console.log(initialvalue0);
      display0(initialvalue0);
      if (initialvalue0 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display0 = function (initi, eve) {
  initialvalue0 = initi;
  document.getElementById(`${id0}`).innerText = initialvalue0;
};
let id1 = 0;
let ttime1 = 60;
const originalvalue1 = function (event) {
  ttime1 = document.getElementById("1").innerText;
};
const startCountDown1 = function (event) {
  console.log(event.currentTarget);
  id1 = event.currentTarget.getAttribute("id");
  console.log(id1);
  document.querySelector("#circul2").classList.add("rotate");

  initialvalue1 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue1 < ttime1) {
    return;
  } else {
    console.log(initialvalue1);
    const countDown = setInterval(() => {
      initialvalue1--;
      console.log(initialvalue1);
      display1(initialvalue1);
      if (initialvalue1 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display1 = function (initi, eve) {
  initialvalue1 = initi;
  document.getElementById(`${id1}`).innerText = initialvalue1;
};
let id2 = 0;
let ttime2 = 60;
const originalvalue2 = function (event) {
  ttime2 = document.getElementById("2").innerText;
};
const startCountDown2 = function (event) {
  console.log(event.currentTarget);
  id2 = event.currentTarget.getAttribute("id");
  console.log(id2);
  document.querySelector("#circul3").classList.add("rotate");

  initialvalue2 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue2 < ttime2) {
    return;
  } else {
    console.log(initialvalue2);
    const countDown = setInterval(() => {
      initialvalue2--;
      console.log(initialvalue2);
      display2(initialvalue2);
      if (initialvalue2 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display2 = function (initi, eve) {
  initialvalue2 = initi;
  document.getElementById(`${id2}`).innerText = initialvalue2;
};
let id3 = 0;
let ttime3 = 60;
const originalvalue3 = function (event) {
  ttime3 = document.getElementById("3").innerText;
};
const startCountDown3 = function (event) {
  console.log(event.currentTarget);
  id3 = event.currentTarget.getAttribute("id");
  console.log(id3);
  document.querySelector("#circul4").classList.add("rotate");

  initialvalue3 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue3 < ttime3) {
    return;
  } else {
    console.log(initialvalue3);
    const countDown = setInterval(() => {
      initialvalue3--;
      console.log(initialvalue3);
      display3(initialvalue3);
      if (initialvalue3 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display3 = function (initi, eve) {
  initialvalue3 = initi;
  document.getElementById(`${id3}`).innerText = initialvalue3;
};
let id4 = 0;
let ttime4 = 60;
const originalvalue4 = function (event) {
  ttime4 = document.getElementById("4").innerText;
};
const startCountDown4 = function (event) {
  console.log(event.currentTarget);
  id4 = event.currentTarget.getAttribute("id");
  console.log(id4);
  document.querySelector("#circul5").classList.add("rotate");

  initialvalue4 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue4 < ttime4) {
    return;
  } else {
    console.log(initialvalue4);
    const countDown = setInterval(() => {
      initialvalue4--;
      console.log(initialvalue4);
      display4(initialvalue4);
      if (initialvalue4 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display4 = function (initi, eve) {
  initialvalue4 = initi;
  document.getElementById(`${id4}`).innerText = initialvalue4;
};
let id5 = 0;
let ttime5 = 60;
const originalvalue5 = function (event) {
  ttime5 = document.getElementById("5").innerText;
};
const startCountDown5 = function (event) {
  console.log(event.currentTarget);
  id5 = event.currentTarget.getAttribute("id");
  console.log(id5);
  document.querySelector("#circul6").classList.add("rotate");

  initialvalue5 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue5 < ttime5) {
    return;
  } else {
    console.log(initialvalue5);
    const countDown = setInterval(() => {
      initialvalue5--;
      console.log(initialvalue5);
      display5(initialvalue5);
      if (initialvalue5 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display5 = function (initi, eve) {
  initialvalue5 = initi;
  document.getElementById(`${id5}`).innerText = initialvalue5;
};
let id6 = 0;
let ttime6 = 60;
const originalvalue6 = function (event) {
  ttime6 = document.getElementById("6").innerText;
};

const startCountDown6 = function (event) {
  console.log(event.currentTarget);
  id6 = event.currentTarget.getAttribute("id");
  console.log(id6);
  document.querySelector("#circul7").classList.add("rotate");

  initialvalue6 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue6 < ttime6) {
    return;
  } else {
    console.log(initialvalue6);
    const countDown = setInterval(() => {
      initialvalue6--;
      console.log(initialvalue6);
      display6(initialvalue6);
      if (initialvalue6 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display6 = function (initi, eve) {
  initialvalue6 = initi;
  document.getElementById(`${id6}`).innerText = initialvalue6;
};
let id7 = 0;
let ttime7 = 60;
const originalvalue7 = function (event) {
  ttime7 = document.getElementById("7").innerText;
};

const startCountDown7 = function (event) {
  console.log(event.currentTarget);
  id7 = event.currentTarget.getAttribute("id");
  console.log(id7);
  document.querySelector("#circul8").classList.add("rotate");

  initialvalue7 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue7 < ttime7) {
    return;
  } else {
    console.log(initialvalue7);
    const countDown = setInterval(() => {
      initialvalue7--;
      console.log(initialvalue7);
      display7(initialvalue7);
      if (initialvalue7 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display7 = function (initi, eve) {
  initialvalue7 = initi;
  document.getElementById(`${id7}`).innerText = initialvalue7;
};
let id8 = 0;
let ttime8 = 60;
const originalvalue8 = function (event) {
  ttime8 = document.getElementById("8").innerText;
};
const startCountDown8 = function (event) {
  console.log(event.currentTarget);
  id8 = event.currentTarget.getAttribute("id");
  console.log(id);
  document.querySelector("#circul9").classList.add("rotate");

  initialvalue8 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue8 < ttime8) {
    return;
  } else {
    console.log(initialvalue8);
    const countDown = setInterval(() => {
      initialvalue8--;
      console.log(initialvalue8);
      display8(initialvalue8);
      if (initialvalue8 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display8 = function (initi, eve) {
  initialvalue8 = initi;
  document.getElementById(`${id8}`).innerText = initialvalue8;
};
let id9 = 0;
let ttime9 = 60;
const originalvalue9 = function (event) {
  ttime9 = document.getElementById("9").innerText;
};

const startCountDown9 = function (event) {
  console.log(event.currentTarget);
  id9 = event.currentTarget.getAttribute("id");
  console.log(id9);
  document.querySelector("#circul10").classList.add("rotate");

  initialvalue9 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue9 < ttime9) {
    return;
  } else {
    console.log(initialvalue9);
    const countDown = setInterval(() => {
      initialvalue9--;
      console.log(initialvalue9);
      display9(initialvalue9);
      if (initialvalue9 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display9 = function (initi, eve) {
  initialvalue9 = initi;
  document.getElementById(`${id9}`).innerText = initialvalue9;
};
let id10 = 0;
let ttime10 = 60;
const originalvalue10 = function (event) {
  ttime10 = document.getElementById("10");
};

const startCountDown10 = function (event) {
  console.log(event.currentTarget);
  id10 = event.currentTarget.getAttribute("id");
  console.log(id10);

  initialvalue10 = event.currentTarget.innerText;
  ttime = event.currentTarget.innerText;
  if (initialvalue10 < ttime10) {
    return;
  } else {
    console.log(initialvalue10);
    const countDown = setInterval(() => {
      initialvalue10--;
      console.log(initialvalue10);
      display10(initialvalue10);
      if (initialvalue10 < 1) {
        clearInterval(countDown);
      } else {
      }
    }, 1000);
  }
};
const display10 = function (initi, eve) {
  initialvalue10 = initi;
  document.getElementById(`${id10}`).innerText = initialvalue10;
};
const selectwatch = function (event) {
  const getwatchvalue = document.querySelector("#imput-clock").value - 1;
  console.log(getwatchvalue);
  const getseconds = document.querySelector("#input-second").value;
  console.log(getseconds);
  document.getElementById(`${getwatchvalue}`).innerText = getseconds;
  originalvalue0();
  originalvalue1();
  originalvalue2();
  originalvalue3();
  originalvalue4();
  originalvalue5();
  originalvalue6();
  originalvalue7();
  originalvalue8();
  originalvalue9();
  originalvalue10();
};
//event.currentTarget.innerText = i;

window.onload = function () {
  setTimerToZero();
};
