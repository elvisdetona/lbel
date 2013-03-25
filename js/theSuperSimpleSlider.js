// theSuperSimpleSlider JQuery Plugin
;(function($){
    var opts;
    var methods = {
        init: function(options)
        {
            opts = $.extend({
                'slideshow': '> .slideshow:eq(0)'
                ,'speedTransition': 500
                ,'total': 0
                ,'pos': 0
                ,'humanPos': 1
                ,'moving': false
            }, options);

            return this.each(function(){
                methods.superSimple($(this));
            });
        }
        ,superSimple: function(self)
        {
            opts.$slideshow = self.find(opts.slideshow);
            opts.total = opts.$slideshow.children().length;
            opts.theWidth = self.width();
            opts.$slideshow.css('width', (opts.total * opts.theWidth));
        }
        ,move: function(pos)
        {
            if(!opts.moving)
            {
                opts.moving = true;
                opts.pos = pos - 1;
                opts.humanPos = pos;
                opts.$slideshow.animate({'left': (-opts.pos * opts.theWidth)}, opts.speedTransition, "swing", function(){
                    opts.moving = false;
                });
            }
        }
        ,getOpt: function(opt)
        {
            return opts[opt];
        }
        ,destroy: function()
        {
            return this.each(function(){
                $(this).find(opts.slideshow).removeAttr('style');
            });
        }
    };

    $.fn.theSuperSimpleSlider = function( method )
    {
        if ( methods[method] )
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        else if ( typeof method === 'object' || ! method )
            return methods.init.apply( this, arguments );
        else
            $.error( 'Method ' +  method + ' does not exist' ); 
    };
})( jQuery );

