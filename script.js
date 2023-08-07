const videoTest = document.getElementById('video-test');
// console.log(videoTest.offsetWidth+'px');
// console.log(videoTest.offsetHeight+'px');

const containerTest = document.querySelector('.container-test');
// console.log(containerTest.offsetWidth+'px');
// console.log(containerTest.offsetHeight+'px');

// logic to do: 
// containerTest.offsetWidth = videoTest.offsetWidth;
// containerTest.offsetHeight = videoTest.offsetHeight;

// set the real width of video displayed to width of container
var r = document.querySelector(':root');
var rs = getComputedStyle(r);
r.style.setProperty('--container-width', videoTest.offsetWidth+'px');
r.style.setProperty('--container-height', videoTest.offsetHeight+'px');

document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
