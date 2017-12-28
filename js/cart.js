$(function(){
	
	$.get("json/ulimg.json",function(hot){
		hot = hot.hot
		if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}
	
		
		var data = [];
		//遍历json数据和cookie，取自己想要的
		function jsjg(){
			var totalprice = 0;
			for(var i=0; i<hot.length;i++){
				for(var a in obj){	
					if(hot[i].id == a){
						totalprice += obj[a]*hot[i].pirce; //计算总价格
						data.push(hot[i]);
					}
				}
			}
			$('.totalprice span').html(totalprice)	
		}	
		jsjg();
		
		//生成动态数据
		var html = template("cartcenter",{data:data});
		$('.center').html(html);
		
		
		//购物车功能
		if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}
		
		var arr = []; //遍历cookie将数量存到数组里面
		for(var b in obj){			
			arr.push(obj[b])
		}
		$('.bnum').each(function(index){
			$(this).val(arr[index]);
		})

		//购物车减法功能	
		$('.cminus').click(function(){
			var num = parseInt($(this).next().find('.bnum').val());
			if(num<=1){
				num=1;
			}else{
				num--;
			}
			$(this).next().find('.bnum').val(num);	
			var id = $(this).parent().parent().parent().attr("data");
			obj[id] = parseInt(num);
			jsjg();
			var str = JSON.stringify(obj);
			setCookie("cart",str,7);
		})

		//购物车增加功能
		$('.cadd').click(function(){
			var num = parseInt($(this).siblings().find('.bnum').val());
			num ++;	
			$(this).siblings().find('.bnum').val(num);
			
			var id = $(this).parent().parent().parent().attr("data");
			obj[id] = parseInt(num);
			jsjg();
			var str = JSON.stringify(obj);
			setCookie("cart",str,7);
		})		
		
		//删除功能
		console.log($('.action'))
		$('.action').click(function(){
			var id = $(this).parent().attr("data");
			$(this).parent().remove();
			delete obj[id]
			jsjg();
			var str = JSON.stringify(obj);
			setCookie("cart",str,7);	
		})
		
	});

});
		
