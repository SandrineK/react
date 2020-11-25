/**
 * Example of HOC
 * Higher Order Component (HOC)
 * Function that take a component and return a new component
 * Enhanced = renforcé
 * @param maxSpeakersToShow
 * @returns {function(*): function(): *}
 */
function withData(maxSpeakersToShow) {

    return function withData(Component) {
        const speakers = [
            {
                imageSrc: 'speaker-component-1124',
                name: 'Douglas Crockford'
            },
            {
                imageSrc: 'speaker-component-1530',
                name: 'Tamara Baker'
            },
            {
                imageSrc: 'speaker-component-10803',
                name: 'Eugene Chuvyrov'
            },
        ];
        return function () {
            const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
            return <Component speakers={limitSpeakers}></Component>;
        };
    }

}

export default withData;