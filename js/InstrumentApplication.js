"use strict";
let songs = 
   [{id: 1, name: 'Serenade of Water', notes: 'afddg'},
    {id: 2, name: 'Nocturne of Shadow', notes: 'gddagdf'},
    {id: 3, name: 'Bolero of Fire', notes: 'fafadfdf' },
    {id: 4, name: 'Requirem of Spirit', notes: 'afafdfa'},
    {id: 5, name: 'Prelude of Light', notes: 'sdsdgs'},
    {id: 6, name: 'Minuet of Forest', notes: 'asdgdg'},
    {id: 7, name: 'Song of Time', notes: 'dafdaf'},
    {id: 8, name: 'Epona Song' , notes: 'sgdsgd'},
    {id: 9, name: 'Song of Storms', notes: 'afsafs'},
    {id: 10, name: 'Saria Song', notes: 'fdgfdg'},
    {id: 11, name: 'Sun Song', notes: 'dfsdfs'},
    {id: 12, name: 'Zelda\'s Lulluaby', notes: 'gsdgsd'},
];

//Shows all the Songs and their respectable Notes
function allSongs(){
for(let a = 0; a < songs.length; a++){
    document.getElementById('goHere').innerHTML += "<div>" + songs[a].name + ", " + "<i>" + songs[a].notes + "</i>" + "</div>";
}
};

//Songs prepared in function format for play()
function sow(){
    let audio = new Audio("sounds/63-Serenade_Of_Water.MP3");
    if(!audio) return;
    audio.play();
}
function ros(){
    let audio = new Audio("sounds/70-Requiem-Of-Spirit.mp3");
    if(!audio) return;
    audio.play();
}
function mof(){
    let audio = new Audio("sounds/58-Minuet-Of-Woods.mp3");
    if(!audio) return;
    audio.play();
}
function sos(){
    //Find Song of Storms  V
    let audio = new Audio("");
    if(!audio) return;
    audio.play();
}

//Function listens for key strokes that match certain sequences and plays that tune
function searchMe(){

    //Made sure to check the sequences with eachother to make sure there is no overlap
    //The songs still play when backspacing the string in the search bar

    let j = document.getElementById('notesHere').value;
    let k = [];
    k.push(j);
    let one = k.includes('afddg');
    let two = k.includes('afafdfa');
    let three = k.includes('asdgdg');
    //Put each k.includes() into a variable to shorten the length of the if statement
    if(one === true){
        console.log("Song 1");
        sow();
        
    }else if(two !== one){
        console.log("Song 2");
        ros();
    }else if(three !== two && three !== one){
        console.log("Song 3");
       mof();
    }else{
        console.log("NO");
    }




    console.log(j);
    console.log(k);
}
console.log(searchMe());




/*
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();

    //==========================Writing it out the long way===============================

    const pressed = [];
    const serenade = list.s1.serenade;

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
    
});

window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    //console.log(e.key); //to find out which keys are being used

    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();
    const pressed1 = [];
    const song = list.s7.songTime;

    window.addEventListener('keyup', (e) => {

        //console.log(e.key);
        pressed1.push(e.key); //pushes e.keys to pressed Array
        pressed1.splice(song.length - 1, pressed1.length - song.length); //splits them apart
        if (pressed1.join('').includes(song)) { //checks if pressed Array contains serenade
            let audio = new Audio("sounds/43-Ocarina-Song-of-Time.mp3");//define a new audio
             audio.play();
            console.log('You played: Song of Time!');
           
        }

    });
});

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
   // console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();
        const pressed2 = [];
        const song2 = 'gddagdf';
        window.addEventListener('keyup', (e) => {
            //console.log(e.key);
            pressed2.push(e.key); //pushes e.keys to pressed Array
            pressed2.splice(song2.length - 1, pressed2.length - song2.length); //splits them apart
            if (pressed2.join('').includes(song2)) { //checks if pressed Array contains serenade
                let audio = new Audio("sounds/65-Nocturne-Of-Shadow.mp3");//define a new audio
                audio.play();
                console.log('You played: Nocturne of Shadow!');
            }

    });

        
});
*/