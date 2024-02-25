let icon = document.querySelector(".icon");

let isDarkMode = localStorage.getItem("darkMode");
if (isDarkMode === "true") {
  document.body.classList.add("dark-theme");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun", "white-icon");
} else {
  document.body.classList.remove("dark-theme");
  icon.classList.remove("fa-sun", "white-icon");
  icon.classList.add("fa-moon");
}

function changeTheme() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun", "white-icon");
    localStorage.setItem("darkMode", "true");
  } else {
    icon.classList.remove("fa-sun", "white-icon");
    icon.classList.add("fa-moon");
    localStorage.removeItem("darkMode");
  }
}

function openMore() {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup");
  popup.style.visibility = "visible";
}

const meterNumberInput = document.querySelector("#meterNumberInput");
const answer = document.querySelector("#answer");
const meterOption1 = document.querySelector("#meterOption");
const meterOption2 = document.querySelector("#meterOption2");
function convert() {
  let input = meterNumberInput.value;
  let selected1 = meterOption1.value;
  let selectedL2 = meterOption2.value;

  if (selected1 == "km" && selectedL2 == "km") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "m" && selectedL2 == "m") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "cm" && selectedL2 == "cm") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "km" && selectedL2 == "m") {
    let result = Number(input) * 1000;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "km" && selectedL2 == "cm") {
    let result = Number(input) * 100000;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "m" && selectedL2 == "km") {
    let result = Number(input) * 0.001;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "m" && selectedL2 == "cm") {
    let result = Number(input) * 100;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "cm" && selectedL2 == "km") {
    let result = Number(input) / 100000;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "cm" && selectedL2 == "m") {
    let result = Number(input) / 0.01;
    answer.innerHTML = result + selectedL2;
  }
  if (selected1 == "") {
    alert("please enter a first unit");
  }
  if (selectedL2 == "") {
    alert("please enter a second unit");
  }

  if (input === "") {
    alert("please enter a number");
  }
}

function openMoreL() {
  const popup = document.querySelector("#popupL");
  popup.classList.add("popup");
  popup.style.visibility = "visible";
}

const volumeNumberInput1 = document.querySelector("#volumeNumberInput");
const answerL = document.querySelector("#answerL");
const volumeOptionL1 = document.querySelector("#meterOptionL");
const volumeOptionL2 = document.querySelector("#meterOptionL2");

function convertL() {
  let inputL = volumeNumberInput1.value;
  let selectedL1 = volumeOptionL1.value;
  let selectedL2 = volumeOptionL2.value;

  if (selectedL1 == "l" && selectedL2 == "l") {
    alert("you can't convert the same unit");
  }
  if (selectedL1 == "ml" && selectedL2 == "ml") {
    alert("you can't convert the same unit");
  }
  if (selectedL1 == "gl" && selectedL2 == "gl") {
    alert("you can't convert the same unit");
  }
  if (selectedL1 == "l" && selectedL2 == "ml") {
    let resultL = Number(inputL) * 1000;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "l" && selectedL2 == "gl") {
    let resultL = Number(inputL) / 4.546;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "ml" && selectedL2 == "l") {
    let resultL = Number(inputL) / 1000;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "ml" && selectedL2 == "gl") {
    let resultL = Number(inputL) / 4546;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "ga" && selectedL2 == "l") {
    let resultL = Number(inputL) * 4.546;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "ga" && selectedL2 == "ml") {
    let resultL = Number(inputL) * 4.546;
    answerL.innerHTML = resultL + selectedL2;
  }
  if (selectedL1 == "") {
    alert("please enter a first unit");
  }
  if (selectedL2 == "") {
    alert("please enter a second unit");
  }

  if (inputL === "") {
    alert("please enter a number");
  }
}

function openMoreP() {
  const popup = document.querySelector("#popupP");
  popup.classList.add("popup");
  popup.style.visibility = "visible";
}

const pressureNumberInput = document.querySelector("#pressureNumberInput");
const answerP = document.querySelector("#answerP");
const meterOptionP = document.querySelector("#meterOptionP");
const meterOptionP2 = document.querySelector("#meterOptionP2");

function convertP() {
  let inputP = pressureNumberInput.value;
  let selectedP1 = meterOptionP.value;
  let selectedP2 = meterOptionP2.value;

  if (selectedP1 == "pas" && selectedP2 == "pas") {
    alert("you can't convert the same unit");
  }
  if (selectedP1 == "bar" && selectedP2 == "bar") {
    alert("you can't convert the same unit");
  }
  if (selectedP1 == "tor" && selectedP2 == "tor") {
    alert("you can't convert the same unit");
  }
  if (selectedP1 == "pas" && selectedP2 == "bar") {
    let resultL = Number(inputP) / 100000;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "pas" && selectedP2 == "tor") {
    let resultL = Number(inputP) / 133.3;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "bar" && selectedP2 == "pas") {
    let resultL = Number(inputP) * 1000;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "bar" && selectedP2 == "tor") {
    let resultL = Number(inputP) * 750.1;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "tor" && selectedP2 == "pas") {
    let resultL = Number(inputP) * 133.3;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "tor" && selectedP2 == "bar") {
    let resultL = Number(inputP) / 750.1;
    answerP.innerHTML = resultL + selectedP2;
  }
  if (selectedP1 == "") {
    alert("please enter a first unit");
  }
  if (selectedP2 == "") {
    alert("please enter a second unit");
  }

  if (inputP === "") {
    alert("please enter a number");
  }
}

function openMoreBMI() {
  const popupBMI = document.querySelector("#popupBMI");
  popupBMI.classList.add("popupBMI");
  popupBMI.style.visibility = "visible";
}

function convertBMI() {
  const answerBMI = document.querySelector("#answerBMI");
  let inputH = parseFloat(document.getElementById("height").value);
  let inputW = parseFloat(document.getElementById("weight").value);
  let resultBMI = inputW / (inputH * inputH);
  answerBMI.innerHTML = resultBMI;
}

function openMoreHeat() {
  const popupHeat = document.querySelector("#popupHeat");
  popupHeat.classList.add("popupHeat");
  popupHeat.style.visibility = "visible";
}

const heatNumberInput = document.querySelector("#heatNumberInput");
const answerHeat = document.querySelector("#answerHeat");
const meterOptionHeat = document.querySelector("#meterOptionHeat");
const meterOptionHeat2 = document.querySelector("#meterOptionHeat2");

function convertHeat() {
  let inputHeat = heatNumberInput.value;
  let selectedHeat1 = meterOptionHeat.value;
  let selectedHeat2 = meterOptionHeat2.value;

  if (selectedHeat1 == "c" && selectedHeat2 == "c") {
    alert("you can't convert the same unit");
  }
  if (selectedHeat1 == "f" && selectedHeat2 == "f") {
    alert("you can't convert the same unit");
  }
  if (selectedHeat1 == "c" && selectedHeat2 == "f") {
    let resultHeat = (inputHeat * 9) / 5 + 32;
    answerHeat.innerHTML = resultHeat + selectedHeat2;
  }
  if (selectedHeat1 == "f" && selectedHeat2 == "c") {
    let resultHeat = ((inputHeat - 32) * 5) / 9;
    answerHeat.innerHTML = resultHeat + selectedHeat2;
  }
  if (selectedHeat1 == "") {
    alert("please enter a first unit");
  }
  if (selectedHeat2 == "") {
    alert("please enter a second unit");
  }

  if (inputP === "") {
    alert("please enter a number");
  }
}

function openMoreAge() {
  const popupAge = document.querySelector("#popupAge");
  popupAge.classList.add("popupAge");
  popupAge.style.visibility = "visible";
}

function convertAge() {
  const answerAge = document.querySelector("#answerAge");
  let currentYear = document.getElementById("cy").value;
  let AgeOfBirth = document.getElementById("ab").value;
  let resultAge = currentYear - AgeOfBirth;
  answerAge.innerHTML = resultAge;
}

function openMoreSlope() {
  const popupSlope = document.querySelector("#popupSlope");
  popupSlope.classList.add("popupSlope");
  popupSlope.style.visibility = "visible";
}

function convertSlope() {
  const answerSlope = document.querySelector("#answerSlope");
  let sideA = document.getElementById("a").value;
  let sideB = document.getElementById("b").value;
  let resultSlope = Math.sqrt(sideA * sideA + sideB * sideB);
  answerSlope.innerHTML = resultSlope;
}

function openMoreRandom() {
  const popupRandom = document.querySelector("#popupRandom");
  popupRandom.classList.add("popupRandom");
  popupRandom.style.visibility = "visible";
}

function convertRandom() {
  const answerRandom = document.querySelector("#answerRandom");
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);

  let resultRandom = Math.floor(Math.random() * (max - min + 1)) + min;

  answerRandom.innerHTML = resultRandom;
}

function openMoreAbs() {
  const popupAbs = document.querySelector("#popupAbs");
  popupAbs.classList.add("popupAbs");
  popupAbs.style.visibility = "visible";
}

function convertAbs() {
  const answerAbs = document.querySelector("#answerAbs");
  let numAbs = parseInt(document.getElementById("numAbs").value);
  let resultAbs = Math.abs(numAbs);

  answerAbs.innerHTML = resultAbs;
}
