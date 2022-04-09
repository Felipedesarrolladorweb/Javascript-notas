# Anotaciones Javascript

## Javascript Types  

Son los diferentes tipos de contenidos que javascript puede recibir y leer, son la unidad más básica que existe en el motor del código, también se le llaman **_primitive types_**:

* **Number**(Los números que normalmente se usan)  
* **String**(Lo que conocemos como texto, javascript usa caracteres especiales para texto)
* **Boolean**(Lógica comparativa a lo que decimos true(verdadero) o false(falso), también el código lo toma como 1 ó 0, como algo con valor o algo sin valor o vacío).  
* **Undefined**(es la manera de javascript de avisar que un archuvo o variable no tiene un valor definido o está vacío cuando no debería)  
* **Null**(Es lo mismo que undefined pero es usado de manera voluntaria por parte del programador para asignar como vacío o nulo deliberadamente un objeto, así le hace saber al motor de javascript y al programador que analice después el código que ese valor(Null) fué desginado por el programador por alguna razón).  
* **Object**(significa objeto, )

## Data Structures / Estructura de datos  

</br>  

* Arrays  
* Objects  

## Arrays  

</br>  

Los arrays son listas en javascript que pueden guardar una serie de elementos de diferente tipo, aunque es recomendado guardar solo elementos del mismo tipo en una sola lista, generalmente mezclar elementos de diferente tipo en una sola lista puede generar conflictos en la lógica del programa. Los arrays no entran en la categoría de javascript types por la razón de que para el motor de javascript cada item sigue siendo un número, de ahí que se pueda indexar o acceder a un item de un array usando números ejm:  
`array = ['item0','item1','item2','item3']`  
para acceder a uno de ellos solo se escribe array[1]; y se accede al 'item1'.

</br>  

**Javascript Array Methods / Métodos**  

</br>  

Algunos métodos a tener en cuenta para agregar, remover, concatenar, cambiar,etc, los arrays:  

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

* _`array.reverse();`_ , se usa para ordenar al revés una lista o array de más a menos.  

* _`array.sort((a, b) => a > b);`_ , se usa para reordenar de la forma deseada una lista o array, se escribe el nombre de la variable que contiene el array luego un punto, luego el nombre sort más el resto entre paréntesis, las letras a y b dentro del primer paréntesis son para indicar el orden primero en que se desea ordenar los items de la lista, y las letras a > b, se usan para indicar el orden final o el que se verá reflejado en el resultado, el signo mayor que(>) es para indicar hacis donde va el orden de la lista, a > b indicaría que la lista va de manera ascendente de primero hacia abajo desde la primera letra del alfabeto hasta la última, indicando un orden progresivo dependiendo del tipo de items en la lista esto significa un orden ascendente como de 1 a 100, si se cambia de b < a significa que queremos que la lista esté ordenada desde la última letra del alfabeto o item de la lista hasta la primera.  


</br>  

Ejercicios usando **array properties**  

</br>  

Usar la siguiente variable:  

`const array = ['Banana', 'Apples', 'Oranges', 'Bluberries'];`  

* Remover el item Banana del array.
* Ordenar el array usando sort.
* Poner 'Kiwi' al final del array.
* Remover 'Apples' del array.
* Ordenar al revés el array.(No en orden alfabetico, solo al revés ejm: ['a', 'c', 'b'] al revés sería ['b', 'c', 'a'])  
Debería dar como resultado al final:  
['Kiwi', 'Oranges', 'Blueberries']  

* Usando el siguiente array acceder a 'Oranges':

`const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];`

</br>  

Resultado:

```javascript
const array = ['Banana', 'Apples', 'Oranges',  'Bluberries'];
const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array.splice(0, 1);
array.sort((a, b) => a > b);
array.splice(3, 0, 'Kiwi');
array.splice(0, 1);
array.reverse();

console.log(array); // -> Array(3) [ "Kiwi", "Oranges", "Bluberries" ]
console.log(array2[1][1]); // -> Array [ "Oranges" ]
```

</br>  

## Objects  

</br>  

Los objects(objetos), son parecidos a los arrays, pues almacenan una lista de varios items, la diferencia es que en objects se pueden guardar una propiedad y un valor por cada item a diferencia de los arrays que cada item de la lista se guarda con el valor de un número y no se le puede asignar a cada item un nombre en específico. ejm:  

arrays:  

```javascript
const list = ['apple', 'banana', 'orange'];  // -> solo guarda valores por item.
```

objects:

````javascript
const user = {
    name: 'Jhon', // -> guarda propiedades(name) y valores para cada propiedad('Jhon')
    age: 34,
    hobby: 'soccer',
};  

user.favouriteFood = 'spinach'; // -> agrega un nuevo item llamado favouriteFood y su valor es de 'spinach' en el objeto 'user'  

console.log(user); // -> da como resultado la lista anterior más el nuevo item agregado =   { name: "Jhon", age: 34, hobby: "soccer", favouriteFood: "spinach" }
````

Los objects se pueden guardar dentro de arrays y los arrays se pueden guardar dentro de objects también. ejm:  

</br>  

Objects:

```javascript  
const user = {
    name: 'Jhon',
    certificates: ['computer science', 'engineer', 'programming software']
}  
```

Arrays

```javascript
const certificateUsers = [ 'Jhon', 'andrew', 'jack']
```  

