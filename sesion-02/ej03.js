const usuario = {
    nombre: "Ana",
    correo: "ana@example.com"
};

console.log(`- ej03.js`);  
console.log(`- ej03.js`);  
console.log(``);  
console.log(`>> SALIDA `);  
console.log(`>> SALIDA `);  
console.log(``); 


const {nombre, correo, edad = 30} = usuario;

console.log(nombre);  
console.log(correo);  
console.log(edad);    
