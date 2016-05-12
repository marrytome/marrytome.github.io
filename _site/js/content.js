//缩放
var scaleW=window.innerWidth/320;
var scaleH=window.innerHeight/480;
var resizes = document.querySelectorAll('.resize');
for (var j=0; j<resizes.length; j++) {
	resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
	resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
	resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
	resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
}
var mySwiper = new Swiper('.swiper-container',{
    loop: false,
	direction : 'vertical',
	onInit: function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd: function(swiper){
		swiperAnimate(swiper);
	},
	onTransitionEnd: function(swiper){
		swiperAnimate(swiper);
	}
});