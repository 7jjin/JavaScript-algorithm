function solution(n, m) {
    const array_a = [];
    const array_b = [];
    for(let i=1;i<=n;i++){      //각각의 약수 구하기
        if(n%i===0){
            array_a.push(i)
        }
    }
    for(let i=1;i<=m;i++){
        if(m%i===0){
            array_b.push(i)
        }
    }
    const max = array_a.filter((item,index)=>{  // 약수가 같은것만 추출
        return array_b.includes(item)
    });
        var a=max[max.length-1]
    return ([max[max.length-1],(n*m)/a])        // 최소 공배수를 공식이 있다니..
}