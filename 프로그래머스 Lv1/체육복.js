function solution(n, lost, reserve) {
    let array = new Array(n).fill(1);
    for(let i=0;i<reserve.length;i++){      // 여분 확인
        array[reserve[i]-1]=2;
    }
    for(let i=0;i<lost.length;i++){         // 분실 확인
        if(array[lost[i]-1]===2){           // 여분있는 사람이 분실했을 시
            array[lost[i]-1]=1;
        }else{
           array[lost[i]-1]=0; 
        }
    }
    for(let i=0;i<array.length;i++){               
        if(array[i]===2&&array[i+1]===0){
            array[i] = 1;
            array[i+1] = 1;
        }else if(array[i]===0&&array[i+1]===2){
            array[i]=1;
            array[i+1]=1;
        }
    }
    return array.filter(item=>item>0).length;
}
