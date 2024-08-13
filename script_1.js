const q5Num=document.getElementById('q5_num');
const q5Result=document.getElementById('q5_result');
const q5Inputs=document.getElementById('q5_inputs');
function createNInput(){
    q5Inputs.innerHTML = '';
    let number = q5Num.value;
    for(let i=1; i<=number; i++)
    {
      q5Inputs.innerHTML += `<input type="number" id="q5_input-${i}" placeholder="enter number ${i}">`;
    }
    q5Inputs.innerHTML += `<button onclick="sort()">sort</button>`;
}
function sort(){
    let number=q5Num.value;
    let arr=[];
    for(let i=1;i<=number;i++)
    {
        arr.push(parseInt(document.getElementById(`q5_input-${i}`).value));

    }
    for (let i = 0; i < number - 1; i++) {
        for (let j = 0; j < number - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
               let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }       
    q5Result.innerText=`sorted array is ${arr}`;    
}
