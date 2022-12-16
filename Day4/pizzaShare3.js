function solution(slice, n) {
    return n%slice==0?n/slice:parseInt(n/slice)+1;  // 사람수/조각수 했을때 나머지가 0이면 사람수/조각수 이고 
                                                    // 아니면 몫+1을 해준다
}