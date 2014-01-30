(function () {
    jQuery.fn.fullHeight = function (options) {
        options = $.extend({
            min: 0,
            offset: -50
        }, options);

        this.each(function () {
            var $this = $(this);

            function update () {
                var height = window.innerHeight;
                $this.height(Math.max(height + options.offset, options.min));
            }

            update();

            $(window).on('resize', function () {
                update();
            });
        });
    };
}());