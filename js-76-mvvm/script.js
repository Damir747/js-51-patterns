const HOTEL_CONTAINER = document.querySelector(".catalog-page__products");

const Model = {
  get: (url, callback) => {
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
  }
}

const View = {
  render: (data) => {
    return `<div class="product">
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
    </div>`;
  }
}

const ViewModel = {
  filterCheckbox: document.querySelectorAll('.filter__label.bluetooth'),

  init: () => {
    ViewModel.filterCheckbox.forEach(el => {
      el.addEventListener('click', el => {
        ViewModel.render(el.target.value);
      });
    });
    ViewModel.render();
  },

  render: (filter) => {
    Model.get(`${window.location.origin}/data.json`, function (err, data) {
      const filteredData = filter ? data.filter(el => el.bluetooth === filter) : data;
      HOTEL_CONTAINER.innerHTML = '';
      filteredData.forEach((element) => {
        HOTEL_CONTAINER.innerHTML += View.render(element);
      });
    });
  }
}

ViewModel.init();
