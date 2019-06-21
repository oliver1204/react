export interface State {
    checked?: boolean,
}
export interface Props {
    onChange?: (checked: boolean) => void,
    onClick?: (checked?: boolean) => void,
    checked?: boolean,
    disabled?: boolean,
    className?: string,
    style?: React.CSSProperties,
    platform?: string
}