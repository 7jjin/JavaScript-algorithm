function solution(s) {
    let array=[];
    let answer=[];
    for(let i=0;i<s.length;i++){
        if(!array.includes(s[i])){
            array.push(s[i]);
            answer.push(-1);
        }else{
            answer.push((i+1)-(array.lastIndexOf(s[i])+1));
            array.push(s[i]);
        }
    }return answer;
}

// 1. 숫자를 넣을 answer 배열과 기존 배열과 비교할 array 배열 하나를 만든다.
// 2. 기존배열 앞에서부터 하나씩 array 배열에 push 하면서 동일한 문자가 없으면 answer배열에 -1 push
// 3. 동일한 문자 생기면 array배열에서 해당 문자의 마지막 인덱스 번호를 찾은 후 현재 for문의 i와 빼준다.