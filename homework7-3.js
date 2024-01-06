var count = 13;     // вказуємо скільки разів буде генеруватися випадкове число
       
checkProbabilityTheory (count);

function checkProbabilityTheory (count){
    var qty_even_num = 0,       // прирівняла до 0 одразу, щоб потім використовувати як лічильник
        qty_uneven_num = 0,       // прирівняла до 0 одразу, щоб потім використовувати як лічильник
        interest_even = 0,
        interest_uneven = 0;

    for (let i = 1; i <= count; i++){
        let rnd = Math.round (Math.random() * ((1000 - 100 + 1) + 100));        
        // використала округлення, бо якщо знаходити парні / не парні через залишок від ділення, бо не цілі числа при діленні на 2 завжди дають остаток і рахуються як не парні

        console.log (rnd);      // показую згенеровані числа для перевірки правильності роботи функції, тобто цю строку можна видалити та залишиться інфа з останнього console.log

        if (rnd % 2 == 0)
        {
            qty_even_num++;     //  якщо ділиться без залишку, то рахую це число як парне
        }
        else
            qty_uneven_num++;       // в іншому випадку - рахую як непарне
        
    }

    interest_even = Math.round((qty_even_num / count) * 100);       // стандартная формула обчислення відсотку та округлюю до цілого числа, щоб виглядало приємно
    interest_uneven = Math.round((qty_uneven_num / count) * 100);

    console.log (`Кількість згенерованих чисел: ${count} \n Парних чисел: ${qty_even_num} \n Не парних чисел: ${qty_uneven_num} \n Відсоток парних до не парних: ${interest_even}%${interest_uneven}`)
}