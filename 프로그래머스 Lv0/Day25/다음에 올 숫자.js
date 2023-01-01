function solution(common) {
  const isAP = arr => arr[2] - arr[1] === arr[1] - arr[0];  // 등비인지 등차인지 확인 (차가 같은면 등차 다르면 등비)
  return isAP(common)                                       // 등차일때:true 등비일때:false
    ? common[common.length - 1] + common[1] - common[0]     // 등차일때 마지막 수에 차를 더해서 다음 숫자 구하기
    : common[common.length - 1] * (common[1] / common[0]);  // 등비일때 마지막 수에 등비를 곱해서 다음 숫자 구하기
}