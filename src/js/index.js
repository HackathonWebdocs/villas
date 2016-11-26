import '../scss/index.scss';

import $ from 'jquery';

$('video').on('ended', () => {
    $('.logo').addClass('active');

    setTimeout(() => location = 'video1.html', 3000);
});