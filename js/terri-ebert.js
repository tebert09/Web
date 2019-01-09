// ==================================================
// Tab hide and show
// ==================================================

$(document).ready(function () {
    $("#tabs .skill").hide(); // Initially hide all tab content
    $("#skill-selector li:first").attr("id", "active"); // Activate first li
    $("#tabs .skill:first").fadeIn(); // Show first tab content
    $('#skill-selector li a').click(function (e) {
        e.preventDefault();
        if ($(this).attr("id") == "active") { // Detect the tab with active class
            return
        } else {
            $("#tabs .skill").hide(); //Hide all tab content
            $("#skill-selector li").attr("id", ""); // Reset id's on li 
            $(this).parent().attr("id", "active"); // Activate the active li
            $($(this).attr('href')).fadeIn(); // Show content for current tab
        }
    });
});