function solution(n){
    var pizzaCount=1;   // 기본 피자1판
    while(true){    
        if(pizzaCount * 6 % n === 0){      
            return pizzaCount;      
        }
        pizzaCount = pizzaCount +1;
    }
}