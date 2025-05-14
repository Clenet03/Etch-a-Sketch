function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    container.appendChild(square);
  }
}

createGrid(16);
