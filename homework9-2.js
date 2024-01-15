const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

var companyName = 'Клієнт 1.2';
findValueByKey(companyName);

function findValueByKey(companyName, currentObject){
    // не хотіла дублювати в кожен if, тому винесла окремо
    function printObj(result){

        for (let key in result){
            if (key == 'clients' || key == 'partners'){
                // залишаємо пустим, бо не хочемо виводити в консоль
            }
            else {
                console.log(key + ' : ' + result[key]);
        }
        }
    }
    //для того щоб мати можливість викликати функцію лише з companyName, або якщо в функцію findValueByKey передали лише ім'я компанії
    if (currentObject == undefined){ 
        currentObject = company;
    }
    // це якщо ми одразу зустріли потрібний companyName, тобто головну компанію
    if (currentObject.name == companyName)
        return printObj(currentObject)

    // це перевірка всіх клієнтів, якщо такі є
    if (currentObject.clients){
        for(var i = 0; i < currentObject.clients.length; i++){
            var result = findValueByKey(companyName, currentObject.clients[i]); // сенс в тому щоб передавати підоб'єкт далі і працювати з ним
            if (result)         // якщо щось знайшли
                return printObj(result)
        }
    }
    // це перевірка всіх партнерів, якщо такі є
    if (currentObject.partners){
        for(var i = 0; i < currentObject.partners.length; i++){
            var result = findValueByKey(companyName, currentObject.partners[i]);
            if (result)
                return printObj(result)
        }
    
    }
    // якщо нічого не знайшли
    return false; 
}