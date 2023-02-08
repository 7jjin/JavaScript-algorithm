function solution(new_id) {
    new_id = new_id.toLowerCase().match(/[a-z0-9-_.]/g).join('');   //해당 문자만 추출
    new_id = new_id.replace(/\.+/g,'.');    // .으로 연속된 문자 .으로 대체
    new_id = new_id.replace(/\.$/g,'');     // .으로 끝나면 맨 뒤.삭제
    new_id = new_id.replace(/^\./g,'');     // .으로 시작되면 맨 앞.삭제
    if(new_id===''){    // 빈칸일 경우
        new_id+="a";
    }else if(new_id.length>=16){    // 문자열 길이가 16자 이상일 경우
        new_id = new_id.slice(0,15);
        if(new_id[new_id.length-1]==="."){
            new_id = new_id.slice(0,14);
        }
    }
    if(new_id.length<=2){   // 문자열 길이가 2자 이하일 경우
        for(let i=0;i<=3-new_id.length;i++){
            new_id+=new_id[new_id.length-1];
        } 
    }
    return new_id;

}
