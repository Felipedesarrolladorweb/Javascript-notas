# Anotaciones Javascript

## Arrays  

</br>  

Las arrays son listas en javascript que pueden guardar una serie de elementos de diferente tipo, aunque es recomendado guardar solo elementos del mismo tipo en una sola lista, generalmente mezclar elementos de diferente tipo en una sola lista puede generar conflictos en la lógica del programa.  

</br>  

**Javascript Array Methods / Métodos**  

</br>  

Algunos métodos a tener en cuenta para agregar, remover, concatenar, cambiar,etc, las arrays:  

</br>  

* _splice()_, se escribe primero el nombre de la variable que contiene el array, más u punto seguido, e inmediatamente se escribe '_splice_' seguido de unos paréntesis en donde se escribe el código para remover o agregar uno o varios elementos de la lista o array, dentro de los paréntesis se escribe en orden de izquierda a derecha:  
`array.splice( 4, 0, 'taste');`  
 el primer caracter tiene que ser un número indica en que lugar se quiere agregar o remover contando desde 0 en adelante en la posición de los itms de la lista, el siguiente caracter es otro número que indicará cauántos items de la lista se borrarán, si no se desea borrar ningún item de la lista, simplemente escribir 0, después del segundo número se puede escribir entre paréntesis el item que se quiere agregar en la lista, el código quedaría así:  

</br>  

```javascript
let array = ['Banana', 'Apples', 'Oranges',  'Bluberries'];

array.splice( 4, 0, 'taste');

console.log(array);
```  

</br>  

