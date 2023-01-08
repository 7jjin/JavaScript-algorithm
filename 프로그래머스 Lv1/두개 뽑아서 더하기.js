function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    console.log(numbers)
   
    let array=[]
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            array.push(numbers[i]+numbers[j]);
        }
    }
     var answer = [...new Set(array)]
     return answer.sort((a,b)=>a-b);
}