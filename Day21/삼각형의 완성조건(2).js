function solution(sides) {
    sides.sort((a,b)=>b-a);
    var a = (sides[0]+sides[1])-sides[0]
    var array=[];
    for(let i=sides[0]+1;i<sides[0]+sides[1];i++){
        array.push(i);
    }
    return array.length+a;
}