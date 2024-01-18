import React from "react";
import { Feature } from './style';

function ProtoCard({ isNegative, Header, Text }) {
	return (
		<ProtoCard>
			<Feature isNegative={isNegative}>
				<Header />
				<Text />
			</Feature>
		</ProtoCard >
	)
}

export default ProtoCard;