import $ from "jquery";
import 'slick-carousel';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/datepicker';

window.jQuery = window.$ = $; // importent for apear error "jQuery is not defined"

$('.slick-carousel').slick({
    arrows: true,
    dots: true,
    speed: 500
});

$( "#slider-two-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ]
});

$( "#slider-range" ).slider({
    range: "max",
    min: 1,
    max: 100,
    value: 20
  });

$( "#accordion" ).accordion();
$( "#datepicker" ).datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  });


// $(".ui-accordion-header.ui-corner-top.ui-state-default.ui-accordion-icons").click(function(){
//     let idActiveAccordion = $(this).attr('id');
//     console.log(idActiveAccordion);
//     $("#"+idActiveAccordion).next().css("height", "108px");
//     console.log($("#"+idActiveAccordion).next());
// });

