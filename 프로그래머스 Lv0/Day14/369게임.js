function solution(order) {
    const a = String(order).split('');  //배열로 만든다.
    var count =0;
    for(let i=0;i<a.length;i++){
        if(a[i]==='3'||a[i]==='6'||a[i]==='9'){     //배열안에 3,6,9가 있으면 count+1해주기
            count++;
        }
    }
    return count;
}