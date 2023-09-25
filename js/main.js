$(function () {

    // 토글버튼
    function toggleMenuVisibility() {
        if($(window).width() < 1040) {
            $('.toggle').show();
            $('.main-menu').hide();
        } else {
            $('.toggle').hide();
            $('.main-menu').show();
        }
    }

    toggleMenuVisibility();

    // Mobile Menu
    $(".toggle").click(function() {
        $(".main-menu").slideToggle();
    });

    // 화면 크기 변경 시에 메뉴 상태를 업데이트합니다.
    $(window).resize(function() {
        toggleMenuVisibility();
    });



    // Scroll Event 1
    var skills = $('.skills'),
        langs = $('.langs'),
        timeline = $('.timeline'),
        band = $('.band'),
        offset = 300;

    $(window).scroll(function () {
        var currentSct = $(this).scrollTop();
        var skillsThreshold = skills.offset().top - offset;
        var langsThreshold = langs.offset().top - offset;
        var bandThreshold = band.first().offset().top - offset;

        if (currentSct > skillsThreshold) {
            skills.addClass('active');
        }

        if (currentSct > langsThreshold) {
            langs.addClass('active');
        }

        /*
        if (currentSct > bandThreshold) {
            band.each(function (index) {
                var item = $(this);
                setTimeout(function () {
                    item.addClass('active');
                }, index * 2500); // 200ms 간격으로 순차적으로 클래스 추가
            });
        }
        */

        var timelineThreshold = timeline.offset().top - offset;

        if(currentSct > timelineThreshold) {
            timeline.addClass('active');
        }


    });



    // Scroll Event 2
    var $menu = $('.menu-bar ul li'),
        $contents = $('#contents > section'),
        $contact = $('#contact');

    console.log($menu);


    $menu.click(function (x) {
        x.preventDefault();
        var idx = $(this).index();

        if (idx == 4) {  // If user choose contact menu
            var contactDistance = $contact.offset().top;
            $('html, body').stop().animate({ scrollTop: contactDistance });

        } else {
            var section = $contents.eq(idx);
            var sectionDistance = section.offset().top;
            console.log(sectionDistance);
            $('html, body').stop().animate({ scrollTop: sectionDistance });
        }
    }); // scroll evnet function end

    //
    // $(window).scroll(function() {
    //     $contents.each(function() {
    //         if($(this).offset().top <= )
    //     })
    // })




    WebFont.load({
        google: {
          families: [
            "Montserrat:300,400,700",
            "Raleway:300,400,500,600,700,800",
          ],
        },
      });

      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animate__animated", // animation css class (default is animated)
        offset: 200, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
          $(box).addClass("test"); // box를 jQuery 객체로 만듬
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
      });
      wow.init();



});  // function end

