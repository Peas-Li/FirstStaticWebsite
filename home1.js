window.addEventListener('load', function() {


    var banner = document.querySelector('.banner');
    var bannerLR = document.querySelector('.bannerLR');
    var bannerRight = document.querySelector('.bannerRight');
    var bannerLeft = document.querySelector('.bannerLeft');
    banner.addEventListener('mouseover', function() {
        bannerLR.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    banner.addEventListener('mouseout', function() {
        bannerLR.style.display = 'none';
        timer = setInterval(function() {
            bannerRight.click();
        }, 2000);
    });


    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step1 = (target - obj.offsetLeft) / 10;
            step1 = step1 > 0 ? Math.ceil(step1) : Math.floor(step1);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            };
            obj.style.left = obj.offsetLeft + step1 + 'px';
        }, 15);
    };

    var bannerWidth = banner.offsetWidth;
    var slide = document.querySelector('.slide');
    var circle = document.querySelector('.circle');
    for (var i = 0; i < slide.children.length; i++) {
        var circleLi = document.createElement('li');
        circleLi.setAttribute('index', i);
        circle.appendChild(circleLi);
        circleLi.addEventListener('click', function() {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num1 = index;
            num2 = index;
            animate(slide, -index * bannerWidth);
        });
    };
    circle.children[0].className = 'current';
    var slideFirst = slide.children[0].cloneNode(true);
    slide.appendChild(slideFirst);

    var num1 = 0;
    var num2 = 0;
    bannerRight.addEventListener('click', function() {
        if (num1 == slide.children.length - 1) {
            slide.style.left = 0;
            num1 = 0;
        }
        num1++;
        animate(slide, -num1 * bannerWidth);
        num2++;
        if (num2 == circle.children.length) {
            num2 = 0;
        };
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        };
        circle.children[num2].className = 'current';
    });

    bannerLeft.addEventListener('click', function() {
        if (num1 == 0) {
            num1 = slide.children.length - 1;
            slide.style.left = -num1 * bannerWidth + 'px';

        }
        num1--;
        animate(slide, -num1 * bannerWidth);
        num2--;
        if (num2 < 0) {
            num2 = circle.children.length - 1;
        };
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        };
        circle.children[num2].className = 'current';
    });

    var timer = setInterval(function() {
        bannerRight.click();
    }, 2000);

    var news = document.querySelector('.hotspot');
    for (var i = 0; i < news.children.length; i++) {
        news.children[i].onmouseover = function() {
            for (var i = 0; i < news.children.length; i++) {
                if (i % 2 == 1)
                    news.children[i].style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                else {
                    news.children[i].style.backgroundColor = 'rgba(0,0,0,0.4)';
                }
            }
            this.style.backgroundColor = 'rgb(181, 159, 120)';
        }
        news.children[i].onmouseout = function() {
            for (var i = 0; i < news.children.length; i++) {
                if (i % 2 == 1)
                    news.children[i].style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                else {
                    news.children[i].style.backgroundColor = 'rgba(0,0,0,0.4)';
                }
            }
        }
    }

    var intro = document.querySelector('.intro-wenzi');
    var jianjie = document.querySelector('.intro-wenzi').querySelector('p')
    intro.onmouseover = function() {
        jianjie.style.overflow = 'scroll';
        jianjie.style.overflowX = 'hidden';
    };
    intro.onmouseout = function() {
        jianjie.style.overflow = 'hidden';
        jianjie.style.overflowX = '';
    };

});