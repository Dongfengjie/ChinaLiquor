$(function() {
	//热卖获取接口
	$.get("json/ulimg.json", function(hot) {
		var html = template("hotimg", hot);
		$(".content_re ul").html(html);
	})
	
	//楼梯1-4F 调取接口
	$.get("json/ulimg.json", function(floora) {
		var html = template("floor1", floora);
		$("#con1").html(html);
	})

	$.get("json/ulimg.json", function(floorb) {
		var html = template("floor2", floorb);
		$("#con2").html(html);
	})

	$.get("json/ulimg.json", function(floorc) {
		var html = template("floor3", floorc);
		$("#con3").html(html);
	})

	$.get("json/ulimg.json", function(floord) {
		var html = template("floor4", floord);
		$("#con4").html(html);
	})
	
	//隐藏图片调取接口
	$.get("json/ulimg.json", function(conrb) {
		var html = template("crb1", conrb);
		$("#crt1").html(html);
	})

	$.get("json/ulimg.json", function(conrb2) {
		var html = template("crb2", conrb2);
		$("#crt2").html(html);
	})

	$.get("json/ulimg.json", function(conrb3) {
		var html = template("crb3", conrb3);
		$("#crt3").html(html);
	})

	$.get("json/ulimg.json", function(conrb) {
		var html = template("crb1", conrb);
		$("#crt4").html(html);
	})

	$.get("json/ulimg.json", function(conrb2) {
		var html = template("crb2", conrb2);
		$("#crt5").html(html);
	})

	$.get("json/ulimg.json", function(conrb3) {
		var html = template("crb3", conrb3);
		$("#crt6").html(html);
	})

	$.get("json/ulimg.json", function(conrb) {
		var html = template("crb1", conrb);
		$("#crt7").html(html);
	})

	$.get("json/ulimg.json", function(conrb2) {
		var html = template("crb2", conrb2);
		$("#crt8").html(html);
	})

	$.get("json/ulimg.json", function(conrb3) {
		var html = template("crb3", conrb3);
		$("#crt10").html(html);
	})

	$.get("json/ulimg.json", function(conrb4) {
		var html = template("crb4", conrb4);
		$("#crt9").html(html);
	})

	$.get("json/ulimg.json", function(conrb4) {
		var html = template("crb4", conrb4);
		$("#crt11").html(html);
	})
	
	//显示整块区域调取接口
	$.get("json/ulimg.json", function(cri) {
		var html = template("cri1", cri);
		$("#criu1").html(html);
	})

	$.get("json/ulimg.json", function(cri) {
		var html = template("cri1", cri);
		$("#criu2").html(html);
	})

	$.get("json/ulimg.json", function(cri) {
		var html = template("cri1", cri);
		$("#criu3").html(html);
	})

	$.get("json/ulimg.json", function(cri) {
		var html = template("cri1", cri);
		$("#criu4").html(html);
	})
	
	//底层图片调取接口
	$.get("json/ulimg.json", function(BDL) {
		var html = template("BDleft", BDL);
		$(".BD-left").html(html);
	})

	$.get("json/ulimg.json", function(BDR) {
		var html = template("BDright", BDR);
		$(".BD-right").html(html);
	})

	$.get("json/conleft.json", function(bgimg) {
		var html = template("slione", bgimg);
		$("#sli1").html(html);
	})

	$.get("json/conleft.json", function(name) {
		var html = template("cataf1", name);
		$("#cata1").html(html);
	})

	$.get("json/conleft.json", function(bgimg) {
		var html = template("slitwo", bgimg);
		$("#sli2").html(html);
	})

	$.get("json/conleft.json", function(name) {
		var html = template("cataf2", name);
		$("#cata2").html(html);
	})

	$.get("json/conleft.json", function(bgimg) {
		var html = template("slithree", bgimg);
		$("#sli3").html(html);
	})

	$.get("json/conleft.json", function(name) {
		var html = template("cataf3", name);
		$("#cata3").html(html);
	})

	$.get("json/conleft.json", function(bgimg) {
		var html = template("slifour", bgimg);
		$("#sli4").html(html);
	})

	$.get("json/conleft.json", function(name) {
		var html = template("cataf4", name);
		$("#cata4").html(html);
	})

	$.get("json/conleft.json", function(lunbo) {
		var html = template("lun1", lunbo);
		$("#lb1").html(html);
	})

	$.get("json/conleft.json", function(lunbo1) {
		var html = template("lun2", lunbo1);
		$("#lb2").html(html);
	})

	$.get("json/conleft.json", function(lunbo) {
		var html = template("lun1", lunbo);
		$("#lb3").html(html);
	})

	$.get("json/conleft.json", function(lunbo1) {
		var html = template("lun2", lunbo1);
		$("#lb4").html(html);
	})

	$.get("json/conleft.json", function(lunbo) {
		var html = template("lun1", lunbo);
		$("#lb5").html(html);
	})

	$.get("json/conleft.json", function(lunbo1) {
		var html = template("lun2", lunbo1);
		$("#lb6").html(html);
	})

	$.get("json/conleft.json", function(lunbo) {
		var html = template("lun1", lunbo);
		$("#lb7").html(html);
	})

	$.get("json/conleft.json", function(lunbo1) {
		var html = template("lun2", lunbo1);
		$("#lb8").html(html);
	})

	$.get("json/conleft.json", function(a) {
		var html = template("bigone", a);
		$("#biglb1").html(html);
	})

	$.get("json/conleft.json", function(b) {
		var html = template("bigtwo", b);
		$("#biglb2").html(html);
	})

		//楼梯实现
	function floor() {
		var flag = true; //默认滚动条 滚动时事件处理函数可以正常执行
		
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
				
			if($(document).scrollTop() > 850) {
				$(".floor-nav").show()
				$(".floor-nav span :first").show()
			}
			if($(document).scrollTop() < 850 || ($(document).scrollTop() > 4400)) {
				$(".floor-nav").hide()
			}
					
		if(flag) {
				$("#floors .floor").each(function(index) {
					if(scrollTop > $(this).offset().top - $(this).outerHeight() / 2) {
						$(".floor-nav li").eq(index).addClass("fcur").siblings().removeClass("fcur");
					}
				})
			}
		})

		$(".floor-nav li").click(function() {
			flag = false;
			$(this).addClass("fcur").siblings().removeClass("fcur");
			var index = $(this).index();
			$("html,body").stop().animate({"scrollTop": $("#floors .floor").eq(index).offset().top}, 500, function() {
			flag = true;
			});
		});

		$(".gotop").click(function(){
			flag = false;
			$("html,body").stop().animate({"scrollTop":0},500,function(){
			flag = true;
			});
		});
	}
	floor();
	
	//左右翻效果
 $('.content-brand').each(function () {
            nextprve($(this));
           // console.log(this)
 });
 
function nextprve(obj){
		var index = 0,
			scrollA = $(obj).find('.scroll-A'),
			length = scrollA.length,
			aprve = $(obj).children('.prev'),
			anext = $(obj).children('.next'),
			sawidth=188;
		
		aprve.click(function() {
			index++;
			if(index == length){
				index = 0;
			}
			scrollA.animate({left: -index*sawidth+"px"}, "slow")
		});			

		anext.click(function() {
			index--;
			if(index == -1){
				index = length-1;
			}
			scrollA.animate({left: -index*sawidth+"px"}, "slow")
		});		
}	
	//楼层隐藏内容效果
	$(".floor-hd li").mousemove().hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().siblings('.floor-bd').find('.content-right-box').children().eq($(this).index()).show().siblings().hide();
	});
	
	//底层品牌轮播
function dilb(){
	var index = 0,
		BDlb = $('.scroll-wrap').find('.BDlb'),
		length = BDlb.length,
		Bwidth = 550;
		//console.log(length)
		$('.bd-prev').click(function(){
			index++;
			if(index==length){
				index=0;
			}
			BDlb.animate({left: -index*Bwidth+"px"},"slow")
		});
		
		$('.bd-next').click(function(){
			index--;
			if(index == -1){
				index = length-1;
			}
			BDlb.animate({left:-index*Bwidth+"px"},"slow")
		});
}
	dilb();
	
	//登录成功显示用户名
	function login(){
	var str = location.search;
	
	var id =str.split("?")[1]; 
	if(id==undefined){
		
		$('.denglu a').html("请登录");
	}else{		
		$(".denglu a").html(id);
	}
		
	}
	login();
	

})