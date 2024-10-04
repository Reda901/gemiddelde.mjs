import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Voer een getal in: "))

let hoogstegetal = getal

let laagstegetal = getal

let gemiddelde = getal

console.log('het hoogste getal is: '+hoogstegetal);
console.log('het laagste getal is: '+laagstegetal);

getal = parseFloat(await userInput.question("Voer een getal in: "))

if ( hoogstegetal < getal){

    hoogstegetal = getal
}

if(laagstegetal > getal ){

    laagstegetal = getal
}

gemiddelde += getal

console.log('het hoogste getal is: '+hoogstegetal);
console.log('het laagste getal is: '+laagstegetal);


getal = parseFloat(await userInput.question("Voer een getal in: "))

if ( hoogstegetal < getal){

    hoogstegetal = getal
}

if(laagstegetal > getal ){

    laagstegetal = getal
}

gemiddelde += getal

console.log('het hoogste getal is: '+hoogstegetal);
console.log('het laagste getal is: '+laagstegetal);


getal = parseFloat(await userInput.question("Voer een getal in: "))

if ( hoogstegetal < getal){

    hoogstegetal = getal
}

if(laagstegetal > getal ){

    laagstegetal = getal
}

gemiddelde += getal

console.log('het hoogste getal is: '+hoogstegetal);
console.log('het laagste getal is: '+laagstegetal);



getal = parseFloat(await userInput.question("Voer een getal in: "))

if ( hoogstegetal < getal){

    hoogstegetal = getal
}

if(laagstegetal > getal ){

    laagstegetal = getal
}

gemiddelde += getal
gemiddelde = gemiddelde/5

console.log('het hoogste getal is: '+hoogstegetal);
console.log('het laagste getal is: '+laagstegetal);
console.log('het gemiddelde van is: '+gemiddelde);


process.exit();