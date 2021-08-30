import React from 'react';
import pic from '../assets/images/02.jpeg';

function About (props){
    console.log('props', props.title);
    return(
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <h2>
                {props.title}
            </h2>
            <img alt='02' src={pic} />
        </div>
    )
}

export default About;