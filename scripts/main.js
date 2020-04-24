$(document).ready(function () {
    // this will disable dragging of all images
    $("img").mousedown(function (e) {
        e.preventDefault()
    });

    // this will disable right-click on all images
    $("body").on("contextmenu", function (e) {
        return false;
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                // window.location.hash = hash;
            });
        } // End if
    });
});