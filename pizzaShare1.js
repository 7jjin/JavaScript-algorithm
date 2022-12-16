function solution(n) {
    if(n%7==0){
        return n/7;     // 나머지 피자가 없고 딱 균등하게 피자를 나눠먹는 경우
    }
    else if(n%7>0 && n%7<7){        // 피자의 나머지가 1~6일 경우 
        return Math.floor(n/7+1);   // 피자를 한판 추가한다.
    }
}