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

* _sort();_,  Se usa para ordenar una lista o array para que sea de manera alfabética o numérica de forma ascendente de menos a más (ejm. `[1,2,3,4,etc][a,b,c,d,f,etc]`).  

* _`reverse();`_ , se usa para ordenar al revés una lista o array de más a menos.  

* _`array.sort((a, b) => a > b);`_ , se usa para reordenar de la forma deseada una lista o array, se escribe el nombre de la variable que contiene el array luego un punto, luego el nombre sort más el resto entre paréntesis, las letras a y b dentro del primer paréntesis son para indicar el orden primero en que se desea ordenar los items de la lista, y las letras a > b, se usan para indicar el orden final o el que se verá reflejado en el resultado, el signo mayor que(>) es para indicar hacis donde va el orden de la lista, a > b indicaría que la lista va de manera ascendente de primero hacia abajo desde la primera letra del alfabeto hasta la última, indicando un orden progresivo dependiendo del tipo de items en la lista esto significa un orden ascendente como de 1 a 100, si se cambia de b < a significa que queremos que la lista esté ordenada desde la última letra del alfabeto o item de la lista hasta la primera.  
