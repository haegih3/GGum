$(function () {

    // rolling words
    var day = ["평범한 사람입", "코딩이 즐겁습", "자연을 사랑합", "웃길 때 웁", "얼굴보다 마음이 예쁩", "배우는 것이 즐겁습", "탈모입"],
        allDays = day.length,
        firstDay = 0,
        change = $('.words'),
        changeDay = function () {
            change.html(day[firstDay]);
            firstDay = (firstDay + 1) % allDays;
        }

    function ohNo() {
        ohYeah = setInterval(changeDay, 120); //must match css animation
    };

    $('.day').hover(function () {
        $('.intro_me').removeClass('uhoh');
        $('#cube').removeClass('live');
        ohNo();
    }, function () {
        clearInterval(ohYeah);
        if ($('.day').text() === '탈모입') {
            $('.intro_me').addClass('uhoh');
            $('#cube').addClass('live');
        } else if ($('.day').text() == 'Fri') {
            // $('#cube').addClass('live');
        }
    });

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
            
            var loclastNum = tempStr.lastIndexOf(".");
            var fileExt = tempStr.substr(loclastNum, tempStr.length);
            
            var locNum = tempStr.indexOf("_");
            var eggFile = tempStr.substr( 0, locNum + 2 );
            
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
            
            var loclastNum = tempStr.lastIndexOf(".");
            var fileExt = tempStr.substr(loclastNum, tempStr.length);
            
            var locNum = tempStr.indexOf("_");
            var eggFile = tempStr.substr( 0, locNum + 2 );
            obj.prop("src", srcTxt + eggFile + "_" + 0 + fileExt);
        }
    });

});


// compass moving
class MouseFollower {
    constructor(area) {
        this.area = area;
        this.objectFollowers = this.area.querySelectorAll("[data-mouse-follower]");
        this.mouth = this.area.querySelector("[data-mouth]");
    }

    setFollowers(event) {
        for (let i = 0; i < this.objectFollowers.length; i++) {
            this.objectFollowers[i].style.top = "0";
            this.objectFollowers[i].style.left = "0";
            const data = this.calculatePixels(event, this.objectFollowers[i].parentNode);
            this.objectFollowers[i].style.transform = `translate(${data.left}px, ${data.top}px)`;
        }
    }

    calculatePixels(mouse, parent) {
        // get positions, height and widths
        const areaData = this.area.getBoundingClientRect();
        const objectData = parent.getBoundingClientRect();
        // get percentage
        const topPercent = mouse.clientY / areaData.height;
        const leftPercent = mouse.clientX / areaData.width;
        // get pixel to translate
        const pixelTop = parseInt(objectData.height * topPercent);
        const pixelLeft = parseInt(objectData.width * leftPercent);
        return {
            top: pixelTop,
            left: pixelLeft
        }
    }
}