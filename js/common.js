$(function(){
	
//网站导航调取接口
	$.get("json/ulimg.json", function(smallnav) {
		var html = template("daoh", smallnav);
		$(".dropdown-daoh ul").html(html);

	})
	
	// nva1-6 一级导航
	$.get("json/nav.json", function(tita) {
		var html = template("nav1", tita);
		$("#item1 span").html(html);
	})

	$.get("json/nav.json", function(titb) {
		var html = template("nav2", titb);
		$("#item2 span").html(html);
	})

	$.get("json/nav.json", function(titc) {
		var html = template("nav3", titc);
		$("#item3 span").html(html);
	})

	$.get("json/nav.json", function(titd) {
		var html = template("nav4", titd);
		$("#item4 span").html(html);
	})

	$.get("json/nav.json", function(tite) {
		var html = template("nav5", tite);
		$("#item5 span").html(html);
	})

	$.get("json/nav.json", function(titf) {
		var html = template("nav6", titf);
		$("#item6 span").html(html);
	})
	
	//二级导航调取接口
	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list1", navlist);
		$("#sub1").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui1", tuijian);
		$("#tj1").html(html);
	})

	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list2", navlist);
		$("#sub2").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui2", tuijian);
		$("#tj2").html(html);
	})

	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list3", navlist);
		$("#sub3").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui3", tuijian);
		$("#tj3").html(html);
	})

	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list4", navlist);
		$("#sub4").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui4", tuijian);
		$("#tj4").html(html);
	})

	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list5", navlist);
		$("#sub5").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui5", tuijian);
		$("#tj5").html(html);
	})

	$.get("json/nav_list.json", function(navlist) {
		var html = template("nav-list6", navlist);
		$("#sub6").html(html);
	})

	$.get("json/nav_list.json", function(tuijian) {
		var html = template("tui6", tuijian);
		$("#tj6").html(html);
	})
	
	//返回顶部功能实现
	$(".gotop").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500,function(){	
		});
	});
	
});			
		//搜索框接口实现
	
		var osearchform = document.getElementsByClassName("search-form")[0];
		var oTxt = document.getElementsByClassName("ipt")[0];
		
		oTxt.oninput = function(){		
			var oScript = document.createElement("script");
			oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oTxt.value+"&cb=aaa";
			osearchform.appendChild(oScript)[1];
			osearchform.removeChild(oScript)[1];
		}
		function aaa(data){
				data = data.s;
				var str = "";
				for(var i = 0; i < data.length; i++){
					str+="<li>"+data[i]+"</li>";
				}
				$('.iptinformation').html(str);
			}

		
		oTxt.onblur = function(){
			$('.iptinformation').hide();
		}
		oTxt.onfocus = function(){
			$('.iptinformation').show();
		}
		

