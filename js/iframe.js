const iframe = {
    elements: {
        loader: window.parent.document.querySelector('#app_loader'),
        btn_next_scene: document.querySelector('#app_next_scene'),
        btn_prev_scene: document.querySelector('#app_prev_scene'),
        scene: document.querySelector('[scroll-frames]'),
        dark_title: document.querySelector('#app_dark_title'),
        dark_text_split: document.querySelector('#app_dark_text_split'),
        
    },

    update: function() {
        let gets = new URLSearchParams(location.search);
        const scene_current_id = gets.get('scene');
        console.log(scene_current_id);
        if (scene_current_id !== null) {
            const json_url = 'json/'+scene_current_id+'.json';
            this.elements.scene.setAttribute('scroll-frames', 'scene');
            this.elements.scene.setAttribute('data-json', json_url);
            const current_scene_index = story.indexOf(scene_current_id);
            const next_scene_index = current_scene_index + 1;
            const prev_scene_index = current_scene_index - 1;
            const next_scene_id = story[next_scene_index];
            const prev_scene_id = story[prev_scene_index];
            this.elements.btn_next_scene.setAttribute('href', 'scene.html?scene='+next_scene_id);
            this.elements.btn_prev_scene.setAttribute('href', 'scene.html?scene='+prev_scene_id);
            // Texts
            if (scene_current_id == 'opening-credits-h') {
                this.elements.dark_title.classList.remove('u-none');
                this.elements.dark_text_split.classList.add('u-none');
            } else {
                this.elements.dark_title.classList.add('u-none');
                this.elements.dark_text_split.classList.remove('u-none');
            }
        }
        if (this.elements.loader !== null) {
            window.addEventListener('load', function() {
                iframe.elements.loader.classList.add('u-transparent');
            });
        }
        document.querySelectorAll('#app_next_scene, #app_prev_scene').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                iframe.elements.loader.classList.remove('u-transparent');
                const target_url = e.target.getAttribute('href');
                setTimeout(function() {
                    location.href = target_url;
                }, 500);
            });
        });
    }
}
iframe.update();
