function solution(A, B) {
    var array_A = A.split('');
    var array_B = B.split('');      //각각 배열로 바꾼다
    
    for(let i=0;i<A.length;i++){
        if(array_A.join('')===array_B.join('')){        // A와B가 바로 같을 수도 있으니 if문을 앞에 둔다.
            return i;       // 해당 횟수를 리턴한다.
        }
        array_A.unshift(array_A.pop());     // A의 마지막 배열을 빼서 첫번째에 넣는다.
    }return -1;
}