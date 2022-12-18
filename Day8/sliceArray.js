function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);      // slice함수는 slice(start,end)에서 end가 미포함이다.
}