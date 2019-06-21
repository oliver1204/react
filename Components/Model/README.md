### explain
* Alert 和 Confirm 公共可选参数
    1. type: string  -- Alert or Confirm  default Alert
    2. title: string -- Model's title
    3. content: string -- Model's content
    4. customContent: string -- 自定义的内容

* Alert 独有可选参数
    1. callback: 回调函数
    2. buttonText: button 文案， 默认为「确定」

* Confirm 独有可选参数
    1. successCallback: 成功时调用的回调函数
    2. cancelCallback: 失败时调用的回调函数
    3. successButtonText: 右边 button 文案， 默认为「确定」
    4. cancelButtonText: 左边 button 文案， 默认为「取消」

### demo -- Alert
```js
import { Model } from '../../Common/main';

Model.show({
    title: 'alert 标题',
    content: 'alert 内容', 
    customContent: `<div class="title"> customContent </div>`,
    buttonText: '知道了',
    callback: () => {
        console.log('我是 callback!');
        return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
    }
});

```

### demo -- Confirm
```js
import { Model } from '../../Common/main';

Model.show({
    type: 'confirm',
    title: 'confirm 标题',
    content: 'confirm 内容', 
    customContent: `<div class="title"> customContent </div>`,
    cancelButtonText: '不知道',
    successButtonText: '知道了',
    successCallback: () => {
        console.log('我是 successCallback');
        return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
    },
    cancelCallback: (): void => {
        console.log('我是 cancelCallback');
        return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
    }
});

```

### demo -- 手动关闭弹窗
```js
import { Model } from '../../Common/main';

Model.hide();

```

### Author
If you encounter any questions, please call me. 
my mail address is 348560971@qq.com.
@ziran.liu

 