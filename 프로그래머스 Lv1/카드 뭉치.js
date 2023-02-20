function solution(cards1, cards2, goal) {
    let answer1 = goal.filter(item => cards1.includes(item));   // goal에서 card1의 요소를 순서대로 추출한다.
    let answer2 = goal.filter(item => cards2.includes(item));
    cards1.every((item,index)=>{        // 추출한것과 순서가 같으면 goal에서 제거
        if(item===answer1[index]) goal.splice(goal.indexOf(item),1);
        return goal;
    });
    cards2.every((item,index)=>{
        if(item===answer2[index]) goal.splice(goal.indexOf(item),1); 
        return goal;
    });
    return goal.length?"No":"Yes";  // 제거를 다 한후 요소가 있으면 "No"
    
}