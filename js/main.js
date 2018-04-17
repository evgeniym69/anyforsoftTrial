$('#datepicker').datetimepicker({
      timepicker: false,
      format:'d.m.Y',
});

$(".slider-one").owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:5, //Отступ от картино если выводите больше 1
    nav:false, //Отключил навигацию
    smartSpeed:1500, //Время движения слайда
    center: true,
    autoWidth: true,
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1,
      },
      600:{
        items:1
      },
      1300:{
        items:1
      }
    }
  });

 /*$('input[type="range"]').on("input change", function(e){
 e.preventDefault();
   $('.slider-one').trigger('next.owl.carousel');
 });*/

/*var $input = $('input[type="range"]');
var $slider = $('.slider-one');
$slider.data('pos', $input.val());
$input.on("input change", function(e){
  e.preventDefault();
  var pos = $(this).val();
  var prev_pos = $slider.data('pos');
  if (pos > prev_pos) {
    $slider.data('pos', pos).trigger('next.owl.carousel');
  } else if (pos < prev_pos) {
    $slider.data('pos', pos).trigger('prev.owl.carousel');
  }
});*///Перелистывание карусели через input type=range

var $input = $('input[type="range"]');
$input[0].value = 3;

var $slider = $('.slider-one');
$slider.data('pos', $input.val());
$input.on("input change", function(e){
  e.preventDefault();
  var $input = $(this);
  var pos = $input.val();

  if (pos <= 3) {
    pos = 3;
  } else if (pos <= 36) {
    pos = 36;
  } else if (pos <= 66) {
    pos = 66;
  } else {
    pos = 96;
  }

  $input[0].value = pos;

  var prev_pos = $slider.data('pos');
  if (pos > prev_pos) {
    $slider.data('pos', pos).trigger('next.owl.carousel');
  } else if (pos < prev_pos) {
    $slider.data('pos', pos).trigger('prev.owl.carousel');
  }
  $input.css({'background':'-webkit-linear-gradient(left,#03b1af 0%,#03b1af '+pos+'%,#e4e4e4 '+pos+'%, #e4e4e4 100%)'});
}).change();

 /*function range(){
	var val = $('.range').val();
	$('.range').css({'background':'-webkit-linear-gradient(left ,#03b1af 0%,#03b1af '+val+'%,#e4e4e4 '+val+'%, #e4e4e4 100%)'});
 }*///Закрашивание полосы после ползунка


 $('.slider-two').owlCarousel({
    loop: true,
    dots: false,
    smartSpeed:500,
    items: 3,
    nav:true,
    navText:["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
    responsive:{
      0:{
        items:1,
      },
      700:{
        items:2
      },
      1000:{
        items:3
      }
    }
})