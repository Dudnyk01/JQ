(function ($)
  { "use strict"
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });
/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });
  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
//Tabs
$('.nav-item').on('click' , function(){
  let currTab = $(this).index();
  $('.nav-item').removeClass('active');
  $(this).addClass('active')
  // Window //.tab-pane
  $('.tab-pane').removeClass('active').removeClass('show');
  $('.tab-pane').eq(currTab).addClass('active').addClass('show');
})
// Parallax
let scene = $('#scene').get(0);
let parallaxInstance = new Parallax(scene);
////////
// Started With Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 750,
  stopOnLastSlide: false,
  autoplay: {
    delay: 2000
  }
});
// Hamburger menu
$('.slicknav_btn').on('click' , function(){
  $('.main-menu').toggle();
})
// Form
$.validator.addMethod('regex' , function(value , element, regexp){
  let regExsp = new RegExp(regexp);
  return this.optional(element) || regExsp.test(value)
}, 'please check your input');

function valEl(el) {
  el.validate({
    rules: {
      firstName:{
        required : true,
        regex : "[A-Za-z]{1,32}"
      },
      email: {
        required : true,
        email : true
      },
      phone: {
        required : true,
        digits: true,
        minlength : 10,
        maxlength : 11,
        regex : "[0,9]"
      }
  },
  messages : {
    firstName : 'Введите имя правильно',
    email : 'Введите Ваш E-mail',
    phone : 'Введите Ваш телефон коректно'
   
  },

// Проверка отправки формы
submitHandler: function (form) {
  $('#preloader-active').fadeIn();
  let $form = $(form);
  let $formID = $(form).attr('id');
  switch ($formID) {
    case 'form-user':
      $.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize(),
        })
        .always(function () {
        console.log('Always');
        setTimeout(function(){
          $form.trigger('reset');
          $('#preloader-active').fadeIn();
        }, 1300);
        setTimeout(function(){
          $('#preloader-active').fadeOut();

        }, 1300);
        
        });
      break;
    case 'form-book':
      $.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize()
        })
        .done(function () {
          console.log('Success');
        })
        .fail(function () {
          console.log('Fail');
        })
        .always(function () {
          console.log('Always');
          setTimeout(function () {
            $form.trigger('reset');
          }, 1000);
          setTimeout(function () {
            $('#preloader-active').fadeOut();
          }, 1600);
        });
      break;
  }
  return  false;
}
//---------------------------------------------}) 
})
}
 




$('.js-form').each(function() {
  valEl($(this))
})

// Запускаем механизм валидации форсы, если у нас класс js-form



//---------------------------------------
// modal-window

  $('.header-btn').on('click' , function(){
      $('.wrapper-modal').addClass('active')
      
  }),
  $('#ovarley').on('click' , function(){
      $('.wrapper-modal').removeClass('active')
  })

})(jQuery);
