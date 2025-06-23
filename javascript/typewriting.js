
'use strict';

async function typeWriterEffect(el, phrases, options = {}) {
    const {
        typingSpeed = 80,
        deletingSpeed = 50,
        pauseBetween = 4000,
        loop = true
    } = options;

    let phraseIndex = 0;

    while (true) {
        const currentPhrase = phrases[phraseIndex];
        await typeText(el, currentPhrase, typingSpeed);
        await delay(pauseBetween);
        await deleteText(el, deletingSpeed);
        phraseIndex = (phraseIndex + 1) % phrases.length;
        if (!loop && phraseIndex === 0) break;
    }
}

async function typeText(el, text, speed) {
    el.innerHTML = '';
    for (let char of text) {
        el.innerHTML += char;
        await delay(speed);
    }
}

async function deleteText(el, speed) {
    while (el.innerHTML.length > 0) {
        el.innerHTML = el.innerHTML.slice(0, -1);
        await delay(speed);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const el1 = document.getElementById('typewriter1');
    const el2 = document.getElementById('typewriter2');

    if (el1) {
        typeWriterEffect(el1, [
            "Hello World!",
            "Welcome to my site.",
        ]);
    }

    if (el2) {
        typeWriterEffect(el2, [
            "Check out my projects.",
            "Contact me anytime."
        ], {
            typingSpeed: 80,
            deletingSpeed: 50,
            pauseBetween: 3000
        });
    }
});

