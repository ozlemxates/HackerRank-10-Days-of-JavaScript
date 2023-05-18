'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// function modifyArray(nums) {
//     const multiplyByTwoIfEven = (element) => {
//         if (element % 2 === 0) {
//             return element * 2;
//         } else {
//             return element * 3;
//           }
//     }
// }

// function()

function modifyArray(nums) {
    const modifiedArray = nums.map(element => (element % 2 === 0) ? (element * 2) : (element * 3));

    return modifiedArray;
}