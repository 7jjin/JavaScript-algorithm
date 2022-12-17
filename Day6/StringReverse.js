function solution(my_string) {
    var a=my_string.split('');  //입력받은 문자열을 하나씩 쪼개기
    a.reverse();    //반대로 뒤집기
    return a.join('');  //하나로 뭉치기
}