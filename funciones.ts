// Primera forma - Básica

function sumar(a: number,b: number): number{
    return (a+b);
}

const resultado = sumar(14,37);

console.log(resultado);

// Segunda forma - Flecha, arrow functions

const sumarArrow = (a: number, b: number): number => {
    return a+b;
}


// Funcion ignorando un parametro

function multiplicar(num1:number,num2?:number,base:number=2):number{
    return num1*base;
}

const resultado2 = multiplicar(20,7);




