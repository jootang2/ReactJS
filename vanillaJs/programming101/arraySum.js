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
        for(let i = array.length - 1; i > 0; i --) acc += array[i];
        acc += (array[0]?? err("invalid element index0"))
        return acc
    }
    const array = [1,2,3,4,5];
    console.log(sum(array));
}