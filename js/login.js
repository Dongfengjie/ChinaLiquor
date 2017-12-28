$(function(){
	$(".tab-top li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent(). find('.tab-cen').children().eq($(this).index()).show().siblings().hide();
	})
	
	$("input[type='button']").click(function(){
		var number = getCookie("phonenumber");
		var pass = getCookie("psw");
		
		if($("input[type='text']").val() == number && $("input[type='password']").val() == pass){
			location.href = "ChinaLiquor.html?"+number;	
			}else{
				$(".inform").html("用户名和密码不匹配");
				$(".inform").css("color","red")
			}		
		
	
		if($("input[type='text']").val() == ""){
			$(".inform").html("请输入用户名");
				$(".inform").css("color","red");		
		}
	})
	
})





