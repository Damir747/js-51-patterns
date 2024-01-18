import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header, Text } from './style';

// Карточка
function MarketFeatureCard({
	title, // название особенности
	owner, // владелец особенности (обычный магазин, фермерский)
	about, // описание особенности
	isNegative, // является ли особенность отрицательной
	image // иконка
}) {
	return (
		<Feature isNegative={isNegative}>
			<Text dangerouslySetInnerHTML={{ __html: about }} />
			<Header>
				<Image width={56} height={56} src={image} alt={title} />
				<div>
					<Title as="h3" size={TitleSize.EXTRA_SMALL}>
						{title}
					</Title>
					<Owner isNegative={isNegative}>{owner}</Owner>
				</div>
			</Header>
		</Feature>
	);
}

export default MarketFeatureCard;