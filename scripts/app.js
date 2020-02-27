
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
    }
    // preStringTyped: function() {},
	// onStringTyped: function() {}
});
