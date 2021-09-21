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

var banner = document.querySelector('.worksImgs').querySelector('ul');
var bannerWidth = document.querySelector('.worksImgs').offsetWidth;
var bannerLeft = document.querySelector('.bannerLeft');
var bannerRight = document.querySelector('.bannerRight');
bannerRight.addEventListener('click', function() {
    animate(banner, -1 * (bannerWidth + 5));
})
bannerLeft.addEventListener('click', function() {
    animate(banner, 0);
})

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    return false;
}