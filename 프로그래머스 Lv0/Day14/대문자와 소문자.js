function solution(str){
    const answer=[];
	for(let x of str){      // str의 문자열을 하나씩 추출해서 x에 적용
		if(x === x.toUpperCase()){      //x가 대문자면 소문자로 변경해서 배열에 추가
		answer.push(x.toLowerCase());
		}
        else answer.push(x.toUpperCase());      //소문자면 대문자로 변경
		}   
		return answer.join('');
}
