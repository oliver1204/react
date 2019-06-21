import * as React from 'react';
import FooterItem from './FooterItem/index';
import {
    State,
    Props,
    Data,
} from './interface';
import './index.less';


class Footer extends  React.Component<Props, State> {
    static Item = FooterItem;

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="FooterWrap">
                <div className="footer">
                {
                    React.Children.map(this.props.children, (children: JSX.Element) => {
                        return (
                            <>
                                {children}
                            </>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Footer;
