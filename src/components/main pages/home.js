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

                    <Link to="/signup">
                     <button className="register">Register</button>
                    </Link>
                    
                </div>
            </div>

            <div className="banner">
                <h1 className='brandLine'>Master Your Money with Total Clarity.</h1>
                <h3 className='brandLine-subtitle'>Track your savings, spending, and investments — all in one powerful, easy-to-use dashboard.</h3>
            </div>
        </div>   
    )
}

export default Home;