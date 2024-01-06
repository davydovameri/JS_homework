var string = "qwerty",
    symbol = "+",
    qty = 8,
    is_start = true;        // для визначення початок чи кінець

function pad (string, symbol, qty, is_start){
    let tmp_string = string;        // нам потрібна нова строка, щоб в неї зібрати результат
    
    if (string.length >= qty){
        return string;      // оригінальні функції padEnd та padStart вертають початкову строку, якщо кількісь символів менше або дорівнює довжині строки
    }
    else {      // всі інші значення, тобто коли string.length < qty
        let added_qty = qty - string.length;        // визначаємо, скільки символів додати
        
        if (is_start){
            for (let i = 1; i <= added_qty; i++){
                tmp_string = symbol + tmp_string;       // додаємо символ з початку
            }
        }
        else {
            for (let i = 1; i <= added_qty; i++){
                tmp_string = tmp_string + symbol;       // додаємо символ з кінця
            }

        }

    }
    return tmp_string;
}

console.log(`Новий рядок: ${pad (string, symbol, qty, is_start)}`);