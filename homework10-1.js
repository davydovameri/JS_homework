var str = "12aaa54dfhj554Ab4mnA6bmi4a6mn456",
    str1 = '',
    str2 = "_valid",
    str3 = 'hello',
    str4 = "12aaa54dfh";

function findSubstr(str){
    var pattern = /[^a]{6}/i;

    if (str.length == 0)
        return console.log ('\'' + str + '\'' + " - empty string!\n") // перевірка на пусту строку

    if (str.length > 0 && str.length < 6)
        return console.log ('\'' + str + '\'' + " - string length is not enough. try again!\n") // перевірка, чи довжини рядка вистачає для знаходження 6 символів

    for (var i = 0, counter = 0, printHeader = true; i < str.length - 5; i++){ // str.length - 5 використовую, щоб знайти останній індекс, з якого можливо відокремити строку довжиною 6
        var substr = str.slice(i, i + 6); // вирізаю окремі строки і перевіряю кожну довжиною 6, тобто по індексах, наприклад 0 - 5 або 1 - 6 або 3 - 8 і т.д.
        if (substr.match(pattern)){
            if (printHeader) // якщо ми зустріли результат і ще не виводили заголовок, то виводимо
                console.log("Your results:")

            console.log(substr);
            printHeader = false; // і більше не виводимо заголовок, бо один раз ми його вже вивели

            if (i == str.length - 6) // коли дійшли до останнього індекса, з якого можливо відокремити строку довжиною 6, то після цього робимо перевод на нову строку, щоб відокремити вивод
                console.log('\n')
        } 
        else {
            counter++; // використовую лічильник, щоб рахувати кількість разів, скільки ми не виводили результат, тобто він нам не підійшов
            continue;
        }
    }

    if (counter == (str.length - 5)) // і якщо ми нічого не вивели, то виходить, що нічого не знайшли
        console.log('\'' + str + '\'' + " - your string does not match the regular expression!\n");
}

findSubstr(str);
findSubstr(str1);
findSubstr(str2);
findSubstr(str3);
findSubstr(str4);