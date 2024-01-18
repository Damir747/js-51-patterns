class Task {
	ROOT_TABLE = document.getElementById('result');
	CHECKBOX = this.createCheckbox();

	createCheckbox() {
		const input = document.createElement('input');
		input.type = 'checkbox';
		input.id = 'id' + Math.random().toString(16).slice(2);
		return {
			element: input,
			id: input.id,
		}
	}

	constructor(elem) {
		const TASK_TABLE_ROW = document.createElement('tr');
		TASK_TABLE_ROW.className = 'table__row table__row--blue';

		TASK_TABLE_ROW.innerHTML += `
          <td>${this.CHECKBOX.element.outerHTML}</td>
          <td>${elem.Id}</td>
          <td>${elem.state}</td>
          <td>${elem.counterparty}</td>
          <td>${elem.manager}</td>
			 `;
		this.ROOT_TABLE.appendChild(TASK_TABLE_ROW);
	}

	check() {
		document.getElementById('myCheck').checked = true;
	}
};

class TaskComposite {
	ITEMS = [];
	push(elem) {
		if (elem) {
			this.ITEMS.push(elem);
		}
	}

	createCheckbox() {
		const input = document.createElement('input');
		input.type = 'checkbox';
		const label = document.createElement('label');
		label.textContent = 'Выделить все';
		label.style.fontSize = '10px';
		label.onclick = () => {
			this.check(input.checked)
		};
		label.appendChild(input);
		return label;
	}

	check(currentState) {
		this.ITEMS.map((item) => {
			const currentCheckbox = document.getElementById(item.CHECKBOX.id);
			if (currentState && !currentCheckbox.checked) {
				return document.getElementById(item.CHECKBOX.id).click();
			} else if (!currentState && currentCheckbox.checked) {
				return document.getElementById(item.CHECKBOX.id).click();
			}
			return null;
		});
	}

	constructor() {
		document.querySelector(".filter-form").appendChild(this.createCheckbox());
	}
}

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

const taskComposite = new TaskComposite();

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
	data.map((elem) => {
		const task = new Task(elem);
		return taskComposite.push(task);
	});
});
