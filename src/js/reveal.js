import '../scss/generic.scss';
import '../scss/reveal.scss';

import $ from 'jquery';

const WIDTH = $(window).width();
let TIME = 20 * 1000;

const $slide = $('.slide');
const $top = $slide.find('.top');

const backMedia = $slide.find('.bottom video').get(0);
const frontAudio = $top.find('audio').get(0);

const next = $slide.data('next');

const auto = () => {
    $top.animate({
        width: '0vw'
    }, TIME, () => location = next);
};

const adjustVolumes = () => {
    const frontVol = $top.width() / WIDTH;
    frontAudio.volume = frontVol;
    backMedia.volume = 1 - frontVol;
};

$slide.on('mouseover', (e) => {
    $top.stop();

    $slide.on('mousemove', (e) => {
        const position = e.clientX;

        if (position < 20) location = next;

        $top.css({
            width: `${Math.floor(position / WIDTH * 100)}vw`
        });

    });
});

$slide.on('mouseout', () => {
    $slide.off('mousemove');
    auto();
});

auto();
setInterval(adjustVolumes, 100);
