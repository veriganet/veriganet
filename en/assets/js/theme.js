// Pricing table
(function () {
    var e = document.querySelector('[data-toggle="price"]');
    "undefined" != typeof countUp &&
    e &&
    e.addEventListener("change", function (e) {
        !(function (e) {
            var t = e.target,
                c = t.checked,
                o = t.dataset.target,
                n = document.querySelectorAll(o);
            [].forEach.call(n, function (e) {
                var t = e.dataset.annual,
                    o = e.dataset.monthly
                    l = c ? new countUp.CountUp(e, o, t) : new countUp.CountUp(e, t, o);
                l.error ? console.error(l.error) : l.start();
            });
        })(e);
    });
})(),

// Mapbox
(function () {
    var e = document.querySelectorAll('[data-toggle="map"]');
    "undefined" != typeof mapboxgl && e && [].forEach.call(e, function (e) {
        !(function (e) {
            var t = e.dataset.options;
            var o = {
                container:e,
                style:"mapbox://styles/mapbox/light-v10", scrollZoom: !1, interactive: !1
            },
            n = Object.assign(o,t);
            (mapboxgl.accessToken = "pk.eyJ1IjoiYmFsbGthbmxhYiIsImEiOiJja2tyM2dwbGEwcHk1MnFxbjAyb2lyeXNpIn0._3ZbipB9S9gaIu9xFlsv-A"), new mapboxgl.Map(n);
        })(e);
    });
})(),

// Isotope
(function() { 
    var e = $("[data-isotope]");
    $('.filter-button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $(buttonGroup);

        $("[data-filter]").on("click",function(event) {
            var e = $(this), 
            t = e.data("filter"),
            o = e.data("target");
            $buttonGroup.find('.text-primary').removeClass('text-primary');
            var $button = $(event.currentTarget);
            $button.addClass('text-primary');
            $(o).isotope({
                filter : t
            });
        });
    });
    e.imagesLoaded().progress(
        function(){
            e.isotope("layout")
        }
    )
})(),

// Count up
(function () {
    var e = document.querySelectorAll('[data-toggle="countup"]');
    function o(e) {
        var t = e.dataset.from ? +e.dataset.from : null,
            o = e.dataset.to ? +e.dataset.to : null,
            l = new countUp.CountUp(e, o, {
                duration: 3
            });
            l.error ? console.error(l.error) : (l.start(), e.classList.add("counted"));
    }
    "undefined" != typeof countUp.CountUp && e && [].forEach.call(e, function (e) {
        "countup:in" !== e.getAttribute("data-aos-id") && o(e);
    }),
    document.addEventListener("aos:in:countup:in", function (e) {
        if (e.detail instanceof Element) o(e.detail);
        else {
            var t = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
            [].forEach.call(t, function (e) {
                o(e);
            });
        }
    });
    
})(),

//Feather
feather.replace();

// Animation
AOS.init({
    once: true,
    duration: 800
});