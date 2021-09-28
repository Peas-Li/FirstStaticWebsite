window.addEventListener('load', function() {
    var mulu = document.querySelector('.product-mulu').querySelector('ul');
    for (var i = 0; i < mulu.children.length; i++) {
        mulu.children[i].onmouseover = function() {
            for (var i = 0; i < mulu.children.length; i++) {
                mulu.children[i].style.width = 144 + 'px';
                var muluImg = mulu.children[i].querySelector('img');
                muluImg.style.display = 'none';
            }
            this.style.width = 362 + 'px';
            var muluImg = this.querySelector('img');
            muluImg.style.display = 'block';
        }
    }



    var bl = document.querySelector('.banner-mb').querySelector('.bannerleft');
    var br = document.querySelector('.banner-mb').querySelector('.bannerright ');
    var banner = document.querySelector('.mianbuimgs').querySelector('ul');
    var num1 = 0;
    if (banner.style.left == 0) {
        bl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
    }
    br.onclick = function() {
        if (num1 < 4) {
            num1++;
            banner.style.left = -220 * num1 + 'px';
            bl.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            br.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    }
    bl.onclick = function() {
        if (num1 > 0) {
            num1 = num1 - 1;
            banner.style.left = -220 * num1 + 'px';
            br.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            bl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    }

    var fzbl = document.querySelector('.banner-fz').querySelector('.bannerleft');
    var fzbr = document.querySelector('.banner-fz').querySelector('.bannerright ');
    var fuzhuang = document.querySelector('.fuzhuangimgs').querySelector('ul');
    var num2 = 0;
    if (fuzhuang.style.left == 0) {
        fzbl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
    }
    fzbr.onclick = function() {
        if (num2 < 4) {
            num2++;
            fuzhuang.style.left = -430 * num2 + 'px';
            fzbl.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            fzbr.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    }
    fzbl.onclick = function() {
        if (num2 > 0) {
            num2 = num2 - 1;
            fuzhuang.style.left = -430 * num2 + 'px';
            fzbr.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            fzbl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    };

    var scbl = document.querySelector('.banner-sc').querySelector('.bannerleft');
    var scbr = document.querySelector('.banner-sc').querySelector('.bannerright');
    var secai = document.querySelector('.secaiimgs').querySelector('ul');
    var num3 = 0;
    if (secai.style.left == 0) {
        scbl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
    }
    scbr.onclick = function() {
        if (num3 < 4) {
            num3++;
            secai.style.left = -430 * num3 + 'px';
            scbl.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            scbr.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    }
    scbl.onclick = function() {
        if (num3 > 0) {
            num3 = num3 - 1;
            secai.style.left = -430 * num3 + 'px';
            scbr.setAttribute("style", " pointer-events:all;cursor: pointer;opacity: 1;");
        } else {
            scbl.setAttribute("style", " pointer-events:none;cursor: default;opacity: 0.6;");
        }
    };
})