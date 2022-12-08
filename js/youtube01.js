$('#main_video').YTPlayer(
    {
        videoURL: 'https://youtu.be/Dxca41EhMb8',
        containment: '.video_wrap',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    }
);

$('.pause').on('click', function () {
    $('#main_video').YTPPause();
})

$('.play').on('click', function () {
    $('#main_video').YTPPlay();
})