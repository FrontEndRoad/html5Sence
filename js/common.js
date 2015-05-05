/*----------------------------------------------------------------
Name:   判断横竖屏
Author: Guoxin
Time:   2014/11/19
*/

!function($){
	var scH5 = {
		text: {
			t1: ['我们用笑容接受温暖，用回忆留住时间','永远不要停止，勇敢迈出脚步','逝者已去，生者还要行走，在人生的路上','生命，却以各自的面容绽放','我们曾以相同的方式感知这个世界','不知去往何处的追忆，在这里得到呼应','清明，我们用泪水触摸曾经，用沉默感知距离'],
			t2: ['眷恋着，爱我和我爱的人','即使时间不可回溯，我们依然眷恋着生活','在这里，我们细语呢喃','清明，是天堂与人间的驿站','即使亲人离去，但我们不会遗忘，曾经的温暖','是离别的人，对这个世界的不舍','清明的雨，是眼泪在纷飞'],
			t3: ['我们的生命，也将因你而发光','让一切停留在，最美好的那一刹那','绽放，就是活着的意义','你的人生虽未完成，却并不止于行过','你的一颦一笑，都是我们最宝贵的记忆','你的来到就是一个奇迹，而生命却留给我们一个谜','清明的风，是宝贝均匀而细微的呼吸']
		},
		lnk: location.search.split('?type=')[1],
		type: 0,     //模板
		lin: 0,      //已传数
		n: 0,        //可传数
		imgs: [],    //view img
		arrs:[],      //fabu img
		init: function(){
			$('.wrap,.allHei,.page').css({width:$(window).width(),height:$(window).height()});

			this.fullpage($('.index.pages'));
			this.urls();
			this.selImg($('.selLst li'));
			this.upload($('#file0'));

			$('.ready').live('click',function(){
				var ths = $(this)
				scH5.editTk(ths)
			});

			/*预览*/
			$('.viewBtn').click(function(){
				scH5.view();
				scH5.jiegou();
			})


			/*重新选择*/
			$('.backBtn').click(function(){
				scH5.reSel();
			})

			/*重新上传*/
			$('.backSel').click(function(){
				scH5.reUp();
			})

			/*发布*/
			$('.surePub').click(function(){
				scH5.subFrm();
			})
		},
		urls: function(){
			if(this.lnk==1 || this.lnk==2 || this.lnk==3){
				$('.upMod').show();
				$('.index,.viewMod').hide();
				$('.upFirst img').attr('src','images/m'+this.lnk+'_1.png')
				$('.upLast img').attr('src','images/m'+this.lnk+'_n.png')
				$('.selImg').attr('src','images/p'+this.lnk+'.png').addClass('si'+this.lnk);
			}else{
				$('.index').show();
				$('.upMod,.viewMod').hide();
				this.fullpage($('.index.pages'));
			}
		},
		selImg: function(obj){
			obj.click(function(){
				scH5.type = $(this).index();
				$('.index,.viewMod').hide();
				$('.upMod').show();

				$('.upFirst img').attr('src','images/m'+(scH5.type+1)+'_1.png')
				$('.upLast img').attr('src','images/m'+(scH5.type+1)+'_n.png')
				$('.selImg').addClass('si'+(scH5.type+1)).attr('src','images/p'+(scH5.type+1)+'.png')

				scH5.n = 0;
			})
		},
		reSel: function(){
			$('.index').show();
			$('.upMod').hide();

			$('.upItem').not('.ready').addClass('mrTit')
			$('.ready').remove();

			//this.n = 0;
			this.fullpage($('.index.pages'));
		},
		reUp: function(){
			$('.upMod').show();
			$('.viewMod,.index').hide();
			this.lin = 0;
			this.imgs.length = 0;
		},
		view: function(){
			$('.vImg').each(function(){
				var src = $(this).attr('src');
				if(src || src != '' || src != 'undefined'){
					scH5.lin++;
					scH5.imgs.push(src);
				}else{
					return;
				}
			})

			if(scH5.n<7){
            	scH5.imgs.pop();
            	scH5.arrs.pop();

            	scH5.lin = scH5.lin-1;
            }
		},
		jiegou: function(){
			if(scH5.lin>0){
				$('.upMod,.index').hide();
				$('.viewMod').show();

				var first = '<div class="page page1">'+
							'<img src="images/bg'+(this.type+1)+'_1.jpg" alt="" class="bg_1 pa">'+
							'<img src="images/t_1.png" alt="" class="t_1 pa" data-animation="slideToBottom" data-timing-function="swing" data-duration="600">'+
							'<img src="images/w_1.png" alt="" class="w_1 pa" data-animation="slideToLeft" data-delay="300" data-timing-function="swing" data-duration="1000">'+
							'<img src="images/p'+(this.type+1)+'.png" alt="" class="si'+(this.type+1)+' pa" data-animation="slideToRight" data-delay="300" data-timing-function="swing" data-duration="1500">'+
							'<div class="viewBot pa" data-animation="slideToTop" data-delay="600" data-timing-function="swing" data-duration="1000"><img src="images/bot.png" alt=""></div></div>';

				var last = '<div class="page page'+(this.lin+2)+'">'+
							'<img src="images/bg'+(this.type+1)+'_n.jpg" alt="" class="bg_n pa">'+
							'<img src="images/t_n.png" alt="" class="t_n pa" data-animation="slideToRight" data-timing-function="swing" data-duration="800">'+
							'<img src="images/w_n.png" alt="" class="w_n pa" data-animation="slideToLeft" data-timing-function="swing" data-duration="800">'+
							'</div>';
				var cc = '';
				var li = '';

				for(var i=0; i<scH5.lin; i++){
					var wrdClass = i%2==0?'scWrd1':'scWrd2';
					var wrdReg = /[，。;！?]/;

					var wrdLen = scH5.text['t'+(scH5.type+1)][i].split(wrdReg);
					
					var cnt = '';
					for(var j=0; j<wrdLen.length; j++){
						cnt += wrdLen[j]+'<br />';
					}

					cc += '<div class="page page'+(i+2)+'">'+
							'<img src="'+scH5.imgs[i]+'" class="scImg pa" />'+
							'<p class="scWrd '+wrdClass+'">'+cnt+'</p>'+
							'</div>';
				}

				$('.pageContain').html('').html(first+cc+last);

				this.fullpage($('.pageContain.pages'));
			}else{
				alert('请先上传图片！');
				return false;
			}
		},
		subFrm: function(){
            $('.vImg').each(function(){
                scH5.arrs.push($(this).attr('data-src'));
            })

            $.ajax({
                 url: 'index.php?mod=info&ac=pub',
                 type: 'POST',
                 data:{
                 	type: scH5.type+1,
                    pic: scH5.arrs,
					content: scH5.text['t'+(scH5.type+1)].slice(0,scH5.lin)
                },
                 dataType: 'json',
                 success: function(data){
                    if(data.result ==true){
						//alert('发布成功！');
						location.href = 'index.php?mod=index&ac=model&id='+data.id;
						return false;
					}else{
						alert('失败！');
						return false;
					}
                }
             });
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
		},
		upload: function(obj){
			obj.localResizeIMG({
                 width: 500,
                 quality: 0.8,
                 success: function (result) {
                     //var img = new Image();
                     //img.src = result.base64;
                    var liNum = obj.parent('.upItem').index();
                    obj.hide().parent('.upItem').addClass('ready');
                    obj.next('.veiw').find('.vImg').attr({'src':result.base64, 'data-src':result.clearBase64 });

                    var vImg = obj.next('.veiw').find('.vImg')
			        var vImg_size = scH5.size(vImg);
			        vImg.css(vImg_size,'100%')

                    scH5.n++;
                    if(scH5.n<7){
                   		 scH5.append();
                    }
                 }
             });
		},
		avail: function(){
			for(var i=0; i<7; i++){
				if($('#file'+i).length == 0){
					return i;
				}
			}
		},
		append: function(){
			var avai = scH5.avail()
            var htm = '<li class="upItem"><input class="file" type="file" name="" id="file'+avai+'"><div class="veiw"><img src="" alt="" class="vImg"></div></li>';
 			$('.upLast').before(htm);

            scH5.upload($('#file'+avai));
		},
		size: function(obj){
			var wid = obj.width();
			var hei = obj.height();
			return wid>hei?'height':'width';
		},
		editTk: function(ths){    //编辑弹框
            var src = ths.find('.vImg').attr('src');
            var tit = scH5.text['t'+(scH5.type+1)][ths.index()-1];

            $('.editDiv').show();
            $('.eImg').attr('src',src)
            $('.editWrd').val(tit);


            $('.editBtn').unbind('click').on('click',function(){
            	scH5.delPic(ths)
            });
			$('.sureBtn').unbind('click').on('click',function(){
				scH5.saveTxt(ths)
			});
		},
		delPic: function(ths){    //删除
			$('.editDiv').hide();
			$('.eImg').attr('src','');
			$('.editWrd').val('');

			ths.remove();

			console.log('del='+scH5.n)
			if(scH5.n==7){
				scH5.append();
			}

			scH5.n--;
		},
		saveTxt: function(ths){   //保存
			var val = $('.editWrd').val();
			$('.editDiv').hide();

			scH5.text['t'+(scH5.type+1)][ths.index()-1] = val;
		}
	}
	scH5.init()
	
}(Zepto);


