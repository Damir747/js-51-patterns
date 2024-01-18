const ROOT_TABLE = document.getElementById("result");

const getDataFromServer = function (url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function () {
		const status = xhr.status;
		if (status === 200) {
			callback(null, JSON.parse(xhr.response));
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
	data.map((elem) => {
		return (ROOT_TABLE.innerHTML += `
      <tr class="table__row table__row--blue">
          <td>
              <div class="checkbox">
                <input type="checkbox" name="checkbox-1" id="checkbox-1">
                <label for="checkbox-1"></label>
              </div>
          </td>
          <td>${elem.Id}</td>
          <td>${elem.state}</td>
          <td>${elem.counterparty}</td>
          <td>${elem.manager}</td>
      </tr>`);
	});
});

class interface_Pages {
	setTheme() {
		throw new Error(`В ${this.constructor.name} не описан метод setTheme()`);
	}
	activateTheme() {
		throw new Error(
			`В ${this.constructor.name} не описан метод activateTheme()`
		);
	}
}

class Page extends interface_Pages {
	button = document.createElement("button");
	navList = document.querySelector(".main-nav__list");
	currentTheme = "baseTheme";

	setTheme(newTheme, baseTheme) {
		this.newTheme = newTheme;
		this.baseTheme = baseTheme;
	}

	activateTheme(currentTheme) {
		this.currentTheme = currentTheme === "baseTheme" ? "newTheme" : "baseTheme";
		document.body.style.background = this[this.currentTheme].getBackground();
		document.body.style.color = this[this.currentTheme].getColorText();
		document.querySelector("button.link").innerText = this[
			this.currentTheme
		].getText();
	}

	constructor(newTheme, baseTheme) {
		super();

		this.setTheme(newTheme, baseTheme);

		this.button.innerText = "Светлая тема";
		this.button.className = "link link--active";
		this.button.onclick = () => this.activateTheme(this.currentTheme);
		this.navList.appendChild(this.button);
	}
}

// Вспомогательная иерархия (реализация 1)
class BaseTheme {
	// светлая тема оформления
	getBackground() {
		return "#ffffff";
	}
	getColorText() {
		return "#000000";
	}
	getText() {
		return "Светлая тема";
	}
}

// Вспомогательная иерархия (реализация 2)
class NewTheme {
	// тёмная тема оформления
	getBackground() {
		return "#c4c2c2";
	}
	getColorText() {
		return "#593939";
	}
	getText() {
		return "Темная тема";
	}
}

const newTheme = new NewTheme();
const baseTheme = new BaseTheme();
const page = new Page(newTheme, baseTheme);
