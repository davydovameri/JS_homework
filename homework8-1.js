var coffee = {
    name : "Ephiopia Shonora",
    roasting : "espresso",
    sweetness: "6/10",
    ground : false,
    }

function getInfo (coffee) {     
    console.log('\n'); // для того щоб перед кожним новим виводом робити відступ (можна було і в кінці)
        for (let key in coffee){
            console.log(key + ': ' + coffee[key]);
        }
    }

getInfo(coffee); // виводить 4 властивості: name, roasting, sweetness, ground

coffee.taste = "pear, hazelnut, red apple, citrus"; // нова властивість

getInfo(coffee); // виводить 5 властивостей: name, roasting, sweetness, ground та taste

coffee.weight = 250;    // нова властивість
coffee.method = 'natural';  // нова властивість

getInfo(coffee); // виводить 7 властивостей: name, roasting, sweetness, ground?, taste, weight та method