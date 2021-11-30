const iframe = {
    elements: {
        loader: window.parent.document.querySelector('#app_loader'),
        btn_next_scene: document.querySelector('#app_next_scene'),
        btn_prev_scene: document.querySelector('#app_prev_scene'),
        scene: document.querySelector('[scroll-frames]'),
    },

    update: function() {
        let gets = new URLSearchParams(location.search);
        const scene_current_id = gets.get('current');
        const scene_next_id = gets.get('next');
        const scene_prev_id = gets.get('prev');
        if (scene_current_id !== null) {
            const json_url = 'json/'+scene_current_id+'.json';
            this.elements.scene.setAttribute('scroll-frames', 'scene');
            this.elements.scene.setAttribute('data-json', json_url);
        }
        if (this.elements.loader !== null) {
            window.addEventListener('load', function() {
                this.elements.loader.classList.add('u-transparent');
            });
        }
        document.querySelectorAll('#app_next_scene, #app_prev_scene').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                this.elements.loader.classList.remove('u-transparent');
                const scene_id = e.target.dataset.targetSceneId;
                setTimeout(function() {
                    
                }, 500);
            });
        });
    }
}
iframe.update();
