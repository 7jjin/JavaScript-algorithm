function solution(quiz) {
    var array=[];
    for(let i=0;i<quiz.length;i++){
        let newarray = quiz[i].split(' ');
        for(let j=0;j<newarray.length;j++){
            let ans =0;
            if(newarray[j]==='-'){          // -가 나오면 그 전의 인덱스와 그 후의 인덱스를 빼서 ans변수에 넣는다.
                ans = Number(newarray[j-1])-Number(newarray[j+1]);
                if(Number(newarray[newarray.length-1])===ans){      // 만약 그 수가 마지막수와 같다면 빈 배열에 "O"를 넣고
                    array.push("O");                                // 아니면 "X"를 넣는다.
                }else array.push("X");
            }else if(newarray[j]==='+'){
                ans = Number(newarray[j-1])+Number(newarray[j+1]);
                if(Number(newarray[newarray.length-1])===ans){
                    array.push("O");
                }else array.push("X");
            }
        }
        
    }return array
}