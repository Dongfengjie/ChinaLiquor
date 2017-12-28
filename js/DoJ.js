	//判断是否为闰年
	function isLeapYear(year) {
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		}
		return false;
	}

	//将日期格式输出为   YYYY|MM|DD   调用方法console.log(dateUtil.formatDate(oDate, "-----"));
	function formatDate(oDate, str) {
		var year = oDate.getFullYear();
		var month = oDate.getMonth() + 1;
		var day = oDate.getDate();

		month = bl(month);
		day = bl(day);

		function bl(num) {
			return num < 10 ? "0" + num : num
		}
		return year + str + month + str + day;
	}

	//当前年份下月份的天数。
	function getDays(year, month) {
		switch(month) {
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			case 2:
				if(dateUtil.isLeapYear(year)) {
					return 29;
				}
				return 28;
			default:
				return 31;
		}

	}
	//两个日期的差
	function getDiffDays(oDate1, oDate2) {
		var ss = Math.abs((oDate2 - oDate1) / 1000);

		var day = Math.floor(ss / 60 / 60 / 24);
		var hour = Math.floor(ss / 60 / 60 % 24);
		var minute = Math.floor(ss / 60 % 60);
		var second = Math.floor(ss % 60);

		return day + "天" + hour + "时" + minute + "分" + second + "秒";
	}
	
	//获取未来N天
	function getNDays(n) {
		var date = new Date();
		var day = date.getDate();
		date.setDate(day + n);
		return date;
	}
	//能力检测，获取外部样式，attr填入要获取的css样式（width、height）
	function getStyle(obj, attr) {
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		}
		return getComputedStyle(obj, null)[attr];
	}

	//拖拽事件
	function Draganddrop(obj) {
		obj.onmousedown = function(e) {
			var evt = e || event;
			var x = evt.clientX;		//鼠标的坐标
			var y = evt.clientY;

			var xx = x - this.offsetLeft;
			var yy = y - this.offsetTop;

			obj.style.left = this.offsetLeft + "px";
			obj.style.top = this.offsetTop + "px";

			document.onmousemove = function(e) {
				var evt = e || event;
				var x = evt.clientX - xx;
				var y = evt.clientY - yy;
				
				if(x <= 0) {
					x = 0
				};
				if(x >= document.documentElement.clientWidth - obj.offsetWidth) {
					x = document.documentElement.clientWidth - obj.offsetWidth;
				}

				if(y <= 0) {
					y = 0
				};
				if(y >= document.documentElement.clientHeight - obj.offsetHeight) {
					y = document.documentElement.clientHeight - obj.offsetHeight;
				}

				obj.style.left = x + "px";
				obj.style.top = y + "px";
			}
		}

		document.onmouseup = function() {
			document.onmousemove = null;
		}
	}

	// DOM2级事件封装增加
	function addEvent(obj, type, fn) {
		if(obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else {
			obj.attachEvent("on" + type, fn);
		}
	}
	
	//DOM2级事件封装删除
	function removeEvent(obj, type, fn) {
		if(obj.removeEventListener) {
			obj.removeEventListener(type, fn, false);
		} else {
			obj.detachEvent("on" + type, fn);
		}
	}
	
//			//兼容IE的阻止事件冒泡，无法调用，仅供修改
//			oInput.onmousedown=function(e){
//				var evt = e||event;
//				//阻止冒泡必须是相同事件类型
//				if(evt.stopPropagation){
//					evt.stopPropagation();
//				}else{					
//					evt.cancelBubble = true; //兼容IE写法 
//				},



	//创建Cookie
	function setCookie(name, value, n) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + n);
		document.cookie = name + "=" + value + ";expires=" + oDate;
	}
	
	//获取Cookie
	function getCookie(name) {
		var str = document.cookie;
		var arr = str.split("; ");
		for(var i = 0; i < arr.length; i++) {
			var arr1 = arr[i].split("=");
			if(arr1[0] == name) {
				return arr1[1];
			}
		}
	}
	
	//删除Cookie
	function removeCookie(name) {
		setCookie(name, 1, -1);
	}


	//取a位中英文结合的验证码
	function suijishu(a){
		var arr ="0123456789QWERTYUIOPLKJHGFDSAZXCVBNMzxcvbnmlkjhgfdsaqwertyuiop" //设置一个字符包含大小写和数字
		var str="" //空字符串代表拼接
		for(i=0; i<a;i++){ //取a位随机数
			var num =Math.floor(Math.random()*arr.length)  //随机从字符串里取一位数
			str+=arr[num]			//将随机数拼接
		}
		return str
	}
	//文本框限制输入长度
	function length(m,obj){
		obj.oninput= function(e){
			var evt = e || event;
			var len = obj.value.length+1;
			obj.value = obj.value.substr(0,m);
			if(len>m){
				return false;
			}			
		}
	}


	//IE低版本不支持取class名，该函数解决该问题。
	function getByClass(classname){
		//判断浏览器是否识别classname
		if(document.getElementsByClassName){
			//如果识别直接输出
			return document.getElementsByClassName(classname);				
		}else{
			//不识别，先获取所有的class名
		var Bq = document.getElementsByTagName("*");
			//创建空数组
		var ae=[];
			//遍历所有的class名
		for(var i=0; i<Bq.length;i++){
			//如果输入的classname和获取的完全相等
			if(Bq[i].className === classname){
			//将完全相等的class名放入数组
				ae.push(Bq[i]);
				}
			}
			//返回数组的值
		return ae;
		}
	}

	//冒泡排序 （传数组）
	function maopao(arr){
		for(var i = 0 ;i < arr.length-1;i++){  //控制轮数    多少个数就比多少次
			for(var j = 0;j<arr.length-1-i;j++){ //每轮当中要比的次数,每轮比完最后一个数是最大的,所以每轮后长度减去轮数,后面的就不用再比了 
				if(arr[j]>arr[j+1]){
					var temp = arr[j];
					arr[j]= arr[j+1];      //相互交换位置 
					arr[j+1] = temp;
				}
			}
		}
		return arr
	}

	//选择排序
	function xuanze(arr){
		for(var i = 0;i<arr.length-1;i++){ //还是控制轮数 i值用来当最小值的索引
			var minIndex = i;               //假定最小值
			for(var j = i+1;j<arr.length;j++){
				if(arr[minIndex]>arr[j]){
					minIndex = j ;	  //和除自己外所有值比较 找到最小值
				}
			}
			var temp = arr[i];
			arr[i]= arr[minIndex];    //找到后调换位置
			arr[minIndex]= temp;
		}
		return arr;
	}
		
	//去重 (选择排序方式)
	function quchong(arr){
		for(var i = 0;i<arr.length;i++){       //控制轮数
			for(var j = i+1;j<arr.length;j++){  // 控制扫描的次数
				if(arr[i] == arr[j]){
					arr.splice(j,1);    //删除重复的索引位
					j--;      //重点   勿忘  使j循环 循环全部数组
				}
			}
		}
		return arr;
	}
	
	//去重 (用排序方式去重)
	function paixu(arr){
		arr.sort();
		for(var i = 0;i<arr.length;i++){
			if(arr[i] == arr[i+1]){
				arr.splice(i+1,1);
				i--;
			}
		}
		return arr;
	}
	
	//indexOf方法去重 
	function index(arr){
		var newArr = [];
		for(var i = 0;i<arr.length;i++){
			if(newArr.indexOf(arr[i]) == -1){   //当新数组中没有这个数是 返回-1
				newArr.push(arr[i])
			}
		}
		return newArr
	}
	
	//ES6 set去重
	function Eset(arr){
		let set = Array.from(new Set(arr));
		return set
	}
	//补零
	function foo(num,n){return num<n?"0"+num:num;}
	