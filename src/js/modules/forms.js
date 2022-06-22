import spinner from "../../img/spinner.svg";
import { postData } from "../services/requests";

function formField({ formsSelector, isFormModal, databaseName }) {
	const forms = document.querySelectorAll(formsSelector);
	const modal = isFormModal;
	const database = databaseName;

	const messages = {
		loading: spinner,
		success: "Спасибо! Скоро мы с вами свяжемся",
		failure: "Что-то пошло не так..."
	};

	forms.forEach(form => {
		bindPostData(form, modal, database);
	});

	function bindPostData(form, modalWindow, dbName) {
		form.addEventListener("submit", e => {
			e.preventDefault();

			displayLoader(form, modalWindow);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData(`http://localhost:3000/${dbName}`, json)
				.then(data => {
					console.log(data);
					if (!modalWindow) displayMessage(form, messages.success);
					document.querySelector(".loader").remove();
				})
				.catch(err => {
					console.log(err);
					if (!modalWindow) displayMessage(form, messages.failure);
					document.querySelector(".loader").remove();
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function displayLoader(form, modalWindow) {
		const loaderImg = document.createElement("img");
		loaderImg.classList.add("loader");
		loaderImg.src = messages.loading;
		if (!modalWindow) {
			loaderImg.style.cssText = `
        position: absolute;
        height: 52px;
        top: 636px;
        left: 340px;
      `;
		} else {
			loaderImg.style.cssText = `
        position: absolute;
        height: 52px;
        top: 318px;
        left: 308px;
      `;
		}
		form.insertAdjacentElement("afterend", loaderImg);
	}

	function displayMessage(form, messageText) {
		const message = document.createElement("p");
		message.innerText = messageText;
		message.style.cssText = `
      position: absolute;
      height: 52px;
      top: 632px;
      left: 340px;
    `;
		form.insertAdjacentElement("afterend", message);
	}

	fetch("http://localhost:3000/requests")
		.then(data => data.json())
		.then(res => console.log(res));
}

export default formField;
