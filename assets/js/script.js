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
        leftArrow: '<i class="bi bi-arrow-left-circle-fill"></i>',
        rightArrow: '<i class="bi bi-arrow-right-circle-fill"></i>'
      }
    });
  });

  $(document).ready(function(){
    $('#return').datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true,
      todayHighlight: true,
      orientation: 'bottom',
      templates: {
        leftArrow: '<i class="bi bi-arrow-left-circle-fill"></i>',
        rightArrow: '<i class="bi bi-arrow-right-circle-fill"></i>'
      }
    });
  });

  const tooltips = document.querySelectorAll('.tt')
  tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
  })