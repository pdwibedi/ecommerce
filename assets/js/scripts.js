$(document).ready(function(e) {

    $ = jQuery;

    //Login popup
    $(".toggleLoginPopup").click(function() {
        var chk = $(this).next().css("display");
        if(chk == "none") {
            $(this).next(".login").show();
            $(this).next().stop(true, true).slideDown();
        } else {
            $(this).next(".login").hide();
            $(this).next().stop(true, true).slideUp();
        }
    });

    // Lightbox
    $("a.zoom").prettyPhoto({
        social_tools: ''
    });

    $("nav ul li").hover(function(){
        $(this).find("a").addClass("active");
        $(this).children('ul').stop(true, true).fadeIn(300);
    }, function(){
        $(this).find("a").removeClass("active");
        $(this).children('ul').stop(true, true).fadeOut(400);
    });

    

    $('footer .back-top a').click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.sorting-bar .sorting-btn a').hover(
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 -29px)"},
                {duration:500}
            )
        },
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 0)"},
                {duration:500}
            )
        }
    );

    

    $('footer .social-icon a').hover(
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 -20px)"},
                {duration:500}
            )
        },
        function(){
            $(this).stop().animate(
                {backgroundPosition: "(0 0)"},
                {duration:500}
            )
        }
    );

    $.extend($.fx.step,{
        backgroundPosition: function(fx) {
            if (fx.pos === 0 && typeof fx.end == 'string') {
                var start = $.css(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

            function toArray(strg){
                strg = strg.replace(/left|top/g,'0px');
                strg = strg.replace(/right|bottom/g,'100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
            }
        }
    });


    $(".shopping-cart li a").click(function(e){
        e.preventDefault();
        $(this).parents('ul').stop(true,true).fadeOut(100);
    });


    $('#thumbs a').click(function() {
        $('#carousel').trigger('slideTo', '#' + this.href.split('#').pop() );
        $('#thumbs a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

});