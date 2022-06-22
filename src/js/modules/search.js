import closeIcon from "../../img/icons/close.svg";

function searchF({ searchContainer, openBtn, searchInput }) {
	const search = document.querySelector(searchContainer);
	const searchBtn = document.querySelector(openBtn);
	const searchField = document.querySelector(searchInput);

	const closeBtn = document.createElement("button");

	let searchOpened = false;

	closeBtn.classList.add("closeSearch");

	closeBtn.style.cssText = `
    background-image: url(${closeIcon});
    background-size: 8px 8px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: snow;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 15px;
    left: 300px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    border: none;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  `;

	searchField.style.cssText = `
    transition-duration: 0.35s;
    transition-timing-function: linear;
  `;

	const openSearch = () => {
		searchField.classList.add("showSearch");
		searchField.classList.remove("searchHidden");
		setTimeout(() => {
			searchField.style.backgroundColor = "snow";
			searchField.style.borderRadius = "8px";
			searchField.style.boxShadow =
				"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
			search.appendChild(closeBtn);
		}, 300);
	};

	const closeSearch = () => {
		searchField.style.backgroundColor = null;
		searchField.style.borderRadius = null;
		searchField.style.boxShadow = null;
		searchField.value = null;
		closeBtn.remove();
		setTimeout(() => {
			searchField.classList.remove("showSearch");
			searchField.classList.add("searchHidden");
		}, 300);
	};

	searchBtn.addEventListener("click", evt => {
		evt.stopPropagation();
		if (searchOpened === false) {
			searchOpened = true;
			openSearch();
		}
	});

	closeBtn.addEventListener("click", evt => {
		evt.stopPropagation();
		if (searchOpened === true) {
			searchOpened = false;
			closeSearch();
		}
	});
}

export default searchF;
