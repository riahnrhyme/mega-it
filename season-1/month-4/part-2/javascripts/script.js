// animate
// css animation(transition) VS jquery animation
/*
    css 의 애니메이션 브라우저 자체의 그래픽을 사용해서 성능이 우수하다.
    현재는 제이쿼리 애니메이션 보다 css 애니메이션을 더 선호합니다.
*/

$('.btn').on('click',function(){

    // $('.box').animate('margin-left',100); // 단일 방식은 애니메이션 안된다.
    // $('.box').animate({
    //     marginLeft: 100,
    //     marginTop: 100
    // });

    // 속도는 기본적으로 400ms
    // slow -> 600ms
    // fast -> 200ms
    // $('.box').animate({ marginLeft : 200 },1000);
    // $('.box1').animate({ marginLeft : 100 });
    // 같은선택자이면 애니메이션은 이전 동작이 끝날때까지 다음동작 하지 않는다.

    // animate, fade, slide
    // fade -> 천천히 나타나거나 사라질때 사용한다.
    // fadeIn 나타난다. display:none -> 나타나는 현상

    // $('.box').fadeToggle(1000);

    // slide -> 태그를 올렸다가 내렸다 할수 있다.
    // slideDown 반대로 내려옴
    // $('.box').slideToggle(1000);

    // toggle은 번갈아가면서 동작을 한다.

    // $('.box').animate({ opacity: 'toggle' });
    // a = a + 1 => a+=1
    // $('.box').animate({
    //     width:'+=200'
    // });

    // 애니메이트는 색상변경이 안된다
    // 만약 애니메이트로 색상을 변경하고 싶으면 추가적으로 라이브러리 필요하다.
    // jquery ui 라는 라이브러리
    // 확장팩이라 할수 있다. 효과와 기능 위주의 라이브러리
    // $('.box').animate({ backgroundColor: '#c13333' });
    // jquery ui를 사용하면 효과에 easing

    // $('.box').animate({ left : 400 },1000,'easeInOutElastic');

    // 콜백함수
    // call back
    // $('.box').animate({ left : 300 },2000,function(){
    //     $('.box1').animate({ left : 300 },2000);
    // });
    
    // $('.box').delay(2000).fadeOut(1000,function(){
    //     $('.box1').fadeOut(1000);
    // });

    // 콜백함수는 들여쓰기를 많이 할수록 보기가 힘들어진다.
    // 콜백지옥

    $('.box').delay(2000).fadeOut(1000,second);

    function second(){
        $('.box1').fadeOut(1000,third);
    }

    function third(){

    }

});