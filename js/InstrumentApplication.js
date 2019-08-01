"use strict";

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();


    const pressed = [];
    const serenade = 'afddg';
    const song1 = 'dafdaf';
    window.addEventListener('keyup', (e) => {
        //console.log(e.key);
        pressed.push(e.key); //pushes e.keys to pressed Array
        pressed.splice(serenade.length - 1, pressed.length - serenade.length); //splits them apart
        if (pressed.join('').includes(serenade)) { //checks if pressed Array contains serenade
            let audio = new Audio("sounds/63-Serenade_Of_Water.MP3");//define a new audio
            audio.play();
            console.log('You played: Serenade of Water!')
        }

    });
        const presseds = [];
        const song = 'dafdaf';
        window.addEventListener('keyup', (e) => {
            //console.log(e.key);
            presseds.push(e.key); //pushes e.keys to pressed Array
            presseds.splice(song.length - 1, presseds.length - song.length); //splits them apart
            if (presseds.join('').includes(song)) { //checks if pressed Array contains serenade
                let audio = new Audio("sounds/43-Ocarina-Song-of-Time.mp3");//define a new audio
                audio.play();
                console.log('You played: Song of Time!')
            }
        });


    //Introduce a Switch/Case for multiple songs dafdaf'

});

