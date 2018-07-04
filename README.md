## ct-adc-tree

使用[element](https://github.com/ElemeFE/element)中tree组件的相关代码，对某些功能进行了修复优化后的产物。

## 组件示例图

![img](https://github.com/ct-adc/adc-tree/blob/master/tree.png)

## 在线demo

[在线demo](https://codepen.io/rubyisapm/pen/xdBqKO)

## 功能点

除了tree控件，另封装了area-tree

## 使用

从npm安装ct-adc-test

```
npm install ct-adc-tree --save
```
在代码中使用

```
import {tree, areaTree} from 'ct-adc-tree';

Vue.component(tree.name,tree);
Vue.component(areaTree.name, areaTree);

或

new Vue({
    ...
    components:{
        'tree': tree,
        'area-tree': areaTree
      }
    ...
})

```

## props

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ---
sep | 地区分隔符 | String | '-'
selected | 需要选中的地区 | String | Array | []

### selected格式

*支持字符串*: 以',|，'分隔单个地区的字符串如'浙江-杭州,江苏'或'0601,04')

*支持数组*: 如['浙江-杭州','江苏']或['0601','04']

*支持JSON字符串*: 如["0601"]或["浙江-杭州"]，`请勿误用['0601']、['浙江-杭州']等非法JSON，会导致结果非预期`。


## 方法

### getChecked

获取选中的地区

#### 参数列表

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ----
readable | 获取的结果是否为地区中文名称 | Boolean | false | true/false | 默认为中文，否则为地区编码

返回值

类型: {Array}

说明: 遵循最简原则，数据只到达第一个全选的节点。

["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]

##### setChecked

设置需要选中的地区，接收一个参数，Array 或者 String/JSON String

#### 参数列表

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ----
areaList | 初始选中的地区 | Array/String/JSON String | [] | | 地区名称列表

参数形如：["浙江","安徽","福建","江西-南昌","江西-赣州-章贡区"]或"浙江,安徽,福建,江西-南昌,江西-赣州-章贡区"

如上，会选中浙江省、安徽省、福建省、江西省南昌市、江西省赣州市章贡区

返回值

undefined

## 事件

### 事件1

事件名称 | 说明 | 回调参数 | 描述
change | 选中内容发生改变时触发 | 当前选中的地区 （{name:[...], id: [...]}）|


## 更新日志

[更新日志](https://github.com/ct-adc/adc-tree/blob/master/changeLog.md)

## 外部资源依赖列表

- area 1.0.0+
