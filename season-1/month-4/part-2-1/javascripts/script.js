// scroll 이벤트

$(window).on('scroll',function(){

    // 스크롤 이벤트에서 가장 중요한건 현재 스크롤의 위치이다.
    var nowScroll = $(this).scrollTop();

    if ( nowScroll >= 160 ) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
        $('.item').removeClass('active');

    }

    // 메뉴에 active 시키기
    // if ( nowScroll >= 160 && nowScroll < 1220 ) {
    //     $('.item').removeClass('active');
    //     $('.item').eq(0).addClass('active');
    // }

    // if ( nowScroll >= 1220 && nowScroll < 2220 ) {
    //     $('.item').removeClass('active');
    //     $('.item').eq(1).addClass('active');
    // }

    $('.section').each(function(index){

        var posStart = $(this).position().top;
        var posEnd = posStart + $(this).height();
        
        if ( nowScroll >= posStart && nowScroll < posEnd ) {
            $('.item').removeClass('active');
            $('.item').eq(index).addClass('active');
        }
    });

    /*

    if ( 현재스크롤 >= 태그위 맨위위치(position()) && 현재스크롤 < 태그의 맨 아래 위치(height()) ) {
        $('.item').removeClass('active');
        $('.item').eq(태그의 인덱스).addClass('active');
    }

    */
});


//each
// $('.item').each(function(index){
//     // $('.item').eq(index).addClass('active');
//     $(this).addClass('active');
// });

// index를 가져오는 기능을 보자

$('.item').on('click',function(){

    var idx = $(this).index(); // 2
    var move = $('.section').eq(idx);

    var moveTop = move.position().top;

    $('html, body').animate({ scrollTop : moveTop });
});

var check = $(window).scrollTop();
console.log(check);

if ( check >= 160 ) {
    $('.menu').addClass('fixed');
}