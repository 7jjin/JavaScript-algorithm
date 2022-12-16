function solution(numbers) {
    var hap = 0;
    for(let i=0;i<numbers.length;i++){  
        hap +=numbers[i];
    }
    return hap/numbers.length
}