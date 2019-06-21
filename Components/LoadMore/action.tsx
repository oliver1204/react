import * as React from 'react';

import {
    State,
    Props,
    Data
} from './interface';
//Main
class Action extends React.Component<Props, State> {
    refActionSheet: any;
    input: HTMLTextAreaElement;
    state: State = {
        classN: '',
        status: 'waiting', 
        timeout: null,
        hasLoaderMore: true
    }

    data: Data = {
        bottom: Math.floor(document.documentElement.clientHeight / 4),
        loadMore: null, // functon
        tips: {
            waiting: '',
            loading: '正在加载...',
            done: '没有更多了哦~'
        }
    }

    static defaultProps: Props = {
        hasLoaderMore: true,
        loadMore: null
    }

    constructor(props: Props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.timeoutCallback = this.timeoutCallback.bind(this);

        this.data.loadMore = this.props.loadMore;
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        if(nextProps.hasLoaderMore) {
            prevState.hasLoaderMore = true;
        } else {
            prevState.hasLoaderMore = false;
            prevState.status = 'done';
        }
        if ('classN' in nextProps) {
            prevState.classN = nextProps.classN;
        }
        return prevState;     
    }

    componentDidMount() {
        let pthis = this;

        this.setState({
            classN: this.props.classN
        });
    }

    componentDidUpdate(props: Props, state: State) {
        let pthis = this;
        
        if(state.hasLoaderMore) {
            this.addEvent();
        } else {
            this.removeEvent();
        }   
        
    }    
    addEvent() {
        let pthis = this;
        this.state.status = 'waiting';
        window.addEventListener('scroll', pthis.scrollEvent);
    }
    loadMoreFlow() {
        this.setState({
            status: 'loading'
        });
        this.data.loadMore(this.props.LoadMoreParams - 0);
    }
    timeoutCallback() {
        const el = document.documentElement;
        const distance = el.offsetHeight - el.clientHeight - window.pageYOffset;
        if (distance < this.data.bottom) this.loadMoreFlow();
    }
    scrollEvent() {
        let pthis = this;
        // 有的时候setState hasLoaderMore 并没有真正的同步，导致多加载数据
        setTimeout(() => {
            if (this.state.hasLoaderMore && this.state.status === 'waiting') {
                clearTimeout(pthis.state.timeout);
                this.state.timeout = setTimeout(pthis.timeoutCallback, 50);
            }
        }, 500);
    }
    removeEvent() {
        let pthis = this;

        window.removeEventListener('scroll', pthis.scrollEvent);
    }
    componentWillUnmount() {
        let pthis = this;
        this.removeEvent();
    } 
    
}

export default Action;
