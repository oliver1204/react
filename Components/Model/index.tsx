import * as React from 'react';
import { render } from 'react-dom';
import {
    Props
} from './interface';
import ModelView from './model';
import './index.less';

const div = document.createElement("div");
document.body.appendChild(div);

const container: any = render(<ModelView />, div);

let Model: any = {};

Model.show = function (opt: Props) {
    opt = opt || {};
    container.show(opt);
};

Model.hide = function() {
    container.hide();
}

export default Model;