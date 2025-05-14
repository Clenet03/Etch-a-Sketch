function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const squareSize = 720 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
      square.classList.add("hovered");
    });
    container.appendChild(square);
  }
}

createGrid(16);

const resizeBtn = document.getElementById("resize-btn");
resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter the number of squares per side (max 100):");
  size = parseInt(size);

  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});
