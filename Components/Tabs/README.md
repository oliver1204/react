### explain

* required params
    initIndex: number -- 初始tab 

* optional params
    tabsClass: string  -- tab group 的样式
    tabClass: string   -- tab 的样式， 若填则采用默认样式

* method
    handleClick: function  -- 点击tab的时候的回调函数

### demo

```js

import TabsControl from '../Components/ReactTabsControl/index';

let tabs = [{
    index: 0,
    name: '我评论的' 
}, {
    index: 1,
    name: '我点赞的' 
}];
let currentIndex = 0;

function choiceTabs(index: number | string) {
    this.setState({
        currentIndex: index
    })
}

<TabsControl 
    initIndex={this.state.currentIndex} 
    handleClick={this.choiceTabs.bind(this)}>
    {
        pthis.state.tabs.map((child, cindex) => {
            return (
                <TabsControl.Item title={child.name} key={cindex}></TabsControl.Item>
            )
        }) 
    }
</TabsControl>

```  

### 后续将会添加
切换时候的样式

### Author
If you encounter any questions, please call me. 
my mail address is 348560971@qq.com.
@ziran.liu