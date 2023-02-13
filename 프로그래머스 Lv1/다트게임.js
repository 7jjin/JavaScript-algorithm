function solution(dartResult) {
    let array=dartResult.split('');
    for(let i=0;i<array.length;i++){    // 1,0 이 있으면 10으로 바꿔주고 배열 하나를 삭제한다.
        if(array[i]==='1'&&array[i+1]==='0'){
            array[i]='10';
            array.splice(i+1,1);
        } 
    }
    let answer =[];
    for(let i=0;i<array.length;i++){
        if(array[i]==='S'){
            answer.push(array[i-1]*1);
        }else if(array[i]==="D"){
            answer.push(array[i-1]**2);
        }else if(array[i]==="T"){
            answer.push(array[i-1]**3);
        }else if(array[i]==="*"){
            answer[answer.length-2]*=2;
            answer[answer.length-1]*=2;
        }else if(array[i]==="#"){
            answer[answer.length-1]*=-1;
        }
    }return answer.reduce((a,b)=>a+b);
}