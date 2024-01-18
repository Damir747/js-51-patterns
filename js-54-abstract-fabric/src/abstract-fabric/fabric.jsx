import FeatureCard from "../components/ui/feature-card/feature-card";
import MarketFeatureCard from "../components/ui/market-feature-card/market-feature-card";

export default function Fabric({
	title, // название особенности
	owner, // владелец особенности (обычный магазин, фермерский)
	about, // описание особенности
	isNegative, // является ли особенность отрицательной
	image // иконка
}) {

	switch (owner) {
		case 'Фермерские продукты':
			return <FeatureCard title={'с фермы ' + title} />;
		case 'Магазинные продукты':
			return <MarketFeatureCard title={'из магазина ' + title} />;
		default:
			return null;
	}
}