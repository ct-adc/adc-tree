<template>
    <tree show-checkbox
          :props="{label: 'Name'}"
          :load="loadNode"
          lazy=""
          node-key="ID"
          ref="areaList">
    </tree>
</template>

<script type="es6">
    import Vue from 'vue';
    import tree from '../../js/tree/tree.vue';
    import dataTransfer from './model/dataTransfer.js';
    import '../../css/checkbox.css';
    import '../../css/tree.css';
    export default{
        name:'area-tree',
        components:{
            tree
        },
        data(){
            return {
                loadNode:dataTransfer.loadNode
            };
        },
        methods:{
            getChecked(){
                var checkedKeys = this.$refs.areaList.getCheckedKeys(false);
                var filtered = checkedKeys.filter((item, index, arr)=> {
                    var cityOfHasP = item.length == 4 && arr.indexOf(item.substr(0, 2)) > -1;
                    var regionOfHasC = item.length == 6 && arr.indexOf(item.substr(0, 4)) > -1;
                    return !(cityOfHasP || regionOfHasC);
                });
                return filtered.map((item)=> {
                    return dataTransfer.getAreaNameById(item);
                });
            },
            setChecked(areaToAdd){
                var nodes = [];
                var areaList;
                if(typeof(areaToAdd)==='string'){
                    try{
                        areaList=JSON.parse(areaToAdd);
                    }catch(e){
                        areaList=areaToAdd.split(/,|，/);
                    }
                }
                areaList=areaToAdd;
                areaList.map((item)=> {
                    nodes = nodes.concat(dataTransfer.getNodesByName(item));
                });
                this.$refs.areaList.setCheckedNodes(nodes);
            }
        }
    }
</script>