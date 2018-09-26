import * as React from 'react';

import './index.less';

const NoDate = () => {
    return (
        <div className="_NoData">
            <img src={require("../../images/empty3.png")} />
            <p>暂无相关内容</p>
        </div>
    );
};
  
export default NoDate;
