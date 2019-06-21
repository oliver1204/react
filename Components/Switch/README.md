### explain

* required params
    1. onClick: function  -- click事件触发的回调函数

* optional params
    1. onChange: function  -- change 事件触发的回调函数
    2. checked: boolean -- 是否默认选中, 默认ture
    3. disabled: boolean -- 是否不可修改, 默认false
    4. className: string -- 添加的独有样式
    5. style: React.CSSProperties -- 默认是否开启
    6. platform: string -- 兼容本公司pc端样式, 默认移动端

### demo

```js

import Switch from '../Components/NoDate/index';

 <Switch 
    onClick={(value) => {
        console.log(value)
        this.setState({
            checked: !this.state.checked
        })
    }}
    onChange={() => { 
        /* When the component changes... */ 
    }}
    checked={this.state.checked}
    disabled   
    className='aaa'
    style={{display: 'block'}} 
></Switch>

```  

### Author
If you encounter any questions, please call me. 
my mail address is 348560971@qq.com.
@ziran.liu
