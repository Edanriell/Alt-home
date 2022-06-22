import "../sass/main.sass";

import slider from "./modules/slider";
import searchF from "./modules/search";
import cards from "./modules/cards";
import modalWindow from "./modules/modal";
import formField from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
	searchF({
		searchContainer: ".page-nav__search",
		openBtn: ".page-nav__search__icon",
		searchInput: ".page-nav__search__search-field"
	});

	slider({
		container: ".page-main__overwiev__content__slider",
		wrapper: ".page-main__overwiev__content__slider__wrapper",
		slides: ".page-main__overwiev__content__slider__wrapper__slide",
		rightArrow: ".page-main__overwiev__content__slider__leftArrow",
		leftArrow: ".page-main__overwiev__content__slider__rightArrow",
		counterCurrentSlide: ".page-main__overwiev__content__slider__info__currentSlide",
		counterTotalSlides: ".page-main__overwiev__slider__info__totalSlides"
	});

	modalWindow({
		modalTriggerSelector: "[data-modal]",
		modalSelector: ".page-modal",
		modalContent: ".page-modal__dialog__content",
		modalDialogWindow: ".page-modal__dialog"
	});

	cards({
		triggerBtn: ".page-main__catalog__content__load-more-houses__btn",
		parentElement: ".page-main__catalog__content__second-container"
	});

	formField({
		formsSelector: "#form",
		isFormModal: false,
		databaseName: "requests"
	});

	formField({
		formsSelector: "#form-modal",
		isFormModal: true,
		databaseName: "requests-modal"
	});
});
