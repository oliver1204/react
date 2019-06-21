/*
    
*/

import * as React from 'react';

import {
    State,
    Props,
} from './interface';

//Main
class ToastView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.loadingStyle = this.loadingStyle.bind(this);
    }
    timer: any

    state: State = {
        type: '',
        message: '',
        className: ''
    }

    show(optipn: Props) {
        let { type, message, duration } = optipn;
        let pthis = this;
        
        clearTimeout(this.timer);
        duration = (duration || 1.5 ) * 1000;
        
        pthis.setState({
            className: 'toastEnter',
        }, () => {
            if(type !== 'loading') {
                pthis.timer = setTimeout(() => {
                    let className = pthis.state.className;
                    if (className.match('toastEnter')) {
                        pthis.setState({
                            className: 'toastEnter toastOut'
                        });
                    }
                }, duration);
            }
            pthis.setState({
                type: type || 'message',
                message: message,
                className: pthis.state.className
            });
        });
    }
    
    hide() {
        this.setState({
            className: 'toastEnter toastOut'
        });
    }

    loadingStyle() {
        if(Object.is(this.state.type, 'loading')) {
            return 'loadingStyle';
        }
        return null;
    }

    render() {
        let toastContent = null;
        let pthis = this;
        if (pthis.state.type == 'message') {
            toastContent = () => {
                return (
                    <div className="toastInnerBox">
                        <div className="toastInnerText">{pthis.state.message}</div>
                    </div>
                );
            };
        } else {
            let iconMap: any = {
                loading: require('./images/loading.gif'),
                success: require('./images/successToast.png'),
                failed: require('./images/failToast.png')
            };

            toastContent = () => {
                return (
                    <div className='toastInnerBox toastImgBox'>
                        <div className='toastInnerImg'>
                            <img className={pthis.loadingStyle()} src={iconMap[pthis.state.type]} alt={pthis.state.type}/>
                        </div>
                        <span>
                            { pthis.state.message }
                        </span>
                    </div>
                );
            }
        } 
        return (
            <div
                className={this.state.className}
                style={{
                    padding: pthis.state.message != '' ? '10px' : '0'
                }}
            >
                { toastContent && toastContent() }
            </div>
        );
    }
    
}

export default ToastView;
