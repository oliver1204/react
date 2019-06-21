export interface State {
    currentIndex: number | string,
    flag: boolean
}
export interface Props {
    children?: React.ReactNode,
    tabsClass?: string,
    tabClass?: string,
    initIndex?: number | string,
    handleClick?: any
}
export interface Data {
    
}