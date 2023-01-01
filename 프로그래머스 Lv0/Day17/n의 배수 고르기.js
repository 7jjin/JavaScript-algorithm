function solution(n, numlist) {
    var answer = [];    //빈 배열을 만든다.
    for(let x of numlist)   //numlist의 배열을 하나씩 순환한다.
            if(x%n==0){     //만약 해당수가 n으로 나눠떨어지면 n의 배수이다.
                answer.push(x);
        }
    return answer;
    }
