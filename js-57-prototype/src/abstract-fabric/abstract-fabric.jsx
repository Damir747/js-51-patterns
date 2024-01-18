import FeatureCard from '../../src/components/ui/feature-card/feature-card.jsx';
import SpecialFeatureCard from '../../src/components/ui/feature-card/special-feature-card.jsx';

const AbstractFactory = {
	title: '',
	factoryTitle(props) {
		switch (props.owner) {
			case 'Фермерские продукты':
				this.title = `${props.title} с фермыe`;
				return this;
			case 'Магазинные продукты':
				this.title = `${props.title} из магазина`;
				return this;
			default:
				this.title = `${props.title}`;
				return this;
		}
	},
	factoryCard(props) {
		switch (props.owner) {
			case 'Фермерские продукты':
				return <SpecialFeatureCard {...props} title={this.title} />;
			default:
				return <FeatureCard  {...props} title={this.title} />;
		}
	},
	create(type, props) {
		switch (type) {
			case 'title':
				return this.factoryTitle(props);
			case 'card':
				return this.factoryCard(props);
			default:
				return this;
		}
	}
}

export default AbstractFactory;