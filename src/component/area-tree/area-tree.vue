<template>
    <div class="panel panel-default">
        <div class="p10" style="border-bottom: 1px solid #ddd;" v-if="hasFilter">
            <div class="input-group">
                <input type="text" class="form-control" v-model="filterText" placeholder="请输入地区名称搜索">
                <div class="input-group-addon" @click="filter" style="cursor: pointer;">搜索</div>
            </div>
        </div>
        <div v-loading="loading" style="height:300px;">
            <div style="height:300px;overflow-y:auto;border-radius: 0 0 4px 4px">
                <div class="hv-center text-muted" v-show="isEmpty">
                    暂无匹配的数据
                </div>
                <tree v-show="!isEmpty"
                    show-checkbox 
                    :props="{label: 'Name', isLeaf: 'isLeaf', children: 'children'}"
                    :load="loadNode"
                    lazy
                    node-key="ID"
                    check-descendants
                    @check-change="checkedChange"
                    render-after-expand
                    :filter-node-method="filterNode"
                    ref="areaList">
                </tree>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import tree from 'element/packages/tree/src/tree.vue';
    import dataTransfer from './model/data-transfer.js';
    import utility from 'ct-utility';
    import loading from 'ct-adc-loading';

    Vue.use(loading);

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
            },
            hasFilter: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                loading: false,
                filterText: '',
                matchedByQuery: false //false时为显示全部数据
            };
        },
        mounted() {
            this.setChecked(this.selected);
        },
        computed: {
            isEmpty(){
                if (!this.matchedByQuery){
                    return false;
                }
                return this.matchedByQuery.province.length === 0 && this.matchedByQuery.city.length === 0 && this.matchedByQuery.region.length === 0;
            }
        },
        methods: {
            loadNode(node, resolve){
                if (node.level === 0) {
                    return resolve(AREA.province);
                }
                if (node.level === 1 && AREA.city[node.data.Name]) {
                    return resolve(AREA.city[node.data.Name]);
                } else if (node.level === 2 && AREA.region[node.data.Name]) {
                    return resolve(AREA.region[node.data.Name].map(item=>{item.isLeaf = true; return item;}));
                } else {
                    return resolve([]);
                }
            },
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
                            nodes.push({
                                ID: item
                            });
                        });
                    } else {
                        areaList.map((item) => {
                            nodes.push({
                                ID: utility.areaDataFormat.getAreaIdByName(item)
                            });
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
            },
            filterNode(value, data){
                if (!value) return true;
                return dataTransfer.isVisibleById(data.ID, this.matchedByQuery);
            },
            filter(){
                if (this.loading) return;
                this.loading = true;
                this.$forceUpdate();
                //为避免dom渲染阻塞loading，故延迟执行
                setTimeout(()=>{
                    if (this.filterText !== ''){
                        const matched = dataTransfer.getIdsByQueryStr(this.filterText);

                        this.matchedByQuery = matched;
                    } else {
                        this.matchedByQuery = false;
                    }
                    
                    this.$refs.areaList.filter(this.filterText);
                    if (Array.isArray(this.matchedByQuery.city) && this.matchedByQuery.city.length > 0){
                        this.$refs.areaList.filter(this.filterText);
                    }
                    if (Array.isArray(this.matchedByQuery.region) && this.matchedByQuery.region.length > 0){
                        this.$refs.areaList.filter(this.filterText);
                    }
                    this.$nextTick(()=>{
                        this.loading = false;
                    });
                }, 1000);
            }
        },
        watch: {
            selected(newVal) {
                this.setChecked(newVal)
            }
        }
    }
</script>
