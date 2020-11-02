import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';

const jitter = keyframes`
    0% { transition: scaleY(0.9); }
    100% { transition: scaleY(1); }
`;

const Button = styled.button`
    color: white;
    background: ${props => props.isUsed ? 'gray': 'blue'};
    padding: 0.5rem 1rem;
    border-radius: 2px;
    
    @media(min-width: 800px){
        padding: 1rem 2rem;
    }
    
    &:hover {
        outline: 2px solid white;
    }   
    
    animation: ${jitter} 350ms ease-out infinite;    
`;

export default function CssInJsComponent() {
    const [isUsed, setIsUsed] = useState(false);
    const doStuff = () => setIsUsed(!isUsed);
    return (
        <>
            <h1>CSS-in-JS component</h1>
            <p>This component use <strong>styled-component</strong> library to show how work CSS-in-JS style.</p>
            <p>It allow media query, selectors and keyframes and co-located styles and code.</p>
            <p>But use of cascade and overrides can be a challenge.</p>
            <p>This solution allow co-location of styles and the use of the power of CSS.</p>
            <Button onClick={doStuff} isUsed={isUsed}>Already styled</Button>
        </>
    );
}
