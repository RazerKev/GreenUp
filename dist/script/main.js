const $body = $("body");
const $header = $(".page-header");
const $navCollapse = $(".navbar-collapse");
const scrollClass = "scroll";

// ScrollSpy 
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})

$(window).on("scroll", () => {
    if (this.matchMedia("(min-width: 992px)").matches) {
        const scrollY = $(this).scrollTop();
        scrollY > 0 ?
            $body.addClass(scrollClass) :
            $body.removeClass(scrollClass);
    } else {
        $body.removeClass(scrollClass);
    }
});

$(".page-header .nav-link, .navbar-brand").on("click", () => {
    if ($('.hamburger').hasClass("is-active")) {
        $('.hamburger').removeClass("is-active");
        $('.navbar-nav').removeClass("mobile-nav");
    }
})

$(".page-header .nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 71
    }, 600);
});

$('.hamburger').click(function () {
    $(".navbar-nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");

    if ($('.hamburger').hasClass("is-active")) {
        // console.log('It has class');
        $('.hamburger').css({
            'position': 'fixed',
            'right': '0px'
        });
        console.log('V1');
    } else if (!$('.hamburger').hasClass("is-active")) {
        $('.hamburger').css({
            'position': '',
            'right': ''
        });
    }
});

/*
var navbar = document.getElementById("navbar");
var fourcounter = document.getElementById("numcount");
// console.log(fourcounter);

// Gets the height of the element (navbar) with paddding and margin included (1st option for sticky nav)
// var txt = "Elm 1 with Height with padding and border: " + navbar.offsetHeight;
// console.log(txt);
// Same as above comment for the counter cards 
var fourvalue = fourcounter.offsetHeight;
var fourtxt = "Elm 2 with Height with padding and border: " + fourcounter.offsetHeight;
console.log(fourtxt);

var fourcounterV2 = $("#numcount");
console.log(fourcounterV2);

var fourvalue2 = fourcounterV2.offset();
console.log(fourvalue2);

//Gets the height of the user viewport which is 100vh (2nd option for sticky nav)
let intViewportHeight = window.innerHeight;
// Can't pass it into a variable since it become a fixed value everytime
*/

$(document).ready(function () {
    if ($(window).width() > 0) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > window.innerHeight) {
                $('#stickynav').addClass("fixed-top");
                // console.log('This:' + window.innerHeight)
                if ($('.hamburger').hasClass("is-active")) {
                    $('.page-header.fixed-top nav').css({
                        'top': '0',
                        'right': '0'
                    });
                }
                // add padding top to show content behind navbar
                // $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            } else if ($(this).scrollTop() == 0) {
                $('#stickynav').removeClass("fixed-top");

                // remove padding top from body
                $('body').css('padding-top', '0');
            }
        })
    }
}); // end if

// Remove the "4 rows" of carousel on smaller screens
$(document).ready(function () {
    if ($(window).width() < 992) {
        $('.carousel-item.deck2').remove();
        $('.carousel-item.active').removeClass();
        $('#moverow').children().addClass("carousel-item");
        $('div.submain').addClass("active");
        // console.log("This should be removed");
    }
})

// Number Counter when Scoll to It 
var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        console.log("This should be activated");
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 7000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

// Form Control 
function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters = /^[a-zA-Z\s]*$/;
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (n == "" || n == null) {
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }


    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    if (e == "" || e == null) {
        document.getElementById('emailLabel').innerHTML = ('Please enter your email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (s == "" || s == null) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (m == "" || m == null) {
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    } else {
        return true;
    }

}
