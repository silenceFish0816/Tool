function getStyle(obj,attr) {
    if(obj.currentStyle){//ie等
        return obj.currentStyle[attr];
    }
    else {
        return window.getComputedStyle(obj,null)[attr]; //W3C浏览器
    }
}/**
 * Created by slience on 2017/9/1.
 */
