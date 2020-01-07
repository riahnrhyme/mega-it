// DOM 제어
// 이벤트

/*
    자료형
    변수 - 지역, 전역, 매개
    조건문 - 불리언
    반복문
    객체
    배열
    함수
*/

/*
    DOM 제어 -> HTML(css)를 조작한다.
    추가, 생성, 삭제, 보기, 수정

    이벤트 -> 유저의 행동
    클릭, 키보드, 마우스, 스크롤, 터치, 슬라이드

    태그의 관계 (선택자)
    부모(parent), 자식(child), 형제(siblings), 나(this) -> 상대적
    태그, 클래스, 아이디, 속성 -> 절대적

    선택자->이벤트->기능
*/
// document 는 객체이다.
// 맨 처음 선택되는 태그를 선택한다.
var doc = document;
var tag = doc.getElementById('box1');

// tag.addEventListener('click',function(){
//     tag.classList.add('pp');
// });

// 태그선택자
// 복수선택자(배열로 선택이 된다.)
// 작성 순서대로 인덱스가 형성된다.
var ptag = doc.getElementsByTagName('p');

var color = ['red','green','blue'];

for(var i = 0; i < 3; i++ ) {
    // ptag[i].addEventListener('click',function(){
        // ptag[i].classList.add(color[i]);
        // this.classList.add('blue');
    // });
}

// 클래스 선택자
var pclass = doc.getElementsByClassName('box');
// console.log(pclass[0]);

var box1 = doc.querySelector('.box .open'); //단일선택
var box2 = doc.querySelectorAll('.box'); //복수선택
// console.log(box1);

// 복합구조
// 첫번째 li 의 a태그를 클릭하면 빨간색으로 바뀐다.(폰트)
// 두번째 li 의 a태그를 클릭하면 파란색으로 바뀐다.(폰트)

// addEventListener 는 태그가 존재하지 않으면 에러가 난다.
var menu = doc.querySelectorAll('.menu li');
var atag1 = menu[0].getElementsByTagName('a')[0];
var atag2 = menu[1].getElementsByTagName('a')[0];

var menu1 = doc
    .getElementsByTagName('div')[0]
    .getElementsByTagName('li')[0]
    .getElementsByTagName('a')[0];

// menu1.addEventListener('click',function(){
//     menu1.classList.add('aa');
// });

// 상대적 위치 
// 부모, 자식, 형제, 본인

