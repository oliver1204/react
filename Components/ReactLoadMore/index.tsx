import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';
import './index.less';
import Action from './action';

class LoadMore extends Action {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let state = this.state;
        return(
            <div className={state.classN}>
                {this.props.children}

                <div className="loadMoreFooter">
                    {
                        state.status === 'hasLoaderMore' ?
                        <img src={require('../../images/waitting.gif')} alt=""/> : ''
                    }
                    <span>{this.data.tips[state.status]}</span>
                </div>
            </div>
        )
    }
}

export default LoadMore;