import '../scss/reveal.scss';

import $ from 'jquery';

const WIDTH = $(window).width();
let TIME = 20 * 1000;

const $slide = $('.slide');
const $top = $slide.find('.top');

const $backMedia = $slide.find('.bottom video');
const $frontAudio = $top.find('audio,video');
let lock = true;

const next = $slide.data('next');
const delay = $slide.data('delay') * 1000 | 0;

const auto = () => {
    $top.animate({
        width: '0vw'
    }, TIME, () => location = next);
};

const adjustVolumes = () => {
    const frontVol = $top.width() / WIDTH;

    if ($frontAudio.length) $frontAudio.get(0).volume = frontVol;
    if ($backMedia.length) $backMedia.get(0).volume = 1 - frontVol;
};

$slide.on('mouseover', (e) => {
    $top.stop();

    $slide.on('mousemove', (e) => {
        const position = e.clientX;

        if (position < 20 && !lock) location = next;

        $top.css({
            width: `${Math.floor(position / WIDTH * 100)}vw`
        });

    });
});

$slide.on('mouseout', () => {
    $slide.off('mousemove');
    auto();
});

setTimeout(() => auto(), delay);
setInterval(adjustVolumes, 500);
setTimeout(() => lock = false, 3000);
setTimeout(() => $('body').addClass('active'), 500);