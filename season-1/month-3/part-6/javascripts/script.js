// 이벤트
// 유저의 행위(행동)
// 클릭, 마우스, 휠(스크롤), 키보드, 핑거, 펜

// 대상선택 -> 이벤트 -> 기능

// on계열
var doc = document;
var box1 = doc.getElementById('box1');

/*box1.onclick = function(){
    alert('권장하지 않는 방법');
}*/

// 토글은 프로그래밍 개념
// 오직 2개의 값을 가지고 있는 상태 
// 하나를 선택하면 다른하나는 선택이 안된다.
// 스위치 개념
var btn1 = doc.getElementById('btn1');

// box1.addEventListener('click',event1);
// click????? -> 한번의 동작이냐???? -> 아니다;
// mousedown + mouseup
// box1.addEventListener('mousedown',event1);
box1.addEventListener('click',event2);
btn1.addEventListener('click',event2);

function event1(){ // 콜백함수 -> 후에 실행
    // this.classList.add('green'); // 반대는 remove();
    box1.classList.toggle('green');
    // this.previousElementSibling.classList.toggle('green');

    // console.log(this.classList);
}

function event2(){
    console.log(box1.className); // box - box green

    if ( box1.className == 'box' ) {
        box1.classList.add('green');
        return;
    }

    box1.classList.remove('green');

    /*if ( box1.className == 'box' ) {
        box1.classList.add('green');
    } else {
        box1.classList.remove('green');
    }*/
}

// 마우스 올리고 내리고
// hover -> css
var box2 = doc.getElementById('box2');
var inner = doc.querySelector('.inner');

box2.addEventListener('mouseover',event3);
// box2.addEventListener('mouseout',event3);
inner.addEventListener('mouseover',event4);

// 이벤트 버블링
// 이벤트가 자식도 적용이 되는 현상

function event3(){
    console.log('이벤트실행');
    this.classList.toggle('green');
}

function event4(e){
    e.stopPropagation(); // 이벤트 전파를 막는다.
}

var box3 = doc.getElementById('box3');

box3.addEventListener('click',event5);

function event5(event){
    // console.log('움직이는 중');
    // console.log(event);

    // box3.style.backgroundColor = 'rgb(0,0,' + event.offsetX + ')';

    // if ( event.offsetX > 100 ) {
    //     box3.classList.add('green');
    // } else {
    //     box3.classList.remove('green');
    // }
}