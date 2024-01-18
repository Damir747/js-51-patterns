import React from "react";
import { Feature } from "./styles";

// Прототип карточки
function ProtoCard({ isNegative, Header, Text }) {
	return (
		<Feature isNegative={isNegative}>
			<Header />
			<Text />
		</Feature>
	);
}

export default ProtoCard;