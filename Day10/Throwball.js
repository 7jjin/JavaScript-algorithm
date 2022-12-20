function solution(numbers, k) {
    let ball = 1;   // 첫번째 사람이 공을 가지고 있음
    for(let i =0;i<k-1;i++){
        ball +=2;   // 다음사람에게 건너뜀
        if(ball>numbers.length-1){  // 공의 수가 배열의 길이보다 커지면 처음 사람에게 전달되도록 배열의 크기만큼 빼줌
            ball-=numbers.length
        }
    }
    return ball;
}