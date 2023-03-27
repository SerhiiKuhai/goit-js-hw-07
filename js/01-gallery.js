import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  const newMarkupBigImg = `<img class="${event.target.className}" src="${event.target.dataset.source}" alt="${event.target.alt}"/>`;
  const instance = basicLightbox.create(newMarkupBigImg);

  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    // console.log(event);
    if (event.code === "Escape") {
      onCloseModal();
    }
  }

  function onCloseModal() {
    window.removeEventListener("keydown", onEscKeyPress);
    instance.close();
  }
}
