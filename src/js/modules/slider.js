function slider({
	container,
	wrapper,
	slides,
	rightArrow,
	leftArrow,
	counterCurrentSlide,
	counterTotalSlides
}) {
	const sliderContainer = document.querySelector(container);
	const sliderWrapper = document.querySelector(wrapper);
	const sliderSlides = document.querySelectorAll(slides);
	const btnNextSlide = document.querySelector(leftArrow);
	const btnPrevSlide = document.querySelector(rightArrow);
	const currentSlidesCounter = document.querySelector(counterCurrentSlide);
	const totalSlidesCounter = document.querySelector(counterTotalSlides);
	const windowWidth = window.getComputedStyle(sliderWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	sliderContainer.style.position = "relative";
	sliderContainer.style.overflow = "hidden";

	sliderWrapper.style.display = "flex";
	sliderWrapper.style.width = `${100 * sliderSlides.length}%`;
	sliderWrapper.style.transition = "1s all";

	btnPrevSlide.removeAttribute("disabled");

	sliderSlides.forEach(slide => {
		slide.style.width = windowWidth;
	});

	const clearStringFromDigits = str => {
		return +str.replace(/\D/g, "");
	};

	const sliderSlideAnimationForward = () => {
		sliderSlides[slideIndex - 1].classList.add("slide-in-bottom");

		if (slideIndex === 1) {
			sliderSlides[sliderSlides.length - 1].classList.remove("slide-in-bottom");
		}

		if (sliderSlides[slideIndex - 2].classList.contains("slide-in-top")) {
			sliderSlides[slideIndex - 2].classList.remove("slide-in-top");
		} else if (sliderSlides[slideIndex - 2].classList.contains("slide-in-bottom")) {
			sliderSlides[slideIndex - 2].classList.remove("slide-in-bottom");
		}
	};

	const sliderSlideAnimationBackward = () => {
		sliderSlides[slideIndex - 1].classList.add("slide-in-top");

		if (slideIndex === sliderSlides.length) {
			sliderSlides[0].classList.remove("slide-in-top");
		}

		if (sliderSlides[slideIndex].classList.contains("slide-in-bottom")) {
			sliderSlides[slideIndex].classList.remove("slide-in-bottom");
		} else if (sliderSlides[slideIndex].classList.contains("slide-in-top")) {
			sliderSlides[slideIndex].classList.remove("slide-in-top");
		}
	};

	const disableButton = () => {
		if (slideIndex === sliderSlides.length) {
			btnNextSlide.setAttribute("disabled", "true");
			btnNextSlide.classList.remove("page-main__overwiev__content__slider__rightArrow");
			btnNextSlide.classList.add(
				"page-main__overwiev__content__slider__rightArrow__disabled"
			);
		} else if (
			slideIndex < sliderSlides.length &&
			btnNextSlide.getAttribute("disabled") === "true"
		) {
			btnNextSlide.removeAttribute("disabled");
			btnNextSlide.classList.remove(
				"page-main__overwiev__content__slider__rightArrow__disabled"
			);
			btnNextSlide.classList.add("page-main__overwiev__content__slider__rightArrow");
		}

		if (slideIndex === 1) {
			btnPrevSlide.setAttribute("disabled", "true");
			btnPrevSlide.classList.remove("page-main__overwiev__content__slider__leftArrow");
			btnPrevSlide.classList.add("page-main__overwiev__content__slider__leftArrow__disabled");
		} else if (slideIndex > 1 && btnPrevSlide.getAttribute("disabled") === "true") {
			btnPrevSlide.removeAttribute("disabled");
			btnPrevSlide.classList.remove(
				"page-main__overwiev__content__slider__leftArrow__disabled"
			);
			btnPrevSlide.classList.add("page-main__overwiev__content__slider__leftArrow");
		}
	};
	disableButton();

	const sliderCounter = () => {
		currentSlidesCounter.innerHTML = slideIndex;
		totalSlidesCounter.innerHTML = sliderSlides.length;
	};
	sliderCounter();

	btnNextSlide.addEventListener("click", () => {
		if (offset === clearStringFromDigits(windowWidth) * (sliderSlides.length - 1)) {
			offset = 0;
		} else {
			offset += clearStringFromDigits(windowWidth);
		}

		if (slideIndex === sliderSlides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}
		sliderWrapper.style.transform = `translateX(-${offset}px)`;
		sliderSlideAnimationForward();
		disableButton();
		sliderCounter();
	});

	btnPrevSlide.addEventListener("click", () => {
		if (offset === 0) {
			offset = clearStringFromDigits(windowWidth) * (sliderSlides.length - 1);
		} else {
			offset -= clearStringFromDigits(windowWidth);
		}

		if (slideIndex === 1) {
			slideIndex = sliderSlides.length;
		} else {
			slideIndex--;
		}
		sliderWrapper.style.transform = `translateX(-${offset}px)`;
		sliderSlideAnimationBackward();
		disableButton();
		sliderCounter();
	});
}

export default slider;
