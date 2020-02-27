function typeAnimation() {
    Typed.new("#writing-text", {
        strings: [
            "am a beginner front-end Web Developer.", "love everything about code.", "can solve your problems."
        ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 1,
        contentType: 'text',
        callback: function() {
            $("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
        },
        preStringTyped: function() {},
        onStringTyped: function() {}
    });
}

typeAnimation();