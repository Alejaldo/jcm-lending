(function ($) {
    $('.parallax-1').paroller({
        factor: -0.3,
        type: 'foreground',
        transition: 'transform 0.6s ease',
        direction: 'horizontal'
    });
    $('.parallax-2').paroller({
        factor: 0.2,
        type: 'foreground',
        transition: 'transform 0.2s ease',
        direction: 'horizontal'
    });
})(jQuery);
