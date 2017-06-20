function resizeIframe(obj) {
    obj.style.height = (screen.availHeight - 180)+ 'px';
}

$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('#nav').toggle(500);
    });
    $('#home').click(function(){
        ChangeContent('home')
    });
    $('#cameras').click(function(){
        ChangeContent('cameras')
    });
    $('#detected').click(function(){
        ChangeContent('detected')
    });
    $('#login').click(function(){
        ChangeContent('login')
    });
    $('#mobile_home').click(function(){
        ChangeContent('home')
    });
    $('#mobile_cameras').click(function(){
        ChangeContent('cameras')
    });
    $('#mobile_detected').click(function(){
        ChangeContent('detected')
    });
    $('#mobile_login').click(function(){
        ChangeContent('login')
    });
});


function ChangeContent(pageName) {
    switch (pageName) {
        case "home":
            document.getElementById("content").src = "resurces/home.html";
            break;
        case "cameras":
            document.getElementById("content").src = "resurces/cameras.html";
            break;
        case "detected":
            document.getElementById("content").src = "resurces/detected_objects.html";
            break;
        case "login":
            document.getElementById("content").src = "resurces/login.html";
            break;
    }
}






