function backToTop(evt) {
	if (evt) {
		evt.preventDefault();
	}

	var now = document.body.scrollTop,
		speed = Math.floor((0 - now) / 8), // 速度曲线
		nowScroll = now + speed < 0 ? 0 : now + speed;

	document.documentElement.scrollTop = nowScroll; //标准模式下的浏览器 
	document.body.scrollTop = nowScroll; //怪异模式下的浏览器 

	if (nowScroll == 0) {
		return;
	} else {
		var timer = setTimeout(backToTop, 10); 
	}
}