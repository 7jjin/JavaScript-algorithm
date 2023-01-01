function solution(a, b) {
    var array=[];
    for(let i=0;i<=b;i++){
        if(b%i===0&&a%i===0){
            array.push(i)
        }
    }     
    b = b/array[array.length-1];        // 분모를 최대공약수로 나누기
    while (b%2 === 0) b = b/2           // 2로 먼저 나누고 나누어 떨어지지 않으면 5로 나눠서 나누어 떨어질때 까지 나눈다.
    while (b%5 === 0) b = b/5

    // 4. b가 1이라면 유한소수이므로(분모의 소인수가 2와 5만 존재) 1을 리턴,
    // b가 그 외의 값이라면 무한소수이므로(분모에 2와 5를 제외한 소수가 포함) 2를 리턴한다.
    return b === 1? 1 : 2;
}
