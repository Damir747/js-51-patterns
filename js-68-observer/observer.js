const targetNode = document.body;
const config = {
	attributes: true,
	childList: true,
	subtree: true,
}

const callback = (mutationList, observer) => {
	mutationList.forEach(element => {
		const el = element.target.querySelector('.best-recipes');
		if (el) {
			el.remove();
		}
	});
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);