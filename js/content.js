//台词
var Words = [
	"有一个故事，你想知道吗?",
	"有一天,一个偶尔的机会^12000,然后他们就这样认识了",
	"不知道为什么，他们聊得很开心^3000,就像一对很久没见的朋友",
	"慢慢地，他们熟悉了起来",
	"幸好女孩子还是给了他一次机会,他们，在一起了",
	"180Km不是距离，就这样，在一起了",
	"每晚的聊天，每周的见面，就这样，持续了好长好长时间..."
];

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
		typeWords(swiper);
	},
	onSlideChangeEnd: function(swiper){
		swiperAnimate(swiper);
		resetWord();
		typeWords(swiper);
	},
	onTransitionEnd: function(swiper){
		swiperAnimate(swiper);
	}
});

function typeWords(swiper){
	var index = swiper.activeIndex;
	typeIndex(index);
}

function resetWord(){
	$("span[name ^='typed']").each(function(){
		var typeObj = $(this).data("typed");
		if(typeObj){
			typeObj.clear();
		}
	});


}

function typeIndex(index){
	var words = $("span[name ='typed"+index+"']");
	if (words.length > 0){
		var typeObj = $(words[0]).data("typed");
		if(typeObj){
			typeObj.init();
			return;
		}
	}
	$("span[name = 'typed"+index+"']" ).typed({
		strings: [Words[index]],
		typeSpeed: 100,
		loop: false,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){},
		resetCallback: function() { }
	});
}