$(document).ready(function(){
    
    var slide = $('.slider').bxSlider({
        // mode: 'fade'
        speed: 2000,
        controls: false,
        pager: false,
        onSliderLoad : function(){
            $('.first .box').css('color','white');
        },
        onSlideBefore : function(){
            $('.box').css('color','transparent');
        },
        onSlideAfter : function($slideElement,oldIndex,newIndex){

            $slideElement.find('.box').css('color','white');
            // $('.item').eq(newIndex).find('.box').css('color','white');
        }
    });

    $('.button button').on('click',function(){

        var idx = $(this).index();
        slide.goToSlide(idx);
    });

    $('.prev').on('click',function(){
        slide.goToPrevSlide();
    });

    $('.next').on('click',function(){
        slide.goToNextSlide();
    });
});

// callback
// 슬라이드 동작이 끝나거나 혹은 시작하거나 등 행위에 대한 시점을 알려주는 정보를 준다.

// method
// 슬라이드 조작한다.

