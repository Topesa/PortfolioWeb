'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 150 * i)
    );

    // setInterval(() => typeWriter(el), 16000);
}

typeWriter(blinkelement);
typeWriter(typeeffect);
