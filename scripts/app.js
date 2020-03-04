window.addEventListener('DOMContentLoaded', function(){
    let element = document.querySelector('#writing_text');
    var typed = new Typed( element, {
        strings: ['am a front-end web developer', 'love coding so much', 'am ready to solve your problems'],
        typeSpeed: 30,
        backSpeed: 40,
        // bindInputFocusEvents: true,
        loop: false,
        stringsElement: null,
        contentType: 'text',
        onComplete: function(){
            element.style.color = "#fff";
            element.style.backgroundColor = "#e67e22";
            let cursor = document.querySelector(".typed-cursor");
            cursor.classList.remove("typed-cursor--blink");
        }

    });

    $('[data-scroll]').on('click', function(event){
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset
        }, 700);
    });


});