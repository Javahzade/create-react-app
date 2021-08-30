import React from 'react';
import pic from '../assets/images/01.jpeg';

function Home (props){
    return(
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <h2>
                {props.title}
            </h2>
            <img alt='01' src={pic} />
        </div>
    )
}

export default Home;