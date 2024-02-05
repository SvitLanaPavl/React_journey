export default function Link(props) {
    const {className="ui-link", href, children} = props;
    console.log(props);
    return <a href={href} className={className}>{children}</a>;
}