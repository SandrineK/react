import React from 'react';
import HelloJsx from "./HelloJsx";
import Counter from "./Counter";
import {GithubCardApp} from "./GithubCardApp";
import ConditionalStyle from "./ConditionalStyle";

export default function App() {
    return (
        <>
            <HelloJsx/>
            <Counter/>
            <ConditionalStyle/>
            <GithubCardApp title="The GitHub Cards App"/>
        </>
    );
}