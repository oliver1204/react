import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';

import Action from './action';

class List extends Action {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let pthis = this;
        
        return (
            <div className='list bottom_1px_line' onClick={this.handleClick.bind(this)}>
                {this.props.children} 
            </div>
        );
    }
}

export default List;