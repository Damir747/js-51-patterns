import ProductCard from '../components/ui/feature-card/feature-card.jsx';
import MarketFeatureCard from '../components/ui/market-feature-card/market-feature-card.jsx';

export default function FactoryFeatureCard(props) {
	switch (props.owner) {
		case 'Фермерские продукты':
			return <ProductCard {...props} />;
		case 'Магазинные продукты':
			return <MarketFeatureCard {...props} />;
		default:
			return null;
	}
}