document.addEventListener('DOMContentLoaded', () => {
    let searchForm = document.querySelector('.search-form');
    let loginForm = document.querySelector('.login-form');
    let navDisplay = document.querySelector('.nav-display');

    const bottomPlayer = document.querySelector('.bottomPlayer');      
    const currentSongName = document.querySelector('.current-song-name');
    let gif = document.getElementById('gif');

    document.querySelector('#search-btn').addEventListener('click', () => {
        searchForm.classList.toggle('active');
        loginForm.classList.remove('active');
        navDisplay.classList.remove('active');
    });

    document.querySelector('#login-btn').addEventListener('click', () => {
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        navDisplay.classList.remove('active');
    });

    document.querySelector('#menu-btn').addEventListener('click', () => {
        navDisplay.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
    })

    window.onscroll = () => {
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navDisplay.classList.remove('active');
    }

    audioElement = new Audio('song/1.mp3');

    let songitem = Array.from(document.getElementsByClassName('songitem'));

    let songs = [
        { songName: "Mystery of Love", filepath: "song/0.mp3", coverpath: "covers/0.JPG" },
        { songName: "Zamaana Lage", filepath: "song/1.mp3", coverpath: "covers/1.JPG" },
        { songName: "Salvatore", filepath: "song/2.mp3", coverpath: "covers/2.JPG" },
        { songName: "Heer", filepath: "song/3.mp3", coverpath: "covers/3.JPG" },
        { songName: "Bhalobashar morshum", filepath: "song/4.mp3", coverpath: "covers/4.JPG" },
        { songName: "Apocalypse", filepath: "song/5.mp3", coverpath: "covers/5.JPG" },
        { songName: "Jhol", filepath: "song/6.mp3", coverpath: "covers/6.JPG" },
        { songName: "Beche thakar gan", filepath: "song/7.mp3", coverpath: "covers/7.JPG" },
        { songName: "Yellow", filepath: "song/8.mp3", coverpath: "covers/8.JPG" },
        { songName: "Zamaana Lage", filepath: "song/9.mp3", coverpath: "covers/9.JPG" },
    ]

    songitem.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });

    const songButtons = Array.from(document.getElementsByClassName('songitemplay'));

    songButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            let index = parseInt(e.target.id);
            songButtons.forEach(b => {
                if (b !== e.target) {
                    b.classList.add('fa-circle-play');
                    b.classList.remove('fa-circle-pause');
                }
            });
            e.target.classList.toggle('fa-circle-play');
            e.target.classList.toggle('fa-circle-pause');
            if (e.target.classList.contains('fa-circle-pause')) {
                audioElement.src = `song/${index}.mp3`;
                audioElement.currentTime = 0;
                audioElement.play();
                bottomPlayer.style.display = "block";
                if (currentSongName)
                    {
                        currentSongName.innerText = songs[index].songName;
                        gif.style.opacity = 1;
                    }

            }
            else {
                audioElement.pause();
                bottomPlayer.style.display = 'none';
                gif.style.opacity = 0;
            }
        });

    });
});