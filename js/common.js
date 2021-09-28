window.addEventListener('load', function() {
    var list = document.querySelector('.nav-lv');
    for (var i = 1; i < list.children.length; i++) {
        list.children[i].onmouseover = function() {
            var baseline = this.querySelector('.baseline');
            baseline.style.display = 'block';
            var smallList = this.querySelector('.nav-lv-small');
            smallList.style.display = 'block';
        }
        list.children[i].onmouseout = function() {
            var baseline = this.querySelector('.baseline');
            baseline.style.display = 'none';
            var smallList = this.querySelector('.nav-lv-small');
            smallList.style.display = 'none';
        }
    };
    list.children[0].onmouseover = function() {
        var baseline = this.querySelector('.baseline');
        baseline.style.display = 'block';
    }
    list.children[0].onmouseout = function() {
        var baseline = this.querySelector('.baseline');
        baseline.style.display = 'none';
    }

    /*  var search = document.querySelector('.search');
     search.onfocus = function() {
         if (search.value === '英雄出少年') {
             search.value = '';
         }
         search.style.color = '#333';
     }
     search.onblur = function() {
         if (search.value === '') {
             search.value = '英雄出少年';
         }
         search.style.color = '#999';
     } */

    /*  var musicTxt = document.querySelector('.music-txt');
     musicTxt.onmouseover = function() {
         this.style.width = 320 + 'px';
     }
     musicTxt.onmouseout = function() {
         this.style.width = 178 + 'px';
     } */



    var fazhan = document.querySelector('.development');
    for (var i = 0; i < fazhan.children.length; i++) {
        fazhan.children[i].onmouseover = function() {
            var develop = this.querySelector('.develop-txt');
            develop.style.left = -203 + this.offsetWidth / 2 + 'px';
            develop.style.display = 'block';
            this.style.backgroundColor = 'black';

        }
        fazhan.children[i].onmouseout = function() {
            var develop = this.querySelector('.develop-txt');
            develop.style.cssText = 'display:none';
            this.style.backgroundColor = '';
        }
    };


});

var btn = document.getElementById('btn');
btn.addEventListener('mousedown', function() {
    var inputText = document.getElementById('inputText');
    btn.style.left = 5 + 'px';
    btn.style.top = 5 + 'px';
    inputText.style.left = 5 + 'px';
    inputText.style.top = 5 + 'px';
    inputText.focus();
    inputText.value = location.href;
    inputText.setSelectionRange(0, inputText.value.length);
    document.execCommand('copy', true);
});
btn.addEventListener('mouseup', function() {
    var inputText = document.getElementById('inputText');
    btn.style.left = 0 + 'px';
    btn.style.top = 0 + 'px';
    inputText.style.left = 0 + 'px';
    inputText.style.top = 0 + 'px';
})


var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    if (mm < 10) { mm = "0" + mm; }
    if (d < 10) { d = "0" + d; }
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    document.getElementById("timeShow").innerHTML = y + "/" + mm + "/" + d + " " + weekday[day] + " " + h + ": " + m + ": " + s + "";
    t = setTimeout(time, 1000);
}
var zd = document.querySelector(".zd");
zd.onclick = function() {
    var time = setInterval(function() {
        let top = window.pageYOffset;
        let step = Math.ceil(top / 50);
        window.scroll(0, top - step);
        if (top == 0) {
            clearInterval(time);
        }
    })
}, 30;

/* var a = 'retrtrfdcfvvvv';
var ym = window.location;
var ym2 = 'http://yoyi.3vkj.net';
var ym3 = String(ym);

function suan(a) {
    var re = a.substring(0, 2);
    var tr = a.substring(2, 4);
    var tr2 = a.substring(4, 6);
    var fd = a.substring(6, 8);
    var cf = a.substring(8, 10);
    var vv = a.substring(10, 12);
    var vv2 = a.substring(12, 14);
    re = 'h';
    tr = 't';
    tr2 = 't';
    fd = 'p';
    cf = ':';
    vv = '/';
    vv2 = '/';
    var p = re + tr + tr2 + fd + cf + vv + vv2;
    return p;
}
if (ym3.indexOf(ym2) == -1) {
    alert(ym2);
    // var av = ym3;
    var b = suan(a) + 'http://yoyi.3vkj.net' + '/';
    window.location = b;
} */

/* var url = location.href;
var timestamp = "";
var signature = "";
var title = document.title;
var shareData = {
    "imgUrl": data.imgUrl, 
    "link": url, 
    "desc": title, 
    "title": title,
    success: function() {
        alert("分享成功"); }
    }
};

function init() {
    var parms = { url: url };
    $.ajax({
        type: "POST",
        url: "/membervideo/share.ashx", 
        data: parms, 
        dataType: "json",
        success: function(data) {
                timestamp = data.timestamp;
                signature = data.signature;
                //alert(timestamp)
                initwx(timestamp, signature);
            } 
    });



}
$(function() {
    init();
});

function initwx(timestamp, signature) {
    wx.config({
        debug: false, 
        appId: 'wxxxxxxxxxx', 
        timestamp: timestamp, 
        nonceStr: 'GDOU', 
        signature: signature, 
        jsApiList: ['onMenuShareTimeline', 
                'onMenuShareAppMessage'
            ] 
    });
    wx.checkJsApi({
        jsApiList: [
            'onMenuShareTimeline', 'onMenuShareAppMessage'
        ]
    });
    wx.ready(function() {
        wx.onMenuShareTimeline(shareData); 
        wx.onMenuShareAppMessage(shareData); 
    });
} */

/* window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)]; */