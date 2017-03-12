## 介绍

使用[element](https://github.com/ElemeFE/element)中tree组件的相关代码，对某些功能进行了修复优化后的产物。

## 安装

```
npm install 'ct-adc-tree'
```

## 使用

### 使用tree

```
import Vue from 'vue';
import Tree from 'ct-adc-tree/lib/tree/tree.js';
import 'ct-adc-tree/lib/tree/tree.css';

Vue.component(Tree.name,Tree);
或
new Vue({
    ...
    components:{
        tree:Tree
      }
    ...
})
```

tree的使用方法请参照[element-tree](http://localhost:8085/#/zh-CN/component/tree)中的介绍。

### 使用AreaTree

```
import Vue from 'vue';
import AreaTree from 'ct-adc-tree/lib/areaTree/areaTree.js';
import 'ct-adc-tree/lib/areaTree/areaTree.css';

Vue.component(AreaTree.name,AreaTree);
或
new Vue({
    ...
    components:{
        'area-tree':AreaTree
      }
    ...
})
```

AreaTree是对tree进行了一层封装，只用于地区选择;

#### 方法

##### getChecked

获取选中的地区

数据形如：["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]

即遵循最简原则，数据只到达第一个全选的节点。

#### setChecked

设置需要选中的地区，接收一个参数，Array 或者 String/JSON String

参数形如：["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]或"浙江,安徽,福建,江西-南昌,江西-赣州-章贡区"

如上，会选中浙江省、安徽省、福建省、江西省南昌市、江西省赣州市章贡区


## changeLog

[changeLog](https://github.com/ct-adc/adc-tree/blob/master/changeLog.md)