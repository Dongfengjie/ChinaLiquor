//侧边栏和页面顶部的购物车总数量实现和价格的实现
	function emnumber(){
		if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}
		var sum = 0;
		for(var i in obj){
			sum += obj[i];
		}		
		$('.emnumber').html(sum);			
	}		
 	emnumber();