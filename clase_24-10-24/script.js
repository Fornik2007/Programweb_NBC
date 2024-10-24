//arreglos
/*
let array = ["dato1", 1, Boolean];

console.log("tamaño del array: " + array.length);

array.push("Insertar nuevo valor ");

console.log(array["3"]);

console.log("nuevo tamaño del array: " + array.length);

console.log(array["3"]);
*/


//tabla de multiplicar

console.log("TABLAS DE MULTIPLICAR DEL 5");

let multilicador = []


for (let i = 0; i < 10; i++) {
    
    let num = i * 5;
    

    multilicador.push(num);

    
    
    console.log("5 x " + i + " = " + multilicador[i]);


    if (multilicador.length > 6) {
        
        break
    }

}

console.log("fin")


