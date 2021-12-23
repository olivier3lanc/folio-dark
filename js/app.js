let app = {
    defaults: {
        el_audio_player: document.getElementById('app_audio_player'),
        el_play_pause_button: document.getElementById('app_play_pause'),
        el_nav_home: document.getElementById('app_nav_home'),
        el_loader: document.getElementById('app_loader'),
        el_scenes: document.getElementById('app_scenes'),
        el_audio_consent_modal: document.getElementById('app_audio_consent_modal'),
        el_icon_fs_enter: document.getElementById('app_icon_fs_enter'),
        el_icon_fs_exit: document.getElementById('app_icon_fs_exit'),
        el_fullscreen: document.getElementById('app_fullscreen'),
        isFullscreen: false,
        songs: ['audio/first.mp3', 'audio/second.mp3', 'audio/third.mp3']
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
    nextSong: function() {
        // Pause
        this.pauseAudio();
        // Get current
        const current_song = app.defaults.el_audio_player.getAttribute('src');
        const last_song = app.defaults.songs[app.defaults.songs.length - 1];
        if (current_song != last_song) {
            const current_index = app.defaults.songs.indexOf(current_song);
            const next_index = current_index + 1;
            const next_song = app.defaults.songs[next_index];
            app.defaults.el_audio_player.setAttribute('src', next_song);
            app.defaults.el_audio_player.load();
            this.playAudio();
        } else {
            const first_song = app.defaults.songs[0];
            app.defaults.el_audio_player.setAttribute('src', first_song);
            app.defaults.el_audio_player.load();
            console.log('reset');
        }
    },
    playAudio: function() {
        this.defaults.el_audio_player.play();
        this.defaults.el_play_pause_button.innerHTML = '<span class="c-shape m-pause"></span>';
        this.defaults.el_play_pause_button.setAttribute('title', '[PAUSE] soundtrack');
        window.app_audio_player_paused = false;
        console.log('playing '+this.defaults.el_audio_player.src);
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