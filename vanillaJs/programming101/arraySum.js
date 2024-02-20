//=======================================================================1회차
// if(1){
//     const _sum = (a, acc) => {
//         return a.length === 0 ? acc : _sum(a.slice(1), acc + a[0])
//     }

//     const sum = (a) => _sum(a, 0)

//     const array = [15,2,3,1,6];

//     console.log("sum", sum(array));
// }

// if(1) {
//     const array = [15,2,3,1,6];
//     let acc = 0;
//     for(let i = 0; i <array.length; i ++){
//         acc += array[i]
//     }
//     console.log("acc", acc)
// }

// if(1) {
//     const array = [15,2,3,1,6];
//     const _sum = (a, acc) => {
//         return a.length > 1 ? _sum(a.slice(1), acc + a[0]): acc + a[0]
//     }
//     const sum = (a) => _sum(a,0);
//     console.log("sum", sum(array))
// }

// if(1) {
//     const array = [15,2,3,1,6];
//     let acc = 0;
//     for(let i = array.length-1 ; i > 0; i --) {
//         acc += array[i];
//     }
//     acc += array[0];
//     console.log("acc", acc)
// }
//============================================================================2회차
/**
 * 오류와 실패
 * 프로그램이 오류는 일어날 수 있는데 실패하지 않는경우 : 내부에 있는 함수나 기능이 내결함성을 가지고 있다.
 * 내결함성 : 오류가 났을 때 버티는 장치 -> 런타임 에러가 안생기는 대신에 컨텍스트 에러가 생김
 * 프로그램이 죽지는 않지만 엉뚱한 결과를 출력함
 * 일반적으로 내결함성을 가지면 안된다.
 * 충고 1 . 함수 내부에서 함부로 내결함성을 갖추지 말자.
 * 
 * 코드의 역할
 * 응집도와 결합도
 * 수정할 때 이 코드들이 모여있을까?
 * 
 * 역할 모델
 * 우리가 코드를 분기하거나 함수라 분리하는 이유
 * 유지보수를 할 때 수정하는 이유가 다른애들
 * 역할 : 수정 원인
 * 수정 원인이 다른 애들은 분리
 * 
 * js에서의 인터페이스 : 함수의 호출 형태, 리턴하는 값의 형태가 일치할 때 인터페이스가 일치한다고 봄
 * 
 * 변수의 스코프와 라이프사이클
 * 변수의 속성 2가지 : 스코프와 라이프사이클
 * 변수가 얼마나 오래살아있니? : 라이프사이클
 * 변수를 어디에서 읽을수 있니? : 스코프
 * 스코프는 권한 관련 : 특정 정보를 특정 변수만 알게하고 싶은 것
 * 라이프사이클은 메모리 점유 관련 
 * 
 * 라이프사이클이 길면 메모리 효율성은 나빠짐 그러나 연산을 줄일 수 있음
 * 연산과 메모리는 교환가능
 * 
 * 
 */ 
// 재귀 recursively
// arrray[0] + sum(array, 1)
if(1){
    const sum = (array, index = 0) => {
        return index < array.length - 1 ?  array[index] + sum(array, index + 1) : array[index]
    }
    const array = [1,2,3,4,5];
    console.log(sum(array));
}
// 꼬리 재귀 tail recursively
if(1){
    const err = msg=>{throw msg};
    const _sum = (array, index, acc) => {
        return index > 0 ?  _sum(array, index - 1, acc + array[index]) : (array[index]?? err("invalid element index0")) + acc
    }
    const sum = array => _sum(array, array.length - 1, 0);
    const array = [1,2,3,4,5];
    console.log(sum(array));


    // console.log(sum([]));

    // [] 빈 배열인 경우에는...?

    try{
        console.log(sum([]));
    } catch {
        0
    }

}
// 꼬리 재귀 -> for문
if(1){
    const err = msg=>{throw msg};
    const sum = (array) => {
        let acc = 0;
        for(let i = array.length - 1; i > -1; i = i - 1) acc = array[i] + acc;
        // acc = (array[0]?? err("invalid element index0")) + acc
        return acc
    }
    const array = [1,2,3,4,5];
    console.log(sum(array));
}
// for문 : 내부 함수가 스코프덩어리로 되어있는 인자없는 함수를 루프 돌리는 것
// 재귀 : 공유하고 있는 스코프 변수 없음 , 인자에만 의존함수를 루프 돌리는 것
// for문 어려운 이유 : 공유 변수 상태가 라이프 사이클이 길어진다.
if(1){
    const err = msg=>{throw msg};
    const sum = (array) => {
        let acc = 0;
        let i = array.length - 1

        const f = () => acc = array[i] + acc;

        for(; i > 0; i = i - 1) f(); 
        acc += (array[0]?? err("invalid element index0"))
        return acc
    }
    const array = [1,2,3,4,5];
    console.log(sum, sum(array));
}

// ==========1차 과제============

/**         수업 내용 정리
 * 0. 변수란 코프와 라이프사이클을 갖는다, 메모리와 연산은 상호교환이 가능하며 특히 라이프사이클이 관여함
 * 1. 오류와 실패의 관계 - 온류는 중간요소의 내결합성 때문에 실패로 이어지지 않을 수 있다 : 오류가 최대한 빨리 실패로 이어지게 짜라 => 컨텍스트에러가 더 무서움 =>
 * 프로그램은 신뢰성과 안정성이 있음 - 안정성 (컨텍스트 에러발생이 올라감), 신뢰성을 높이자
 * 2. 코드의 분리 또는 정리 - 이유 : 수정되는 원인에 따라 :: 변화율(변화율이 같은 애들끼리 코드를 모으자) 
 * 변화율의 원인 : 수정되는 이유
 * 3. 자바스크립트에서의 인터페이스 : 함수의 이름, 인자, 반환값의 형식이 일치하는 경우
 * 4. 인터페이스를 일치시키면 컬렉션으로 묶을 수 있다. -> 일종의 일반화 -> 서로 다른 형태인 경우 인터페이스를 일치시켜 일반화를 한다.
 * 5. 데이터와 데이터를 이용한 알고리즘이 이원화 되면 관리가 불가능 -> 데이터를 소유한 쪽에서 데이터를 사용하는 알고리즘을 제공한다. -> 이렇게 해야 사용자가 이상하게 쓰는 것을 방지 가능
 * 6. 꼬리 최적화 함수를 루프로 고칠 때 기계적으로 고친다는 의미
 * 7. 결국 루프는 클로저에만 의존하는 함수를 반복, 재귀함수는 인자에만 의존하는 함수를 반복
 * 8. 반복되는 코드를 제거하기 위해 집착하자.
 */

// 2차 과제 : 1차원 배열의 stingify
/**
 * const a = [1, 3, "abc", true, ()=>3, null]
 * JSON.stringify(a) === arrayStringify(a)
 */

if(1){
    const a = [1, 3, "abc", true, _=>3, null]
    
    console.log(JSON.stringify(a))


}