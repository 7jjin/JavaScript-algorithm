function solution(babbling) {
    var answer = 0;
    for (var i = 0 ; i < babbling.length ; i++ ) {
        if(babbling[i].replace("ye"," ").replace("aya"," ").replace("woo"," ").replace("ma"," ").trim() == "")           {
            answer = answer + 1 ;
        }    
    } 
    return answer;
}