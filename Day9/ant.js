function solution(hp) {
    let c = parseInt(hp/5);
    let c_r = hp % 5;
    let s = parseInt(c_r/3);
    let w = c_r % 3;
    let answer = c + s + w
    return answer;
}