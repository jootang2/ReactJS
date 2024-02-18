//1부터 10까지 더하는 방법
// 보통 제일 먼저 떠오르는 방법
if(1){
    let accmulator = 0;
    for(let i = 1; i <= 10 ; i ++) accmulator += i;
    console.log(accmulator);
}


/**
 * 재귀로 짜는 이유
 * 문제 전체를 해결하려고 하지 않는다.
 * 반복되는 패턴을 찾고 한가지 패턴에 대해서만 짜기 위해서.
 * => 귀납적 방법
*/
/**
 * 현재 코드의 문제점
 * a() -> b() -> c() -> d() -> ........  : d가 처리되어야 c가 처리되고, c가 처리되어야 b가 처리되고....  
 * 이 과정이 길다고 생각하면 컴파일러 혹은 스크립트엔진이 보기에는 비정상적인 작업으로 보기 때문에 죽는다. (stackOverFlow)
 * 해결 방법
 * return point를 인수인계 해준다.
 * tail recursive optimization을 지원해주는 언어는 stack을 쌓지 않고 호출이 가능
 * 
 * 현재 코드에서 완전히 return point를 넘길 수 없는 이유
 * sum(v-1) 이후에도 할 일이 남아있어서!
 * 해결 방법 
 * 인자를 통해서 해결
 * 만약 함수가 다녀와서 할 일이 있다면 함수의 인자로 바꿔주면 됨
 */
if(1){
    const sum = v => v > 1 ? v + sum(v - 1) : 1
    console.log(sum(10));
    // console.log(sum(100000));
}

/**
 * 문제점
 * 현재함수는 acc에 기본 값이 없다면 undefined 발생
 * 합계를 위한 값을 초기화 시켜줘야 한다는 말, 하지만 사용자에게 노출하면 안됨
*/
if(1){
    const sum = (v, acc = 0) => v > 1 ? sum(v - 1 , acc + v) : acc + 1;
}


/**
 * 꼬리물기 최적화가 된 코드
 * 이렇게 최적화된 코드는 기계적으로 for문으로 변환 가능
 */
if(1){
    const _sum = (v, acc) => v > 1 ? _sum(v - 1 , acc + v) : acc + 1;
    const sum = v => _sum(v, 0);

    console.log(sum(10));
}

if(1) {
    let acc = 0; // 저장소 - 스토리지
    const v= 10; // 상수 - 특정 컨텍스트 : 해결하려는 문제 하에서 미리 주어진 값

    for(let i = v; i > 1 ;i --) acc += i;
    // i : 제어 변수 : 카운터
    acc += 1;
    console.log("acc", acc);
}
//변수에는 각각의 역할이 있다.

/**
 * 패턴 1 : v와 acc (인자) 정확하게 제어문에서 변수로 변환
 * 초기값 10은 주어진 조건으로 변환
 * for문의 조건 = v>1과 일치
 * i -- 는 v - 1과 일치
 * for 본문에서의 코드 : acc + v 와 일치 
 * acc + 1 => acc += 1과 일치
 * 
 */


/**
 * 1. 재귀 함수를 짠다.
 * 2. 꼬리물기 최적화 되어있는 재귀 함수로 바꾼다.
 * 3. for문으로 바꾼다.
 * 이러면 굉장히 어려운 for문도 짤 수 있다.
 * 
 */

// 최종 코드
if(1){
    const sum = v => {
        let acc = 0 ; 1
        for (let i = v; i > 1 ; i --) acc += i;
        acc += 1;
        return acc;
    }
    console.log(sum(10))
}


//for문 : iteration 상황에서만 쓴다. (계약된 iteration).
//while문 : recursive 상황에서만 쓴다. (아직 공부 안함).

// 코드를 작성할 때 왜 이런 코드를 작성했는지에 대한 미묘한 뉘앙스를 파악해야 한다.

// 과제 :
// 1차원 배열의 합
// 재귀, 꼬리 재귀 , 번역한 for 문


