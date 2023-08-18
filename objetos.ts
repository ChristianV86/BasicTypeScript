


interface IEmpleado{
    nombres: string;
    apellidos: string;
    direccion?: string;    
    contacto: string[];
    ciudad: string;
    sueldo: number;
}



const empleado: IEmpleado = {
    nombres: 'Gregorio',
    apellidos: 'Marin',        
    contacto: ['3157852367','3124189643'],
    ciudad: 'Manizales',
    sueldo: 1300000
}

console.table(empleado);