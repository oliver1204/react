import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';
import './index.less';
import Action from './action';

class TabsControl extends Action {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let pthis = this;

        return(
            <div>
                <nav className="tab-title-items">
                    {
                        React.Children.map(this.props.children, (children: JSX.Element, index: number) => {
                            return (
                                <div className={`tab-title-item ${this.props.tabsClass ? this.props.tabsClass : ''} ${index === this.state.currentIndex ? 'active' : ''}`}>
                                    <div onClick={this.handleClick.bind(this, index)} className={this.props.tabClass ? this.props.tabClass : ''}>{children.props.title}</div>
                                </div>
                            );
                        })
                    }
                </nav>
                <div className="tab-content-items">
                    {
                        React.Children.map(this.props.children, (children: JSX.Element, index: number) => {
                            return (
                                <div className={pthis.getCurrentItemClasses(index)}>
                                    { children }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TabsControl;

