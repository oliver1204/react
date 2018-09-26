### 组件说明

* 必选参数
    hasLoaderMore: boolean -- 是否还有更多内容 

* 可选参数
    LoadMoreParams: any  回调函数需要参数时使用
    classN: string   -- 样式

* method
    loadMore: function  -- 回调函数

### demo

```js

import LoadMore from '../Components/LoadMore/index';

let topicLists =  [1, 3, 4, 6] 

<LoadMore 
    classN="topicLists"
    hasLoaderMore={this.data.hasMoreMa} 
    loadMore={this.getTopicLists.bind(this)} 
    LoadMoreParams={this.state.currentTab.typeId}
>
    {
        topicLists.map((item, index) => {
            return (
                <div  key={index}>
                    {item}
                </div>
            );
        })
    }
</LoadMore>

```  