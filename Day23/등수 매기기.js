function solution(score) {
    var newarray=[];
    const array = score.flat();
    const lng = array.length/2;
    for(let i=0;i<lng;i++){
        newarray.push(array.splice(0,2).reduce((a,b)=>a+b)/2);  //요소2개씩 묶어서 평균을 구한후 새로운 배열에 넣는다.
    }
    let sorted = newarray.slice().sort((a,b)=>b-a);     // 변수에 내림차순으로 정령한 배열을 넣는다.
    return newarray.map(x=>sorted.indexOf(x)+1);    // 각 평균이 내림차순으로 정렬된 배열에 어느 인덱스에 위치하는지 파악해서 +1을 해준다.
}