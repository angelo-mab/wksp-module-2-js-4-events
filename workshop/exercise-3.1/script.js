let main = document.getElementById("main");

function greenButton(e) {
  let buttonid = e.target.id;
  document.getElementById(buttonid).classList.add("green");
}

for (let i = 1; i <= 20; i++) {
  let button = document.createElement("button");
  button.innerText = i;
  button.id = `btn-${i}`;
  main.appendChild(button);

  button.addEventListener("click", greenButton);
}
