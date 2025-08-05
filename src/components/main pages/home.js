import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../../css/main pages/home.css';

const Home = () => {
    return (
        <div>
            <div className='header'>

                <h1 className='brandName'>fortuna</h1>
                
                {/* authentication buttons */}
                <div className='authenticationButtons'>

                    <Link to="/login">
                        <button className="log-in">Log in</button>      
                    </Link>

                    <Link to="/login">
                     <button className="register">Register</button>
                    </Link>
                    
                </div>
            </div>

            <div className="banner">
                <h1>Grow your money.</h1>
                <h3>Lorem ipsum or some text here.</h3>
            </div>
        </div>   
    )
}

export default Home;