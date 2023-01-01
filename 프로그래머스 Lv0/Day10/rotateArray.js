function solution(numbers, direction) {
    if(direction ==="right"){       // 오른쪽일때 
        numbers.unshift(Number(numbers.slice(-1)));    //배열의 마지막요소를 숫자형으로 바꾼후 배열의 첫번째에 넣기
        numbers.pop();  // 배열의 마지막 부분 제거
        return numbers;
        }else{
        a= numbers.slice(1);    // 배열의 첫번째 요소를 제거한 새로운 a 배열 생성
        a.push(numbers[0]);     // a배열에 원래 배열의 첫번째 요소 push
        return a;
    }
}