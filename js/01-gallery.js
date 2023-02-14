import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector("div.gallery");
galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup());

galleryList.addEventListener("click", onGallaryItemClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGallaryItemClick(event) {
  event.preventDefault();

  const isGalleryLink = event.target.classList.contains("gallery__image");

  if (!isGalleryLink) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="1280" height="1280">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onGalleryClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", onGalleryClose);
      },
    }
  );

  instance.show();

  function onGalleryClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
