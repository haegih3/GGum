(function () {

    document.onreadystatechange = () => {

        if (document.readyState === 'complete') {

            /**
             * Setup your Lazy Line element.
             * see README file for more settings
             */

            let el = document.querySelector('#logo_lazy');
            let myAnimation = new LazyLinePainter(el, {
                "ease": "easeLinear",
                "strokeWidth": 20,
                "strokeOpacity": 1,
                "strokeColor": "#222F3D",
                "strokeCap": "square"
            });
            myAnimation.paint();
        }
    }

})();