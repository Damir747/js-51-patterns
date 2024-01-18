class Singleton {
  PAGES = {
    Главная: 0
  };

  constructor() {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
    }
    Singleton.instance = this;
    return Singleton.instance;
  }

  getSingleton() {
    return this.PAGES;
  }

  incSingleton(page) {
    this.PAGES[page]++;
  }
}

export default Singleton;
