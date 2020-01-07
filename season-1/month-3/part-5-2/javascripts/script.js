var doc = document;
var grand = doc.querySelector('.grand');
var parent = doc.querySelector('.parent');
var child1 = doc.querySelector('.child1');
var child2 = doc.querySelector('.child2');
var child3 = doc.querySelector('.child3');

// 스크립트로 스타일(css) 적용 하기 -> style
// font-size -> fontSize
// background-color -> backgroundColor
// margin-top -> marginTop
// grand.style.backgroundColor = 'red';
// 되도록 클래스 추가 방식으로 구현하자

// 상대적위치 

child2.addEventListener('click',function(){
    // parent.style.backgroundColor = 'black';
    var check = child1.parentNode;
    var check2 = child2.parentElement;
    
    child1.parentNode.style.backgroundColor = 'black';
});

parent.addEventListener('click',function(){

    // 자식은 무조건 복수로 선택을한다.
    var check = parent.childNodes;
    var check2 = parent.children; // 지향한다.

    // parent.children[2].style.backgroundColor = 'black';
    /*grand
        .children[0]
        .parentElement
        .parentElement
        .style.backgroundColor = 'black';*/

    var c1 = parent.children[0].nextSibling; // 다음 내용
    var c2 = parent.children[0].nextElementSibling; // 다음 태그

    c2.previousElementSibling.style.backgroundColor = 'black';
});

/*

    parentNode
    parentElement (지향)

    childNodes
    children (지향)
    childElementCount 자식 개수

    nextSibling
    nextElementSibling (지향)
    previousElementSibling

    this

*/

// this

parent.addEventListener('click',function(){
    console.log(this)
    // this.style.backgroundColor = 'black';
    // this.style.width = '500px'
});

// DOM 제어
// 이벤트
// 애니메이션