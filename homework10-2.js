var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"testtest1@gmail.com"
    },
    {
        userName:"Marina",
        lastName:"",
        email:"mar1na@yahoo*com" // Нам такі не підходять, бо *com
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dm1tro.por0hov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять, бо mail.ru
    },
    {
        userName:"Anton",
        lastName:"",
        email:"anton@gmail.ru" // Нам такі не підходять, бо .ru
    },
    {
        userName:"Mariia",
        lastName:"",
        email:"mariia@yahoo.fr" // Нам такі не підходять? бо .fr
    },
    {
        userName:"Kate",
        lastName:"",
        email:"kate.kate.kate@yahoo.com" // Нам такі не підходять, бо два рази крапка
    },
    {
        userName:"Olga",
        lastName:"",
        email:"o-lga@gmail.com" // Нам такі не підходять? бо -
    }
];

var pattern = /^(([a-zA-Z0-9]+)|([a-zA-Z0-9]+\.[a-zA-Z0-9]+))@((gmail|yahoo)\.com)$/;
var result = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i].email.match(pattern))
        result.push (arr[i].email);
    else
        continue;
}
console.log(result);