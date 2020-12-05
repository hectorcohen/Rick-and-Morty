const url = "https://rickandmortyapi.com/api/character";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const Names = data.results;
    const Image = Names.map((x) => x.image);
    let template = "";
    Image.forEach((image) => {
      template += `<img src="${image}"></image>`;
    });
    var container = document.querySelector("#div");
    container.innerHTML = template;
  });
