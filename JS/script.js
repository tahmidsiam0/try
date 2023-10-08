$(document).ready(function(){
     $('.click-drink').click(function(){
       $('.spcl').fadeIn();
    });
    $('.click-meat').click(function(){
        $('.spcl').slideUp();
     });
     $(window).scroll(function(){
        let scrl = $(this).scrollTop();
        let scrl2 = $(this).scrollTop();
        console.log(scrl)
        if (scrl>96){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
        if (scrl2>=0){
            $('.aaaa').addClass('active');
        }
        if (scrl2>1133){
            $('.vvvv').addClass('active');
            $('.aaaa').removeClass('active');
        }
        else{
            $('.vvvv').removeClass('active');
        }
        if (scrl2>3055){
            $('.bbbb').addClass('active');
            $('.vvvv').removeClass('active');
        }
        else{
            $('.bbbb').removeClass('active');
        }
        if (scrl2>5891){
            $('.cccc').addClass('active');
            $('.bbbb').removeClass('active');
        }
        else{
            $('.cccc').removeClass('active');
        }
     });
});