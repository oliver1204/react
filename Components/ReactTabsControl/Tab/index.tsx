import * as React from 'react';
import {
    Props
} from './interface';

class Tab extends React.Component<Props> {
    render() {
        return(
            <div>{this.props.children}</div>
        );
    }
}

export default Tab;
