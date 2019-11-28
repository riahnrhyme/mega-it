// 반복문

var num = 10;
num = 20; // 재정의
//console.log(num);

num = num + 10;
num = num + 10;
num+=10;
num++; // 1증가 -> 사용후증가
num--; // 1감소 -> 사용후감소
++num; // 1증가 -> 사용시증가
--num; // 1감소 -> 사용시감소

//console.log(++num);
//console.log(num);

// 반복문
// 기능을 여러번 반복한다.
// for(초기값;조건;증감){ 초기값을 시작으로 조건이 참일경우 실행 }

// for( var i = 100; i <= 1000; i = i + 100 ){
//     console.log('반복');
// }

// for ( var i = 10; i > 0; i-- ) {
//     console.log(i);
// }

// console.log(i);

// 중첩 포문
// for( var j = 0; j < 10; j++ ) {

//     for ( var k = 0; k < 5; k++ ) {
//         console.log('박수5번');
//     }

//     console.log('왕복했음');
// }

// 왕복을 하는데 1번 왕복을 할때마다 박수를 첫왕복에선 한번 두번째 왕복에선 두번
// 박수 1 + 왕복 -> 박수 2 + 왕복 -> 박수 3 + 왕복 ..... 박수 10 + 왕복(10회)
/*
    *
    **
    ***
    ****
    *****
*/

// var n1 = 1;
/*
for( var p = 1; p <= 10; p++ ){

    for( var s = 0; s < p; s++ ){
        console.log('박수');
    }
    console.log('왕복');
    // n1++;
}
*/

// var VS let
//let a = 10;
//let a = 10;

// var ==> 함수단위 변수
// let ==> 블럭단위 변수 {} ==> scope

// for( var h = 0; h < 10; h++ ){

//     let n2;

//     if ( h % 2 == 0 ) {
//         n2 = 100;
//         console.log(h);
//     }
//     console.log(n2);
// }


// 반복문을 종료 싶을때!!
// break, continue
// break -> 종료
// coutinue -> 다음으로 넘김
// for( let z = 0; z < 10; z++ ) {

//     if ( z % 2 == 1 ) {
//         //break;
//         continue;
//     }
//     console.log(z);
// }

// while문, do while문, for each, for in
var open = 10;

while(open<10){
    console.log(open);
    open++;
}

var close = 10;

do {
    console.log(close);
    close++;
} while ( close < 10 );