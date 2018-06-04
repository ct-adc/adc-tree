/**
 * @author rubyisapm
 */
import Vue from 'vue';
import {areaTree} from 'index.js';

new Vue({
    el: '#app',
    components: {
        'area-tree': areaTree
    },
    data: {
        areaToAddAuto: ['浙江-杭州'],
        areaToAddManually: '',
        resultWithId: '',
        resultWithName: '',
        sep: '_'
    },
    methods: {
        getChecked() {
            this.resultWithId = JSON.stringify(this.$refs.areaTree.getChecked(false));
            this.resultWithName = JSON.stringify(this.$refs.areaTree.getChecked(true));
        },
        setChecked() {
            this.$refs.areaTree.setChecked(this.areaToAddManually);
        },
        change(data) {
            this.resultWithName = JSON.stringify(data);
        }
    }
});
