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




I AM TRYIIINGGG












 fetch("./data.json")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log("got the data");
    data.forEach(element => {
        const elementDiv = document.createElement("div");
        // elementDiv.classList.add("element", "bg-gray-400", "p-4", "m-4", "text-center", "w-90", 'h-90');
        var ec = element.electronicConfiguration;
        console.log(ec.split(" "));
        elementDiv.innerHTML = `
        <h1>${element.electronicConfiguration}</h1>
        `;
        // console.log(element.electronicConfiguration);
        document.body.appendChild(elementDiv);
    });

});







const sElements = document.getElementsByClassName('s');
Array.from(sElements).forEach(element => {
    element.classList.add("bg-fuchsia-400");
});

const pElements = document.getElementsByClassName("p");
Array.from(pElements).forEach((element) => {
  element.classList.add("bg-red-400");
});

const dElements = document.getElementsByClassName("d");
Array.from(dElements).forEach((element) => {
  element.classList.add("bg-cyan-400");
});

const fElements = document.getElementsByClassName("f");
Array.from(fElements).forEach((element) => {
  element.classList.add("bg-lime-400");
});
