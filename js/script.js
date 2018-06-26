$(function(){
    var timeout;
    var icon = $('.icon');
    var card = $('.card');
    var forgot = $('.forgot-pass-btn');
    var backLogin = $('.back-login-btn');
    forgot.on( 'click', function() {
        timeout = setTimeout(function(){
            card.addClass('scale');
            icon.addClass('move');
        }, 100);
        timeout = setTimeout(function(){
           card.addClass('is-flipped');
        }, 500);
        timeout = setTimeout(function(){
            card.removeClass('scale');
        }, 1000);
        timeout = setTimeout(function(){
            icon.removeClass('move');
        }, 2100);
        return false;
    }); 
    backLogin.on( 'click', function() {
        timeout = setTimeout(function(){
            card.addClass('scale');
            icon.addClass('move');
        }, 100);
        timeout = setTimeout(function(){
           card.removeClass('is-flipped');
        }, 500);
        timeout = setTimeout(function(){
            card.removeClass('scale');
        }, 1000);
        timeout = setTimeout(function(){
            icon.removeClass('move');
        }, 2100);
        return false;
    }); 
});