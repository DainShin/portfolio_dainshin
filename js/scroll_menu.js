$(function(){ // script가 body 위에 로드되어있으므로

    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');

    console.log($menu);  // 배열로 나열되어 있음

    /*
        $menu를 클릭하면 해당 요소에만 class명 on이 추가되도록
    */

    $menu.click(function (x) {
        x.preventDefault(); // 기본 기능을 막는다(링크로 이동 막기)

        /*
        // 방법1
        $menu.removeClass('on');
       $(this).addClass('on'); // 내가 클릭한 그 요소만

        */

        // 방법2
        // $(this).addClass('on').siblings().removeClass('on');

        var idx = $(this).index(); // 내가 클릭한 그 요소의 인덱스 번호를 가져옴
        var section = $contents.eq(idx);  // 컨텐츠 배열에 들어있는 내가 클릭한 요소를 가져옴. 즉 우리가 보고싶은 컨텐츠

        // 선택자.offset().top;  --> 각 섹션이 현재 화면을 기준으로 상다에서의 거리
        // (ex) 2번째 컨텐츠 클릭시 1번시작 부터 2번시작까지 거리
        var sectionDistance = section.offset().top;

        // A.scrollTop() : A요소의 스크롤양을 확인
        // html 자체에 스크롤 양 주기( Scroll 양을 각 섹션의 양만큼)
        $('html,body').stop().animate({scrollTop:sectionDistance});
    });

    /*
        윈도우 스크롤이 생기면
            $contents 마다 할일
                각각의 화면 상단에서의 거리 sectionDistance 보다
                스크롤양이 많은지 적은지
                    많다면 각용소마다 순번 변수명 idx 저장
                    그 순번에 해당하는 메뉴에만 클래스명 on 추가
     */

    $(window).scroll(function() {
        $contents.each(function() {  // contents의 각 요소마다 할일
           if($(this).offset().top <= $(window).scrollTop()) {
               var idx = $(this).index();
               $menu.removeClass('on');
               $menu.eq(idx).addClass('on');

           }

        });
    });


});


