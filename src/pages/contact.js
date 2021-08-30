import React from 'react';
import pic from '../assets/images/03.jpg';

function Contact (props){
    return(
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <h2>
                {props.title}
            </h2>
            <img alt='03' src={pic} />
        </div>
    )
}

export default Contact;