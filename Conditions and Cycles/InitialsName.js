// ИНИЦИАЛЫ ИМЕНИ
// Реализуйте функцию, которая по полному имени, состоящему из имени и фамилии, возвращает инициалы:

// console.log(abbrevName("Natalie Portman")); // "N.P."
// Гарантируется, что полное имя состоит из двух слов, разделенных одним пробелом.

function abbrevName(name) {
  const arrName = name.split(' ');
  const arrOne = arrName[0].split('');
  const arrOneName = arrOne[0];
  const arrTwo = arrName[1].split('');
  const arrTwoSurname = arrTwo[0];
  const result = `${arrOneName}.${arrTwoSurname}.`;
  return result;
}