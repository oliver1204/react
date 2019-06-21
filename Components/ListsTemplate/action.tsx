import * as React from 'react';

import {
    State,
    Props,
    Data
} from './interface';
//Main
class Action extends React.Component<Props, State> {
    state: State = {
        
    }

    data: Data = {

    }

    static defaultProps: Props = {
        loadMore: null
    }

    constructor(props: Props) {
        super(props);

    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        return {};     
    }

    componentDidMount() {
        
    }

    componentDidUpdate(props: Props, state: State) {
         
        
    }    
    
    componentWillUnmount() {
        let pthis = this;
        
    } 
    
}

export default Action;
