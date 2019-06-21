import * as React from 'react';

import {
    State,
    Props,
} from './interface';

let isFunction =  (fn: () => void) => {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

//Main
class Model extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.cancel = this.cancel.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    state: State = {
        classNames: '',
        title: '',
        content: '', 
        customContent: '',
        successCallback: null,
        cancelCallback: null,
        successButtonText: '',
        cancelButtonText: ''
    }

    show(optipn: Props) {
        let pthis = this;
        let { 
            type,
            title, 
            content, 
            customContent, 
            successButtonText, 
            cancelButtonText, 
            successCallback, 
            cancelCallback,
            callback,
            buttonText
        } = optipn;
        
        pthis.setState({
            classNames: '_ModelEnter'
        }, () => {
            let state: State = {
                type,
                title,
                content,
                customContent,
                classNames: pthis.state.classNames
            }
            if(type === 'confirm') {
                Object.assign(state, {
                    successCallback,
                    cancelButtonText: cancelButtonText || '取消',
                    successButtonText: successButtonText || '确定',
                    cancelCallback: cancelCallback
                }) 
            } else {
                Object.assign(state, {
                    successCallback: callback,
                    successButtonText: buttonText || '确定',
                })
            }
            pthis.setState(state);
        })
    }
    
    hide() {
        let classNames = this.state.classNames;

        if(classNames.match('_ModelEnter')) {
            this.setState({
                classNames: '_ModelEnter ModelOut'
            }) 
        } 
    }

    cancel() {
        let { cancelCallback } = this.state;

        if(isFunction(cancelCallback)) {
            cancelCallback();
            if(cancelCallback() == false) return;
        }
        this.hide();
    }

    submit() {
        let { successCallback } = this.state;
        if(isFunction(successCallback)) {
            successCallback();
            if(successCallback() == false) return;
        }
        this.hide();
    }

    render() {
        let pthis = this;
        let { 
            type,
            title, 
            content, 
            customContent, 
            successButtonText, 
            cancelButtonText
         } = this.state;
        let createCustomContent = () => {
            return {
                __html: pthis.state.customContent
            };
        }
        return (
            <div className={pthis.state.classNames}>
                <div className="mask">
                    <div className="modelWap">
                        <div className="content">
                            {
                                title && title.length ? <div className="title">{ title }</div> : null
                            }
                            {
                                content && content.length ? <div className="label">{ content }</div> : null
                            }
                            {
                                customContent && customContent.length ? <div dangerouslySetInnerHTML={ createCustomContent()} /> : null
                            }
                        </div>
                        {
                            (() => {
                                if(type === 'confirm') {
                                    return (
                                        <div className="btns top_1px_line" >
                                            <div className="btn-left right_1px_line" onClick={this.cancel}>{ cancelButtonText }</div>
                                            <div className="btn-right" onClick={this.submit}>{ successButtonText }</div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="btns top_1px_line" onClick={this.submit}>
                                            { successButtonText }
                                        </div>
                                    );
                                }
                            })()
                        }
                        
                    </div>
                </div>
            </div>   
        );
    } 
}

export default Model;



