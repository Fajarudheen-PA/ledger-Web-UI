$(window).on("scroll", function() {
    if ($(window).scrollTop() > 140) {
        $(".ledger-header").addClass("sticky");
    } else {
        $(".ledger-header").removeClass("sticky");
    }
});