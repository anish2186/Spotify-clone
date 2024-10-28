console.log("welcome to spotify");
let SongIndex=0;
let audioElement= new Audio('Hanuman Chalisa audio.mp3');
let Play = document.getElementById('Play');
let myprogressbar =document. getElementById('myprogressbar');
let songs=[
    {songName:"Hanuman Chalisa", filePath:"", coverPath:""},
    {songName:"Bajrang Baan", filePath:"", coverPath:""}
]
// let audioElement = new Audio('1.mp3');
// Handle play/pause click
Play.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Play.classList.remove(' fa-circle-play');
        Play.classList.add(' fa-circle-pause');
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-regular fa-circle-play');
        Play.classList.add('fa-solid fa-circle-pause');
    }

    });

// Listen to Events
document.addEventListener('Play',()=>{
    console.log("Play");
});


//update seek bar
