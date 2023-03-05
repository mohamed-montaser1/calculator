let normalButtons = [];
let functional_buttons = [];
let allButtons = document.querySelectorAll(".keys button");
let screenBefore = document.querySelector(".screen .before");
let screenCurrent = document.querySelector(".screen .current");

let minus = false;

for (let i = 0; i < allButtons.length; i++) {
  if (allButtons[i].getAttribute("data-func")) {
    functional_buttons.push(allButtons[i]);
  } else {
    normalButtons.push(allButtons[i]);
  }
}

for (let i = 0; i < normalButtons.length; i++) {
  normalButtons[i].onclick = function () {
    screenCurrent.value += this.innerHTML;
  };
}

for (let i = 0; i < functional_buttons.length; i++) {
  functional_buttons[i].onclick = function () {
    let elementDataset = this.dataset.func;
    if (elementDataset === "equal") {
      if (screenCurrent.value !== "" && screenBefore.value !== "") {
        let finalScreenBefore = [];
        for (let j = 0; j < screenBefore.value.length; j++) {
          let element = screenBefore.value[j];
          if (element == "×") {
            finalScreenBefore.push("*");
          } else {
            finalScreenBefore.push(element);
          }
        }
        console.log(finalScreenBefore);
        screenCurrent.value = eval(
          finalScreenBefore.join("") + screenCurrent.value
        );
        screenBefore.value = "";
      }
      return;
    } else if (elementDataset === "clear-current") {
      screenCurrent.value = "";
      return;
    } else if (elementDataset === "clear-all") {
      screenCurrent.value = "";
      screenBefore.value = "";
      return;
    } else if (elementDataset === "toggle-minus") {
      if (!minus) screenCurrent.value = `-${screenCurrent.value}`;
      else if (minus) screenCurrent.value = screenCurrent.value.slice(1);

      minus = !minus;

      return;
    } else if (elementDataset === "remove-one") {
      screenCurrent.value = screenCurrent.value.slice(0, -1);
      return;
    } else if (elementDataset === "by-with-current") {
      screenBefore.value = `1 / ${screenCurrent.value} `;
      screenCurrent.value = eval(screenBefore.value);
    } else if (elementDataset === "power") {
      screenBefore.value = `${screenCurrent.value} ** 2`;
      screenCurrent.value = eval(screenBefore.value);
      return;
    } else if (elementDataset === "sqrt") {
      screenBefore.value = `√${screenCurrent.value}`;
      screenCurrent.value = Math.sqrt(screenCurrent.value);
      return;
    }
    if (screenBefore.value == "") {
      screenBefore.value += `${screenCurrent.value} ${this.innerHTML} `;
      screenCurrent.value = "";
    } else {
      screenBefore.value = `${this.innerHTML} ${screenCurrent.value}`;
      screenCurrent.value = "";
    }
    return;
  };
}
