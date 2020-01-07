var doc = document;
var h1tag = doc.createElement('h1');
var h2tag = doc.getElementById('middle');
var exam = doc.getElementById('exam');

// append 맨뒤에 붙인다.
// prepend 맨앞에 붙인다.

console.log(h2tag.innerText);
h1tag.innerText = '동적태그';

// exam.append(h1tag);

// input 값 가져오기
var doinput = doc.getElementById('do');
var btn = doc.getElementById('btn');
var todoList = doc.getElementById('todoList');

btn.addEventListener('click',addList);
doinput.addEventListener('keypress',addList);

function addList(e){

    if ( e.type == 'click' || (e.type == 'keypress' && e.keyCode == 13 ) ) {

        var pp = doinput.value;
        var list = doc.createElement('div');
        var span = doc.createElement('span');

        list.classList.add('item');
        list.innerText = pp;
        span.classList.add('inner');
        span.innerText = 'x';

        list.appendChild(span);
        todoList.appendChild(list);

        doinput.value = '';
        doinput.focus();

        var item = doc.getElementsByClassName('item');

        for ( var i = 0; i < item.length; i++ ) {
            item[i].children[0].addEventListener('click',function(){
                this.parentElement.remove();
            });
        }
    }    
}

// addEventListener 태그가 완성된 시점에서 이벤트를 등록 시키는 기능이다.
// removeEventListener 태그에 등록된 이벤트를 삭제 한다.
var test = doc.getElementById('test');

function testCall(){
    console.log('호출됨');
    test.removeEventListener('click',testCall);
}

// test.addEventListener('click',testCall);

// 애니메이션 css 로 개발, javascript 슬라이드 이미지 개발
// 애니메이션 만들기
// setInterval(기능,시간); setTimeout(기능,시간);

setTimeout(function(){
    //console.log('셋타임아웃');
},5000); // 시간이 경과후 기능을 실행 // 시간은 ms단위다. // 1회성

setInterval(function(){
    //console.log('셋인터벌');
},1000); // 매 시간마다 실행

// 애니메이션
var go = doc.getElementById('go');
var box = doc.getElementById('box');

go.addEventListener('click',function(){
    // 멈추는건 숙제다.
    var num = 0;
    // box.style.marginLeft = '100px';
    setInterval(function(){
        num++;
        box.style.marginLeft = num + 'px';
    },5);
});