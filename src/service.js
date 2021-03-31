const api = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_URL}`;

export const fetchFonts = async params => {
	console.log(process.env.REACT_APP_API_URL)
	try {
		const res = await fetch(`${api}&sort=${params}`);
		const data = await res.json();
		return data.items;
	} catch (err) {
		return err.message;
	}
};
