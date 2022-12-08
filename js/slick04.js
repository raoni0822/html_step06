$(function () {




    $('.left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slide',
        // vertical: true,: 위로 올라가게 하는 효과
    });

    var barWidth = $('.bar').width();
    console.log(barWidth);


    $('.right_slide').on('init afterChange', function (e, s, c) {
        console.log(s)
        var bb = barWidth / s.slideCount
        $('.bar span').css({ width: bb })
        $('.bar2 span').css({ width: bb })
        $('.bar2 span').css({ width: bb * (c + 1) })
        $('.bar span').css({ left: bb * c })

        $('.num span').text(c ? (c + 1) : 1);
        $('.num strong').text(s.slideCount)
    })
    // (event, slick, crrunt)

    // $('.num span').text(c)


    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.left_slide',
    });

    $('.arrows i:nth-child(1)').on('click', function () {
        $('.left_slide').slick('slickPrev')
    })
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.left_slide').slick('slickNext')
    })
})