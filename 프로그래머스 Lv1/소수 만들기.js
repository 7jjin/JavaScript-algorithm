function solution(nums) {
    let array=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                array.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    let count=0;
    for(let i=0;i<array.length;i++){
        let real=[];
        for(let j=1;j<=array[i];j++){
            if(array[i]%j===0){
                real.push(j) 
            }
        }if(real.length===2){
            count++;
        }   
    }return count;
}
// 모든 경우의 수의 합을 구한 후, 새 배열에 넣어줌
// 그 모든 요소들을 판별하여 소수면 count++를 해주는 방법