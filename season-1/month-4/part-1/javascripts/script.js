// javascript VS jquery
// 제이쿼리는 자바스크립트의 라이브러리
// 간편한명령어, 강력한 크로스브라우징

var doc = document;

// 선택자
// - 자바스크립트
var vanila = doc.querySelector('.vanila');
// - 제이쿼리
var $jq = $('.jquery');

// 이벤트
// - 자바스크립트
vanila.addEventListener('click',function(){

    var box1 = doc.querySelector('.box1');
    var number = 200;
    box1.style.backgroundColor = 'orange';
    box1.style.width = number + 'px';
});
// - 제이쿼리
// $jq.click(function(){}); // 권장하지 않는 방식
/*
$jq.on('click',function(){

    if (true ) {
        console.log('a')
    }

    var $box2 = $('.box2');
    var $number = 200;
    // $box2.css('background-color','orange').css('width',$number);
    $box2.css({
        backgroundColor: 'orange',
        width: $number,
        height: 200
    });
}); // 권장하는 방법
*/
// on 메소드(기능)
/*
$jq.on('click mouseover mouseout',function(){
    // 선택자.classList.toggle();
    // 선택자.classList.add();
    // 선택자.classList.remove();
    $('.box2').toggleClass('green');
});
*/
/*
$jq.on({
    click : function(){
        $('.box2').css('width',200);
    },
    mouseover : function(){
        $('.box2').addClass('green');
    },
    mouseout : function(){
        $('.box2').removeClass('green');
    },
});
*/

// mouseover mouseout
// mouseenter mouseleave

var num1 = 0;
var num2 = 0;

$('.box1').on('mouseover',function(){ // 자식에게 영향을 주는 이벤트
    num1++;
    console.log(num1);
});
/*
$('.box2').on('mouseenter',function(){ // 태그영역만을 체크하는 이벤트
    num2++;
    console.log(num2);
});

$('.box2').on('mouseleave',function(){
    num2--;
    console.log(num2);
});
*/
// hover -> mouseenter mouseleave
$('.box2').hover(
    function(){
        num2++;
        console.log(num2);
    },function(){
        num2--;
        console.log(num2);
});

// 현재 스타트업에서 많이 사용하는 스타일 가이드는 ESLINT

// scroll
// 플러그인
// 구글 , 페이스북 , 카카오 API
// 객체지향 프로그래밍(oop)

// node, mysql, react, restful api, http 통신