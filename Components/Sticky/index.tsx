import * as React from 'react';

import {
    State,
    Props,
    Data,
} from './interface';
//Main
class ReactSticky extends React.Component<Props, State> {
    state: State = {
        stickyTop: 0,
        zIndex: '1000',
    }
    data: Data = {}
    public static defaultProps: Props = {
    }
    __listenAction: any
    constructor(defaultProps: Props) {
        super(defaultProps);
        this.state.stickyTop = this.props.stickyTop || 0;
        this.state.zIndex = this.props.zIndex || '1000';
    }
    componentDidMount() {
        this.data.element = this.refs.sticky;
        
        this.init(this.data.element );
    }
    init(element: HTMLBodyElement) {
        let stickyTop = this.state.stickyTop;
        let zIndex = this.state.zIndex;

        element.style.position = '-webkit-sticky';
        element.style.position = 'sticky';
        if (~element.style.position.indexOf('sticky')) {
            element.style.top = `${stickyTop}px`;
            element.style.zIndex = zIndex;
            return;
        }

        const elementChild: any = element.firstElementChild;
        elementChild.style.left = 0;
        elementChild.style.right = 0;
        elementChild.style.top = `${stickyTop}px`;
        elementChild.style.zIndex = zIndex;
        
        let active = false;

        const check = () => {
            const offsetTop = element.getBoundingClientRect().top;
            if (offsetTop <= stickyTop) {
                if (active) return;
                if (!element.style.height) {
                    element.style.height = element.clientHeight + 'px';
                }
                elementChild.style.position = 'fixed';
                active = true;
            } else {
                if (!active) return;
                elementChild.style.position = '';
                active = false;
            }
        };

        var timer: any;
        this.__listenAction = () => {
            if (timer) return;
            timer = setInterval(check, 30);
        } 
        window.addEventListener('scroll', this.__listenAction);
    }
    componentWillUnmount() {
        if (this.__listenAction) {
            window.removeEventListener('scroll', this.__listenAction);
        }
    }

    render() {
        return (
            <nav ref="sticky" className="sticky">
                { this.props.children } 
            </nav>
        )
    }
}

export default ReactSticky;
