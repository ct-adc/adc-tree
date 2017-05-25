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
import * as Tree from 'ct-adc-tree/lib/tree.common.js';

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
import * as AreaTree from 'ct-adc-tree/lib/area-tree.common.js';

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

#### [在线demo](https://codepen.io/rubyisapm/pen/xdBqKO)

#### 参数

参数|描述|类型|默认值
--- | --- | --- | --- |
sep | 地区分隔符 | String | '-'
selected | 需要选中的地区 | String | Array | []

**备注** selected格式

*支持字符串*: 以',|，'分隔单个地区的字符串如'浙江-杭州,江苏'或'0601,04')

*支持数组*: 如['浙江-杭州','江苏']或['0601','04']

*支持JSON字符串*: 如["0601"]或["浙江-杭州"]，`请勿误用['0601']、['浙江-杭州']等非法JSON，会导致结果非预期`。

#### 方法

##### getChecked

参数: readable Boolean 非必填 默认为false

**true:** 返回地区名称
**false:** 返回地区ID

获取选中的地区

数据形如：["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]

即遵循最简原则，数据只到达第一个全选的节点。

##### setChecked

设置需要选中的地区，接收一个参数，Array 或者 String/JSON String

参数形如：["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]或"浙江,安徽,福建,江西-南昌,江西-赣州-章贡区"

如上，会选中浙江省、安徽省、福建省、江西省南昌市、江西省赣州市章贡区

#### 事件

##### change

当选择的节点发生改变时，触发该事件，参数为当前选中的地区

## changeLog

[changeLog](https://github.com/ct-adc/adc-tree/blob/master/changeLog.md)


## lib文件介绍

* *.common.js 开发者使用

* *.demo.js 仅供demo使用