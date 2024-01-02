//спосіб 1

var height = 4, symbol = "-";  // якщо не використовувати prompt, робимо через змінну 

drawTriangle(height,symbol);

function drawTriangle (height, symbol) {

    var symbol_temp = symbol; // я використовую додаткову змінну, щоб формувати строку для виводу та не міняти оригінальну змінну, в якій зберігається символ
    
    for (var i = 1; i <= height; i++){
            console.log(symbol_temp);
            symbol_temp += symbol;
        }
    }

// спосіб 2

var height = 3, symbol = "+";  // якщо не використовувати prompt, робимо через змінну 

drawTriangle(height,symbol);

function drawTriangle (height, symbol) {

    var i = 1, symbol_temp = symbol; // я використовую додаткову змінну, щоб формувати строку для виводу та не міняти оригінальну змінну, в якій зберігається символ

    while (i <= height) {
        console.log(symbol_temp);
        symbol_temp += symbol;
        i++;
        }
    }