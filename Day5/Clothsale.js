function solution(price) {
    if(price<100000){       //10만원보다 작을때
        return price;
    }else if(price>=100000&&price<300000){  //10이상 30보다 작을때
        return Math.floor(price-price*0.05);
    }else if(price<500000){                 //30이상 50미만일 때
        return Math.floor(price-price*0.1);
    }else if(price<=1000000){               //50이상 100이하일때
        return Math.floor(price-price*0.2);
    }
}