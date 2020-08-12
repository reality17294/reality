function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // if (obj.offsetLeft < target) {
        //     obj.style.left = obj.offsetLeft + step + 'px';

        // } else {
        //     clearInterval(obj.timer);
        //     callback();
        // }
        // 下面这种写法更适用于大多数场景。上面的方法obj.offsetLeft容易出问题
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback();


        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}