// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { pixApi } from "./js/pixabay-api";
import { createImg } from "./js/render-function";

const formField = document.querySelector(".form");
const subButton = document.querySelector(".but-style");
const imageField = document.querySelector(".gallery");
const loader = document.querySelector(".loader-container")

const galleryOpen = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionDelay: 250, captions: true,
});
loader.style.display = 'none';
subButton.addEventListener("click", (event) => {
    imageField.innerHTML = "";
    loader.style.display = 'flex';
    event.preventDefault()

    const inputValue = formField.elements.search.value.trim();

    if (inputValue === "") {
        iziToast.warning({
            title: 'Warning',
            message: 'Enter correct data.'
        });
        return;
    }
    formField.reset()
    pixApi(inputValue)
        .then(
            response => {
                if (response.total === 0) {
                    iziToast.error({
                        title: 'Error',
                        message: 'Sorry, there are no images matching your search query. Please try again!'
                    });
                    return;
                }
                const imageArray = response.hits.map(el => createImg(el))
                imageField.innerHTML = imageArray.join('');
                galleryOpen.refresh();
            }
        )
        .catch(
            error => {
                console.log(error.message);
            }
        )
        .finally(() => {
            loader.style.display = 'none';
        }
        )
});