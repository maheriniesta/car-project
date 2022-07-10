// login
var loguserName = document.getElementById('loguserName');
var logpassword = document.getElementById('logpassword');
var addBtn = document.getElementById('loginclick');
var loginputs = document.getElementsByClassName('loginputs');
var users = [];
var udemo = document.getElementById("login");
var logBtn = document.getElementById("logBtn");
var Dashboard = document.getElementById("Dashboard");
addBtn.onclick = function() {
    console.log("h");
    addUser();
    uclearForm();

}


function addUser() {
    console.log("e");
    var user = {
        uuserName: loguserName.value,
        upassword: logpassword.value
    }
    users.push(user);
    if (user.uuserName == 'admin' && user.upassword == "admin") {
        console.log("true");
        Dashboard.style.display = "block";
    } else {
        console.log("false");
        Dashboard.style.display = "none";
    }
    udemo.style.display = "none";
    logBtn.innerHTML = "LogOut";
}

function uclearForm() {
    for (var i = 0; i < loginputs.length; i++) {

        loginputs[i].value = "";
    }
}
// logBtn


logBtn.onclick = function() {

    if (users.length == 0) {
        console.log("l");
        window.location.href = '#login';
    } else {
        console.log("m");
        users.pop();
        udemo.style.display = "block";
        Dashboard.style.display = "none";
        logBtn.innerHTML = "Login";

    }
}


const key = '35908f11137ee0024640d2e35cd2db0a';
if (key == '35908f11137ee0024640d2e35cd2db0a') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }
}
window.onload = function() {
    weatherBallon(6167865);
}
let aboutTop = $("#about").offset().top;
$(window).scroll(function() {
    let topScroll = $(window).scrollTop();
    if (topScroll >= aboutTop - 120) {
        $(".navbar").css({ "backgroundColor": "rgba(2, 126, 126,.8)", "transition": "1s" });
        $(".btn--up").fadeIn(2000);
    } else {
        $(".navbar").css({ "backgroundColor": "transparent", "transition": "1s" });
        $(".btn--up").fadeOut(2000);


    }
})

$(".btn--up").click(function() {
    $(window).scrollTop(0);
})

// $("#aboutt").click(function(){
//     let aboutScrool =$("#about").offset().top;
//     $("html,body").animate({scrollTop:aboutScrool},3000);
// })
// $("#searvicess").click(function(){
//     let sarvicesTob = $("#services").offset().top;
//     $("html,body").animate({scrollTop:sarvicesTob},3000);
// })

$(document).ready(function() {
    $("#loding .sk-folding-cube").fadeOut(3000);
    $("#loding ").fadeOut(3000, function() {
        $("body").css("overflow", "auto")
    });


})

$(document).ready(function() {
    $(".skitter-large").skitter({

        controls: true,
        enable_navigation_keys: true,
        progressbar: true,


    });
    $('.skitter-large ').skitter('setAnimation', 'circlesRotate')
});
var owl = $('.owl-carousel');
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });

    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
});