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
        result:'',
        sep:'_'
    },
    methods:{
        getChecked(){
            this.result=JSON.stringify(this.$refs.areaTree.getChecked());
        },
        setChecked(){
            this.$refs.areaTree.setChecked(this.areaToAdd);
        },
        change(data){
            this.result=JSON.stringify(data);
        }
    }
});