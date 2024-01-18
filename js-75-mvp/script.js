class Model {
  url = `${window.location.origin}/data.json`;
  data = null;
  count = 2;
  add() {
    if ((this.data) && (this.count < this.data.length)) {
      this.count = this.count + 1;
    }
    else {
      console.log('Больше данных нет. Смысла давить на кнопку нет.');
    }
  }

  getList = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        this.data = JSON.parse(xhr.response);
        const data = JSON.parse(xhr.response);
        data.length = this.count;
        callback(null, data);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };
}

class View {
  root = document.querySelector(".catalog-page__products");

  render = (data) => {
    this.root.innerHTML = '';
    data.forEach((element) => {
      this.root.innerHTML += `<div class="product">
      <a class="product__link" href="#">
        <img
          class="product__image"
          src="img/products/${element.img}"
          width="360"
          height="380"
          alt="${element.title}"
        >
        <span class="button product__more-button ">
          Подробнее
        </span>
        <div class="product__details">
          <h3 class="product__title">
            ${element.title}
          </h3>
          <span class="product__price">
            ${element.price} ₽
          </span>
        </div>
       </a>
    </div>`;
    });
  }

  init() {
    const presenter = new Presenter(this);
    document.getElementById('add').addEventListener('click', presenter.add.bind(presenter));
  }

}


class Presenter {
  constructor(view) {
    this.model = new Model();
    this.view = view;
    this.model.getList((status, data) => view.render(data));
  }

  add() {
    this.model.add();
    this.model.getList((status, data) => view.render(data));
  }
}

const view = new View();
view.init();
