fetch("data.json")
  .then((response) => response.json())
  .then((elements) => {
    const mainTableContainer = document.getElementById("main");
    mainTableContainer.style.gridTemplateColumns = `repeat(18, minmax(0, 1fr))`;
    const fTableContainer = document.getElementById("f");
    fTableContainer.style.gridTemplateColumns = `repeat(14, minmax(0, 1fr))`;

    elements.forEach((element) => {

      let elementDiv = document.createElement("div");

      elementDiv.classList.add("🧪");
      elementDiv.style.backgroundColor = `#${element.cpkHexColor}`;
      elementDiv.dataset.name = element.name.toLowerCase();
      elementDiv.dataset.details = `
        <strong>Symbol:</strong> ${element.symbol}<br>
        <strong>Atomic Number:</strong> ${element.atomicNumber}<br>
        <strong>Name:</strong> ${element.name}<br>
        <strong>Atomic Mass:</strong> ${element.atomicMass}<br>
        <strong>Electronegativity:</strong> ${element.electronegativity}<br>
        <strong>Atomic Radius:</strong> ${element.atomicRadius}<br>
        <strong>Ion Radius:</strong> ${element.ionRadius}<br>
        <strong>Van Der Waals Radius:</strong> ${element.vanDerWaalsRadius}<br>
        <strong>Ionization Energy:</strong> ${element.ionizationEnergy}<br>
        <strong>Electron Affinity:</strong> ${element.electronAffinity}<br>
        <strong>Oxidation States:</strong> ${element.oxidationStates}<br>
        <strong>Standard State:</strong> ${element.standardState}<br>
        <strong>Bonding Type:</strong> ${element.bondingType}<br>
        <strong>Melting Point:</strong> ${element.meltingPoint}<br>
        <strong>Boiling Point:</strong> ${element.boilingPoint}<br>
        <strong>Density:</strong> ${element.density}<br>
        <strong>Group Block:</strong> ${element.groupBlock}<br>
        <strong>Year Discovered:</strong> ${element.yearDiscovered}<br>
        <strong>Block:</strong> ${element.block}<br>
        <strong>Period:</strong> ${element.period}<br>
        <strong>Group:</strong> ${element.group}
      `;

      elementDiv.innerHTML = `
          ${element.symbol}<br>
          ${element.atomicNumber}
      `;

      if (element.block !== "f") {
        const column = element.group;
        const row = element.period;

        elementDiv.style.gridColumn = column;
        elementDiv.style.gridRow = row;
        mainTableContainer.appendChild(elementDiv);
      } else {
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


    document.querySelectorAll(".🧪").forEach((elementDiv) => {
      elementDiv.addEventListener("click", () => {
              const modal = document.getElementById("modal");
              console.log(modal);
              const modalTitle = document.getElementById("modal-title");
              const modalContent = document.getElementById("modal-content");
              modalTitle.innerText = elementDiv.dataset.name.toUpperCase();
              modalContent.innerHTML = elementDiv.dataset.details;
              modal.classList.remove("hidden");
          });
          const closeModalButton = document.getElementById("close-modal");
          closeModalButton.addEventListener("click", () => {
            document.getElementById("modal").classList.add("hidden");
          });
          document.getElementById("modal").addEventListener("click", (event) => {
            if (event.target === document.getElementById("modal")) {
              document.getElementById("modal").classList.add("hidden");
            }
          });
    });




    const searchBox = document.getElementById("search-box");

    searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase().trim();

      document.querySelectorAll(".🧪").forEach((elementDiv) => {
        if (elementDiv.dataset.name.includes(query)) {
          if (elementDiv.dataset.name !== "hydrogen") {
            elementDiv.classList.add("highlighted");
          } else {
            elementDiv.classList.add("hydro");
            elementDiv.style.backgroundColor = `gold`;
            if (query === "") {
              elementDiv.classList.remove("hydro");
              elementDiv.style.backgroundColor = `#f8f8f8`;
            }
          }

          if (query === "") {
            document.querySelectorAll(".🧪").forEach((elementDiv) => {
              elementDiv.classList.remove("highlighted");
            });
            return;
          }
        } else {
          elementDiv.classList.remove("highlighted");
        }
      });
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
