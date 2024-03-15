let year = 2024; // Año a verificar
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

if (isLeapYear) {
  console.log(year + ' es un año bisiesto.');
} else {
  console.log(year + ' no es un año bisiesto.');
}