function solution(cipher, code) {
    const array=[];
    for(let i=1;i<=cipher.length;i++){
        array.push(cipher[(code*i)-1]); //code의 배수번째 배열만 새로운 배열에 넣는다.
    }
    return String(array.join(''));
}