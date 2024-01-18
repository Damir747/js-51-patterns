class FeaturePoolServices {
	pool = [];

	async getFeature(featureList) {
		if (!sessionStorage.getItem('feature')) {
			await Promise.all(
				featureList.map(async (feature) => {
					const featureObject = await import(`../../../fake-api/feature-${feature}.json`);
					if (this.validate(featureObject)) {
						this.pool.push(featureObject.default);
					}
				})
			).then(() => {
				sessionStorage.setItem('feature', JSON.stringify(this.pool));
			});
			return this.pool;
		} else {
			return JSON.parse(sessionStorage.getItem('feature'));
		}
	}

	validate(feature) {
		return feature.about.length > 10 ? feature : false;
	}
}

export default FeaturePoolServices;
