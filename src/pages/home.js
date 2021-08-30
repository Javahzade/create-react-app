import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import pic from '../assets/images/01.jpeg';
import './pages.css';

function Home (props){
    const theme = useContext(ThemeContext)
    console.log('Home ~ theme', theme)
    return(
        <div className="home" style={{backgroundColor: theme}}>
            <h2>
                {props.title}
            </h2>
            <img alt='01' src={pic} />
        </div>
    )
}

export default Home;