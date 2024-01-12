var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"миття голови": "100 грн"
};

price(); // загальна вартість 3-х послуг

maxPrice(); // максимальний price серед 3-х послуг

minPrice(); // мінімальний price серед 3-х послуг

services['Розбити скло'] = "200 грн";
services['Безглютенове печиво'] = "10 грн";
services['Капучіно на рослинному'] = "90 грн";
services['Комплімент'] = "190 грн";

console.log('\n') // щоб було красиво розділено

price(); // загальна вартість 7-ми послуг

maxPrice(); // максимальний price серед 7-ми послуг

minPrice(); // мінімальний price серед 7-ми послуг

function price(){
    var sum = 0;
    for (let key in services){
        sum += Number(services[key].slice(0,-4));   // ми знаємо що останні 4 символи це ' грн', тому їх можна відокремити і решту конвертувати на число
    }
    console.log (`Загальна вартість наданих послуг: ${sum} грн`);
}

function maxPrice(){
    var temp_price = Number(Object.values(services)[0].slice(0,-4));    // мені потрібно було стартове значення, тому я пішла таким нехитрим шляхом, щоб забирати першу властивість незалежно від її значення
    for (let key in services){
        if (Number(services[key].slice(0,-4)) >= temp_price){       // порівнюю кожну властивість з першим значенням, і обираюе що більше, якщо властивість менше - то скіпаю через continue
            temp_price = Number(services[key].slice(0,-4))
        }
        else
            continue        
    }    
    console.log(`Максимальний price: ${temp_price} грн`);
}

function minPrice(){
    var temp_price = Number(Object.values(services)[0].slice(0,-4));
    for (let key in services){
        if (Number(services[key].slice(0,-4)) <= temp_price){       // порівнюю кожну властивість з першим значенням, і обираюе що менше, якщо властивість більше - то скіпаю через continue
            temp_price = Number(services[key].slice(0,-4))
        }
        else
            continue        
    }    
    console.log(`Мінімальний price: ${temp_price} грн`);
}