$(function () {

    // document.onreadystatechange = () => {

    //     if (document.readyState === 'complete') {

    //         /**
    //          * Setup your Lazy Line element.
    //          * see README file for more settings
    //          */

    //         let el = document.querySelector('#idValue');
    //         let myAnimation = new LazyLinePainter(el, {
    //             "ease": "easeLinear",
    //             "strokeWidth": 20,
    //             "strokeOpacity": 1,
    //             "strokeColor": "#222F3D",
    //             "strokeCap": "square"
    //         });
    //         myAnimation.paint();
    //     }
    // }

    var srcTxt = "src/images/easteregg_";

    function showImage(objImg) {
        var srcImg = objImg.attr("src");

        if (srcImg.indexOf(srcTxt) != -1) {
            var tempStr = srcImg.replace(srcTxt, "");
            // 확장자 찾기
            var loclastNum = tempStr.lastIndexOf(".");
            var fileExt = tempStr.substr(loclastNum, tempStr.length);
            // 중간번호 찾기
            var locNum = tempStr.indexOf("_");
            var eggFile = tempStr.substr( 0, locNum + 2 );
            // 랜덤 파일번호
            var imgNum = Math.round(Math.random()*5);
            
            var srcLast = srcTxt + eggFile + "_" + imgNum + fileExt;
            objImg.prop("src", srcLast);
            setTimeoutID = setTimeout(() => showImage(objImg),200);
        }
    }

    $(".easter-egg").on("mouseover", function() {
        var obj = $(this).children("img");
        showImage(obj);
    });
    $(".easter-egg").on("mouseout", function() {
        clearTimeout(setTimeoutID);
        var obj = $(this).children("img");
        var srcImg = obj.attr("src");
        if (srcImg.indexOf(srcTxt) != -1) {
            var tempStr = srcImg.replace(srcTxt, "");
            // 확장자 찾기
            var loclastNum = tempStr.lastIndexOf(".");
            var fileExt = tempStr.substr(loclastNum, tempStr.length);
            // 중간번호 찾기
            var locNum = tempStr.indexOf("_");
            var eggFile = tempStr.substr( 0, locNum + 2 );
            obj.prop("src", srcTxt + eggFile + "_" + 0 + fileExt);
        }
    });

});