(function ($) {

    $.fn.kpReturntop = function (options) {

        var config = {

        };

        if ($.isPlainObject(options)) {
            $.extend(true, config, options);
        }

        var returnToTop = $('<div></div>').appendTo(this).css({
            width:50,
            height:50,
            border:'1px solid #ddd',
            fontSize:20,
            textAlign:'center',
            background:'#999',
            position:'absolute',
            right:10,
            display:'none'

        }).html('返回顶部');




        $(window).on('scroll',function(){

            var clientHeight = $(window).height();

            var scrollTop = $(window).scrollTop();

            if(scrollTop > 100){
                returnToTop.css({display:'block'});
            }else{
                returnToTop.css({display:'none'});
            }

            returnToTop.stop(true).animate({
                top:clientHeight+scrollTop - returnToTop.height() - 20
            }).on('click',function(){
                $('body,html').stop(true).animate({
                    scrollTop:0
                });
            });
        });

    }


})(jQuery);