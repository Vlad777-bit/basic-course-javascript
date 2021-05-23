'use strict';

/**
* @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
*/
const chess = {
  gameContainerEl: document.getElementById('game'),
  
  /**
   * Инициализация шахматной доски и фигур.
   */    
  init() {
    this.renderMap();
  },   

  /**
  * Метод отображения карты (игрового поля).
  */
  renderMap() {
    this.gameContainerEl.innerHTML = '';
    const letters = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
    const numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    for (let row = 0; row < 10; row++) {
      const trEl = document.createElement('tr');
      this.gameContainerEl.appendChild(trEl);

      for (let col = 0; col < 10; col++) {
        const tdEl = document.createElement('td');
        trEl.appendChild(tdEl);

        if (this.renderValue(row, col, letters)) {
          tdEl.innerHTML = letters[col]
        };

        if (this.renderValue(col, row, numbers)) {
          tdEl.innerHTML = numbers[row];
        };

        if (this.isCellIsBlack(row, col)) {
          tdEl.style.backgroundColor = 'grey';
        }
      }
    }
  },

  /**
  * Определяет является ли ячейка черной.
  * @param {int} rowNum Номер в строке.
  * @param {int} colNum Номер в колонке.
  * @returns {boolean} true, если ячейка должна быть черной, иначе false.
  */
  isCellIsBlack(rowNum, colNum) {
    if (((rowNum % 2)) - (colNum % 2) && (rowNum < 9 && colNum < 9) && (rowNum && colNum)) {
      return true;
    }    
    return false;
  },

  /**
   * Отрисовывает Номера и буквы.
   * @param {int} rowNum Номер в строке.
   * @param {int} colNum Номер в строке.
   * @param {array} arr Массив чисел или букв.
   * @returns {boolean} true, если положение верно, иначе false.
   */
  renderValue(rowNum, colNum, arr) {
    if ((rowNum === 0 || rowNum === 9) && arr[colNum] !== 0) {
      return true;
    }
    return false;
  },
};

// Запускаем метод отображения карты.
chess.init();