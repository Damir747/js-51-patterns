export default async function foodImport(foodList, callback) {
	const pool = [];
	if (!sessionStorage.getItem('food')) {
		await Promise.all(foodList.map(async (food) => {
			const foodObj = await import(`../../fake-api/food${food}.json`);
			pool.push(foodObj.default);
		})).then(() => {
			sessionStorage.setItem('food', JSON.stringify(pool));
		});
		return pool;
	}
	else {
		return JSON.parse(sessionStorage.getItem('food'));
	}
}