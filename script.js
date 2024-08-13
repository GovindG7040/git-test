// const q1Num =document.getElementById('q1-num');
// const q1Result=document.getElementById('q1-result');
// function oddoreven(){
//     let number = q1Num.value;
//     // console.log(number);
//     q1Result.innerText=  `${number} is ${number%2===0?"even":"odd"}`;
// }
// const q2Num =document.getElementById('q2-num');
// const q2Result=document.getElementById('q2-result');
// function positivenegativeorzero(){
//     let number = q2Num.value;
//     let output;
//     // console.log(number);
//     if (number>0)
//     {
//         output="positive number";
//     }
//     else if(number<0)
//     {
//        output="negative number";
//     }
//     else
//     {
//         output="zero";
//     }
//     q2Result.innerText=  `${number} is ${output}`;

// }
const q3Num=document.getElementById('q3-num');
const q3Result=document.getElementById('q3-result');
function isPrime(){
    let number = q3Num.value;
    let output;
    let c=0;
    for(let i=1;i<number+1;i++)
    { 
        if(number%i===0)
        {
            c=c+1;
        }
    }
    if(c==2)
    {
        output="prime number";
    }
    else
    {
        output="not prime";
    }
    q3Result.innerText=`${number} is ${output}`;
}

const q4Num=document.getElementById('q4-num');
const q4Result=document.getElementById('q4-result');
const q4Inputs= document.getElementById('q4-inputs');
function createNInput(){
    q4Inputs.innerHTML = '';
    let number = q4Num.value;
    for(let i=1; i<=number; i++)
    {
      q4Inputs.innerHTML += `<input type="number" id="q4-input-${i}" placeholder="enter number ${i}">`;
    }
    q4Inputs.innerHTML += `<button onclick="findMax()">Find Max</button>`;
}
function findMax() {
    let number = q4Num.value;
    let arr = [];
    for(let i=1; i<= number;i++){
        arr.push(parseInt(document.getElementById(`q4-input-${i}`).value));
    }
    let large=arr[0];
    for(let i=0; i<number-1;i++)
    {
        if(arr[i]>large)
        {
            large=arr[i];
        }
    }
   q4Result.innerText=`largest is${large}`;
}