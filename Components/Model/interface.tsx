export interface State {
    type?: string,
    classNames: string,
    title: string,
    content: string, 
    customContent: string,
    successCallback?: any,
    cancelCallback?: any,
    successButtonText?: string,
    cancelButtonText?: string
}
export interface Props {
    type?: string,
    title?: string,
    content?: string, 
    callback?: any,
    customContent?: string,
    buttonText?: string,
    successCallback?: any,
    cancelCallback?: any,
    successButtonText?: string,
    cancelButtonText?: string
}