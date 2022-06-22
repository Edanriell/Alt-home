const getResource = async url => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	// eslint-disable-next-line no-return-await
	return await res.json();
};

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: data
	});
	// eslint-disable-next-line no-return-await
	return await res.json();
};

export { getResource, postData };
