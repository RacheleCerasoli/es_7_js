let hello = 'Ciao';
let age = 18;
let isGraduated = false;

let hellonumber = Number(hello);
console.log('hello è convertito in numero', hellonumber)

let ageboolean = Boolean(age);
console.log('age è convertito in boolean', ageboolean);

let isGraduatedstring = String(isGraduated);
console.log('isGraduated è convertito in stringa', isGraduatedstring);

//Quando si vuole convertire una stringa che non rappresenta un numero in un tipo numerico il risultato sarà 'NaN'. Viene restituito quando si tenta una conversione non valida in contesti numerici.