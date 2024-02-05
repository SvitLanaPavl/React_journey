import React from "react";
export default function Container(props) {
    const {className="ui-container", children} = props;
    return (
        <div className={className}>
        {children}
        </div>
    );
}