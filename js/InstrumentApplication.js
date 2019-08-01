"use strict";

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();

    //==========================Writing it out the long way===============================

    const pressed = [];
    const serenade = 'afddg';

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
        const pressed1 = [];
        const song = 'dafdaf';
        window.addEventListener('keyup', (e) => {
            //console.log(e.key);
            pressed1.push(e.key); //pushes e.keys to pressed Array
            pressed1.splice(song.length - 1, pressed1.length - song.length); //splits them apart
            if (pressed1.join('').includes(song)) { //checks if pressed Array contains serenade
                let audio = new Audio("sounds/43-Ocarina-Song-of-Time.mp3");//define a new audio
                audio.play();
                console.log('You played: Song of Time!')
                //for some reason after playing song of time pressing f alone afterward triggers this song
            }
        });

        const pressed2 = [];
        const song2 = 'gddagdf';
        window.addEventListener('keyup', (e) => {
            //console.log(e.key);
            pressed2.push(e.key); //pushes e.keys to pressed Array
            pressed2.splice(song2.length - 1, pressed2.length - song2.length); //splits them apart
            if (pressed2.join('').includes(song2)) { //checks if pressed Array contains serenade
                let audio = new Audio("sounds/65-Nocturne-Of-Shadow.mp3");//define a new audio
                audio.play();
                console.log('You played: Nocturne of Shadow!')
            }
    });


    //Introduce a Switch/Case for multiple songs

});

