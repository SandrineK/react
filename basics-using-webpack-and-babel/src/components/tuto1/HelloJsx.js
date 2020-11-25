import React from 'react';

export default function HelloJsx() {
    return (
        <>
            <h1>Hello with JSX</h1>
            <div style={{color: 'blue', backgroundColor: 'powderblue'}}>Hello React! With JSX :-) This line use inline style.</div>
            <p>It allow a good encapsulation, code sharing. Use explicite Do not use library. </p>
            <p>Potential problem : do not allow media query, cascade, overrides, pseudo selectors or keyframe animation.</p>
        </>
    );
}
