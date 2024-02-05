import React from "react";
import {createRoot} from "react-dom/client";
import Link from "./Link.mjs";
import Button from "./Button.mjs";
import Container from "./Container.mjs";
import Input from "./Input.mjs";

function App() {
    return (<>
    <Link></Link>
    <Button></Button>
    <Container></Container>
    <Input />
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);
