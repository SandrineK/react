import * as React from "react";

export default function ConditionalStyle() {
    // not {{}}, it's an object {} inside JSX {}
    // curious warning in console : "prop `style` did not match. Server: "color: green" Client: "color:red"
    return (
        <>
            <h1>Conditional style</h1>
            <div style={{ color: Math.random() < 0.5 ? 'green' : 'red' }}>Red or green ?</div>
        </>);
}