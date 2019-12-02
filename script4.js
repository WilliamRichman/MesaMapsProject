
$(document).ready(function () {
    var dir = "test/"; // folder location
    var fileextension = ".jpg"; // image format
    var i = "1";

    $(function imageloop() {
        $("<img />").attr('src', dir + i + fileextension).appendTo(".testing");
        if (i == 13) {
            alert('loaded');
        }
        else {
            i++;
            imageloop();
        };
    });
});