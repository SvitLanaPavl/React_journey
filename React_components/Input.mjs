export default function Input(props) {
    const {type="text", placeholder, name, className="ui-textfield"} = props;
      return <input type={type} placeholder={placeholder} name={name} className={className} />;
  }