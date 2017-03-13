<template>
    <tree show-checkbox
          :props="{label: 'Name'}"
          :load="loadNode"
          lazy=""
          node-key="ID"
          @check-change="checkedChange"
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
        props:{
            sep:{
                type:String,
                default:'-'
            },
            areaToAdd:{
                type:[Array,String],
                default(){
                    return [];
                }
            }
        },
        data(){
            return {
                loadNode:dataTransfer.loadNode
            };
        },
        methods:{
            getChecked(){
                var that=this;
                var checkedKeys = this.$refs.areaList.getCheckedKeys(false);
                checkedKeys.sort()
                var filtered = checkedKeys.filter((item, index, arr)=> {
                    var cityOfHasP = item.length == 4 && arr.indexOf(item.substr(0, 2)) > -1;
                    var regionOfHasC = item.length == 6 && arr.indexOf(item.substr(0, 4)) > -1;
                    return !(cityOfHasP || regionOfHasC);
                });
                return filtered.map((item)=> {
                    return dataTransfer.getAreaNameById(item,that.sep);
                });
            },
            setChecked(areaToAdd){
                var that=this;
                var nodes = [];
                var areaList;
                if(typeof(areaToAdd)==='string'){
                    if(!/^\s*$/.test(areaToAdd)){
                        try{
                            areaList=JSON.parse(areaToAdd);
                        }catch(e){
                            areaList=areaToAdd.split(/,|，/);
                        }
                    }else{
                        areaList=[];
                    }
                }else{
                    areaList=areaToAdd;
                }
                if(areaList.length>0){
                    areaList.map((item)=> {
                        nodes = nodes.concat(dataTransfer.getNodesByName(item,that.sep));
                    });
                }
                this.$refs.areaList.setCheckedNodes(nodes);
            },
            checkedChange(){
                var that=this;
                setTimeout(function(){
                    that.$emit('change',that.getChecked());
                })
                //父节点的change会触发所有子节点的change，所以需要放在异步事件中$emit事件，保证值的正确性
            }
        }
    }
</script>