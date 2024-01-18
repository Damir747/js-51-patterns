import React from "react";
import Title, { TitleSize } from "../title/title";
import { Image, Owner, Header, Text } from "./styles";
import ProtoCard from "../../proto-card/proto-card";


// Карточка
function FeatureCard({
	title, // название особенности
	owner, // владелец особенности (обычный магазин, фермерский)
	about, // описание особенности
	isNegative, // является ли особенность отрицательной
	image // иконка
}) {
	return (
		<ProtoCard
			isNegative={isNegative}
			Header={
				<Header>
					<Image width={56} height={56} src={image} alt={title} />
					<div>
						<Owner isNegative={isNegative}>{owner}</Owner>
						<Title as="h3" size={TitleSize.EXTRA_SMALL}>
							{title}
						</Title>
					</div>
				</Header>}
			Text={
				<Text dangerouslySetInnerHTML={{ __html: about }} />}
		/>
	);
}

export default FeatureCard;
