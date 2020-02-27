
let element = document.querySelector('#writing_text');

var typed = new Typed( element, {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 30,
    backSpeed: 30,
    bindInputFocusEvents: true,
    loop: true,
    stringsElement: null,
    contentType: 'text'
});