(function ($) {
    $(function () {
        nav();
    });

    function nav() {
        var $liCur = $(".nav-box ul li.cur"),
            curP = $liCur.position().left,
            curW = $liCur.outerWidth(true),
            $slider = $(".nav-line"),
            $targetEle = $(".nav-box ul li:not('.last') a"),
            $navBox = $(".nav-box");
        $slider.stop(true, true).animate({"left": curP, "width": curW});
        $targetEle.mouseenter(function () {
            var $_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
            $slider.stop(true, true).animate({"left": posL, "width": _width}, "fast");
        });
        $navBox.mouseleave(function (cur, wid) {
            cur = curP;
            wid = curW;
            $slider.stop(true, true).animate({"left": cur, "width": wid}, "fast");
        });
    };


})(jQuery);

function srollList(id, srlNum) {
    if (id == '') {
        return;
    }

    var $prev = $("#prev"),
        $next = $("#next"),
        $btnList = $(".btn-list"),
        $ul = $btnList.find("ul"),
        $li = $btnList.find("li"),
        $clsBtn = $("#closed-btn"),
        maxLen = $li.length,
        liW = $li.outerWidth(true),
        next = "-=",
        prev = "+=",
        page = 1,
        i = srlNum,
        srollW = liW * i,
        filledW = srollW - ((i - (maxLen % i)) * liW) == 0 ? srollW : srollW - ((i - (maxLen % i)) * liW),
        posL;
    $next.click(function () {
        var page_count = Math.ceil(maxLen / i);
        if (page == page_count) {
            return;
        }

        page == page_count - 1 && filledW > 0 ? srollW = filledW : srollW = $li.outerWidth(true) * i;
        move(next);
        page++;
        console.log(page);
    });
    $prev.click(function () {
        var page_count = Math.ceil(maxLen / i);
        if (page == 1) {
            return;
        }
        page == page_count ? srollW = filledW : srollW = $li.outerWidth(true) * i;

        move(prev);
        page--;
    });
    $li.click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");

    });
    function move(path) {
        $ul.stop(true, true).animate({"margin-left": path + srollW}, 300);
    };
    $clsBtn.click(function () {
        page = 1;
        $ul.removeAttr("style");
    });
};

	



