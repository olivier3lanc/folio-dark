let app = {
    defaults: {
        el_audio_player: document.getElementById('app_audio_player'),
        el_play_pause_button: document.getElementById('app_play_pause'),
        el_audio_artist: document.getElementById('app_audio_artist'),
        el_audio_title: document.getElementById('app_audio_title'),
        el_nav_home: document.getElementById('app_nav_home'),
        el_loader: document.getElementById('app_loader'),
        el_scenes: document.getElementById('app_scenes'),
        el_audio_consent_modal: document.getElementById('app_audio_consent_modal'),
        el_icon_fs_enter: document.getElementById('app_icon_fs_enter'),
        el_icon_fs_exit: document.getElementById('app_icon_fs_exit'),
        el_fullscreen: document.getElementById('app_fullscreen'),
        isFullscreen: false,
        songs: {
            // Agnes Obel - Familiar (Lyric video) • DARK - S1 Soundtrack.mp4
            // Apparat - Goodbye - Dark (Netflix) Theme Song.mp4
            // Bloc Party - The Pioneers (M83 Remix).mp4
            // Chris Avantgarde feat. Red Rosamond - Inside - Dark Season 3 Soundtrack.mp4
            // Hozier - In The Woods Somewhere - Dark Season 3 Soundtrack.mp4
            // May and Robot Koch - Bad Kingdom (Dark Season 3).mp4
            // Peter Gabriel - My Body Is A Cage - Dark- Season 2 OST.mp4
            // Raury - God's Whisper (Lyric video) • DARK - S2 Soundtrack.mp4
            // RY X - Thunder (Lyric video) • DARK - S2 Soundtrack.mp4
            // Teho Teardo & Blixa Bargeld - A Quiet Life (Lyric video) • DARK - S1 Soundtrack.mp4
            // Bloc Party - The Pioneers (M83 Remix).mp4
            // Apparat - Goodbye - Dark (Netflix) Theme Song.pkf
            'audio/apparat-goodbye.mp3': {
                artist: 'Apparat',
                title: 'Goodbye'
            },
            'audio/teho-teardo-blixa-bargeld-a-quiet-life.mp3': {
                artist: 'Teho Teardo & Blixa Bargeld',
                title: 'A Quiet Life'
            },
            'audio/agnes-obel-familiar.mp3': {
                artist: 'Agnes Obel',
                title: 'Familiar'
            },
            'audio/bloc-party-the-pioneers-m83-remix.mp3': {
                artist: 'Bloc Party',
                title: 'The Pioneers (M83 Remix)'
            },
            'audio/chris-avantgarde-feat-red-rosamond-inside.mp3': {
                artist: 'Chris Avantgarde feat. Red Rosamond',
                title: 'Inside'
            },
            'audio/hozier-in-the-woods-somewhere.mp3': {
                artist: 'Hozier',
                title: 'In The Woods Somewhere'
            },
            'audio/may-the-muse-bad-kingdom.mp3': {
                artist: 'May The Muse and Robot Koch',
                title: 'Bad Kingdom'
            },
            'audio/peter-gabriel-my-body-is-a-cage.mp3': {
                artist: 'Peter Gabriel',
                title: 'My Body Is A Cage'
            },
            'audio/raury-god-s-whisper.mp3': {
                artist: 'Raury',
                title: 'God\'s Whisper'
            },
            'audio/ry-x-thunder.mp3': {
                artist: 'RY X',
                title: 'Thunder'
            }
        } 
    },
    audioConsentModal: function(cmd) {
        if (this.defaults.el_audio_consent_modal !== null) {
            if (typeof cmd == 'string') {
                if (cmd == 'close') {
                    this.defaults.el_audio_consent_modal.classList.add('u-none');
                }
                if (cmd == 'open') {
                    this.defaults.el_audio_consent_modal.classList.remove('u-none');
                }
            }
        }
    },
    nextAudio: function() {
        // Pause
        this.pauseAudio();
        // Get current
        const current_song = app.defaults.el_audio_player.getAttribute('src');
        const songs_paths = Object.keys(app.defaults.songs);
        const last_song = songs_paths[songs_paths.length - 1];
        console.log('last song : '+last_song);
        if (current_song != last_song) {
            const current_index = songs_paths.indexOf(current_song);
            const next_index = current_index + 1;
            const next_song = songs_paths[next_index];
            console.log(current_index,next_song);
            app.defaults.el_audio_player.setAttribute('src', next_song);
            app.defaults.el_audio_player.load();
            this.playAudio();
        } else {
            const first_song = songs_paths[0];
            app.defaults.el_audio_player.setAttribute('src', first_song);
            app.defaults.el_audio_player.load();
            console.log('reset');
        }
    },
    showAudioInfo: function() {
        // Get current audio played
        const current_song = app.defaults.el_audio_player.getAttribute('src');
        const artist = app.defaults.songs[current_song].artist;
        const title = app.defaults.songs[current_song].title;
        app.defaults.el_audio_artist.innerText = artist;
        app.defaults.el_audio_title.innerText = title;
    },
    playAudio: function() {
        this.defaults.el_audio_player.play();
        this.defaults.el_play_pause_button.innerHTML = '<span class="c-shape m-pause"></span>';
        this.defaults.el_play_pause_button.setAttribute('title', '[PAUSE] soundtrack');
        window.app_audio_player_paused = false;
        console.log('playing '+this.defaults.el_audio_player.src);
        this.showAudioInfo();
    },
    pauseAudio: function() {
        this.defaults.el_audio_player.pause();
        this.defaults.el_play_pause_button.innerHTML = '<span class="c-shape m-play"></span>';
        this.defaults.el_play_pause_button.setAttribute('title', '[PLAY] soundtrack');
        window.app_audio_player_paused = true;
    },
    playPauseAudio: function() {
        if (this.defaults.el_audio_player !== null && this.defaults.el_play_pause_button !== null) {
            if (this.defaults.el_audio_player.paused) {
                this.playAudio();
            } else {
                this.pauseAudio();
            }
        }
    },
    toggleFullScreen: function() {
        const elem = document.body;
        if (this.defaults.isFullscreen) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.defaults.isFullscreen = false;
            this.defaults.el_icon_fs_enter.classList.remove('u-none');
            this.defaults.el_icon_fs_exit.classList.add('u-none');
            this.defaults.el_fullscreen.setAttribute('title', 'Enter fullscreen');
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
            this.defaults.isFullscreen = true;
            this.defaults.el_icon_fs_enter.classList.add('u-none');
            this.defaults.el_icon_fs_exit.classList.remove('u-none');
            this.defaults.el_fullscreen.setAttribute('title', 'Exit fullscreen');
        }
    },
    update: function() {
        window.app_audio_player_paused = true;
        window.addEventListener('load', function() {
            document.body.style.opacity = 1;
        });
        if (this.defaults.el_nav_home !== null && this.defaults.el_loader !== null && this.defaults.el_scenes !== null) {
            this.defaults.el_nav_home.addEventListener('click', function(e) {
                e.preventDefault();
                let scene_url = e.target.dataset.href || e.target.closest('a').dataset.href;
                if (scene_url !== undefined) {
                    app.defaults.el_loader.classList.remove('u-transparent');
                    setTimeout(function() {
                        app.defaults.el_scenes.setAttribute('src', scene_url);
                    }, 500);
                }
            })
        }
    }
}
app.update();