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

function readLine() 

function getGrade(score) {
    
if (score<=30 && score >25) 
    return("A");

if (score<=25 && score >20) 
    return("B");

if (score<=20 && score >15) 
    return("C");

if (score<=15 && score >10) 
    return("D");

if (score<=10 && score >5) 
    return("E");

if (score<=5 && score >0) 
    return("F");
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}



