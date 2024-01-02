var sum_of_num = 0;

for (var i = 1; i <= 100; i++){
        if (i % 3 === 0){
            continue; // використовую continue, щоб вийти з ітераціі (не виконувати sum_of_num += i), якщо число ділиться на 3 без залишку
        }
        sum_of_num += i;
}

console.log(`Сума чисел від 1 до 100 включно, які не кратні 3: ${sum_of_num}`);