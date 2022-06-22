/* eslint-disable max-len */
import houseImage0 from "../../img/houseForRent1.png";
import houseImage1 from "../../img/houseForRent2.png";
import houseImage2 from "../../img/houseForRent3.png";
import houseImage3 from "../../img/houseForRent4.png";
import { getResource } from "../services/requests";

function showMoreHouseCards({ triggerBtn, parentElement }) {
	const btn = document.querySelector(triggerBtn);
	const images = [houseImage0, houseImage1, houseImage2, houseImage3];

	btn.addEventListener("click", function () {
		// if we use => arrow invocation context will be lost (undefined), when we use function this is button
		getResource("http://localhost:3000/housesAvaliableForRent")
			.then(res => createHouseCard(res))
			.catch(errorText => createErrorMessage(errorText));

		this.remove();
	});

	function createHouseCard(response) {
		response.forEach(
			({ id, altImg, houseName, houseArea, houseRooms, houseBedrooms, houseFloors }) => {
				const houseCard = document.createElement("div");

				houseCard.classList.add(
					"page-main__catalog__content__second-container__house-card",
					"bounce-in-fwd"
				);

				houseCard.innerHTML = `
        <img 
          class="page-main__catalog__content__second-container__house-card__img" 
          src="${findImage(id)}" 
          width="327" 
          height="220" 
          alt="${altImg}
        ">
        <div class="page-main__catalog__content__second-container__house-card__content">
        <h3 class="page-main__catalog__content__second-container__house-card__content__house-name">
          ${houseName}
        </h3>
        <p class="page-main__catalog__content__second-container__house-card__content__house-area">
          ${houseArea}<sup>2</sup>
        </p>
        <dl 
        class="page-main__catalog__content__second-container__house-card__content__house-parameters">
          <dt>комнат</dt>
          <dd>${houseRooms}</dd>
          <dt>спальни</dt>
          <dd>${houseBedrooms}</dd>
          <dt>этажа</dt>
          <dd>${houseFloors}</dd>
        </dl>
      </div>
      `;

				document.querySelector(parentElement).appendChild(houseCard);
			}
		);
	}

	function createErrorMessage(errorText) {
		const errorMessage = document.createElement("div");
		errorMessage.classList.add("message", "error", "scale-in-center");
		errorMessage.innerHTML = `
    <p class="error__text">Ошибка</p>- ${errorText}
    `;
		document.querySelector(parentElement).appendChild(errorMessage);
	}

	function findImage(id) {
		const image = images.find((img, index) => index === id);
		return image;
	}
}

export default showMoreHouseCards;
