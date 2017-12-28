
	var oBanner = document.getElementsByClassName("slide-items")[0];
	var oUl = document.getElementsByClassName("slide-ul")[0];
	var aLi = oUl.children;

	aLi[0].style.opacity = 1;
	aLi[0].style.filter = "alpha(opacity=100)";

	var oNavList = document.getElementsByClassName("slide-controls")[0];
	for(var i = 0; i < aLi.length; i++) {
		var oSpan = document.createElement("span");
		oNavList.appendChild(oSpan);
	}
	var aNavLi = oNavList.children;
	aNavLi[0].className = "cur";
	//console.log(aNavLi.length)
	var i = 0;
	var timer = setInterval(function() {
		move();
	}, 3000);

	oBanner.onmouseleave = function() {
		clearInterval(timer);

		timer = setInterval(function() {
			move()
		}, 3000);

		//实现互动效果
		for(var k = 0; k < aNavLi.length; k++) {
			aNavLi[k].index = k;
			aNavLi[k].onmouseover = function() {
				clearInterval(timer);
				i = this.index - 1; 
				move();
			}
		}
	}

	function move() {
		i++;
		for(var j = 0; j < aLi.length; j++) {
			aLi[j].style.opacity = 0;
			aLi[j].style.filter = "alpha(opacity=0)";
		}
		if(i == aLi.length) {
			i = 0;
		}
		if(i == -1) {
			i = aLi.length - 1;
		}

		for(var j = 0; j < aNavLi.length; j++) {
			aNavLi[j].className = "";
		}
		if(i == aLi.length) {
			aNavLi[0].className = "cur";
		} else {
			aNavLi[i].className = "cur";
		}
	
		startMove(aLi[i], {
			"opacity": 100
		});

	}
