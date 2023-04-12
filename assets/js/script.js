$(window).on("scroll", function() {
    if ($(window).scrollTop() > 140) {
        $(".ledger-header").addClass("sticky");
    } else {
        $(".ledger-header").removeClass("sticky");
    }
});

$(document).ready(function(){
    $('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true,
      todayHighlight: true,
      orientation: 'bottom',
      templates: {
        leftArrow: '<i class="glyphicon glyphicon-chevron-left"></i>',
        rightArrow: '<i class="glyphicon glyphicon-chevron-right"></i>'
      }
    });
  });