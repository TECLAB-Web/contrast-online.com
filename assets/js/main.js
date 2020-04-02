$(document).ready(function(){

//      ЛИФТ НА ВЕРХ

    $('.toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $('#home').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    
//      ИСЧЕЗНОВЕНИЕ И ПОЯВЛЕНИЕ ЛИФТА 
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.toTop').fadeIn();
            } 
        else {
            $('.toTop').fadeOut();
            }
    });
    
    
//      СКРОЛЛИНГ ДО ПОЗИЦИИ #   
    $('#services_btn').click(function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#services").offset().top }, 600);
        return false;
    });
    $('#tech_btn').click(function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#technologies").offset().top }, 600);
        return false;
    });
    $('#prices_btn').click(function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#prices").offset().top }, 600);
        return false;
    });
    $('#contacts_btn').click(function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#contacts").offset().top }, 600);
        return false;
    });

//      ОТПРАВКА СООБЩЕНИЯ ЧЕРЕЗ ajax И ФАЙЛ send.php   
    
    
    $("#order_form").submit(function(event){
        event.preventDefault();
        $.ajax({
        type: "POST", 
        url: "send.php", 
        data: $('#order_form').serialize()
        }).done(function(){
            $('#order').modal('hide');
            $('#thanks').modal('show')
        });
        return false;        
    });
    
//    $('#thanks_btn').click(function(){
//        $('#thanks').modal('hide');
//    });
    
    
 //     АКТИВАЦИЯ КНОПКИ ПРИ ЗАПОЛНЕНИИ ОБЯЗАТЕЛЬНОГО ПОЛЯ
    
    $('#name').keyup(function checkParams() {
    var name = $('#name').val();
        
    if(name.indexOf(" ") != -1 || name == '' || name == ' ' ) {
        $('#order_btn').attr('disabled', true);
    } 
        else {
        $('#order_btn').removeAttr('disabled');
        }
     });
    $('#tel').keyup(function checkParams() {
    var phone1 = $('#tel').val();
        
    if(phone1.indexOf("_") != -1 || phone1 == '' ) {
        $('#order_btn').attr('disabled', true);
    } 
        else {
        $('#order_btn').removeAttr('disabled');
        }
     });
    
    
//      СЛАЙДЕР slick    
    
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1
    });
    
    
//      МАСКА ТЕЛЕФОНА
    
    $(function($){
   $("#tel").mask("+38(999)999-99-99");
});
    

    $('.burger').click(function(){
        event.preventDefault;
        $('.menu').toggleClass('hidden');
    });
    
    
    
    
}); 
    //$(document).ready(function(){