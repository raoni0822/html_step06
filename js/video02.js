var swc = true;


// $('.mainVisual .controls .pause').on('click', function () {
//     $(this).toggleClass('on')
//     if (swc) {
//         $('.mainVisual video').trigger('pause')
//     }
//     else {
//         $('.mainVisual video').trigger('play')
//     }

//     //스위치 만들기.. 참거짓을 만들기
//     swc = !swc;

// });

// $('.mainVisual .controls .pause').on('click', function () {
//     $(this).toggleClass('on')
//     if ($(this).hasClass('on')) {
//         $('.mainVisual video').trigger('pause')
//     }
//     else {
//         $('.mainVisual video').trigger('play')
//     }

// });

$('.mainVisual .controls .pause').on('click', function () {
    $(this).toggleClass('on')

    $(this).hasClass('on') ?
        $('.mainVisual video').trigger('pause') :
        $('.mainVisual video').trigger('play');


});



