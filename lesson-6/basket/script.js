'use strict';

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
  settings: {
    countSelector: '#basket-count',
    priceSelector: '#basket-price',
  },
  goods: [],
  countEl: null,
  priceEl: null,

  /**
   * Инициализирует переменные для корзины и показывает эти значения.
   * @param {object} userSettings Объект настроек для кoрзины.
   */
  init(userSettings = {}) {
    Object.assign(this.settings, userSettings);

    this.handler();

    this.countEl = document.querySelector(this.settings.countSelector);
    this.priceEl = document.querySelector(this.settings.priceSelector);
  },

  /**
   * Инициализирует обработчики событий
   */
  handler() {
    const buttons = document.querySelectorAll('#container .buy-btn');

    for (const btn of buttons) {
      btn.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName === 'BUTTON') {
          this.add(target.dataset.name, target.dataset.price);
        }
      });
    }
  },

  /**
   * Отображает количество всех товаров и их цену.
   */
  render() {
    this.countEl.innerText = this.goods.length;
    this.priceEl.innerText = this.getGoodsPrice();
  },

  /**
   * Считает и возвращает цену всех купленных товаров из массива this.goods.
   * @returns {number} Цену всех купленных товаров.
   */
  getGoodsPrice() {
    let total = 0;

    for (const item of this.goods) {
      total += +item.goodPrice;
    }

    return total;
  },

  /**
   * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров
   * @param goodName Название товара.
   * @param goodPrice Цена товара.
   */
  add(goodName, goodPrice) {
    this.goods.push({ goodName, goodPrice });
    this.render();
  },
};

window.onload = () => basket.init({});