Reveal.addEventListener('newsletter', function () {
    window.setTimeout(
        function () { $.albox({ url: '/newsletter.html' }); },
        5000
    );
});

Reveal.addEventListener('presentation-title', function () {
    var timeout = 800;

    $('.presentation-title .current-custom-fragment').removeClass('current-custom-fragment');
    $('.presentation-title .custom-fragment').first().addClass('current-custom-fragment');

    var nextFragment = function() {
        var cur = $('.presentation-title .custom-fragment.current-custom-fragment');
        var next = $(cur).next('.custom-fragment');

        if ($(next).length > 0) {
            $(cur).removeClass('current-custom-fragment');
            $(next).addClass('current-custom-fragment');
        }

        timeout = timeout * 2 / 3;

        return next;
    };

    callback = function () {
        var next = nextFragment();
        if ($(next).length > 0) {
            window.setTimeout(callback, timeout);
        }
    };

    window.setTimeout(callback, timeout);
});
