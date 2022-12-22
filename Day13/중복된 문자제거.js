function solution(my_string) {
    const array = new Set(my_string);   // 중복된 문자를 제거해서 객체에 넣는다.
    const newarray = [...array];    //객체에 넣은것을 배열로 만든다.
    return newarray.join('');
}