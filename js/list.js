$(function(){	
	$.get("json/ulimg.json",function(hot){
			
		var html = template("list-scr",hot);
		$('.show').html(html)
	
	
	
		if(getCookie("cart")){
			var obj = JSON.parse(getCookie("cart"));
		}else{
			var obj = {};
		}

		$('.listbtn').on("click",function(){
			console.log(111);
			var id = $(this).attr("data-id");
				if(!obj[id]){
					obj[id] = 1;
				}else{
					obj[id]++;
				}
				
				var str = JSON.stringify(obj);
				setCookie("cart",str,7);
				emnumber();
		})
	
	})
})