//definicion de funcion 

/*
function hola() {
    console.log('hola clase');
    console.log('5IV7');
 }
 
 //lamada al al funcion
hola();
hola();
hola();
hola();
hola();
*/

//retorno de una funcion

/*
function hola() {
    return 'hola clase';
 }

 const result = hola()
 console.log(result)
 */

//funcion que retorna otra funcion
/*
function hola () {
    return function () {
        return 'hola soy la funcion 2';
    }
}

console.log(hola());
*/

//funcion por parametros
/*
function añadir (x) {
    console.log(x);
}

añadir(5);
*/

//funcion por multiples parametros
//ejemplo 1
/*
function añadir (x, y ) {
    console.log(x + y);
}

añadir(5, undefined);

//ejemplo 2, control de errores
function añadir (x, y = undefined) {
    if (y === undefined) {
        y = 0;
    }
    console.log(x + y);
}

añadir(5, );
*/
/*
//parametro de tipo cadena
function add(main) {
    console.log('hola ' + main)
}

add('clase JS');
*/
//ojetos
const user = {
    nombre: 'fornik',
    apellidoP: 'Barona',
    apellidoM: 'Fuentes',
    edad: 18,

    direccion: {
        calle: 'Agula Dorada',
        no:598,
        colonia:'Valle dorado',
        delegacion: 'naucalpan'
    },

    amigos: ['Jerg, Neftaly'],
    activo: true
}

function cons(datosPersonales) {
    datosPersonales = (user.nombre + user.apellidoP + user.apellidoM);
    console.log(datosPersonales)
    
} 

cons(user)
/*
function activo(user) {
    if (user.activo = true) {
        alert('el usuario esta activo')
    } else {
        alert('el usuario no esta activo')
    }
}
alert()*/

/*bueno, no lo termine pero entiendomque tenia que hacer un if }
para crear una variable en donde se juntarn los dtaos como el nombre y apellidos*/