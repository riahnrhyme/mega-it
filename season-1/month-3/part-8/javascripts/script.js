/*
    1. css로 구현
    2. javascript 를 사용해서 슬라이드 구현
    3. 제이쿼리를 이용한 슬라이드 구현
    4. 플러그인을 이용한 슬라이드 구현
*/

/*
    setInterval 시작
    clearInterval 멈추게 한다.
*/

var doc = document;
var next = doc.getElementById('next');
var prev = doc.getElementById('prev');
var item = doc.getElementById('item');
var slider = doc.getElementById('slider');
var pager = doc.getElementById('page').getElementsByTagName('div');

var itemPos = 0; // 실제 움직일 변수
var endPos = 0; // 이동해야하는 거리
var licount = item.getElementsByTagName('li').length; // 실제 슬라이드 될 태그의 개수
var distance = slider.offsetWidth - 10; // 슬라이드 넓이 동시에 움직이는 거리
var last = distance * (licount - 1);
var speed = 20;

next.addEventListener('click',function(){
    // -700 , -1400, -2100, -2800
    // itemPos = itemPos - 700; // 이동해야하는 거리

    endPos = endPos - distance;

    if ( endPos < -last ) { // 마지막 인가?
        endPos = 0;
        var ani = setInterval(function(){
            if ( itemPos >= 0 ) {
                // 셋인터벌을 멈추게 해야 한다.
                clearInterval(ani);
                return;
            }
            itemPos = itemPos + speed;
            item.style.transform = 'translateX(' + itemPos + 'px)';
        },10);
    } else {
        var ani = setInterval(function(){
            if ( itemPos <= endPos ) {
                // 셋인터벌을 멈추게 해야 한다.
                clearInterval(ani);
                pager[1].classList.add('active');
                pager[0].classList.remove('active');
                return;
            }
            itemPos = itemPos - speed;
            item.style.transform = 'translateX(' + itemPos + 'px)';
        },10);
    }
    // if ( itemPos < -2800 ) {
    //     itemPos = 0;
    // }
});