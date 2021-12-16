const iframe = {
    elements: {
        loader: window.parent.document.querySelector('#app_loader'),
        btn_next_scene: document.querySelector('#app_next_scene'),
        btn_prev_scene: document.querySelector('#app_prev_scene'),
        main: document.querySelector('main')
    },
    templates: {
        scroll_frames: function(jsonURL) {
            return `
                <article class="u-h-100vh">
                    <figure class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-brep-no-repeat u-bpos-center u-m-none u-p-none"
                        style="will-change: background-image, background-size;" 
                        scroll-frames="scene"
                        scroll-frames-detector="app_scene_detector" 
                        data-json="${jsonURL}">
                    </figure>
                    <div class="c-position m-fixed m-top-0 u-w-100 u-h-100vh u-bc-primary-rev u-pe-none u-faded u-bg-stripes"></div>
                </article>
                <div id="app_scene_detector"></div>
                <div id="app_screen_height" class="u-h-100vh"></div>
            `
        },
        dark_title: function() {
            return `
                <h1 id="app_dark_title"
                    class="c-position m-fixed m-middle-center m-anchor-middle-center c-grid m-nowrap u-m-none u-ff-lead u-fw-100 u-fs-xl u-tt-uppercase u-c-primary-max">
                    <span   scroll-btween="letter_1" 
                            scroll-btween-detector="app_scene_detector"
                            data-margin="0em |0.1 to 1|em"
                            data-opacity="|0:0 to 60:1 to 100:1|">D</span>
                    <span   scroll-btween="letter_2" 
                            scroll-btween-detector="app_scene_detector"
                            data-margin="0em |0.1 to 1|em"
                            data-opacity="|0:0 to 60:1 to 100:1|">A</span>
                    <span   scroll-btween="letter_3" 
                            scroll-btween-detector="app_scene_detector"
                            data-margin="0em |0.1 to 1|em"
                            data-opacity="|0:0 to 60:1 to 100:1|"
                            style="perspective: 1em;">
                        <span class="u-block" 
                            scroll-btween="letter_3_1"
                            scroll-btween-detector="app_scene_detector"
                            data-transform="rotateY(|0:0 to 50:0 to 100:180|deg)">R</span>
                    </span>
                    <span   scroll-btween="letter_4" 
                            scroll-btween-detector="app_scene_detector"
                            data-margin="0em |0.1 to 1|em"
                            data-opacity="|0:0 to 60:1 to 100:1|">K</span>
                </h1>
            `
        },
        dark_split_text: function(text1 = 'Netflix', text2 = 'Presents') {
            return `
                <h1 id="app_dark_text_split"
                    class="c-position m-fixed m-middle-center m-anchor-middle-center u-m-none u-ff-lead-alt u-fw-100 u-fs-md u-tt-uppercase u-lsp-xlarge u-ta-center u-lh-smooth"
                    u-fs-xs="sm"
                    u-fs-sm="md">
                    <span class="u-c-primary-max u-ml-xs u-mr-xs u-ws-nowrap">${text1}</span> <span class="u-c-primary u-mr-xs u-ml-xs u-ws-nowrap">${text2}</span>
                </h1>
            `
        },
        css_video_frames: function(id) {
            return `
                <div class="c-grid c-position m-fixed m-middle-center m-anchor-middle-center">
                    <div id="${id}" class="u-minh-100vh u-minw-100vw"></div>
                </div>
            `
        }
    },
    update: function() {
        let gets = new URLSearchParams(location.search);
        const scene_current_id = gets.get('scene');
        console.log(scene_current_id);
        if (scene_current_id !== null) {
            const current_scene_index = story.indexOf(scene_current_id);
            const next_scene_index = current_scene_index + 1;
            const prev_scene_index = current_scene_index - 1;
            const next_scene_id = story[next_scene_index];
            const prev_scene_id = story[prev_scene_index];
            this.elements.btn_next_scene.setAttribute('href', 'scene.html?scene='+next_scene_id);
            this.elements.btn_prev_scene.setAttribute('href', 'scene.html?scene='+prev_scene_id);
            let markup_scene = '';
            if (portraits.indexOf(scene_current_id) > -1) {
                markup_scene = this.templates.css_video_frames(scene_current_id);
                markup_scene += this.templates.dark_split_text(casting[scene_current_id]['character'], casting[scene_current_id]['actor']);
            } else {
                markup_scene = this.templates.scroll_frames('json/'+scene_current_id+'.json');
                markup_scene += this.templates.dark_split_text();
            }
            // Texts
            switch (scene_current_id) {
                case 'opening-credits-h':
                case 'opening-credits-n':
                case 'opening-credits-v':
                    markup_scene += this.templates.dark_title();
                    break;
            }
            this.elements.main.innerHTML = markup_scene;
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
