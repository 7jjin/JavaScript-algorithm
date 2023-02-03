function solution(lottos, win_nums) {
    let count=6;
    let zero = lottos.filter((item)=>item===0).length;
    let array=[];
    for(let i=0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])){
            count--;
        }
    }
    if(zero>0) {
        if(count+1>6){
            array.push(count+1-zero,count);
        }else{
           array.push(count+1-zero,count+1); 
        }
    }
    else if(zero===0){
        if(count+1>6){
            array.push(count,count)
        }else{
           array.push(count+1,count+1)  
        }
    } 
    return array;
}
// 1. 0이 배열안에 있을때와 없을때로 나눈다.
// 2 for문을 통해 내 로또안에 정답이 있는경우 count--;
// 3. 모든 경우의 수를 생각해서 if문 설정