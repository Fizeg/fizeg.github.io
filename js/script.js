$(function(){
    var timeout;
    var icon = $('.icon');
    var card = $('.card');
    var forgot = $('.forgot-pass-btn');
    var backLogin = $('.back-login-btn');
    card.flip({
      trigger: 'manual'
    });
    forgot.on( 'click', function() {
        timeout = setTimeout(function(){
            card.addClass('scale');
            icon.addClass('move');
        }, 100);
        timeout = setTimeout(function(){
            card.flip(true);
        }, 1000);
        timeout = setTimeout(function(){
            icon.removeClass('move');
            card.removeClass('scale');
        }, 2100);
        return false;
    }); 
    backLogin.on( 'click', function() {
        timeout = setTimeout(function(){
            card.addClass('scale');
            icon.addClass('move');
        }, 100);
        timeout = setTimeout(function(){
            card.flip(false);
        }, 1000);
        timeout = setTimeout(function(){
            icon.removeClass('move');
            card.removeClass('scale');
        }, 2100);
        return false;
    });
 
});
