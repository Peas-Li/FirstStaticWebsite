window.addEventListener('load', function() {

    var people = document.querySelector('.people').querySelector('ul');
    for (var i = 0; i < people.children.length; i++) {
        people.children[i].onmouseover = function() {
            for (var i = 0; i < people.children.length; i++) {
                people.children[i].style.width = 100 + 'px';
            }
            this.style.width = 300 + 'px';
        }
    }

    var tabs = document.querySelector('.tab');
    var num = 0;
    for (var i = 0; i < tabs.children.length; i++) {
        tabs.children[i].onclick = function() {
            for (var i = 0; i < tabs.children.length; i++) {
                tabs.children[i].style.backgroundColor = 'rgba(0, 0, 0, .4)';
            }
            this.style.backgroundColor = 'rgba(0, 0, 0, .6)';
        }
    }

});