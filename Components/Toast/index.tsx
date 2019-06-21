import * as React from 'react';
import { render } from 'react-dom';
import {
    Props
} from './interface';
import ToastView from './toast';
import './index.less';

const div = document.createElement("div");
document.body.appendChild(div);

const container: any = render(<ToastView />, div);

let Toast: any = {};

Toast.show = function (opt: Props) {
    opt = opt || {};
    
    if (opt.message) {
        container.show(opt);
    }
};

Toast.hide = function() {
    container.hide();
}
export default Toast;
