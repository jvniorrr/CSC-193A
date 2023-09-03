function biggerFont() {
    document.getElementById('text').style.fontSize = '24pt';

    alert('Hello, world!');
}

function fancyHandler(evt) {
    let text = document.getElementById('text');
    if (evt.target.checked) {
        text.style.fontWeight = 'bold';
        text.style.color = 'blue';
        text.style.textDecoration = 'underline';
        document.getElementById('boring-input').checked = false;
    }
}

function boringHandler(evt) {
    let text = document.getElementById('text');
    if (evt.target.checked) {
        text.style.fontWeight = 'normal';
        text.style.color = 'black';
        text.style.textDecoration = 'none';
        text.style.fontSize = '1em';
        document.getElementById('fancy-input').checked = false;
    }
}

function mooHandler() {
    let text = document.getElementById('text');
    let response = text.value.toUpperCase();

    // get all the sentences into an array (separation with '.')
    let parts = response.split('.');
    // append -Moo to the end of every sentence.
    response = parts.join('-Moo.');
    // set our textarea value to capitalized text with -Moo suffix
    text.value = response;
}
