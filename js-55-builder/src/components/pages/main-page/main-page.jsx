import React from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import { BuilderPages } from "../../builders/builder-page";

function MainPage({ features }) {
	return BuilderPages.setPromo('Внимание! Акция! Подробности по телефону 8 900000000')
		.renderForm((text) => {
			return (
				<>
					{text}
					<About />
					<FeaturesList features={features} />
				</>
			)
		});
}

export default MainPage;
