$(function(){	
	//取产品介绍的json数据
	$.get("json/ulimg.json",function(hot){	
		var str = location.search; //取出链接
		var id =str.split("?")[1]  //取出所需的id
		hot = hot.hot 			   //取所需的json数据
		//console.log(id)
		//console.log(hot)
		for(var i =0; i<hot.length; i++){ //遍历json数据
			//console.log(hot[i].id)		
			if(hot[i].id == id){
				var html = template("detailinfor",hot[i]);
				var ximg = template("ximg",hot[i]);
				var bimg = template("bimg",hot[i]);
				var lh = template("lh",hot[i]);
				$('.product-intro').html(html);	
				$('.activeimg').html(ximg);
				$('.bigArea').html(bimg);
				$('.small-img').html(lh);

			}	
		}

		$('.small-img li').hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.activeimg img').attr('src',$(this).find('img')[0].src); //换中图
			$('.bigimg').attr('src',$(this).find('img')[0].src);		//换大图	
		});		
	
	});
	
	//JQ写放大镜
	$(".midArea").bind('mousemove',function(e){
		$(".bigArea").show();
		$(".zoom").show();
			
		var x = e.pageX - $(".left-img").offset().left - $(".zoom").width()/2;
		var y = e.pageY - $('.left-img').offset().top - $('.zoom').height()/2;
		
		if(x<0){x=0;}
		if(y<0){y=0;}
		if(x > $('.midArea').width()-$('.zoom').width() ){
			x = $('.midArea').width()-$('.zoom').width();
		}
		if(y > $('.midArea').height()-$('.zoom').height() ){
			y = $('.midArea').height()-$('.zoom').height() ;
		}
		
		var bx = -x/ $('.midArea').width() * $('.bigimg').width();
		var by = -y / $('.midArea').height() * $('.bigimg').height();
		
		$('.zoom').css({"left":x+"px","top":y+"px"});
		$('.bigimg').css({"left":bx+"px","top":by+"px"});
	});
	
	$(".midArea").bind('mouseleave',function(){
		$(".bigArea").hide();
		$(".zoom").hide();	
	});
	
});

//购物车功能实现
	function shopcart(){
		var str = location.search; 
		var id =str.split("?")[1]; 

		if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}
		
		var num = obj[id];	
		
		if(!num){
			$('.bnum').val(1);
			num = 1;
		}							
		$('.bnum').val(num);
						
		$('.minus').click(function(){
			var num = parseInt($('.bnum').val());
			if(num<=0){
				num=0;
			}else{
				num--;
			}
			$('.bnum').val(num);
			emnumber();
		})
		
		$('.add').click(function(){	
			var num = parseInt($('.bnum').val());
			num ++;
			$('.bnum').val(num);
			emnumber();
		})		
		
		$('#btn').click(function(){	
			obj[id] = parseInt($('.bnum').val());
			var str = JSON.stringify(obj);
			setCookie("cart",str,7);
			emnumber();
		})					
}	
shopcart();
