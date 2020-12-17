$(function(){
    //top 버튼을 클릭하면 위로 가는 애니메이션
    $('.top').hide();
    
    $('.top').click(function(){
        $('html').animate({scrollTop:0},500);
    });
    
    
    //스크롤하면 header에 .hd를 추가.
    $(window).scroll(function(){
        var winTop=$(window).scrollTop();
        if(winTop>=200){
            $('header').addClass('hd');
            $('.top').fadeIn();
        }else{
            $('header').removeClass('hd');
            $('.top').fadeOut();
        }
        
    });
    
});