const mainDiv = document.querySelector(".main");

function handleColor(e) {
  let button = e.target.id;
  //read on .toggle()
  document.getElementById(button).classList.toggle("green");
}

for (let i = 1; i <= 20; i++) {
  let button = document.createElement("button");
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);

  button.addEventListener("click", handleColor);
}
