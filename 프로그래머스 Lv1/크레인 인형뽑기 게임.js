function solution(board, moves) {
    let array=[];
    let answer=0;
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[j][moves[i]-1]!==0){
                array.push(board[j][moves[i]-1]);
                board[j][moves[i]-1]=0;
                break;
            }   //해당 줄의 요소들이 0이 아닐때까지 검사 0이 아니면 새 배열에 추가하고 break한다.
        }
        if(array.length!==0&&array[array.length-1]===array[array.length-2]){
            answer+=2;
            array.splice(array.length-2,2);
        }   // 배열의 길이가 0이 아니면서 마지막 2개의 요소가 같으면 answer+2 하고 그 요소들을 삭제
    }
    return answer;
}