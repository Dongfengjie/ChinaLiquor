$(function(){
	
			var label = document.getElementsByClassName("tishi");
			var oSui =document.getElementsByClassName("check");
			var otel = document.getElementById("phone");
			var opsw =document.getElementById("psw");
			var apws =document.getElementById("pwd-agin");
			var oSpan =document.getElementsByClassName("vcod")[0];

			//手机号码
			//定义a b分别作用于手机号和密码。初始值不一样，如果账号密码格式正确统一赋值为2进行判断
			var a =0, b=1, c=2;
			$("#phone").focus(function(){
					label[0].style.display="block";
			})
			
			$("#phone").blur(function(){
				var reg= /0?(13|14|15|18|17)[0-9]{9}/;
				var str = otel.value;				
					if(!reg.test(str)){ 
						label[0].style.display="block";
						label[0].style.backgroundColor="#FFEBEB";
						label[0].style.color="#e3393c";
						label[0].style.borderColor="#e3393c"
						label[0].innerHTML="请输入正确的手机号码"
					}else{
						label[0].style.display="none";
						a = 3;
					}
			})
			
			//图形验证码
			oSpan.innerHTML=suijishu(4);
			oSpan.onmousedown=function(){
				oSpan.innerHTML=suijishu(4);
			}
			
			//验证码正则
			$(".check").first().focus(function(){
				label[1].style.display="none";
			})
			
			$(".check").first().blur(function(){
				if(oSpan.innerHTML!=oSui[0].value){
					
					if(oSui[0].value ==""){					
							label[1].style.display="block";			
							label[1].innerHTML = "请输入验证码"
					}else{
							label[1].style.display="block";	
							label[1].style.backgroundColor="#FFEBEB";
							label[1].style.color="#e3393c";
							label[1].style.borderColor="#e3393c"
							label[1].innerHTML = "验证码错误"
						}
			
				}else{
					label[1].style.display="none";
				}
			})
	
			//密码
			$("#psw").focus(function(){
				label[2].style.display="block";
			})
			
			$("#psw").blur(function(){
				var reg =/([A-Za-z0-9]){6,20}/;
				var str = opsw.value;
				if(!reg.test(str)){
					label[2].style.display="block";
					label[2].style.backgroundColor="#FFEBEB";
					label[2].style.color="#e3393c";
					label[2].style.borderColor="#e3393c"
				}else{
					label[2].style.display="none";
					b=3;
				}
				
			})
				
			//再次确认密码
			$("#pwd-agin").focus(function(){
				label[3].style.display="block";
			})
			
			$("#pwd-agin").blur(function(){				
				var str = opsw.value;
				var stragin =apws.value 
				if(str!=stragin){
					label[3].style.display="block";
					label[3].style.backgroundColor="#FFEBEB";
					label[3].style.color="#e3393c";
					label[3].style.borderColor="#e3393c"
					label[3].innerHTML = "两次密码不一致"
				}else{
					label[3].style.display="none";
					c=3;
				}
				
			})
			
			
			$("input[type='button']").click(function(){
				var phonenumber = otel.value;
				var password = opsw.value;
				
				$("input[type='text']").each(function(){
					val = $(this).val();
					 $("input[type='password']").each(function(){
					 	pal = $(this).val();					
					 })
				
					if(val != "" && pal != "" && oSpan.innerHTML ==oSui[0].value && a==3 && b==3 && c==3 ){					
						setCookie("phonenumber",phonenumber,7);
						setCookie("psw",password,7);
						location.href="login.html";						
					}else{
						$("label").show();
					}
				})
			})
		
})