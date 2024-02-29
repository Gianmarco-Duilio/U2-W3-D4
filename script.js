const addImgs = document.getElementById("load");
addImgs.addEventListener("click", function () {
  fetch("https://api.pexels.com/v1/search?query=hollywood", {
    method: "GET",
    headers: { Authorization: "A0gdlAhY0mooFEzqZ37G2QrQCOtXIo68vMmhrgWF2gVwg4s3Ezwz6p00" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella richiesta alle API");
      }
    })
    .then(function (photos) {
      console.log(photos);
      imageCards(photos);
    });
});

function imageCards(photos) {
  const contenitoreImmagini = document.getElementById("contenitore");

  photos.photos.forEach((photo) => {
    const column = document.createElement("div");
    column.classList.add("col-sm-4");
    contenitoreImmagini.appendChild(column);

    const card = document.createElement("div");
    card.classList.add("card");
    column.appendChild(card);

    const immagine = document.createElement("img");
    immagine.classList.add("card-img-top");
    immagine.src = photo.src.large;
    card.appendChild(immagine);

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("card-body");
    card.appendChild(bodyCard);

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerText = photo.alt;
    bodyCard.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerText = "lorem ipsium";
    bodyCard.appendChild(description);

    const bttView = document.createElement("button");
    bttView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    bodyCard.appendChild(bttView);
    bttView.innerText = "View";

    const bttHide = document.createElement("button");
    bttHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    bodyCard.appendChild(bttHide);
    bttHide.innerText = "Hide";
    bttHide.onclick = function () {
      remove(column);
    };

    const id = document.createElement("small");
    id.classList.add("text-muted");
    bodyCard.appendChild(id);

    id.innerText = photo.id;
  });
}

const remove = (element) => {
  //   element.remove(); = element.innerHTML = "";
  element.innerHTML = "";
};
