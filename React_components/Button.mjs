export default function Button(props) {
    const {type, disabled, className="ui-button", children} = props;
    return <button className={className} type={type} disabled={disabled}>{children}</button>;
}