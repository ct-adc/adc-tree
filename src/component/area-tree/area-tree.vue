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

<script>
    import tree from '../tree/tree.vue';
    import dataTransfer from './model/data-transfer.js';
    import utility from 'ct-utility';

    export default {
        name: 'area-tree',
        components: {
            tree
        },
        props: {
            sep: {
                type: String,
                default: '-'
            },
            selected: {
                type: [Array, String],
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                loadNode: dataTransfer.loadNode
            };
        },
        mounted() {
            this.setChecked(this.selected);
        },
        methods: {
            /**
             * @param {Boolean} readable 可读时返回地区名称，否则返回地区id
             */
            getChecked(readable) {
                var that = this;
                var checkedKeys = this.$refs.areaList.getCheckedKeys(false);
                checkedKeys.sort()
                var filtered = checkedKeys.filter((item, index, arr) => {
                    var cityOfHasP = item.length == 4 && arr.indexOf(item.substr(0, 2)) > -1;
                    var regionOfHasC = item.length == 6 && arr.indexOf(item.substr(0, 4)) > -1;
                    return !(cityOfHasP || regionOfHasC);
                });
                if (readable) {
                    return filtered.map((item) => {
                        return utility.areaDataFormat.getAreaNameById(item, that.sep);
                    });
                } else {
                    return filtered;
                }

            },
            setChecked(areaToAdd) {
                var nodes = [];
                var areaList;
                if (typeof(areaToAdd) === 'string') {
                    if (!/^\s*$/.test(areaToAdd)) {
                        try {
                            areaList = JSON.parse(areaToAdd);
                        } catch (e) {
                            areaList = areaToAdd.split(/,|，/);
                        }
                    } else {
                        areaList = [];
                    }
                } else {
                    areaList = areaToAdd;
                }
                if (areaList.length > 0) {
                    if (/^\d+$/.test(areaList[0] + '')) {
                        areaList.map((item) => {
                            nodes = nodes.concat(dataTransfer.getNodesById(item + ''));
                        });
                    } else {
                        areaList.map((item) => {
                            nodes = nodes.concat(dataTransfer.getNodesByName(item));
                        });
                    }
                }
                this.$refs.areaList.setCheckedNodes(nodes);
            },
            checkedChange() {
                var that = this;
                setTimeout(function() {
                    that.$emit('change', that.getChecked(true));
                })
                //父节点的change会触发所有子节点的change，所以需要放在异步事件中$emit事件，保证值的正确性
            }
        },
        watch: {
            selected(newVal) {
                this.setChecked(newVal)
            }
        }
    }
</script>
