/*----------------------------------------------------------------
Name:   判断横竖屏
Author: Guoxin
Time:   2014/11/19
*/

!function($){
	var scH5 = {
		init: function(){
			$('.wrap,.allHei,.page').height($(window).height());

			this.fullpage($('.pages'));

			this.make($('.selLst_fb li'));
		},
		make: function(obj){
			obj.click(function(){
				var i = $(this).index()+1;
				location.href = 'index.php?type='+i;
			})
		},
		fullpage: function(obj){
			obj.parallax({
				direction: 'vertical', 	// horizontal (水平翻页)
				swipeAnim: 'cover', 	// cover (切换效果)
				drag:      true,		// 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
				loading:   false,		// 有无加载页
				indicator: false,		// 有无指示点
				arrow:     false,		// 有无指示箭头
				/*
				 * 翻页后立即执行
				 * {int} 		index: 第几页
				 * {DOMElement} element: 当前页节点
				 * {String}		directation: forward(前翻)、backward(后翻)、stay(保持原页)
				 */
				onchange: function(index, element, direction) {
					// code here...
					// console.log(index, element, direction);
					$('.scWrd1').addClass('aniLeft');
					$('.scWrd2').addClass('aniRight');

				},
				/*
				 * 横竖屏检测
				 * {String}		orientation: landscape、protrait
				 */
				orientationchange: function(orientation) {
					// console.log(orientation);
				}
			});
		}
		
	}
	scH5.init()
}(Zepto);


