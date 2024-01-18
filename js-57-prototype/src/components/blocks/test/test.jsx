import React, { useState, useEffect } from "react";
import Title, { TitleSize } from '../../ui/title/title';	//	/src/components/ui/title/title
import { Text, StyledAbout } from '../about/styles';

// Раздел о магазине фермерских продуктов
function Test() {
	const [count, setCount] = useState(0);
	useEffect(() => {    // Обновляем заголовок документа с помощью API браузера    
		document.title = `Вы нажали ${count} раз`;
	});
	return (
		<>
			<Title size={TitleSize.BIG}>
				{" "}
				Тестовый блок с счетчиком нажатий на кнопку {count}
			</Title >
			<Text>
				Всякая всячина написана.
			</Text>
			<button onClick={() =>
				count > 0 && setCount(count - 1)
			}>
				-1
			</button>
			<button onClick={() => {
				setCount(count + 1)
			}}>
				+1
			</button>
		</>
	);
}

export default Test;
