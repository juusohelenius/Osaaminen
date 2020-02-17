/*global jQuery*/

jQuery(function($){
    
        var _rys = jQuery.noConflict();  
        var $navBar = $('#navigation');
        var navPos = $navBar.offset().top;
        _rys("document").ready(function(){
    
            _rys(window).scroll(function () {
            
                if (_rys(this).scrollTop() >= navPos) {
    
                    _rys('#navigation').addClass("sticky-nav-bar");

                        $('#navigation').data('size','small');  
                    } else {  
    
                        _rys('#navigation').removeClass("sticky-nav-bar");

                        $('#navigation').data('size','big');  
                    }
    
                });  
    
            });
    
    });
    