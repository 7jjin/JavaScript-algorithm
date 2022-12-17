function solution(money) {
    var answer = [];
    var coffee = Math.floor(money/5500);    // 커피잔수의 소수점 제거
    var extra = money%5500;     // 남은돈
    answer.push(coffee,extra);  // 빈 배열에 추가
    return answer;
}