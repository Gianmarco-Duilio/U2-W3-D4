const addImgs = document.getElementById("load");
addImgs.addEventListener("click", function () {
  removeAll();
  fetch("https://api.pexels.com/v1/search?query=florida", {
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

const addImgs2 = document.getElementById("load2");
addImgs2.addEventListener("click", function () {
  removeAll();
  fetch("https://api.pexels.com/v1/search?query=japan", {
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
const searchName = document.getElementById("searchBar");
const search = document.getElementById("buttonSearch");
search.addEventListener("click", function () {
  removeAll();

  const searchNameValue = searchName.value;
  fetch(`https://api.pexels.com/v1/search?query=${searchNameValue}`, {
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
  const contenitoreImmagini = document.getElementById("image-container");

  photos.photos.forEach((photo) => {
    const column = document.createElement("div");
    column.classList.add("col-md-4", "gy-3");
    contenitoreImmagini.appendChild(column);

    const card = document.createElement("div");
    card.classList.add("card", "shadow", "p-3", "mb-5", "rounded-4", "h-100");
    column.appendChild(card);

    const immagine = document.createElement("img");
    immagine.classList.add("card-img-top", "object-fit-cover");
    immagine.src = photo.src.large;
    card.appendChild(immagine);

    const bodyCard = document.createElement("div");
    bodyCard.classList.add("card-body", "text-center");
    card.appendChild(bodyCard);

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerText = photo.alt;
    bodyCard.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerText = photo.photographer;
    bodyCard.appendChild(description);

    const containerCard = document.createElement("div");
    containerCard.classList.add("d-flex", "justify-content-between", "align-items-center");
    bodyCard.appendChild(containerCard);

    const containerBtt = document.createElement("div");
    containerCard.appendChild(containerBtt);

    const bttView = document.createElement("button");
    bttView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    containerBtt.appendChild(bttView);
    bttView.innerText = "View";
    bttView.onclick = function () {};

    const bttHide = document.createElement("button");
    bttHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    containerBtt.appendChild(bttHide);
    bttHide.innerText = "Hide";
    bttHide.onclick = function () {
      remove(column);
    };

    const id = document.createElement("small");
    id.classList.add("text-muted");
    containerCard.appendChild(id);

    id.innerText = photo.id;
  });
}

const remove = (element) => {
  element.remove();
  // element.innerHTML = "";element.remove();
};

function removeAll() {
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Rimuovi tutti gli elementi figlio
}

function details() {
  window.location.href = "details.html";
}
