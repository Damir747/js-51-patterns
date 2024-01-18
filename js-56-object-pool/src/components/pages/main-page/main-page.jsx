import React, { useState, useEffect } from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import FeaturePoolServices from "../../../services/feature-pool-services/feature-pool-services";

function MainPage() {
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		(async () => {
			const featurePoolServices = new FeaturePoolServices();
			setFeatures(
				await featurePoolServices.getFeature([
					"1",
					"2",
					"3",
					"4"
				])
			);
		})();
	}, []);
	return (
		<>
			<About />
			<FeaturesList features={features} />
		</>
	);
}

export default MainPage;
