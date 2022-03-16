<template>
    <!-- Header -->
    <xm_header></xm_header>

    <!-- Main -->
    <xm_main_div></xm_main_div>

    <!-- Footer -->
    <xm_footer></xm_footer>
</template>


<script>
import xm_header from './xm_header.vue';
import xm_main_div from './xm_main_div.vue';
import xm_footer from './xm_footer.vue';

export default {
    name: "xm_wrapper",
    components: {
        xm_header,
        xm_main_div,
        xm_footer
    },
    methods: {
        load_extern_js(js_path){
            var externJs = document.createElement('script');
            externJs.setAttribute('src', js_path);
            document.head.append(externJs);
        },
        load_extern_css(css_path){
            var externJs = document.createElement('link');
            externJs.setAttribute('stylesheet', css_path);
            document.head.append(externJs);
        }
    },
    mounted(){
        this.load_extern_js('assets/js/main.js');
        this.load_extern_js('static/css/xm_css.css');
    }
}
</script>
