// var elementD;
// fetch("https://periodic-table-elements-info.herokuapp.com/elements", {
//   method: "GET",
// })
//   .then((Response) => {
//     Response.json();
//   })
//   .then((data) => {
//     elementD = data;
//     console.log("got the data");
//   });

// API HAS MF CORS ERROR


 fetch("./data.json")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log("got the data");
    data.forEach(element => {
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("element");
        elementDiv.innerHTML = `
        <h1>${element.symbol}</h1>
        `;
        document.body.appendChild(elementDiv);
    });

});
