function sumaNumeros (num1, num2) {
    return num1 + num2;
}

function divideNumeros (num1, num2) {
    return num1 / num2;
}

function mayorNumero (array) {
    let mayor = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (element > mayor) {
            mayor = element;
        }
    }   

    return mayor;
}

console.log("El resultado de la suma es: " + sumaNumeros(5,10));
console.log("El resultado de la division es: " + divideNumeros(20,2));
console.log("El número mayor del array es: " + mayorNumero([2,8,9,7,5,6]));