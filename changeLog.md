## 更新日志

### 2.0.0-alpha.4

*2018-07-04*

- 优化 change事件参数变为{name, id}

### 2.0.0-alpha.3

*2018-06-06*

- 新增 新增搜索框的placeholder

### 2.0.0-alpha.2

*2018-06-04*

- 新增 去除v-model支持

- tree更新至v2.4.0 

- tree 修复bug lazy为true时不会如果setcheckednodes不会在父级节点上半选 tree-store L231

备注：default checked在初始化时只考虑到第一层的数据，匹配第一层的数据后才进行setchecked处理，故规避使用
default-checked-keys属性，用mounted时手动设置checked替代。
node的setChecked会考虑是否加载数据的情况，因此setChecked可以解决lazy下的数据初始化工作。

### 2.0.0-alpha.1

*2018-05-17*

- 新增 支持v-model

- 新增 hasFilter 、 readable 参数

### 2.0.0

*2018-04-14*

- 优化 将该组件改为新版脚手架

### 1.0.0

*2017-05-23*

- 新增 新增在线demo

- 优化 将模块方式由commonjs改为umd

- 优化 areaToAdd兼容地区ID

### 0.0.4

*2017-03-13*

- 修复 areaTree中setChecked兼容问题
- 修复 areaTree dataTransfer中getNodesByName对于不匹配的名称的容错
- 增加 areaTree添加sep属性，用来自定义分隔符
- 增加 areaTree添加change事件，当选择的节点发生变化时触发该事件
- 修复 areaTree非三层地区的选中bug

### 0.0.3

*2017-03-12*

- 修复 setChecked数据无法解析

### 0.0.2

*2017-03-12*

- 修改 setChecked参数兼容JSON字符串/字符串/数组

### 0.0.1

*2017-03-10*

ct-adc-tree发布
