//input distanza 
const distance = Number(prompt('Inserire la distanza dalla destinazione:'));
//input age
const userAge = Number(prompt('Inserire eta del passeggero:'));
//price per unit
const pricePerKm = 0.21;
console.log(userAge, distance);

//parametri sconto
const overAge = 65;
const underAge = 18;
const overAgeDiscount = 0.6;
const underAgeDiscount = 0.8;

//costo del biglietto senza arrotondamento
let price;
if (userAge >=  overAge) {
    price = distance * pricePerKm * overAgeDiscount;
} else if(userAge < underAge){
    price = distance * pricePerKm * underAgeDiscount;
} else {
    price = distance * pricePerKm;
}
console.log(price);

//troncamento alla seconda cifra decimale

const finalPrice = Math.floor(price * 100) / 100;

console.log(finalPrice);