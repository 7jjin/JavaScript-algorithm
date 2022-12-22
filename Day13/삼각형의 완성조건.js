function solution(sides) {
    sides.sort();   // 내림차순 설정
    if(sides[2]<sides[0]+sides[1]){
        return 1;
    }else{
        return 2;
    }
}