function solution(array) {
    array.sort(function(a,b) {return a-b}); //배열을 내림차순으로 배열한다
    return array[(array.length+1)/2-1]; //배열의 길이 +1 한 값의 /2 를 하고 -1을 해준다.
}