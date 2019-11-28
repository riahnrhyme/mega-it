// 배열 (array)
// 순서가 존재 하는 데이터(값)묶음 

// 객체 (object)
// 순서가 존재하지 않는 데이터 묶음
// 키(key)와 벨류(value)로 데이터를 관리한다.
// 선언 {}

var arr = [ 10, 20 ];
// console.log(arr[0]);

var obj = { a:10, b:20, c:'문자', d:[10,20] };
// console.log(obj.a);
// console.log(obj.d[1]);

var obj2 = { a: 10, b: 20, c: 30 };
var name = 'b';
// console.log(obj2[name]);

// for in...
for ( var key in obj2 ){
    // console.log(obj2[key]);
}

for ( var index in arr ) {
    // console.log(arr[index]);
}

// 배열 과 객체
// JSON
// 시작은 객체로 시작한다.

// 클래스 정보

// 전화번호부 만들때 ajax
var classInfo = {
    count : 10,
    cls : {
        cls1 : [ {}, {}, {} ],
        cls2 : [ {}, {} ],
        cls3 : [ {}, {}, {} ],
    }
}

// 퀴즈
var quiz = { a: [ 10, 50 ], b : [ 70 , 100 ] };
var total = quiz.a[1] + quiz.b[0];

// console.log(total); // 120

// 배열과 객체는 참조에 의한 값 (call by reference)

// call by value
var num1 = 100;
var num2 = num1;
num1 = 200;
// console.log(num1);
// console.log(num2);

// var arr2 = [ 10, 20, 30, 40, 50 ];
var arr2 = { a:100, b:200 }
var arr3 = { ...arr2 }; // 깊은복사
arr2.a = 700;   
// console.log(arr2);
// console.log(arr3);

var ob = { a:10, b:20, c:30 };
var ob1 = { k:100, n:200, ...ob }
var ob2 = { ...ob, a:100 }

//console.log(ob);
//console.log(ob2);

var toy = { a: 10, b: 20 }
// 키값을 찾아서 지우기
var toy1 = toy;
delete toy.a;
// console.log(toy1);
// console.log(toy);
