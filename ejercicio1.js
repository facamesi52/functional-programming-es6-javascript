const arr = [1, 2, 3, 4, 5, 6];
// utilizar el método map de los arreglos para duplicar cada elemento
let duplicar = arr.map(x => x*2)
console.log(duplicar)
// utilizar el método filter para filtrar los números pares de arr
let pares = arr.filter(y => (y%2===0))
console.log(pares)
// utilizar el método reduce para sumar todos los elementos
let suma = arr.reduce((x,y) => x+y)
console.log(suma)