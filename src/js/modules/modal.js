function modalWindow({ modalTriggerSelector, modalSelector, modalContent, modalDialogWindow }) {
	const modalTrigger = document.querySelectorAll(modalTriggerSelector);
	const modal = document.querySelector(modalSelector);
	const content = document.querySelector(modalContent);
	const modalDialog = document.querySelector(modalDialogWindow);

	const openModal = () => {
		modal.style.display = "block";
		modal.classList.add("fade-in");
		content.style.display = "none";
		document.body.style.overflow = "hidden";
		setTimeout(() => {
			content.style.display = "block";
			content.classList.add("scale-in-center");
		}, 300);
	};

	const closeModal = () => {
		content.classList.remove("scale-in-center");
		content.classList.add("scale-in-center-reverse");
		modal.classList.remove("fade-in");
		setTimeout(
			() => {
				content.classList.remove("scale-in-center-reverse");
				modal.classList.add("fade-in-reverse");
				content.style.display = "none";
			},
			600,
			setTimeout(() => {
				modal.classList.remove("fade-in-reverse");
				modal.style.display = "none";
				document.body.style.overflow = null;
			}, 800)
		);
	};

	modalTrigger.forEach(trigger => {
		trigger.addEventListener("click", evt => {
			evt.preventDefault();
			openModal();
		});
	});

	modal.addEventListener("click", event => {
		if (
			event.target === modalDialog ||
			event.target === modal ||
			event.target.getAttribute("data-close") === ""
		) {
			closeModal();
		}
	});
}

export default modalWindow;
