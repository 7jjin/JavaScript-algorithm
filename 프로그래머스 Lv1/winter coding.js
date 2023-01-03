function solution(d, budget) {
    const array = d.sort((a,b)=>a-b);  //내림차순으로 정렬한후
    let result=0;
    let count =0;
    while(result<=budget){              // 누적값이 budget보다 작거나 같을때까지 실행
        result += array[count];         // 정렬한 배열을 처음부터 더한다.
        count++;
    }
    return count-1;
}