

var count = 0;

function increment() {
  count++;
  document.getElementById("count-display").textContent = count;
}

function decrement() {
  count--;
  document.getElementById("count-display").textContent = count;
}