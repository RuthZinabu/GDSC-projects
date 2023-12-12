import ("./math.js");
function calculate() {
    let input = document.getElementById("input").value;
    let result = eval(input);
    document.getElementById("input").value = result;
  }

  function clearInput() {
    document.getElementById("input").value = "";
  }

  function deleteLastCharacter() {
    let input = document.getElementById("input").value;
    document.getElementById("input").value = input.slice(0, -1);
  } 