const km = 1000; // метрів
const hour = 60; //хвилин
const kg = 1000; // грам

var units, value;

units = "hour"; // я не використовувала prompt, тому треба вручну міняти одиниці вимірювання (km, hour або kg) та кількість
value = 12; // валідацію на від'ємні числа чи строку не робила, бо так і вказано у завданні

switch (units){
    case "km": 
        console.log (`${value} км це ${value*km} м`);
        break;
    case "hour": 
        console.log (`${value} г це ${value*hour} хв`);
        break;
    case "kg": 
        console.log (`${value} кг це ${value*kg} грм`);
        break;
    default:
        console.log ("Цей конвертер підтримує тільки km, hour або kg!");
}