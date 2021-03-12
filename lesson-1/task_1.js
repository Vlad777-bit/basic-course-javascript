'use strict';

function task_1() {
  let temperatureCelsius = +prompt('Введите температуру по Цельсию', '15 °C');
  let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;

  alert(
    `${temperatureCelsius} °C градусов Цельсия = ${temperatureFahrenheit} °F градусов Фаренгейта`
  );
}
