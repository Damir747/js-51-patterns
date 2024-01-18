import React from "react";

export const BuilderPages = {
	promoText: '',
	setPromo: (text) => {
		BuilderPages.promoText = text;
		return BuilderPages;
	},
	renderForm: (callback) => {
		return <>
			{callback(BuilderPages.promoText)}
		</>;
	}
};
