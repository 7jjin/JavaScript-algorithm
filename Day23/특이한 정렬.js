function solution(numlist, n) {
    return numlist.sort((a,b) => {              // 정렬을 위한 sort()함수 사용
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]     // 
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b-a
        // 다르다면 거리별 오름차순 정렬
        return aGab-bGab
    })
}

// 이해 안감