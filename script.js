let balance = 1000;

function bet(color) {
  let result = Math.random() < 0.5 ? "red" : "green";

  if (color === result) {
    balance += 100;
    document.getElementById("result").innerText = "You Win!";
  } else {
    balance -= 100;
    document.getElementById("result").innerText = "You Lose!";
  }

  document.getElementById("balance").innerText = balance;
}
