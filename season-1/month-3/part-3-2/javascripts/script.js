// 객체 와 배열
// JSON 데이터 -> HTTP통신으로 대화할때 쓰는 데이터 수단

// 객체 -> object -> 정보의 집합
// 배열 -> array -> 정보의 순서

// window.alert('나는 팝업');
// var aaaa = 100;
// window.aaaa = 100;

// console.log(window);

// 배열
// 순서가 존재하는 데이터 묶음
// 인덱스 index -> 0 부터 시작한다.
// []

// var arr = []; // 리터널 -> 보이는대로  // 권장
// var arr = new Array(); 

var arr = [ 10, 20, 30, 40, 50 ];
// var arr1 = [ 10, '문자', null, true, undefined, [], {}, function(){}];

var num1 = 10;

// console.log(num1);
// console.log(arr.length);
// arr[7] = 100;
// console.log(arr.length);
// console.log(arr[6]);

// 순서가 존재한다는건 맨앞과 맨뒤가 존재한다.
var arr3 = [ 10, 20, 30, 40, 50 ];
// push, pop / 뒤, unshift, shift/앞
arr3.push(100); // 맨뒤로 들어 간다.
arr3.push(50);
arr3.pop(); // 맨뒤에 부터 뺀다.
arr3.pop();
arr3.unshift(100); // 맨앞으로 들어간다.
arr3.shift(); // 맨앞에서 부터 뺀다.
arr3.unshift(100);

// 스택 와 큐
// 무조건 검색해서 봐라

// console.log(arr3);

// 이차원
var arr4 = [ [ 10 , [20] ] , [ 30, 40 ] ];
var plue = arr4[0][1][0] + arr4[1][0];

// 반복문 과 배열 조합

var arr5 = [ 90, 89, 95, 98, 76, 81 ];
var total = 0;
// total = total + arr5[0];
// total = total + arr5[1];
// total = total + arr5[2];
// total = total + arr5[3];
// total = total + arr5[4];

for ( var i = 0; i < arr5.length; i++ ) {
    total = total + arr5[i];
}

console.log(total/arr5.length);