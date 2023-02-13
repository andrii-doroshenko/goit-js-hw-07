import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector("ul.gallery");
galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup());

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;
    })
    .join("");
}

//todo simpleLightBox library
let gallery = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
