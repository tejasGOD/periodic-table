fetch("data.json")
  .then((response) => response.json())
  .then((elements) => {
    const mainTableContainer = document.getElementById("main");
    mainTableContainer.style.gridTemplateColumns = `repeat(18, minmax(0, 1fr))`;
    const fTableContainer = document.getElementById("f");
    fTableContainer.style.gridTemplateColumns = `repeat(14, minmax(0, 1fr))`;

    elements.forEach((element) => {
      if (element.block !== "f") {
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("🧪");
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
        mainTableContainer.appendChild(elementDiv);
      } else {
        let elementDiv = document.createElement("div");
        elementDiv.classList.add("🧪");
        elementDiv.style.backgroundColor = `#${element.cpkHexColor}`;
        elementDiv.innerHTML = `
                ${element.symbol}<br>
                ${element.atomicNumber}
            `;

        // Handle the positioning of f-block elements
        if (element.atomicNumber >= 57 && element.atomicNumber <= 71) {
          elementDiv.style.gridColumn = (element.atomicNumber - 57).toString();
          elementDiv.style.gridRow = "1";
        } else if (element.atomicNumber >= 89 && element.atomicNumber <= 103) {
          elementDiv.style.gridColumn = (element.atomicNumber - 89).toString();
          elementDiv.style.gridRow = "2";
        }

        fTableContainer.appendChild(elementDiv);
      }
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
