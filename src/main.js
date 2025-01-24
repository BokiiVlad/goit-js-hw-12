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
const loader = document.querySelector(".loader-container");
const butMore = document.querySelector(".but-more");

// Модальні вікна картинок
const galleryOpen = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionDelay: 250, captions: true,
});
// Вимикаю лоадер при загрузці сторінки
loader.style.display = 'none';

let currentPage = 1;

const imageGallery = async (event) => {
    try {
        imageField.innerHTML = "";
        loader.style.display = 'flex';
        event.preventDefault()
        // Значення інпута
        const inputValue = formField.elements.search.value.trim();
        // Перевірка значення інпута
        if (inputValue === "") {
            loader.style.display = 'none';
            iziToast.warning({
                title: 'Warning',
                message: 'Enter correct data.'
            });
            return;
        }
        // Очищення форми 
        formField.reset()
        // Запит до сервера
        const response = await pixApi(inputValue);
        // Перевіряю чи поветраються з сервера картинки
        if (response.data.total === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
            return;
        }
        // За допомогою функції генерую HTML
        const imageArray = response.data.hits.map(el => createImg(el))
        // Вставляю елементи в DOM
        imageField.innerHTML = imageArray.join('');
        galleryOpen.refresh();
    } catch (error) {
        console.log(error);
    } finally {
        // Вимикаю лоадер
        loader.style.display = 'none';
    }

    butMore.addEventListener("click")
    function addPages(params) {

    }
}

subButton.addEventListener("submit", imageGallery);