
// var num = [10,20,40,60];
// var newNum = [1,2,3,4];
// var sum = 0;
// for (var counter = 0; counter < num.length; counter++) {
//    (sum += num[counter]);
// }

// console.log(sum);


// var doubleArray = [];
// for (var counter = 0; counter < num.length; counter++) {
//     var doubleNumber = num[counter] * 2;
//     doubleArray.push(doubleNumber);
// }
// // console.log (num);
// // console.log(doubleArray);

// function addition(x, y) {
//     return x + y;
// }
// console.log (addition(2, 4));

// function doubleNew(normalArray) {
//     var doubleArray = [];

//     for (var counter = 0; counter < normalArray.length; counter++) {
//         var doubleNumber = normalArray[counter] * 2;
//         doubleArray.push(doubleNumber);
//     }

    // return doubleArray;
// }

// console.log(doubleNew(newNum))

/*var nums = [1,2,3,4];

function sumArray(randomArray){
    sum = 0
    for (var i = 0; i < randomArray.length; i++){
        sum += randomArray[i];
    }
    return sum;
}  

sumArray(nums);


function multiply(x, y) {
    var multi = [];
    multi.push(x * y);
    console.log(multi);
}

multiply(2,3);
**/
// var johnAverage = (89 + 120 + 103) / 3;
// var mikeAverage = (116 + 94 + 123) / 3;
// var maryAverage = (97 + 134 + 105) / 3;

// if (johnAverage > mikeAverage) {
//     console.log('John wins with ' + johnAverage + ' points');}
// else if (mikeAverage > johnAverage) { 
//     console.log('Mike wins with ' + mikeAverage + ' points');}
//  else { 
//     console.log('It\'s' + ' a draw');
// }

// if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log('John wins with ' + johnAverage + ' points');
// }
// else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log('Mike wins with ' + mikeAverage + ' points');
// }
// else if (maryAverage > mikeAverage && maryAverage > johnAverage) {
//     console.log('Mary wins with ' + maryAverage + ' points');
    
// }
// else {
//     console.log('It\'s' + ' a draw');
// }


var num = [10,11,12,13,14,15,16];

// for (let index = 0; index < num.length; index++) {
//     var even = num[index];
// }

/* ARRAYS */
var evenArray = [];
var oddArray = [];
for (var counter = 0; counter < num.length; counter++) {
    var number = num[counter];
    if (number % 2 === 0) {
    evenArray.push(number);
} else {
    oddArray.push(number);
}
}

// console.log (num);
console.log ('original array: ' + num);
console.log('Even array: ' + evenArray);
console.log('Even array: ' + oddArray);