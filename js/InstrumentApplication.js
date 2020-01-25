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
    document.getElementById('goHere').innerHTML += "<div class=edits>" + "<div class=colors>"+ songs[a].name + ", " + "<i>" + songs[a].notes + "</i>" +"</div>"+ "</div>";
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
    let audio = new Audio("sounds/56-Ocarina-Song-of-Storms.mp3");
    if(!audio) return;
    audio.play();
}
function sot(){
    let audio = new Audio("sounds/43-Ocarina-Song-of-Time.mp3");
    if(!audio) return;
    audio.play();
}
function sun(){
    let audio = new Audio("sounds/31-Ocarina-Suns-Song.mp3");
    if(!audio) return;
    audio.play();
}
function saria(){
     let audio = new Audio("sounds/34-Ocarina-Sarias-Song.mp3");
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
      let audio = new Audio("sounds/25-Ocarina-Zeldas-Lullaby.mp3");
      if(!audio) return;
      audio.play();
}
function pol(){
    let audio = new Audio("sounds/66-Prelude_Of_Light.MP3");
    if(!audio) return;
    audio.play();
}
function epona(){
     let audio = new Audio("sounds/27-Ocarina-Eponas-Song.mp3");
     if(!audio) return;
     audio.play();
}


/*
function getAllNames(){
    for(let i = 0; i < songs.length; i++){
        console.log(songs[i].name);
        if(songs[i].name === 'Serenade of Water'){
            console.log("Super Yes");
            let thisSong = songs[i].name;
            return thisSong;
        }
    }
}
console.log(getAllNames());
*/


//This function displays a message above the musical staff indicating the song played
function messageOne(){
    //Use this method as a shorter/cleaner approach to the lengthy lines in SearchMe function
    let x = document.createElement('p');
    let a = document.createTextNode("You played the song ");
    x.appendChild(a);
    document.getElementById('songPlayed').appendChild(x);
}


//this function puts the <p id=songPlayed> back to be reused
//this function sometimes causes duplicate <p id=songPlayed to be shown
//write a function that checks if one exists then dont add
//stop an old song if a new one is entered and play that new song to prevent overlap
function messageTwo(){
    let p = document.createElement('p');
    p.setAttribute("id", "songPlayed");
    document.querySelector('.col-8').prepend(p);
}


//removes the Song message from above musical staff
function closeMessageOne(){
     document.getElementById('songPlayed').remove();
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
             let x = document.createElement('p');
             let a = document.createTextNode("You played the song Serenade of Water!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 18000);
             window.setTimeout(messageTwo, 20000);
             //Figure out how to put the div songsPlayed back where it belongs
             //The function will not display the message if original div is gone
    }else if(two !== one){
        console.log("Song 2");
        ros();
             let x = document.createElement('p');
             let a = document.createTextNode("You played the song Requiem of Spirit!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 21000);
             window.setTimeout(messageTwo, 22000);
    }else if(three !== two && three !== one){
        console.log("Song 3");
        mof();
            let x = document.createElement('p');
            let a = document.createTextNode("You played the song Minuet of Forest!");
            x.appendChild(a);
            document.getElementById('songPlayed').appendChild(x);
            window.setTimeout(closeMessageOne, 15000);
            window.setTimeout(messageTwo, 17000);
    }else if (seven !== three && seven !== two && seven !== one){
        console.log("Song 4");
        bolero();
             let x = document.createElement('p');
             let a = document.createTextNode("You played the song Bolero of Fire!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 18000);
             window.setTimeout(messageTwo, 20000);
    }else if(nine !== seven && nine !== three && nine !== two && nine !== one){
        console.log("Song 5");
        shadow();
            let x = document.createElement('p');
            let a = document.createTextNode("You played the song Nocturne of Shadow!");
            x.appendChild(a);
            document.getElementById('songPlayed').appendChild(x);
            window.setTimeout(closeMessageOne, 21000);
            window.setTimeout(messageTwo, 23000);
    }else if(eleven !== nine && eleven !== seven && eleven !== three && eleven !== two && eleven !== one){
        console.log("Song 6")
        pol();
             let x = document.createElement('p');
             let a = document.createTextNode("You played the song Prelude of Light!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 16000);
             window.setTimeout(messageTwo, 18000);
    }else if(five !== eleven && five !== nine && five !== seven && five !== three && five !== two &&
             five !== one){
        console.log("Song 7");         
        sot();
            let x = document.createElement('p');
            let a = document.createTextNode("You played the Song of Time!");
            x.appendChild(a);
            document.getElementById('songPlayed').appendChild(x);
            window.setTimeout(closeMessageOne, 10000);
            window.setTimeout(messageTwo, 12000);
    }else if(four !== eleven && four !== five && four !== nine && four !== seven && four !== three &&
             four !== two && four !== one){
        console.log("Song 8");
        sos();
           let x = document.createElement('p');
           let a = document.createTextNode("You played the Song of Storms!");
            x.appendChild(a);
           document.getElementById('songPlayed').appendChild(x);
           window.setTimeout(closeMessageOne, 6000);
           window.setTimeout(messageTwo, 8000);
    }else if(six !== four && six !== eleven && six !== five && six !== nine && six !== seven && 
             six !== three && six !== two && six !== one){
        console.log("Song 9");
        sun();
            let x = document.createElement('p');
            let a = document.createTextNode("You played the Sun Song!");
             x.appendChild(a);
            document.getElementById('songPlayed').appendChild(x);
            window.setTimeout(closeMessageOne, 6000);
            window.setTimeout(messageTwo, 8000);
    }else if(eight !== six && eight !== four && eight !== eleven && eight !== five && eight !== nine &&
             eight !== seven && eight !== three && eight !== two && eight !== one){
        console.log("Song 10");
        saria();
             let x = document.createElement('p');
             let a = document.createTextNode("You played Sarias Song!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 6000);
             window.setTimeout(messageTwo, 8000);
    }else if(ten !== eleven && ten !== nine && ten !== eight && ten !== seven && ten !== six && ten !== five 
             && ten !== four && ten !== three && ten !== two && ten !== one){
        console.log("Song 11");
        zelda();
              let x = document.createElement('p');
              let a = document.createTextNode("You played Zeldas Lulluaby!");
              x.appendChild(a);
              document.getElementById('songPlayed').appendChild(x);
              window.setTimeout(closeMessageOne, 10000);
              window.setTimeout(messageTwo, 12000);
    }else if(twelve !== eleven && twelve !== ten && twelve !== nine && twelve !== eight && twelve !== seven && 
             twelve !== six && twelve !== five && twelve !== four && twelve !== three && twelve !== two && 
             twelve !== one){
        console.log("Song 12");
        epona();
             let x = document.createElement('p');
             let a = document.createTextNode("You played Eponas Song!");
             x.appendChild(a);
             document.getElementById('songPlayed').appendChild(x);
             window.setTimeout(closeMessageOne, 7000);
             window.setTimeout(messageTwo, 9000);
    }else {
        console.log("NO SONG PLAYED");
    }
}


//This part allows for sounds to be played with each Key press
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); //find out how backticks work
    console.log(e.key); //to find out which keys are being used
    audio.currentTime = 0; //rewind to start, so that the sound is not sketchy
    if (!audio) return; // return stops the function and returns the value at that given moment, assuming the key is registered.
    audio.play();
});




    let gui = document.getElementById('guitarSounds');
    let a = document.createElement('audio');
    a.setAttribute("data-key", "a");
    a.setAttribute("src", "sounds/OOT_Notes_Ocarina_D_short.wav");
    gui.appendChild(a);
    

