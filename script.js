// Primer codigo

// prediccion

console.log(hello);     // se ejecuta el console log como indefinido                     
var hello = 'world';    // se declara la variable y se hoistea

// Respuesta: indefinido ya que la funcion esta despues del console log

// ejecucion con let
console.log(hello);     // se ejecuta el console log y arroja el erro ya que la variable no esta definida                  
let hello = 'world';    // se declara la variable y no se hoistea

// ejecucion correcta

var hello = 'world';    // se declara la variable
console.log(hello);     // se ejecuta el consoloe log y muestra world

// Segundo codigo

// prediccion

var needle = 'haystack';    // se declara la variable
test();                     // se ejecuta la funcion
function test(){
	var needle = 'magnet';  // se declara la variable dentro de la función
	console.log(needle);    // se imprime magnet
}

// Respuesta: el console log mostrara magnet

// ejecucion con let

let needle = 'haystack';    // se declara la variable
test();                     // se ejecuta la funcion
function test(){
	let needle = 'magnet';  // se declara la variable dentro de la función y arroja el error dado que la variable esta definida, se detiene la ejecucion
	console.log(needle);    // no ocurre debido a que se interrumpio
}


// // Tercer codigo

// prediccion 
var brendan = 'super cool';     // se declara la variable
function print(){
	brendan = 'only okay';      // se sobreecribe la variable dentro de la funcion - no se realiza dado que no esta declara la ejecución de la función
	console.log(brendan);       // console log deberia devolver only okay - no se realiza dado que no esta declara la ejecución de la función
}
console.log(brendan);           // console log devuelve super cool

// // Respuesta: el console log mostrara super cool, ya que la funcion no se llega a ejecutar

// // ejecución con let

let brendan = 'super cool';     // se declara la variable
function print(){
	brendan = 'only okay';      // se sobreecribe la variable dentro de la funcion - no se realiza dado que no esta declara la ejecución de la función
	console.log(brendan);       // console log deberia devolver only okay - no se realiza dado que no esta declara la ejecución de la función
}
console.log(brendan);           // console log devuelve super cool

// Cuarto codigo

// prediccion

var food = 'chicken';       // se declara la variable
console.log(food);          // console log devuelve chicken
eat();                      // se ejecuta la funcion
function eat(){             
	food = 'half-chicken';  // se sobreescribe el valor de la variable food
	console.log(food);      // console log devuelve half chicken
	var food = 'gone';      // se sobre escribe el valor de la variable
}

// ejecucion con let

let food = 'chicken';       // se declara la variable - pero el programa se cae dado que dento de la función se declara la variable con el mismo nombre
console.log(food);          // console log devuelve chiken - pero el programa se cae dado que dento de la función se declara la variable con el mismo nombre
eat();                      // se ejecuta la funcion - pero el programa se cae dado que dento de la función se declara la variable con el mismo nombre
function eat(){             
	food = 'half-chicken';  // se sobreescribe el valor de la variable food - pero el programa se cae dado que dento de la función se declara la variable con el mismo nombre
	console.log(food);      // console log devuelve half chicken - pero el programa se cae dado que dento de la función se declara la variable con el mismo nombre
	let food = 'gone';      // en este punto se genera un error dado que la variable ya se encuentra definida
}

// // Respuesta: habra 2 console log, el primero mostrara chicken y el segundo half-chicken

// Quinto codigo

// prediccion

mean();                     // se declara la ejecución de una función
console.log(food);          // console log no devuelve nada ya que la variable no esta definida
var mean = function() {     // se declara la variable y se hoistea
	food = "chicken";       // se declara variable dentro de la función
	console.log(food);      // console log devuelve chicken
	var food = "fish";      // se sobreexcribe la variable dentro de la función
	console.log(food);      // console log devuelve fish
}

// console.log(food);          // console log no devuelve nada ya que la variable no esta definida

// Respuesta: se mostraran 4 console log el primero indefinido, el segundo chicken, el tercero fish y el cuarto indefinido.
// RESUPESTA CORRECTA: es que mean no es funcion, por lo tanto se cae el programa

// ejecución let
mean();                     // se declara la ejecución de una función - Arroja error de que no se puede acceder a la funcion antes de incialización, dado que se define despues
console.log(food);          // console log no devuelve nada ya que la variable no esta definida
let mean = function() {     // se declara la variable 
	food = "chicken";       // se declara variable dentro de la función
	console.log(food);      // console log devuelve chicken
	let food = "fish";      // se sobreexcribe la variable dentro de la función
	console.log(food);      // console log devuelve fish
}

console.log(food);          // console log no devuelve nada ya que la variable no esta definida


// Sexto codigo

// prediccion

console.log(genre);         // console log devuelve genre indefinido
var genre = "disco";        // se declara la variable y se hoistea
rewind();                   // se ejecuta la función
function rewind() {
	genre = "rock";         // se modifica la variable dentro de la función
	console.log(genre);     // console log devuelve rock
	var genre = "r&b";      // se modifica la variable dentro de la función
	console.log(genre);     // console log devuelve r&b
}
console.log(genre);         // console log devuelve disco

// Respuesta: primer console log indefinido o por hoisting deberia ser disco? despues se ejecuta la funcion y 
// genera 2 console log el primero rock y el segundo r&b y finalemente se ejecuta el ultimo console log con valor disco.

// ejecucion let

console.log(genre);         // console log devuelve genre indefinido - Se cae la ejecución dado que la variable esta definida mas adelante
let genre = "disco";           // se declara la variable
rewind();
function rewind() {
	genre = "rock";            // se cae dado que la variable dentro de la función se define más adelante
	console.log(genre);        // console log deberia devolver rock pero se cae dado que la variable dentro de la función se define más adelante
	let genre = "r&b";         // se declara la variable dentro de la función pero la función ya se habia caido
	console.log(genre);        // console log deberia devolver r&b pero la función ya se habia caido
}
console.log(genre);


// // Septimo codigo

// prediccion

dojo = "san jose";          // se declara una variable no tipificada
console.log(dojo);          // console log devuelve sanjose
learn();                    // se ejecuta una función
function learn() {
	dojo = "seattle";       // se modifica la variable dojo por seattle
	console.log(dojo);      // console log devuelve seattle 
	var dojo = "burbank";   // se declara variable dojo como burbank y se hoistea
	console.log(dojo);      // console log devuelve burbank 
}
console.log(dojo);          // console log devuelve san jose

// Respuesta: primer console log san jose despues se ejecuta la funcion y 
// genera 2 console log el primero seattle y el segundo burbank y finalemente se ejecuta el ultimo console log con valor san jose.

// ejecucion let

let dojo = "san jose";          // se declara una variable dojo con valor san jose
console.log(dojo);          // console log devuelve san jose
learn();                    // se ejecuta una función
function learn() {
	dojo = "seattle";       // se modifica la variable dojo por seattle - pero no se puede acceder a a esta dado que no esta inicializada dentro de la funcion
	console.log(dojo);      // console log devuelve seattle - no se ejecuta dado que la funcion se cayo por el error de inicialización
	let dojo = "burbank";   // se declara variable dojo como burbank - no se ejecuta dado que la funcion se cayo por el error de inicialización
	console.log(dojo);      // console log devuelve burbank - no se ejecuta dado que la funcion se cayo por el error de inicialización
}
console.log(dojo);          // console log devuelve san jose - no se ejecuta dado que la funcion se cayo por el error de inicialización

// Octavo codigo

// prediccion

console.log(makeDojo("Chicago", 65));       // console log imprime la función make dojo con parametros especificados
console.log(makeDojo("Berkeley", 0));       // console log imprime la función make dojo con parametros especificados
function makeDojo(name, students){
        const dojo = {};                    // se declara constante dojo como un objeto
        dojo.name = name;                   // se declara variable name del objeto para tener el valor del parametro
        dojo.students = students;           // se declara variable students del objeto para tener el valor del parametro
        if(dojo.students > 50){             // se declara una condicion if para el caso de que students sea mayor a 50
            dojo.hiring = true;             // devuele true en caso que se cumpla la condicion para el campo hiring
        }
        else if(dojo.students <= 0){        // se declara una condicion else if para el caso de que students sea menor o igual a 0
            dojo = "closed for now";        // devuele mensaje closed fon now en caso que se cumpla la condicion
        }
        return dojo;                        // retorna el resultado dependiendo del caso
}

// Respuesta: {Chicago, 65, true}, {Berkley, 0, closed for now}
// respuesta correcta: error dado que dojo es constante

// ejecucion let

console.log(makeDojo("Chicago", 65));       // console log imprime la función make dojo con parametros especificados
console.log(makeDojo("Berkeley", 0));       // console log imprime la función make dojo con parametros especificados
function makeDojo(name, students){
        let dojo = {};                      // se declara variable dojo como un objeto
        dojo.name = name;                   // se declara variable name del objeto para tener el valor del parametro
        dojo.students = students;           // se declara variable students del objeto para tener el valor del parametro
        if(dojo.students > 50){             // se declara una condicion if para el caso de que students sea mayor a 50
            dojo.hiring = true;             // devuele true en caso que se cumpla la condicion para el campo hiring
        }
        else if(dojo.students <= 0){        // se declara una condicion else if para el caso de que students sea menor o igual a 0
            dojo = "closed for now";        // devuele mensaje closed fon now en caso que se cumpla la condicion
        }
        return dojo;                        // retorna el resultado dependiendo del caso
}