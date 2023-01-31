function solution(nums) {
    let array = Array.of(...new Set([...nums]))
    if(array.length>=nums.length/2){
        return nums.length/2;
    }else{
        return array.length;
    }
}
// 1. 중복된 배열을 제거
// 2. 제거한 배열의 길이가 뽑으려는 수보다 크거나 같으면 최대 고를 수 있는 포켓몬 수는 뽑으려는 수
// 3. 그 반대면 중복을 제거한 배열의 길만큼 리턴
// 뿌듯