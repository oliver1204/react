import * as React from 'react';

import './index.less';

import {
    State,
    Props,
} from './interface';

class Switch extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    static defaultProps = {
        checked: false,
        disabled: false,
        onChange() {},
        onClick() {},
    };
    onClick = (e: any) => {
        if (this.props.onClick) {
            let value;
            if (e && e.target && e.target.checked !== undefined) {
                value = e.target.checked;
            } else {
                value = this.props.checked;
            }
           
            this.props.onClick(value);
        }
    }
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        if (this.props.onChange) {
          this.props.onChange(checked);
        }
    }
    render() {
        const {
            checked,
            disabled,
            className,
            platform
        } = this.props;
        const style: any = this.props.style || {};

        return(
            <div className={`Switch ${platform === 'pc' ? ' Switch-pc' : ''}`}>
                <input
                    type="checkbox"
                    className={`Switch ${className ? className : ''}`}
                    disabled={disabled}
                    checked={checked}
                    onChange={this.onChange}
                    {...(!disabled ? { onClick: this.onClick } : {})}
                />
                 <div
                    className={`checkbox ${disabled ? ' checkbox-disabled' : ''}`}
                    style={style}
                    {...(!disabled ? { onClick: this.onClick } : {})}
                />
            </div>
        )
    }
    
};
  
export default Switch;
