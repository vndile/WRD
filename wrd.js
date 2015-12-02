/*!
 *
 * 		WEB RESPONSIVE DISPLAY - JS
 *
 * 		Homepage:				http://wrd.vndile.com/
 * 		Create by: 				WRD
 * 		Author: 					VN Dile
 * 		Version: 					0.7.0
 * 		Copyright: 				2015
 *
 *		Licensed under MIT
 * 		http://cdn.vndile.com/wrd/license/
 *
 *
 *		Source (1):	HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 *		Source (2):  source code for clock canvas - W3Schools (http://www.w3schools.com/canvas/canvas_clock_start.asp)
 */

 (function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>clock,banner,copyright,content,article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video clock banner copyright content",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);
if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document); 

(function() {
    var els = ['clock', 'copyright', 'content', 'banner', 'section', 'article', 'hgroup', 'header', 'footer', 'nav', 'aside', 'figure', 'mark', 'time', 'ruby', 'rt', 'rp', 'svg', 'video', 'audio'];
    for (var i = 0; i < els.length; i++) {
        document.createElement(els[i]);
    }
})();

WRDcheckJquery();

function WRDcheckJquery() {
    'use strict';
    if (typeof jQuery == "undefined") {
        new WRDerror("WRD cần sử dụng Jquery để hoạt động");
        new addJquery();
    } else {
        $(function() {
            if (jQuery.fn.jquery.split('.').map(function(i) {
                    return ('0' + i).slice(-2)
                }).join('.') > '01.10.0') {} else {
                new WRDerror("Jquery phải có phiên bản trên 1.10.0 để WRD hoạt động");
                new addJquery();
            }
            WRDjquery();
        });
    }
}

function WRDerror(t) {
    console.log(t + '	- From: WRD');
}

function addJquery() {
    var x = document.createElement("script");
    x.type = "text/javascript";
    x.async = true;
    x.src = "https://dilecdn-2303.kxcdn.com/wrd/jquery.min.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(x, s);
}

$(document).ready(function() {
    'use strict';

    function wrd() {}

    wrd.prototype.setData = function(n, v) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(n, v);
        } else {
            WRDerror('Trình duyệt không hỗ trợ HTML5 Webstorage !');
        }
    };

    wrd.prototype.getData = function(n) {
        if (typeof(Storage) !== "undefined") {
            return localStorage.getItem(n);
        } else {
            WRDerror('Trình duyệt không hỗ trợ HTML5 Webstorage !');
        }
    };

    wrd.prototype.loopex = function(text, length) {
        var i = 1,
            texts = text;
        while (i < length) {
            texts = texts + text;
            i++;
        }
        return texts;
    };
    wrd.prototype.looper = function(text, length, nozero) {
        var texts = 0 + text,
            i = 1;
        while (i < length) {
            texts = texts + i + text;
            i++;
        }
        return texts;
    };
    wrd.prototype.loopin = function(elem1, elem2, length) {
        var e = $(elem1).html(),
            texts = e,
            i = 1;
        while (i < length) {
            texts = texts + e;
            i++;
        }
        $(elem2).html(texts);
    };
    wrd.prototype.loopeed = function(text, start, end, length) {
        if (start == 'min') {
            start = 0;
        }
        if (end == 'max') {
            end = text.length;
        }
        var i = 1,
            z = text.slice(start, end),
            texts = z;
        while (i < length) {
            texts = texts + z;
            i++;
        }
        return texts;
    };
    wrd.prototype.append = function(text, elem) {
        $(elem).append(text);
    };
    wrd.prototype.appind = function(text1, x, text2) {
        var o = text1,
            z = o.slice(0, x),
            e = o.slice(x, o.length);
        return z + text2 + e;
    };
    wrd.prototype.appear = function(text1, a, text2) {
        var q = text1,
            o = text2;
        if ('before' == a) {
            return o + q;
        } else {
            return q + o;
        }
    };
    wrd.prototype.appoint = function(text1, b, text2) {
        var o = text1,
            t = o.indexOf(b) + b.length,
            z = o.slice(0, t),
            e = o.slice(t, o.length);
        return z + text2 + e;
    };
    var wrd = new wrd();
});

function WRDjquery() {

    (function($) {
        'use strict';

        $(document).ready(function() {
            $('input, textarea, [contenteditable="true"]').attr('spellcheck', 'false');
            $('img').is(function() {
                var t = $(this),
                    title = t.attr('title'),
                    alt = t.attr('alt');
                if (undefined === title) {
                    $(this).attr('title', '');
                }
                if (undefined === alt) {
                    $(this).attr('alt', '');
                }
            });
        });

        $(document).ready(function() {
            var t = $('meta[name="viewport"]').attr('content');
            if (t == '') {
                $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
            } else {
                if (t !== "width=device-width, initial-scale=1") {
                    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
                } else {}
            }
        });

        $(document).ready(function() {
            $('.alert a[wrd-alert-close]').click(function() {
                var closeTime = $(this).attr('wrd-alert-closeTime');
                if (closeTime == '' || closeTime === undefined) {
                    $(this).parent().fadeOut(500);
                } else {
                    $(this).parent().fadeOut(closeTime);
                }
                return false;
            });
        });

        $(document).ready(function() {
            $(".accordion .accordion-item:not(:first-child) .accordion-content").hide().attr('wrd-accordion-content', 'hide');
            $(".accordion .accordion-item:first-child .accordion-content").show().attr('wrd-accordion-content', 'show');
            $(".accordion .accordion-item .accordion-title").click(function(e) {
                var tt = $(this).attr('href'),
                    attr = $(tt);
                if (attr.attr('wrd-accordion-content') == 'hide') {
                    $(this).parents('.accordion').find('.accordion-item .accordion-content').slideUp(500).attr('wrd-accordion-content', 'hide');
                    attr.attr('wrd-accordion-content', 'show');
                    attr.slideDown(500);
                } else {
                    attr.attr('wrd-accordion-content', 'hide');
                    attr.slideUp(500);
                }
                e.preventDefault();
                return false;
            });
        });

        $(document).ready(function() {
            $('.pagination.arrow').is(function() {
                $(this).children('li:first-child').before('<a class="arrow-left">&laquo;</a>');
                $(this).children('li:last-child').after('<a class="arrow-right">&raquo;</a>');
            });
            $('.pagination.arrow.slide').is(function() {
                var n = $(this).attr('wrd-pagination-max'),
                    g = $(this).attr('wrd-pagination-page');
                if (n === undefined) {
                    $(this).attr('wrd-pagination-max', '5');
                    n = '5';
                }
                if (g === undefined) {
                    $(this).attr('wrd-pagination-max', '1');
                    g = '1';
                }
                var t = n * g;
                $(this).find('li a').hide();
                var i = 0;
                while (i <= t) {
                    $(this).find('li:nth-of-type(' + i + ') a').show();
                    i++;
                }
                var u = g * 1 - 1,
                    z = n * u,
                    i1 = 0;
                while (i1 <= z) {
                    $(this).find('li:nth-of-type(' + i1 + ') a').hide();
                    i1++;
                }
            });

            $('.pagination.arrow.slide .arrow-right').click(function(e) {
                var e = $(this).parents('.pagination'),
                    m = e.attr('wrd-pagination-max') * 1,
                    p = e.attr('wrd-pagination-page') * 1,
                    o = p + 1,
                    t = m * (p + 1),
                    q = m * p,
                    i = 0,
                    i1 = 0,
                    s = m * p,
                    x = s + 1,
                    v = e.find('li a').length;
                if (x <= v) {
                    e.attr('wrd-pagination-page', o);
                    while (i <= t) {
                        e.find('li:nth-of-type(' + i + ') a').show();
                        i++;
                    }
                    while (i1 <= q) {
                        e.find('li:nth-of-type(' + i1 + ') a').hide();
                        i1++;
                    }
                }
                e.preventDefault();
                return false;
            });

            $('.pagination.arrow.slide .arrow-left').click(function(e) {
                var e = $(this).parents('.pagination'),
                    m = e.attr('wrd-pagination-max') * 1,
                    p = e.attr('wrd-pagination-page') * 1,
                    o = p - 1,
                    t = m * p,
                    c = m * (p - 1),
                    s = m * (p - 2),
                    i = 0,
                    i1 = 0,
                    i2 = 0;
                if (p > 1) {
                    e.attr('wrd-pagination-page', o);
                    while (i <= t) {
                        e.find('li:nth-of-type(' + i + ') a').hide();
                        i++;
                    }
                    while (i1 <= c) {
                        e.find('li:nth-of-type(' + i1 + ') a').show();
                        i1++;
                    }
                    while (i2 <= s) {
                        e.find('li:nth-of-type(' + i2 + ') a').hide();
                        i2++;
                    }
                }
                e.preventDefault();
                return false;
            });
        });

        $(document).ready(function() {
            $('.tab .tab-content .tab-content-sub').hide();
            $('.tab .tab-menu .tab-menu-sub:first-child').attr('class', 'tab-menu-sub active');
            $('.tab .tab-menu .tab-menu-sub a').is(function() {
                $($(this).attr('href')).hide().attr('wrd-tab-content', 'hide');
            });
            $('.tab .tab-menu .tab-menu-sub:first-child a').is(function() {
                $($(this).attr('href')).show().attr('wrd-tab-content', 'show');
            });
            $('.tab .tab-menu .tab-menu-sub').click(function(e) {
                $(this).parents('.tab').find('.tab-content .tab-content-sub').hide().attr('wrd-tab-content', 'hide');
                $(this).parents('.tab').find('.tab-menu .tab-menu-sub').attr('class', 'tab-menu-sub');
                $(this).attr('class', 'tab-menu-sub active')
                var a = $($(this).find('a').attr('href'));
                if (a.attr('wrd-tab-content') == 'hide') {
                    a.fadeIn(500);
                }
                if (a.attr('wrd-tab-content') == 'show') {
                    a.fadeOut(500);
                }
                e.preventDefault();
                return false;
            });
        });

        $(document).ready(function() {
            var q = ('' || undefined),
                event = ('click' || 'mouseenter');
            $('.menu ul li').on(event, function(e) {
                var c = $(this).children('a'),
                    h = c.attr('href'),
                    t = c.attr('target');
                if (h === q) {
                    if (t === q) {
                        window.location.href = '#';
                    } else {
                        if (t === '_blank') {
                            window.open('#');
                        } else {
                            window.location.href = '#';
                        }
                    }
                } else {
                    if (t === q) {
                        window.location.href = h;
                    } else {
                        if (t === '_blank') {
                            window.open(h);
                        } else {
                            window.location.href = h;
                        }
                    }
                }
            });

            var t = $(window).width();
            if (t < 1000) {
                $('.menu').removeClass('center');
                $('.menu').addClass('li-hover');
                $('.menu').prepend('<img class="mobile-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxnPjxwYXRoIGQ9Ik0yMy4yNDQsMTcuMDA5SDAuNzVjLTAuNDEzLDAtMC43NSwwLjM2LTAuNzUsMC44MDF2My40MjFDMCwyMS42NTQsMC4zMzcsMjIsMC43NSwyMmgyMi40OTRjMC40MTQsMCwwLjc1LTAuMzQ2LDAuNzUtMC43NyAgICBWMTcuODFDMjMuOTk0LDE3LjM2OSwyMy42NTgsMTcuMDA5LDIzLjI0NCwxNy4wMDl6IE0yMy4yNDQsOS4wMDlIMC43NUMwLjMzNyw5LjAwOSwwLDkuMzY5LDAsOS44MXYzLjQyMSAgICBjMCwwLjQyNCwwLjMzNywwLjc2OSwwLjc1LDAuNzY5aDIyLjQ5NGMwLjQxNCwwLDAuNzUtMC4zNDUsMC43NS0wLjc2OVY5LjgxQzIzLjk5NCw5LjM2OSwyMy42NTgsOS4wMDksMjMuMjQ0LDkuMDA5eiAgICAgTTIzLjI0NCwxLjAwOUgwLjc1QzAuMzM3LDEuMDA5LDAsMS4zNjksMCwxLjgxVjUuMjNjMCwwLjQyMywwLjMzNywwLjc2OSwwLjc1LDAuNzY5aDIyLjQ5NGMwLjQxNCwwLDAuNzUtMC4zNDYsMC43NS0wLjc2OVYxLjgxICAgIEMyMy45OTQsMS4zNjksMjMuNjU4LDEuMDA5LDIzLjI0NCwxLjAwOXoiLz48L2c+PC9nPjwvc3ZnPg==" /><!--[if lt IE 9]><img class="mobile-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApklEQVRYR+2WMQ6CUBBEJfZwDqEnEc5k4w3RwAm4hRTYGlBniPEIvF/sJlPv28ns/p8d4MrU/yK1EEdvgEU6QgAvA3yg5m67BgDtwGKAu3QGcuDs3QyAVgAk4UCvEDRQELok1jBOMe7AWwGktmF7jq9SDWyBnR+oyf/zBoAdqKQTkAG3HA0wSwUE8KBPcXxK03DgqQDmUAgnh7D8aW8Gn+JtDdHCAb4AUCtc5XbfEAAAAABJRU5ErkJggg==" /><![endif]-->');
                $('.menu .mobile-img').click(function() {
                    $(this).next().slideToggle(600);
                });
            }
        });

        $(document).ready(function() {
            $('.form .form-group input, .form .form-group textarea').attr('spellcheck', 'false');
            $('.form .form-group').is(function() {
                var t = $(this).find('label').html(),
                    n = $(this).find('input[note], textarea[note]').attr('note');
                if (t === undefined) {
                    $(this).find('input, textarea').after('<div class="form-label"></div>');
                } else {
                    if (n == undefined) {
                        $(this).find('input, textarea').after('<div class="form-label">' + t + '</div>');
                    } else {
                        $(this).find('input, textarea').after('<div class="form-label">' + t + '<div class="form-label-alert">' + n + '</div></div>');
                    }
                }
                $(this).find('label').remove();
            });

            $('.form .form-group input[type="checkbox"]').is(function() {
                $(this).after('<div class="input-checkbox"><div class="input-checkbox-in">CB</div></div>');
                $(this).hide();
            });
            $('.form .form-group .input-checkbox').click(function() {
                var f = $(this).find('.input-checkbox-in'),
                    ft = f.attr('data-tick');
                if (ft === undefined) {
                    f.css('display', 'inline-block');
                    f.attr('data-tick', '');
                    $(this).prev().attr("checked", "");
                } else {
                    f.removeAttr('data-tick');
                    f.css('display', 'none');
                    $(this).prev().removeAttr("checked");
                }
            });

            $('.form .form-group input[type="radio"]').is(function() {
                var g = $(this).attr('value');
                if (g === undefined) {
                    g = '';
                }
                $(this).after('<span class="form-radio-value">' + g + '</span>');
            });
        });

        $(document).ready(function() {
            $('.modal-anchor').is(function() {
                var h = $(this).attr('href');
                $(h).append('<a href="#" class="modal-close">X</a>');
            });
            $('.modal-anchor').click(function(e) {
                var h = $(this).attr('href'),
                    q = $(this).attr('modal-dp'),
                    g = $('.modal-fix').html();
                $(h).slideToggle(200);
                if (g === undefined) {
                    $('body').append('<div class="modal-fix"></div>');
                } else {
                    $('.modal-fix').remove();
                }
                $('.modal-fix, .modal-close').click(function(e) {
                    $('.modal-fix').remove();
                    $(h).hide();
                    e.preventDefault();
                    return false;
                });
                e.preventDefault();
                return false;
            });
        });

        $('.tooltip').is(function() {
            var q = $(this).attr('wrd-tooltip'),
                n = $(this).attr('wrd-tooltip-name'),
                g = $(this).attr('wrd-tooltip-place');
            if (n !== undefined) {
                if (q === undefined) {} else {
                    if (g !== undefined) {
                        if (g === "top") {
                            var g1 = $(this).height() + 45;
                            $(this).after('<span style="margin-top:-' + g1 + 'px;" data-tooltip="' + n + '" class="tooltip-content ' + g + '">' + q + '</span>');
                        } else {
                            $(this).after('<span data-tooltip="' + n + '" class="bottom tooltip-content ' + g + '">' + q + '</span>');
                        }
                    } else {
                        $(this).after('<span data-tooltip="' + n + '" class="tooltip-content">' + q + '</span>');
                    }
                }
                $('[data-tooltip="' + n + '"]').hide();
            } else {}
        });

        $(document).ready(function() {
            var e = $('.scrollPage'),
                s = e.attr('wrd-scrollPage-speed'),
                z = e.find('.scrollPage-menu'),
                w = z.attr('menu-fixed'),
				g = z.find('li'),
                x = e.find('.scrollPage-content'),
				q = '';
            if (undefined === s) {
                s = 1000;
            } else {
				s = s * 1;
			}

            if ('true' == w) {
                q = z.outerHeight(true) * 1;
            } else {
                q = 0;
            }

            $(g.children('a')).attr('href', 'javascript:void(0)');
            $(g).click(function(event) {
                event.preventDefault();
                $(g).removeClass('scrollPage-li-active');
                $(this).addClass('scrollPage-li-active');
                var k = $(this).find('a').attr('data-anchor'),
                    t = $(k).offset().top - q;
                $('html,body').animate({
                    scrollTop: t
                }, s);
                return false;
            });
            $(window).scroll(function() {
                var tt = $(window).scrollTop(),
                    y = e.find('.scrollPage-content'),
                    j = y.children();
                $(j).is(function() {
                    var o = $(this),
                         p = o.offset().top - q;
                    if (p <= tt) {
                        var b = o.attr('id');
                        $(g).removeClass('scrollPage-li-active');
                        $('[data-anchor="#' + b + '"]').parent().addClass('scrollPage-li-active');
                    }
                });
            });
        });

        $(document).ready(function() {
            $('clock').html('<canvas class="clock-face" width="200" height="200">Trình duyệt bạn không hỗ trợ canvas !</canvas>');
            var canvas = document.getElementsByClassName("clock-face");
            var i;
            for (i = 0; i < canvas.length; i++) {
                var ctx = canvas[i].getContext("2d"),
                    radius = canvas[i].height / 2;
                ctx.translate(radius, radius);
                radius = radius * 0.90
                setInterval(drawClock, 1000);

                function drawClock() {
                    drawFace(ctx, radius);
                    drawNumbers(ctx, radius);
                    drawTime(ctx, radius);
                }

                function drawFace(ctx, radius) {
                    var grad;
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
                    grad.addColorStop(0, '#333');
                    grad.addColorStop(0.5, 'white');
                    grad.addColorStop(1, '#333');
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = radius * 0.1;
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
                    ctx.fillStyle = '#333';
                    ctx.fill();
                }

                function drawNumbers(ctx, radius) {
                    var ang;
                    var num;
                    ctx.font = radius * 0.15 + "px arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    for (num = 1; num < 13; num++) {
                        ang = num * Math.PI / 6;
                        ctx.rotate(ang);
                        ctx.translate(0, -radius * 0.85);
                        ctx.rotate(-ang);
                        ctx.fillText(num.toString(), 0, 0);
                        ctx.rotate(ang);
                        ctx.translate(0, radius * 0.85);
                        ctx.rotate(-ang);
                    }
                }

                function drawTime(ctx, radius) {
                    var now = new Date(),
                        hour = now.getHours(),
                        minute = now.getMinutes(),
                        second = now.getSeconds();
                    hour = hour % 12;
                    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
                    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
                    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
                    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
                    second = (second * Math.PI / 30);
                    drawHand(ctx, second, radius * 0.9, radius * 0.02);
                }

                function drawHand(ctx, pos, length, width) {
                    ctx.beginPath();
                    ctx.lineWidth = width;
                    ctx.lineCap = "round";
                    ctx.moveTo(0, 0);
                    ctx.rotate(pos);
                    ctx.lineTo(0, -length);
                    ctx.stroke();
                    ctx.rotate(-pos);
                }
            }
        });

        $(document).ready(function() {
            $('.tag.tag-editor').append('<span class="tag-text-box"><input spellcheck="false" value="" class="tag-text" /><span class="tag-text-reset color-light-blue">x</span></span>');
            $('.tag.tag-editor .tag-sub').append('<span class="tag-sub-close">x</span>');
            $('.tag.tag-editor .tag-text-box .tag-text-reset').click(function() {
                $(this).prev().val('');
            });
            $('.tag.tag-editor .tag-text-box .tag-text').on('keydown', function(e) {
                var event = (e.which || e.keyCode);
                if (event == 13) {
                    var i = $(this).val();
                    $(this).parent().before('<div class="tag-sub">' + i + '<span class="tag-sub-close">x</span></div>');
                    tagEditorClose();
                }
            });
            tagEditorClose();

            function tagEditorClose() {
                $('.tag.tag-editor .tag-sub .tag-sub-close').click(function() {
                    $(this).parent().remove();
                });
            }
        });

        $('.tooltip').hover(function() {
            var n = $(this).attr('wrd-tooltip-name');
            $('[data-tooltip="' + n + '"]').toggle();
        });

        $(document).ready(function() {
            $('.slideshow img').hide();
            $('.slideshow').is(function() {
                var o = $(this).attr('wrd-slideshow-height'),
                    p = $(this).attr('wrd-slideshow-img') * 1;
                if ('undefined' == p || '0' == p) {
                    p = 1;
                }
                $(this).children('img:nth-of-type(' + p + ')').attr('slideshow-active', '');
                if ('undefined' === o) {
                    o = '500px';
                }
                $(this).attr('style', 'height:' + o + ';width:100% !important;');
                $(this).children('img').css('height', o);
            });
            $('.slideshow.control').is(function() {
                var o = $(this).height() / 1.7 + 'px';
                $(this).append('<div class="slideshow-control-prev" style="margin-top:-' + o + ';">&lt;</div><div class="slideshow-control-next" style="margin-top:-' + o + ';">&gt;</div>');
            });
            $('.slideshow.control .slideshow-control-prev').click(function() {
                var e = $(this).parent(),
                    g = e.attr('wrd-slideshow-img') * 1,
                    d = g - 1;
                if (1 !== g) {
                    e.children('img').removeAttr('slideshow-active');
                    e.children('img:nth-of-type(' + d + ')').attr('slideshow-active', '');
                    e.attr('wrd-slideshow-img', d);
                }
            });
            $('.slideshow.control .slideshow-control-next').click(function() {
                var e = $(this).parent(),
                    g = e.attr('wrd-slideshow-img') * 1,
                    d = g + 1;
                if (e.children('img').length !== g) {
                    e.children('img').removeAttr('slideshow-active');
                    e.children('img:nth-of-type(' + d + ')').attr('slideshow-active', '');
                    e.attr('wrd-slideshow-img', d);
                }
            });
            $('.slideshow.auto').is(function() {
                var e = $(this),
                    h = e.children('img'),
                    o = e.attr('wrd-slideshow-speed') * 1,
                    p = e.attr('wrd-slideshow-img') * 1;
                if ('undefined' == o) {
                    o = 5000;
                }
                setInterval(function() {
                    var d = p + 1;
                    h.removeAttr('slideshow-active');
                    e.children('img:nth-of-type(' + d + ')').attr('slideshow-active', '');
                    if (h.length - 1 == p) {
                        p = 0;
                        e.attr('wrd-slideshow-img', '0');
                    } else {
                        p = d;
                        e.attr('wrd-slideshow-img', d);
                    }
                }, o);
            });
        });

        $(document).ready(function() {
            $('.collapse-content').hide();
            $('.collapse-title').click(function() {
                var e = $(this).parent(),
                    a = e.attr('wrd-collaspe-speed');
                if (undefined === a) {
                    a = 800;
                }
                e.find('.collapse-content').slideToggle(a);
            });
        });

        $('.no-click, .not-click').on('click', function(e) {
            return false;
            e.preventDefault();
        });
        $('.no-copy, .not-copy').on('copy', function(e) {
            e.stopPropagation();
            e.preventDefault();
            var cd = e.originalEvent.clipboardData;
            cd.setData("text/plain", "");
        });
        $('.no-select, .not-select').on('select', function(e) {
            e.preventDefault();
            return false;
        });
        $('.no-paste, .not-paste').bind('paste', function(e) {
            e.preventDefault();
        });
        $('.no-contextmenu, .not-contextmenu').on('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        $('.no-cut, .not-cut').on('cut', function(e) {
            e.preventDefault();
            return false;
        });

        $('*[wrd-color]').is(function() {
            var color = $(this).attr('wrd-color');
            $(this).css('color', color);
            $(this).removeAttr('wrd-color');
        });

        $('*[wrd-width]').is(function() {
            var width = $(this).attr('wrd-width');
            $(this).css('width', width);
            $(this).removeAttr('wrd-width');
        });

        $('*[wrd-height]').is(function() {
            var height = $(this).attr('wrd-height');
            $(this).css('height', height);
            $(this).removeAttr('wrd-height');
        });

        $('*[wrd-bg]').is(function() {
            var bg = $(this).attr('wrd-bg');
            $(this).attr('style', 'background: url(' + bg + ')');
            $(this).removeAttr('wrd-bg');
        });

        $('*[wrd-bgcolor]').is(function() {
            var bgcolor = $(this).attr('wrd-bgcolor');
            $(this).css('background-color', bgcolor);
            $(this).removeAttr('wrd-bgcolor');
        });

        $('*[wrd-opacity]').is(function() {
            var opacity = $(this).attr('wrd-opacity');
            $(this).css('opacity', opacity);
            $(this).removeAttr('wrd-opacity');
        });

        $('*[wrd-font-family]').is(function() {
            var fontfamily = $(this).attr('wrd-font-family');
            $(this).css('font-family', fontfamily);
            $(this).removeAttr('wrd-font-family');
        });

        $('*[wrd-font-size]').is(function() {
            var fontsize = $(this).attr('wrd-font-size');
            $(this).css('font-size', fontsize);
            $(this).removeAttr('wrd-font-size');
        });

        $('*[wrd-font-weight]').is(function() {
            var fontweight = $(this).attr('wrd-font-weight');
            $(this).css('font-weight', fontweight);
            $(this).removeAttr('wrd-font-weight');
        });

        $('*[wrd-font-style]').is(function() {
            var fontstyle = $(this).attr('wrd-font-style');
            $(this).css('font-style', fontstyle);
            $(this).removeAttr('wrd-font-style');
        });

        $('*[wrd-margin]').is(function() {
            var margin = $(this).attr('wrd-margin');
            $(this).css('margin', margin);
            $(this).removeAttr('wrd-margin');
        });

        $('*[wrd-margin-left]').is(function() {
            var marginleft = $(this).attr('wrd-margin-left');
            $(this).css('margin-left', marginleft);
            $(this).removeAttr('wrd-margin-left');
        });

        $('*[wrd-margin-right]').is(function() {
            var marginright = $(this).attr('wrd-margin-right');
            $(this).css('margin-right', marginright);
            $(this).removeAttr('wrd-margin-right');
        });

        $('*[wrd-margin-top]').is(function() {
            var margintop = $(this).attr('wrd-margin-top');
            $(this).css('margin-top', margintop);
            $(this).removeAttr('wrd-margin-top');
        });

        $('*[wrd-margin-bottom]').is(function() {
            var marginbottom = $(this).attr('wrd-margin-bottom');
            $(this).css('margin-bottom', marginbottom);
            $(this).removeAttr('wrd-margin-bottom');
        });

        $('*[wrd-marg]').is(function() {
            var marg = $(this).attr('wrd-marg');
            $(this).css('margin', marg);
            $(this).removeAttr('wrd-marg');
        });

        $('*[wrd-marg-left]').is(function() {
            var margleft = $(this).attr('wrd-marg-left');
            $(this).css('margin-left', margleft);
            $(this).removeAttr('wrd-marg-left');
        });

        $('*[wrd-marg-right]').is(function() {
            var margright = $(this).attr('wrd-marg-right');
            $(this).css('margin-right', margright);
            $(this).removeAttr('wrd-marg-right');
        });

        $('*[wrd-marg-top]').is(function() {
            var margtop = $(this).attr('wrd-marg-top');
            $(this).css('margin-top', margtop);
            $(this).removeAttr('wrd-marg-top');
        });

        $('*[wrd-marg-bottom]').is(function() {
            var margbottom = $(this).attr('wrd-marg-bottom');
            $(this).css('margin-bottom', margbottom);
            $(this).removeAttr('wrd-marg-bottom');
        });

        $('*[wrd-padding]').is(function() {
            var padding = $(this).attr('wrd-padding');
            $(this).css('padding', padding);
            $(this).removeAttr('wrd-padding');
        });

        $('*[wrd-padding-left]').is(function() {
            var paddingleft = $(this).attr('wrd-padding-left');
            $(this).css('padding-left', paddingleft);
            $(this).removeAttr('wrd-padding-left');
        });

        $('*[wrd-padding-right]').is(function() {
            var paddingright = $(this).attr('wrd-padding-right');
            $(this).css('padding-right', paddingright);
            $(this).removeAttr('wrd-padding-right');
        });

        $('*[wrd-padding-top]').is(function() {
            var paddingtop = $(this).attr('wrd-padding-top');
            $(this).css('padding-top', paddingtop);
            $(this).removeAttr('wrd-padding-top');
        });

        $('*[wrd-padding-bottom]').is(function() {
            var paddingbottom = $(this).attr('wrd-padding-bottom');
            $(this).css('padding-bottom', paddingbottom);
            $(this).removeAttr('wrd-padding-bottom');
        });

        $('*[wrd-padd]').is(function() {
            var padd = $(this).attr('wrd-padd');
            $(this).css('padding', padd);
            $(this).removeAttr('wrd-padd');
        });

        $('*[wrd-padd-left]').is(function() {
            var paddleft = $(this).attr('wrd-padd-left');
            $(this).css('padding-left', paddleft);
            $(this).removeAttr('wrd-padd-left');
        });

        $('*[wrd-padd-right]').is(function() {
            var paddright = $(this).attr('wrd-padd-right');
            $(this).css('padding-right', paddright);
            $(this).removeAttr('wrd-padd-right');
        });

        $('*[wrd-padd-top]').is(function() {
            var paddtop = $(this).attr('wrd-padd-top');
            $(this).css('padding-top', paddtop);
            $(this).removeAttr('wrd-padd-top');
        });

        $('*[wrd-padd-bottom]').is(function() {
            var paddbottom = $(this).attr('wrd-padd-bottom');
            $(this).css('padding-bottom', paddbottom);
            $(this).removeAttr('wrd-padd-bottom');
        });

        $.fn.wrd = function(g, v, a) {
            if (typeof g == "object") {
                var f_a = g.func;
                return this.each(function() {
                    var elem = $(this);
                    if (g.func !== undefined) {
                        elem.is(function() {
                            eval('$(' + f_a + ');');
                        });
                    }
                    if (g.event !== undefined) {
                        if (g.event.click !== undefined) {
                            elem.click(function() {
                                eval('$(' + f_a + ');');
                            });
                        }
                        if (g.event.hover !== undefined) {
                            elem.hover(function() {
                                eval('$(' + f_a + ');');
                            });
                        }
                        if (g.event.load !== undefined) {
                            elem.load(function() {
                                eval('$(' + f_a + ');');
                            });
                        }
                    }
                });
            }
            var z = ('number' || 'string' || 'boolean');
            if ((typeof g == z) && (typeof v == z) && (typeof a == z)) {
                var elem = $(this);
                if (g == 'css') {
                    elem.css(v, a);
                }
                if (g == 'attr') {
                    elem.attr(v, a);
                }
                if (g == 'copy') {
                    wrdcopy(v);
                }
            }
        };
    }(jQuery));
}

function wrdcopy(t) {
    var textToClipboard = t,
        success = true;
    if (window.clipboardData) {
        window.clipboardData.setData("Text", textToClipboard);
    } else {
        var forExecElement = CreateElementForExecCommand(textToClipboard);
        SelectContent(forExecElement);
        var supported = true;
        try {
            if (window.netscape && netscape.security) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            success = document.execCommand("copy", false, null);
        } catch (e) {
            success = false;
        }
        document.body.removeChild(forExecElement);
    }

    if (success) {} else {}
}

function CreateElementForExecCommand(textToClipboard) {
    var forExecElement = document.createElement("div");
    forExecElement.style.position = "absolute";
    forExecElement.style.left = "-10000px";
    forExecElement.style.top = "-10000px";
    forExecElement.textContent = textToClipboard;
    document.body.appendChild(forExecElement);
    forExecElement.contentEditable = true;

    return forExecElement;
}

function SelectContent(element) {
    var rangeToSelect = document.createRange();
    rangeToSelect.selectNodeContents(element);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(rangeToSelect);
}