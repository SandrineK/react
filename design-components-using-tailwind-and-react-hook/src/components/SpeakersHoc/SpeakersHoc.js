import React from 'react';
import withData from "./withData";

const SpeakersHoc = ({speakers}) => {
    return (
        <div>
            {speakers.map(({imageSrc, name}) => {
                return (
                    <img src={`images/${imageSrc}.png`}
                         alt={name}
                         key={imageSrc}/>
                );
            })}
        </div>
    );
};

const maxSpeakersToShow = 2;
/**
 * Example of HOC
 * Higher Order Component (HOC)
 * Function that take a component and return a new component
 * Enhanced = renforcé
 */
export default withData(maxSpeakersToShow)(SpeakersHoc);
