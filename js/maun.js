/**
 * Created by vitalik on 13.04.16.
 */
'use strict';
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
window.onload = function () {
    var ph = new ParallaxHero('.hero');
};
var ParallaxHero = function () {
    function ParallaxHero(q) {
        _classCallCheck(this, ParallaxHero);
        this.element = q;
        this.bindScroll();
        this.sampleScroll();
    }
    ParallaxHero.prototype.bindScroll = function bindScroll() {
        var _this = this;
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            $(_this.element + ' h1').css({
                'top': scrolled * 0.7 + 'px',
                'opacity': '' + (1 - scrolled / $(_this.element).outerHeight() * 1.8)
            });
            $(_this.element).css({
                'background-position': '50% calc(50% + ' + scrolled * 0.2 + 'px)',
                'background-size': 200 + scrolled * 50 / $(_this.element).outerHeight() + '%'
            });
            $(_this.element + ' .optional-rainbow').css('opacity', '' + (0.4 + scrolled / $(_this.element).outerHeight()));
        });
        $('.selectable').on('click', function (e) {
            $('.selectable').toggleClass('on');
            $('.hero').toggleClass('fadeout');
        });
    };
    ParallaxHero.prototype.sampleScroll = function sampleScroll() {
        setTimeout(function () {
            $.scrollTo(500, 2000);
        }, 500);
    };
    return ParallaxHero;
}();




(function () {
    var rotateSlider;
    $(function () {
        $('#nav').on('click', 'a', function (e) {
            var active, theSlide;
            e = e != null ? e : { e: window.event };
            e.preventDefault();
            e.stopPropagation();
            if ($('#nav').hasClass('active')) {
                return false;
            }
            $('.focus').removeClass('focus');
            $(this).addClass('focus');
            $('#nav').addClass('active');
            theSlide = $(this).attr('data-slide');
            active = $('.active').attr('data-slide');
            $('.slide').removeClass('active');
            return rotateSlider(theSlide, active);
        });
        setTimeout(function () {
            return $('#nav a[data-slide="2"]').trigger('click');
        }, 500);
        setTimeout(function () {
            return $('#nav a[data-slide="3"]').trigger('click');
        }, 1200);
        return setTimeout(function () {
            return $('#nav a[data-slide="4"]').trigger('click');
        }, 1900);
    });
    rotateSlider = function (slide, active) {
        var delta, slides, theSlide;
        slides = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four'
        };
        theSlide = slides[slide];
        delta = Math.abs(slide - active);
        if (delta === 3 && active === '1') {
            $('.slide[data-slide="' + slide + '"]').addClass('active');
            $('.slider-inner').attr('class', 'slider-inner rotate two');
            setTimeout(function () {
                return $('.slider-inner').attr('class', 'slider-inner rotate three');
            }, 400);
            setTimeout(function () {
                return $('.slider-inner').attr('class', 'slider-inner rotate four');
            }, 800);
        } else if (delta === 3 && active === '4') {
            $('.slide[data-slide="' + slide + '"]').addClass('active');
            $('.slider-inner').attr('class', 'slider-inner rotate three');
            setTimeout(function () {
                return $('.slider-inner').attr('class', 'slider-inner rotate two');
            }, 350);
            setTimeout(function () {
                return $('.slider-inner').attr('class', 'slider-inner rotate one');
            }, 700);
        } else {
            $('.slide[data-slide="' + slide + '"]').addClass('active');
            $('.slider-inner').attr('class', 'slider-inner rotate ' + theSlide);
        }
        return $('#nav').removeClass('active');
    };
}.call(this));



