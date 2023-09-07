function insert(operation) {
  document.getElementById("ausgabe").innerHTML += operation;
}

function calculate() {
  let container = document.getElementById("ausgabe");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
  updateListe(container);
  console.log(result);
  console.log(container);
}

function ce() {
  let container = document.getElementById("ausgabe");
  container.innerHTML = "";
}

function updateListe(container) {
  list.innerHTML = container;
}
