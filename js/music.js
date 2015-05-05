/*----------------------------------------------------------------
Name:   背景音乐播放-IOS、安卓判断
Author: Guoxin
Time:   2014/11/19
*/

var isIos = navigator.userAgent.match(/iPhone|iPad|iPod/i);
$('#aud')[0].play();
$('.mIco').attr('src','images/a1.png');
if(isIos){
	$(document).one('touchstart',function(){
		console.log('IOS swipe')
		$('#aud')[0].play();
		$('.mIco').attr('src','images/a1.png');
	})
}else{
	alert('Aniroid')
}

$('#music').on('touchstart',function(){
	var ths = $(this);
	var plays = ths.attr('data-play');
	if(plays=='play'){
		$('#aud')[0].pause();
		$('.mIco').attr('src','images/a2.png');
		ths.attr('data-play','stop')
		f = false;
	}else if(plays=='stop'){
		$('#aud')[0].play();
		$('.mIco').attr('src','images/a1.png');
		ths.attr('data-play','play')
		f = true;
	}
})