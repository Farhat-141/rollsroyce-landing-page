
document.getElementById('ch').addEventListener('click', function() {
    document.querySelectorAll('.container').forEach(function(element) {
    element.style.transition = '0.25s ease-in';
    element.style.backgroundImage = 'url("https://i.postimg.cc/nrTvfK9w/7.jpg")';
    });
});
document.getElementById('ch2').addEventListener('click', function() {
    document.querySelectorAll('.container').forEach(function(element) {
    element.style.transition = '0.25s ease-in';
    element.style.backgroundImage = 'url("https://i.postimg.cc/02cCTvp2/1.jpg")';
    });
});
document.getElementById('title').addEventListener('click', function(){
    window.location.href = 'index.html';
});


document.getElementById('gallery').addEventListener('click',function(){;
    document.getElementById('gallery-content').style.display = 'block';
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('container').style.backgroundImage = 'none';
    document.getElementById('container').style.backgroundColor = 'black';
    document.getElementById('video-content').style.display = 'none';
    document.getElementById('myVideo').pause();
});
document.getElementById('home').addEventListener('click',function(){
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('video-content').style.display = 'none';
    document.getElementById('container').style.backgroundColor = 'white';
    document.getElementById('home-content').style.display = '';
    document.getElementById('container').style.transition = '0.5s' ;
    document.getElementById('container').style.backgroundImage = "url('https://i.postimg.cc/mZVMDwhm/12.jpg')";
    document.getElementById('myVideo').pause();
});
document.getElementById('video').addEventListener('click',function(){
    document.getElementById('container').style.backgroundColor = 'black';
    document.getElementById('container').style.backgroundImage = 'none';
    document.getElementById('home-content').style.display = 'none'
    document.getElementById('gallery-content').style.display = 'none'
    document.getElementById('video-content').style.display = 'block'
    document.getElementById('myVideo').play();
});