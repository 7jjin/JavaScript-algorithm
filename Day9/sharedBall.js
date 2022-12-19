function solution(balls, share) {
    function factorial(a){
        var count =BigInt(1);
        for(let i=1;i<=a;i++){
            count *=BigInt(i);
        } return count;
    }
    return factorial(balls)/(factorial(balls-share)*factorial(share));
}
////// 간단히 팩토리얼을 통해 경우의 수를 구하는 문제였지만 BigInt라는 새로운 형식을 
///// 써야만 풀이가 가능했던 문제