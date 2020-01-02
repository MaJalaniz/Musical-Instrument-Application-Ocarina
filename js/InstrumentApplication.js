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
function sot(){
    //Find Song of Time    V
    let audio = new Audio("sounds/43-Ocarina-Song-of-Time.mp3");
    if(!audio) return;
    audio.play();
}
function sun(){
     //Find Sun Song       V
    let audio = new Audio("");
    if(!audio) return;
    audio.play();
}
function saria(){
     //Find Saria Song      V
     let audio = new Audio("");
    if(!audio) return;
    audio.play();
}
function bolero(){
     let audio = new Audio("sounds/60-Bolero-Of-Fire.mp3");
    if(!audio) return;
    audio.play();
}
function shadow(){
     let audio = new Audio("sounds/65-Nocturne-Of-Shadow.mp3");
    if(!audio) return;
    audio.play();
}
function zelda(){
      //Find Zelda's Lulluaby V
      let audio = new Audio("");
      if(!audio) return;
      audio.play();
}
function pol(){
    let audio = new Audio("sounds/66-Prelude_Of_Light.MP3");
    if(!audio) return;
    audio.play();
}
function epona(){
     //Find Epona Song      V
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
    let one = k.includes('afddg');//Serenade of Water
    let two = k.includes('afafdfa');//Requiem of Spirit
    let three = k.includes('asdgdg');//Minuet of Forest
    let four = k.includes('afsafs');//Song of Storms
    let five = k.includes('dafdaf');//Song of Time
    let six = k.includes('dfsdfs');//Sun Song
    let seven = k.includes('fafadfdf');//Bolero of Fire
    let eight = k.includes('fdgfdg');//Saria Song
    let nine = k.includes('gddagdf');//Nocturne of Shadow
    let ten = k.includes('gsdgsd');//Zelda's Lulluaby
    let eleven = k.includes('sdsdgs');//Prelude of light
    let twelve = k.includes('sgdsgd');//Epona Song

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
    }else if (seven !== three && seven !== two && seven !== one){
        bolero();
        console.log("Song 4");
    }else if(nine !== seven && nine !== three && nine !== two && nine !== one){
        shadow();
        console.log("Song 5");
    }else if(eleven !== nine && eleven !== seven && eleven !== three && eleven !== two && eleven !== one){
        pol();
        console.log("Song 6")
    }else{
        console.log("NO");
    }

    console.log(j);
    console.log(k);
}
console.log(searchMe());


//This part allows for sounds to be played with each Key press
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();
});