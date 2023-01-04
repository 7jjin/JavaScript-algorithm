function solution(strings, n) {
    return strings.sort((a, b) => {
      // 인덱스 n번째 글자를 기준으로 오름차순 정렬
      if (a[n] > b[n]) return 1;
      else if (a[n] < b[n]) return -1;
      // 인덱스 n번째 글자가 같으면 사전순 정렬
      else return a > b ? 1 : -1;
    });
  }
  // sort()가 문자 전체를 비교하는것이 아니라 요소 하나하나도 비교해서 문자를 배열할 수 있다는 것을 알았다.