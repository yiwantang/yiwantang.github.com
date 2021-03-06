// 统计
(function () {
	var hostUrl = "http://huodong.emao.com";
	var mHostUrl = "http://huodong.m.emao.com";

	function local(id) {
		var strCookie = document.cookie;
		var arrCookie = strCookie.split("; ");
		for (var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if (arr[0] == id)return arr[1];
		}
		return "";
	}

	function mobilecheck() {
		var check = false;
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}

	if (hostUrl && mobilecheck() && !local('noRedirect') && location.href.indexOf(hostUrl) == 0) {
		location.href = location.href.replace(hostUrl, mHostUrl);
	}

})();

// 百度统计
var _hmt = _hmt || [];
(function () {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?c8553bf999297be4b7c3bf2ffec7c37f";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

// 谷歌统计
(function () {
	var referrer = document.referrer || '';
	var url = location.href;

	function atmYimao(url) {
		var matchList = url.match(/atm_yimao=([^&=?]+)/);
		return matchList ? matchList[1] : null;
	}

	if (atmYimao(url) != 1 && atmYimao(referrer) != 1 && !$.cookie('atm_yimao')) {
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	} else {
		$.cookie('atm_yimao', '1', {path: '/', domain: 'emao.com'});
		window.ga = function () {
		};
	}
	ga('create', 'UA-48162221-3', 'auto');
	ga('send', 'pageview');
})();

// V流量统计
var _mvq = _mvq || [];
_mvq.push(['$setAccount', 'm-114937-0']);

_mvq.push(['$logConversion']);
(function () {
	var mvl = document.createElement('script');
	mvl.type = 'text/javascript';
	mvl.async = true;
	mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(mvl, s);
})();


//艾瑞的
(function (G,D,s,c,p) {

c={//监测配置

UA:"UA-emao-000001",  //客户项目编号,由系统生成

NO_FLS:0,

WITH_REF:1,

URL:'http://s.emao.net/build/web/js/statistics/iwt-min.js'  //iwt.js的URL位置，请客户自行托管JS文件，只需修改此值

};

G._iwt?G._iwt.track(c,p):(G._iwtTQ=G._iwtTQ || []).push([c,p]),!G._iwtLoading && lo();

function lo(t) {

G._iwtLoading=1;s=D.createElement("script");s.src=c.URL;

t=D.getElementsByTagName("script");t=t[t.length-1];

t.parentNode.insertBefore(s,t);

}

})(this,document);
