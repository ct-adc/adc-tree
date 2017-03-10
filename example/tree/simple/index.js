/**
 * @author rubyisapm
 */
import Vue from 'vue';
import tree from '../../../src/js/tree/tree.vue';
import dataTransfer from './module/dataTransfer.js';
new Vue({
    el:'#app',
    components:{
        tree
    },
    data:{
        loadNode:dataTransfer.loadNode,
        result:'',
        areaToAdd:''
    },
    methods:{
        getChecked(){
            var checkedKeys = this.$refs.areaList.getCheckedKeys(false);
            var filtered = checkedKeys.filter((item, index, arr)=> {
                var cityOfHasP = item.length == 4 && arr.indexOf(item.substr(0, 2)) > -1;
                var regionOfHasC = item.length == 6 && arr.indexOf(item.substr(0, 4)) > -1;
                return !(cityOfHasP || regionOfHasC);
            });
            var areaList=filtered.map((item)=> {
                return dataTransfer.getAreaNameById(item);
            });
            this.result=JSON.stringify(areaList);
        },
        setChecked(){
            var nodes = [];
            var areaList;
            try{
                areaList=JSON.parse(this.areaToAdd);
            }catch(e){
                areaList=this.areaToAdd.split(/,|，/);
            }
            areaList.map((item)=> {
                nodes = nodes.concat(dataTransfer.getNodesByName(item));
            });
            this.$refs.areaList.setCheckedNodes(nodes);
        }
    }
});