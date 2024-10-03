$(document).ready(function() {
    // Animate progress bar (merge process)
    $(".progress-fill").animate({
        width: "100%"
    }, 4000, function() {
        $(".progress-message").text('Merge completed successfully!');
    });

    // Countdown Timer
    const weddingDate = new Date("Nov 14, 2024 10:00:00").getTime();

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        if (timeLeft < 0) {
            clearInterval(countdown);
            $('#countdown').text("It's time for the wedding!");
        }
    }, 1000);
});
