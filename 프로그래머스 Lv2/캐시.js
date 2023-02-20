// function solution(cacheSize, cities) {
//     let array=[];
//     let count=0;
//     console.log(array.indexOf(cities.shift()));
//     const len = cities.length;
//     for(let i=0;i<len;i++){
//         if(array.indexOf(cities.shift())>=0){          // 정답 배열안에 있으면 
//            if(array.indexOf(cities.shift())>cacheSize-1){     // 캐시크기보다 크면
//             array.push(cities.shift());
//             count+=5;
//             }else{                                      // 캐시크기보다 작으면
//             array.splice(array.indexOf(cities.shift()),1);
//             array.push(cities.shift());
//             count+=1;
//             }
//         }else{
//             if(array.length>cacheSize){
//                 array.shift();
//                 array.push(cities.shift());
//                 count+=5; 
//             }else{
//                array.push(cities.shift());
//                 count+=5; 
//             }
//         }
//         console.log(array)
//     }
        
//     return count;
    
// }
function solution(cacheSize, cities) {
    const city = cities.map(a => a.toLowerCase()); 
    // 배열 내 요소 소문자로
    
    let array = [];
    let time = 0;
    
    for(let i = 0; i < city.length; i++){
        if(!array.includes(city[i])){ // 큐에 도시가 존재하지 않으면
            time+=5;
            array.push(city[i]);
            if(array.length > cacheSize){ // 캐시사이즈를 넘으면 앞 요소 삭제
                array.shift();
            }
        }
        else{ // 도시가 큐에 있으면
            time++;
            let idx = array.indexOf(city[i]); 
            array.splice(idx, 1);
            array.push(city[i]); // 인덱스 찾아서 제거 후 맨 뒤에 삽입
        }
    }
    return time;
}