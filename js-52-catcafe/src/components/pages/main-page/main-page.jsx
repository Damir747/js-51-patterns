import React, { useEffect } from "react";
import About from '../../../components/blocks/about/about';	// /src/components/blocks/about/about
import Test from '../../../components/blocks/test/test';
import FeaturesList from '../../../components/blocks/features-list/features-list';	//	/src/components/blocks/features-list/features-list

import Singleton from '../../../components/singleton/singleton';	//	/src/components/singleton/singleton
import Banner from '../../../components/ui/banner/banner';	//	/src/components/ui/banner/banner

const singletonObject = new Singleton();

function MainPage({ features }) {
	useEffect(() => {
		singletonObject.incSingleton("Главная");
	}, []);

	return (
		<>
			{singletonObject.getSingleton()["Главная"] > 2 && <Banner />}
			<Test />
			<About />
			<FeaturesList features={features} />
		</>
	);
}

export default MainPage;
