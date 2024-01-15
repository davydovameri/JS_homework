// оскільки не було зазначено інше, 
// я придумала свій метод тусування - виштовувати останній елемент стільки разів, яка довжина масиву і вставляти його у рандомне місце массиву

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

function myBlend(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = arr.pop();
        var rand = Math.random() * (arr.length + 1);
        arr.splice(rand, 0, temp);
    }
    console.log(arr + '\n');
}

myBlend(arr1);
myBlend(arr2);