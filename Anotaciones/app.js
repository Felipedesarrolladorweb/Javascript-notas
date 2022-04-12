/* // using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges". */
/* 
const array = ['Banana', 'Apples', 'Oranges',  'Bluberries'];
const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array.splice(0, 1);
array.sort((a, b) => a > b);
array.splice(3, 0, 'Kiwi');
array.splice(0, 1);
array.reverse();

document.getElementById("demo").innerHTML = array;

console.log(array);
console.log(array2[1][1]);

document.getElementById("demo1").innerHTML = array2;
document.getElementById("demo2").innerHTML = array2[1][1]; */

/* const user = {
    name: 'Jhon', // -> guarda propiedades(name) y valores para cada propiedad('Jhon')
    age: 34,
    hobby: 'soccer',
};  
user.favouriteFood = 'spinach';

console.log(user); */

/* const user = {
    name: 'Jhon',
    shout: function() {
        console.log('gritar');
    }
}

user.shout() // -> 'gritar' */
/* 
const objectVacio = {};  

console.log(objectVacio); */

/* Facebook excercise */

/* const database = [
    {
        username: 'andrew',
        password: 'supersecret'
    }
]

const newsfeed = [
    {
        username: 'Bobby',
        toimeline: 'so tired from all that learning'
    },
    {
        username: 'Sally',
        toimeline: 'Javascript is so cool!'
    }
];

const userNamePromt = prompt("What's your usename");
const passwordPrompt = prompt("What's your password");

function signIn(user, passw) {
    if ( user === database[0].username &&
        passw === database[0].password) {
            console.log(newsfeed);
        }else {
            alert('Sorry, wrong username and password');
        }
}

signIn(userNamePromt, passwordPrompt); */  

/* const todos = [
    'clean room',
    'brush teeths',
    'excercise',
    'study javascript',
    'eat healthy'
]

todos.forEach(function(a, b) {
    console.log(a, b); 
})
dato importante, cuando se 
    imprime algo por consola, en la parte derecha se muestra 
    el número de la línea de código en la que se escribió el código
    que indica u ordena imprimir o ejecutar el código completo, en este caso en 
    la consola aparecerá en la parte derecha app.js:105:13, indicando
    la línea en donde esta el código que ejecuta, esto es de ayuda
    en casos cuando salen errores y queremos saber en dónde podemos
    analizarlos.

function logTodos(todoitem, i) {
    console.log(todoitem, i);
}

todos.forEach(logTodos); */

/* Facebook excercise 2 */

/* const database = [
    {
        username: 'andrew',
        password: 'supersecret'
    },
    {
        username: 'sally',
        password: 'sally123'
    },
    {
        username: 'ingrid',
        password: 'ingrid123'
    }
]

const newsfeed = [
    {
        username: 'Bobby',
        timeline: 'so tired from all that learning'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is so cool!'
    },
    {
        username: 'Mitch',
        timeline: 'Javascript is preetty cool!'
    }
];

function isUserValid(username, password) {
    for (let i=0; i < database.length; i++) {
    if(database[i].username === username &&
        database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert('Sorry, wrong username and password');
    }
}

const userNamePrompt = prompt("What's your usename");
const passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt); */

document.querySelector('h1').className = 'cooltitle';

document.querySelector('ul').classList.add('redletra');

document.querySelector('body').insertAdjacentHTML = '<h2>Nuevo título</h2>';
