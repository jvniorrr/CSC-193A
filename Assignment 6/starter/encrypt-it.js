/*
 * Starter file
 */
(function () {
    'use strict';

    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener('load', init);
    // btn to encrypt
    const encryptButton = document.querySelector('#encrypt-it');

    // text area which is to be encrypted
    const text = document.querySelector('#input-text');

    // result area which is to be encrypted
    const result = document.querySelector('#result');
    const resetButton = document.querySelector('#reset');
    // 2.3 Add an event listener to the the "Encrypt-It!" button such that when clicked, your handleClick function is called.
    encryptButton.addEventListener('click', encryptInput);
    resetButton.addEventListener('click', handleReset);

    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
        // Note: In this function, we usually want to set up our event handlers
        // for UI elements on the page.
        console.log('loaded');

        // 1.2 Include the line of code into the file: console.log("Window loaded!"); such that the message is logged to the console when the page is loaded
        console.log('Window loaded!');
    }

    function encryptInput(e) {
        // 2.2 Move your console statement inside a new function handleClick.
        console.log('Button clicked!');

        const newVal = shiftCipher(text.value);

        result.innerHTML = newVal;
    }

    function handleReset() {
        result.innerHTML = '';
        text.value = '';
    }

    function shiftCipher(text) {
        text = text.toLowerCase();
        let result = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] < 'a' || text[i] > 'z') {
                result += text[i];
            } else if (text[i] == 'z') {
                result += 'a';
            } else {
                const SHIFT = 1;
                // letter is between 'a' and 'y'
                let letter = text.charCodeAt(i);
                let resultLetter = String.fromCharCode(letter + SHIFT);
                result += resultLetter;
            }
        }
        return result;
    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
})();
