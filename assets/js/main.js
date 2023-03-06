let allButtons = document.querySelectorAll(".keys button");
let before_screen = document.querySelector(".screen .before");
let current_screen = document.querySelector(".screen .current");

const show = function (number) {
  current_screen.value += number;
};

const equal = function () {
  let final_screen_before = [];
  for (let i = 0; i < before_screen.value.length; i++) {
    if (before_screen.value[i] === "x") {
      final_screen_before.push("*");
    } else {
      final_screen_before.push(before_screen.value[i]);
    }
  }
  if (current_screen.value == "" || before_screen.value == "") return;
  current_screen.value = eval(
    final_screen_before.join("") + current_screen.value
  );
  before_screen.value = "";
};

const deleteOne = function () {
  current_screen.value = current_screen.value.slice(0, -1);
};

const power = function () {
  current_screen.value = Math.pow(current_screen.value, 2);
  before_screen.value = "";
};

const clearCurrent = function () {
  current_screen.value = "";
};

const clearAll = function () {
  current_screen.value = "";
  before_screen.value = "";
};

const toggleMinus = function () {
  if (!current_screen.value.startsWith("-")) {
    current_screen.value = `-${current_screen.value}`;
  } else if (current_screen.value.startsWith("-")) {
    let arr = [...current_screen.value];
    arr.shift();
    current_screen.value = arr.join("");
  }
};

const by = function (num) {
  if (current_screen.value == "") return;
  if (num === "1/x") current_screen.value = 1 / current_screen.value;
  else showOperator(num);
};

const sqrt = () => (current_screen.value = Math.sqrt(current_screen.value));

const modul = () => showOperator("%");

const multiply = () => showOperator("x");

const minus = () => showOperator("-");

const plus = () => showOperator("+");

const showOperator = function (operator) {
  if (current_screen.value == "") return;
  if (current_screen.value !== "" && before_screen.value !== "") {
    equal();
  }
  before_screen.value = `${current_screen.value} ${operator}`;
  current_screen.value = "";
};
