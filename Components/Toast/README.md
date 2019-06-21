
### explain

* required params
    1. type: string  -- toast 类型 默认message, 其他类型 loading, success, failed
    2. duration: number -- 展示的秒数, 单位秒, 默认1.5秒

* optional params
    1. message: string  -- 展示文案

### demo

```js
import { Toast } from '../../Common/main';
// message
Toast.show({
    message: '一条普通的消息',
})

// success
Toast.show({
    type: 'success',
    message: '加载成功'
})

// failed
Toast.show({
    type: 'failed',
    message: '加载失败'
})

// loading
Toast.show({
    type: 'loading',
    message: '加载中..',
})

/*
    * ps: loading 没有定时关闭功能，
    * 需要手动关闭, 关闭方法如下：
*/ 
Toast.hide()

```

### Author
If you encounter any questions, please call me. 
my mail address is 348560971@qq.com.
@ziran.liu