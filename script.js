let icon = document.querySelector(".icon");
function changeTheme() {
  // Toggle the dark-theme class on the body element
  document.body.classList.toggle("dark-theme");

  // Get a reference to the icon element
  let icon = document.querySelector(".icon");

  // Check if the dark-theme class is present after toggling
  if (document.body.classList.contains("dark-theme")) {
    // If the dark-theme class is present, change the icon to sun
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    // If the dark-theme class is not present, change the icon to moon
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
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
const header = document.querySelector("#popupHeader");
const buttonName = document.querySelector("#buttonName");
function convert() {
  let input = meterNumberInput.value;
  let selected1 = meterOption1.value;
  let selected2 = meterOption2.value;

  if (selected1 == "km" && selected2 == "km") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "m" && selected2 == "m") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "cm" && selected2 == "cm") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "km" && selected2 == "m") {
    let result = Number(input) * 1000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "km" && selected2 == "cm") {
    let result = Number(input) * 100000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "m" && selected2 == "km") {
    let result = Number(input) * 0.001;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "m" && selected2 == "cm") {
    let result = Number(input) * 100;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "cm" && selected2 == "km") {
    let result = Number(input) / 100000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "cm" && selected2 == "m") {
    let result = Number(input) / 0.01;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "") {
    alert("please enter a first unit");
  }
  if (selected2 == "") {
    alert("please enter a second unit");
  }

  if (input === "") {
    alert("please enter a number");
  }
}


function openMore1() {
  const popup = document.querySelector(".popup");
  popup.classList.add("popup");
  popup.style.visibility = "visible";
}

const meterNumberInput1 = document.querySelector("#meterNumberInput");
const answer1 = document.querySelector("#answer");
const meterOption1a = document.querySelector("#meterOption");
const meterOption2a = document.querySelector("#meterOption2");
const header1 = document.querySelector("#popupHeader");
const buttonName1 = document.querySelector("#buttonName");
function convert() {
  let input = meterNumberInput.value;
  let selected1 = meterOption1.value;
  let selected2 = meterOption2.value;

  if (selected1 == "km" && selected2 == "km") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "m" && selected2 == "m") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "cm" && selected2 == "cm") {
    alert("you can't convert the same unit");
  }
  if (selected1 == "km" && selected2 == "m") {
    let result = Number(input) * 1000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "km" && selected2 == "cm") {
    let result = Number(input) * 100000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "m" && selected2 == "km") {
    let result = Number(input) * 0.001;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "m" && selected2 == "cm") {
    let result = Number(input) * 100;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "cm" && selected2 == "km") {
    let result = Number(input) / 100000;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "cm" && selected2 == "m") {
    let result = Number(input) / 0.01;
    answer.innerHTML = result + selected2;
  }
  if (selected1 == "") {
    alert("please enter a first unit");
  }
  if (selected2 == "") {
    alert("please enter a second unit");
  }

  if (input === "") {
    alert("please enter a number");
  }
}
