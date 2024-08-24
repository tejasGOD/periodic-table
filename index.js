fetch("data.json")
  .then((response) => response.json())
  .then((elements) => {
    const tableContainer = document.getElementById("periodic-table");
    const numCols = 18; // Number of columns for the periodic table
    tableContainer.style.gridTemplateColumns = `repeat(${numCols}, minmax(0, 1fr))`;

    elements.forEach((element) => {
      const elementDiv = document.createElement("div");
      elementDiv.classList.add("element");
      elementDiv.style.backgroundColor = `#${element.cpkHexColor}`;

      // Calculate the position
      const column = element.group;
      const row = element.period;

      elementDiv.style.gridColumn = column;
      elementDiv.style.gridRow = row;

      elementDiv.innerHTML = `
                ${element.symbol}<br>
                ${element.atomicNumber}
            `;
      tableContainer.appendChild(elementDiv);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));


// cleaned up everything and done with a responsive table
