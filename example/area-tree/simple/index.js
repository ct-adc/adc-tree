/**
 * @author rubyisapm
 */
import Vue from 'vue';
import AreaTree from '../../../src/js/area-tree/area-tree.vue';
new Vue({
    el:'#app',
    components:{
        'area-tree':AreaTree
    },
    data:{
        areaToAddAuto:'',
        areaToAddManually:'',
        resultWithId:'',
        resultWithName:'',
        sep:'_'
    },
    methods:{
        getChecked(){
            this.resultWithId=JSON.stringify(this.$refs.areaTree.getChecked(false));
            this.resultWithName=JSON.stringify(this.$refs.areaTree.getChecked(true));
        },
        setChecked(){
            this.$refs.areaTree.setChecked(this.areaToAddManually);
        },
        change(data){
            this.resultWithName=JSON.stringify(data);
        }
    }
});