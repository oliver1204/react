import { Toast } from './main';

let  BASE_URL = () => {
    let currentHref = window.location.href;

    if(currentHref.indexOf('/localhost') > -1 || currentHref.indexOf('/192.') > -1 || currentHref.indexOf('0.0.0.0') > -1) {
        return 'https://pre.jianjian.work';
    }
    return '';
};
let isObject = (param: any) => {
    return Object.prototype.toString.call(param).slice(8, -1) === 'Object';
}

export function paramToString (param: any) {
    if (!isObject(param)) {
        throw 'param 必须是一个 object 对象'
    }
    var result: any = []
    for (let key in param) {
        let value = param[key]
        if (Array.isArray(value)) {
            result = result.concat(value.map(item => `${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`));
        } else if (typeof value === 'object' && value) {
            value = JSON.stringify(value)
            result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        } else {
            result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    }
    return result.join('&')
};

export function resolveFetch(url: string, method: string, params?: any, error?: any) {
    var FetchParams: any = {
        method: method,
        credentials: 'include'
    }

    Toast.show({
        type: 'loading',
        message: '加载中..',
    });
    
    if(method === 'POST') {
        FetchParams.headers = {
            'Content-Type':'application/json;'
        }
        if(params) {
            FetchParams.body = JSON.stringify(params);
        }
    } else if(method === 'GET' && params){
        url = url + '?' + paramToString(params)
    }

    return new Promise(function (resolve, reject) {
        fetch(`${BASE_URL()}${url}`, FetchParams)
            .then((response) => response.json())
            .then((response) => {
                Toast.hide();
                if (response.success) {
                    resolve(response.model);
                } else {
                    if(!error) {
                        Toast.show({
                            message: response.errorMsg
                        });
                    }
                    reject(response);
                }
            }) 
            .catch(() => {
                Toast.show({
                    message: '服务器开了个小差，请稍后再试！'
                });
            }) 
    })
};

export default {};