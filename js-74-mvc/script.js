class Model {
  url = `${window.location.origin}/data.json`;
  data = null;

  getData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
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
}

class View {
  container = document.querySelector(".catalog-page__products");

  render(items) {
    this.container.innerHTML = '';
    items.forEach(data => {
      this.container.innerHTML += `
    <div class="product">
      <a class="product__link" href="#">
        <img
          class="product__image"
          src="img/products/${data.img}"
          width="360"
          height="380"
          alt="${data.title}"
        >
        <span class="button product__more-button ">
          Подробнее
        </span>
        <div class="product__details">
          <h3 class="product__title">
            ${data.title}
          </h3>
          <span class="product__price">
            ${data.price} ₽
          </span>
        </div>
       </a>
    </div>
  `;
    });
  };
}

class Controller {
  constructor(action) {
    const view = new View();
    const model = new Model();
    switch (action) {
      case undefined:
        model.getData((status, data) => {
          view.render(data);
        });
        break;
      case 'expensive':
        model.getData((status, data) => {
          data.sort((a, b) => b.price - a.price);
          view.render(data);
        });
        break;
      case 'cheap':
        model.getData((status, data) => {
          data.sort((a, b) => a.price - b.price);
          view.render(data);
        });
        break;
      default:
        break;
    }
  }

}

new Controller();

document.getElementById('sorting').addEventListener('change', (evt) => {
  new Controller(evt.target.value);
})

