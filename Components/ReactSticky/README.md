### 组件说明

* 可选参数
    stickyTop: number  -- tabs 距顶部的距离
    zIndex: string   -- z-index 值

### demo

```js

import ReactSticky from '../Components/ReactSticky/index';

let tabs = [{
    index: 0,
    name: '我评论的' 
}, {
    index: 1,
    name: '我点赞的' 
}];

<ReactSticky>
    <div className={`tabs top_1px_line  bottom_1px_line ${state.isShowMore ? 'moreTabs' : ''}`}>
        {
            typeList.map((item, index) => {
                return (
                    <div onClick={this.changeTab.bind(this, item)} className={`tab ${item.isAction ? (state.isShowMore ? 'activeTab moreActiveTab' : 'activeTab') : ''}`} key={item.typeId}>
                        {item.name}
                    </div>
                );
            })
        }
    </div>
</ReactSticky>

```  