/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/
String("hola")
function devolverString(string) {
   // Debe retornar un string.
   return string;
}

// ⛔️ "X" e "Y" son números.
suma(1,2)
function suma(x, y) {
   // Retorna el resultado de su suma.
   return x + y;  
}

resta(21,1)
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
divide(10, 2)
function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y; 
}
multiplica(1, 1)
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
obtenerResto(20,5)
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
