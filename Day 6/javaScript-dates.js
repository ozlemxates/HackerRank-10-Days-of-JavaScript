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

// function getDayName(dateString) {
//     let dayName;
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
//     return dayName;
// }

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const date = new Date(dateString);
// const q = date.getDate();
// const m = date.getMonth() + 1;
// const year = date.getFullYear();
// const K = year % 100;
// const J = Math.floor(year / 100);

// function getDayName(dateString) {
//     const whichDay = (q + Math.floor((13*(m+1))/5) + K + Math.floor(K/4) + Math.floor(J/4) - 2*J) % 7;
    
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     const dayName = getDayName(dateString);
//     console.log(dayName);
// }
  


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}
