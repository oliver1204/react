import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';

class Form extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let pthis = this;
        return (
            <div className="reactWrap bottom_1px_line">
                <div className={`from ${pthis.props.className ? pthis.props.className : ''}`}>
                    {this.props.children} 
                </div>
            </div>
            
        );
    }
}

export default Form;