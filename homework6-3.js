var number = 4, power = 4;  // якщо не використовувати prompt, робимо через змінну 

function pow (number, power) {

    var result = 1;
    
    for (var i = 1; i <= power; i++){
            result *= number;
        }

        return result;
    }

console.log(`${number} в ступіні ${power} дорівнює ${pow (number, power)}`);