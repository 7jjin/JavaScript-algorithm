function solution(food) {
    let answer=[];
    let array = food.map((item,index)=> item=index);
    for(let i=1;i<food.length;i++){ 
        for(let j=0;j<Math.floor(food[i]/2);j++){
            answer.push(`${array[i]}`)
        }
    }
    answer.push("0",answer.slice().reverse());
    return answer.flat().join('');
}
// 1. 순서를 정한다.
// 2. 음식이 몇개가 필요한지 구한다.
// 3. 배치를 해준 후 아직 반만 구했으니깐 push로 0과 구한 배열을 거꾸로 해서 더해준다.
// 3. flat함수와 join함수를 써서 완성시켜준다.