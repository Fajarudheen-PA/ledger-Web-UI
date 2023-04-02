$(window).on("scroll", function() {
    if ($(window).scrollTop() > 140) {
        $(".ledger-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $(".ledger-header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});