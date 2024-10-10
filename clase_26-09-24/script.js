//esta funcion concatena los valores de los botones cuando se hace click
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//lo que hace esta funcion no es como tal borrar sino qur sobre escribe sobre los datos anteriores, pero como esta en blanco lo sobrescribe en blanco
function clearDisplay() {
    document.getElementById('display').value = "";
}

//discrimina el ultimo valor para borrar el ultimo numero
function deleteLast() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

//esta funcion es la que realiza las operaciones y detecta algunos errores
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expresión invalida')
    }
    
}