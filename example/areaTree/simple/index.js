/**
 * @author rubyisapm
 */
import Vue from 'vue';
import AreaTree from '../../../src/js/areaTree/areaTree.vue';
new Vue({
    el:'#app',
    components:{
        'area-tree':AreaTree
    },
    data:{
        areaToAdd:'',
        result:''
    },
    methods:{
        getChecked(){
            this.result=JSON.stringify(this.$refs.areaTree.getChecked());
        },
        setChecked(){
            this.$refs.areaTree.setChecked(this.areaToAdd);
        }
    }
});