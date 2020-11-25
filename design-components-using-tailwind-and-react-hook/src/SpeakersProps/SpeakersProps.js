import React from 'react';

function SpeakersRenderProps(props){
    return props.children();
}

const SpeakersProps = () => {
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
    return (
        <SpeakersRenderProps>
            {() => {
                return (
                    <div>
                        {speakers.map((speaker) => {
                            return (
                                <img src={`images/${speaker.imageSrc}.png`}
                                     alt={speaker.name}
                                     key={speaker.imageSrc}/>
                            );
                        })}
                    </div>
                );
            }}
        </SpeakersRenderProps>
    );
};

export default SpeakersProps;