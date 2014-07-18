Reveal.addEventListener(
    'newsletter',
    function () {
        window.setTimeout(
            function () {
                $.albox({
                    url: '/newsletter.html'
                });
        },
        5000
        );
    }
);
