function solution(my_string) {
    const nums = my_string.match(/[0-9]+/g);
    return nums?nums.map(num =>Number(num)).reduce((a,c)=>a+c):0;
}
// 문자가 아닌 숫자를 모두 선택하는 정규식이 있다는 것을 처음알았다.
// 이 정규식의 해석은 이렇다. 정규식 / 사이에 모든 숫자를 매칭하는 [0-9]에
// 합을 뜻하는 +기호를 붙여 모든 숫자만을 매칭해서 더해주고 
// 발생할 모든 패턴에 대한 전체 검식을 뜻하는 플래그인 g를 붙여 만들었다.