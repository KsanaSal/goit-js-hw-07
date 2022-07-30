import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
    .map(
        ({ preview, original, description }) => `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
gallery.insertAdjacentHTML("afterbegin", galleryList);

gallery.addEventListener("click", imageClick);
function imageClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
    instance.show();
    document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            if (instance.visible()) {
                instance.close();
            }
        }
    });
}
