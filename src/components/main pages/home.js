import React from 'react';

//css
import '../../css/main pages/home.css';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <h1 className='brandName'>fortuna</h1>
                <div className='authenticationButtons'>
                    <button className="primary-button">Sign up</button>
                    <button className="primary-button">Sign in</button>
                </div>
            </div>

            <div className='banner'>
                <h1>Grow your money.</h1>
                <h3>Lorem ipsum or some text here.</h3>
            </div>
        </div>   
    )
}

export default Home;