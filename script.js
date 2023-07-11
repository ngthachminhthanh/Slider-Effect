document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

var buttonInContent = document.querySelectorAll('.button-in-content');

for(var i=0; i<buttonInContent.length; i++){
    buttonInContent[i].addEventListener('click',function() {
        alert("Bạn muốn tìm cc gì ở đây ? ");
    })
}