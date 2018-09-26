### 组件说明

* 必选参数
    initIndex: number -- 初始tab 

* 可选参数
    tabsClass: string  -- tab group 的样式
    tabClass: string   -- tab 的样式， 若填则采用默认样式

* method
    handleClick: function  -- 点击tab的时候的回调函数

### demo

```js

import TabsControl from '../Components/TabsControl/index';
import Tab from '../Components/TabsControl/Tab/index';

let tabs = [{
    index: 0,
    name: '我评论的' 
}, {
    index: 1,
    name: '我点赞的' 
}];

<TabsControl 
    initIndex={this.state.currentIndex} 
    handleClick={this.choiceTbas.bind(this)}>
    {
        pthis.state.tabs.map((child, cindex) => {
            return (
                <Tab title={child.name} key={cindex}></Tab>
            )
        }) 
    }
</TabsControl>

```  

### 后续将会添加
切换时候的样式