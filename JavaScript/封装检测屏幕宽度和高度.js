/**
 * Created by slience on 2017/8/25.
 */
function client() {
    if (window.innerWidth != null) {//ie9 + 最新浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }

    }
    else if (document.documentMode === "CSS1Compat") {       //标准模式
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {        //怪异模式
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}