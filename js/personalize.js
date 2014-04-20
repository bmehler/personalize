(function ($) {

    $.fn.personalize = function (options) {

        var settings = $.extend({
            headers: null
        }, options);

        this.click(function () {
            var id = $(this).index("h3");
            $('.extend:eq(' + id + ')').animate({
                opacity: "show"
            }, 2000);
            $('h3 + div').not(':eq(' + id + ')').hide();
            $('h1').text(settings.headers[id]);
        });
    }
}(jQuery));
