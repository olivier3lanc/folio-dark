const story = [
    'adam-a',
    'blast',
    'centrale-a',
    'claudia-futur-a',
    'eglise',
    'foret-noa',
    'grotttes-a',
    'grotttes-b',
    'grotttes-c',
    'machine-a',
    'machine-b',
    'machine-c',
    'marta',
    'matter-a',
    'matter-b',
    'matter-c',
    'matter-e',
    'matter-f',
    'matter-h',
    'matter-l',
    'matter-m',
    'matter-n',
    'opening-credits-a',
    'opening-credits-d',
    'opening-credits-e',
    'opening-credits-f',
    'opening-credits-g',
    'opening-credits-h',
    'opening-credits-i',
    'opening-credits-j',
    'opening-credits-k',
    'opening-credits-l',
    'opening-credits-o',
    'opening-credits-p',
    'opening-credits-r',
    'opening-credits-s',
    'opening-credits-v',
    'particles-a',
    'particles-b',
    'particles-c',
    'route-a',
    'route-b',
    'route-c',
    'sic-mundus-tattoo',
    'st-christophe-a',
    'st-christophe-c',
    'tannhaus-book',
    'tannhaus-machine-a',
    'blockhaus-a',
    'blockhaus-b',
    'claudia-futur-b',
    'drone-a',
    'matter-d',
    'matter-g',
    'matter-i',
    'matter-j',
    'matter-k',
    'newspaper-mikkel',
    'opening-credits-b',
    'opening-credits-c',
    'opening-credits-m',
    'opening-credits-n',
    'opening-credits-q',
    'opening-credits-t',
    'opening-credits-u',
    'particles-d',
    'particles-e',
    'sablier',
    'st-christophe-b'
]

const iframe = {
    elements: {
        loader: window.parent.document.querySelector('#app_loader'),
        btn_next_scene: document.querySelector('#app_next_scene'),
        btn_prev_scene: document.querySelector('#app_prev_scene'),
        scene: document.querySelector('[scroll-frames]'),
    },

    update: function() {
        let gets = new URLSearchParams(location.search);
        const scene_current_id = gets.get('scene');
        if (scene_current_id !== null) {
            const json_url = 'json/'+scene_current_id+'.json';
            this.elements.scene.setAttribute('scroll-frames', 'scene');
            this.elements.scene.setAttribute('data-json', json_url);

            const current_scene_index = story.indexOf(scene_current_id);
            const next_scene_index = current_scene_index + 1;
            const prev_scene_index = current_scene_index - 1;
            const next_scene_id = story[next_scene_index];
            const prev_scene_id = story[prev_scene_index];
            this.elements.btn_next_scene.setAttribute('href', 'app_matter_a.html?scene='+next_scene_id);
            this.elements.btn_prev_scene.setAttribute('href', 'app_matter_a.html?scene='+prev_scene_id);
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
