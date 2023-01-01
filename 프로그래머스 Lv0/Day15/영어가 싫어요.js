function solution(numbers) {
    const array  = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    array.forEach((str,index)=>{
        numbers = numbers.replaceAll(str,index);
    })
    return Number(numbers);
}