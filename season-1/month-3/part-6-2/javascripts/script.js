// 키보드 이벤트
// 마우스 이벤트는 대상이 있다.

var doc = document;
var n1 = doc.getElementById('n1');

doc.addEventListener('keypress',func1);
doc.addEventListener('keyup',func1);

// keyup, keydown -> 대소문자 구별이 안된다.
// keypress 대소문자 구별이 된다.
// 아스키 코드를 사용한다.

function func1(e){ // ?? 키보드에 키를 구별할수 있어야 된다.
    // console.log(e.type + '는 ' + e.keyCode);
    if ( e.keyCode == 13 && e.type == "keypress" ) {
        n1.classList.add('green');
    }
}

var p1 = doc.getElementById('p1');

p1.addEventListener('keypress',func2);

function func2(e){

    if ( e.keyCode == 13 ) {

        // this.value = '값을 넣는다';
        var data = this.value;
        console.log(data + '을(를) 검색합니다.');
        this.value = '';
    } 
}

var check = doc.querySelector('.term');
var complete = doc.getElementById('complete');

check.addEventListener('change',function(){
    
});

complete.addEventListener('click',function(){

    var flag = false;

    ?????

    if ( flag ) {
       alert('다음을 진행합니다.');
    }
});
