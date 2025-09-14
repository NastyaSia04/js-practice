// Маскировка карты
// Для защиты данных пользователя необходимо показывать только последние 4 цифры номера кредитной карты. Остальные цифры необходимо закрыть символом #.

// Обычно длина номера карты составляет 16 символов, но мы хоти написать универсальную функцию, которая работает для любого номера.

// console.log(maskify("4556364607935616")); // "############5616"
// console.log(maskify("123456789")); // "#####6789"
// console.log(maskify("789")); // "789"

function maskify(cc) {
  const lengthNumCard = cc.length;
  if (lengthNumCard < 4) {
    return cc;
  }
  const lastNumber = cc.slice(-4);
  const hideNumber = lastNumber.padStart(lengthNumCard, "#")
  return hideNumber;
}

// или другое решение (не мое!)

// function maskify(cc) {
//   if (cc.length <= 4) {
//     return cc;
//   }

//   return "#".repeat(cc.length - 4) + cc.slice(-4);
// }

// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, "#");
// }
