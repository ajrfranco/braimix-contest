
//------------------------------------------------
//               VUE INSTACE
//------------------------------------------------

var app;
app = new Vue({
    el: '#contestApp',
    data: {
        emptyStateShow: true,
        step: "I",
        subStep: "a"
    },
    methods: {
        goAhead: function (step, substep) {
            app.step = step;
            app.subStep = substep;
        },
        generateConf:  function () {
            generateConfetti(50);
        },
        scrollToSection: function (id) {
            $("body, html").animate({scrollTop: $("#contest-ranking-view").find($("#" + id)).position().top - 170}, 800);
        },
        generateClock: function () {

            app.emptyStateShow = false;

            setTimeout(function () {

                $('#counter-pg').circleProgress({
                    value: 0.6,
                    startAngle: 1.55,
                    size: 38,
                    thickness: 3,
                    emptyFill: "#6C6CC2",
                    lineCap: 'round',
                    fill: {
                        color: ["#00d5a1"]
                    }
                });

                $("[data-toggle=tooltip]").tooltip({
                    trigger: 'hover'
                }).tooltip('hide');

            }, 10);
        }
    }
});

//------------------------------------------------
//              CONFETTI CODE
//------------------------------------------------

$(document).ready(function(){
    generateConfetti(50);
});
$confettiColors = ["yellow", "blue", "red", "yellow"];
function generateConfetti (quantity) {

    var createConfetti = function (index, width, color) {
        $('<div class="confetti-' + index + ' ' + color + '"></div>').css({
            "width": width + "px",
            "height": width * 0.4 + "px",
            "top": -random(20) + "%",
            "left": random(100) + "%",
            "opacity": random(1) + 0.5,
            "transform": "rotate(" + random(360) + "deg)"
        }).appendTo('#wrapper-conffeti');
    };

    var dropConfetti = function (index) {
        $('.confetti-' + index).animate({
            top: "100%",
            left: "+=" + random(15) + "%"
        }, random(3000) + 3000, function () {
            resetConfetti(index);
        });
    };

    var resetConfetti = function (index) {
        $('.confetti-' + index).animate({
            "top": - random(20) + "%",
            "left": "-=" + random(15) + "%"
        }, 0, function () {
            dropConfetti(index);
        });
    };

    setTimeout(function(){
        for (var index = 0; index < quantity; index++) {
            var width = random(15);
            var color = $confettiColors[Math.ceil(random(3))];
            createConfetti(index, width, color);
            dropConfetti(index);
        }
    }, 1500);
};
function random (max) {
    return Math.random() * max;
};
