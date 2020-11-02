import * as React from 'react';
import StarMatchGame from "./StarMatchGame/StarMatchGame";
import HelloJsx from "./tuto1/HelloJsx";
import Counter from "./tuto1/Counter";
import ConditionalStyle from "./tuto1/ConditionalStyle";
import {GithubCardApp} from "./tuto1/GithubCardApp";


export function App({initialData}) {
    return (
        <>
            <h1>{initialData.appName}</h1>
            <HelloJsx/>
            <Counter/>
            <ConditionalStyle/>
            <GithubCardApp title="The GitHub Cards App"/>
            <StarMatchGame/>
        </>
    );
}
