export interface State {
    classN: string,
    status: string, 
    timeout: any,
    hasLoaderMore: boolean
}
export interface Props {
    loadMore: any,  // 回调函数
    children?: any,
    classN?: string,
    hasLoaderMore: boolean,
    LoadMoreParams?: any
}
export interface Data {
    bottom: number,
    loadMore: any, // functon
    tips: {
        [key:string]: string
    }
}