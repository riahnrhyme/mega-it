console.log(data);

// 동적할당에 기능

var example = '데이터';
// 태그 만들기
var tag = $('<div>');
var ptag = $('<p>');

ptag.addClass('color');
tag.append(ptag);
//$('.b').text('<p></p>'); -> 문자열을 붙이는 기능
//$('.b').html('<p></p>'); -> 태그형태 문자를 붙일때 사용한다.
$('.container').append(tag); // append 뒤에 붙이다. != prepend

// 동적 할당의 두번째 방법
var open = '<div>\
        <p class="color">' + example + '</p>\
    </div>';
var open = `<div>
        <p class="color">${example}</p>
    </div>`;
$('.container').append(open);

// 데이터 가져와서 뿌려주기
$('.ok').on('click',function(){

    // 1. number input 태그의 값을 가지고 온다.
    var title = $('.number').val();
    // 2. 1번에서 가지고 데이터를 div태그를 만들어서 넣어준다.
    var box = $('<div>');
    box.addClass('menu');
    box.append(title);
    // 3. 2번에서 만들어진 태그를 wrapper 태그에 붙여 준다.
    $('.wrapper').append(box);

    $('.number').val('').focus();
});

// 데이터를 삭제 해보기
/*
    동적으로 추가된 태그에는 이벤트가 적용이 안된다.
    선택자 방법을 다르게 구현해야 합니다.
    live기능이 있었다. 1.7 이후에 없어졌다.
*/
// $('.menu').on('click',function(){
$(document).on('click','.menu',function(){
    // $('.menu').remove();
    $(this).remove();
    // this.remove();
});

/*
    조회, 삽입, 수정, 삭제
    SELECT, INSERT, UPDATE, DELETE
    GET, POST, PUT, DELETE
*/

// 전화번호부 기능을 만들기

// 1. 데이터를 입력시켜서 테이블에 추가 되는 기능 만들기
function addPhone(){
    
    var name = $('.name').val();
    var phone = $('.phone').val();

    if ( !name || !phone ) {
        alert('이름과 전화번호를 모두 입력해주세요.');
        return;
    }

    var tag = '<tr>\
        <td>' + name + '</td>\
        <td>' + phone + '</td>\
    </tr>';

    $('tbody').append(tag);

    var plus = {
        name : name,
        phone : phone
    }
    data.list.push(plus);
    console.log(data.list);
}

// $('.add').on('click',addPhone);

// 2. data.js 의 데이터를 먼저 보여주고 기능을 진행한다.
// 데이터가 기본이 되야 한다.
function viewList(){

    $('tbody').empty();
    
    for ( var i = 0; i < data.list.length; i++ ) {

        var tag = '<tr>\
            <td>' + data.list[i].name + '</td>\
            <td>' + data.list[i].phone + '</td>\
            <td class="remove">삭제</td>\
        </tr>';

        $('tbody').append(tag);
    }
}

function addItem(){
    var name = $('.name').val();
    var phone = $('.phone').val();

    if ( !name || !phone ) {
        alert('이름과 전화번호를 모두 입력해주세요.');
        return;
    }

    var plus = {
        name : name,
        phone : phone
    }
    data.list.push(plus);
    viewList();
}

function removeItem(){

    //splice 배열을 삭제 할때 사용하는 메소드
    //배열.splice(인덱스,1);

    var idx = $(this).parent().index();
    console.log(idx)
    data.list.splice(idx,1);
    viewList();
}

$('.add').on('click',addItem);
$(document).on('click','.remove',removeItem);
viewList();

// var a = [ 10, 20, 30, 40, 50 ];
// a.splice(1,1);
// console.log(a)

// 수정하는 기능만들기
