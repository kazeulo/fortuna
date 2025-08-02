import React from 'react';
// import Banner from 'react-bootstrap/Banner';
import Container from 'react-bootstrap/Container';
import '../../css/main pages/home.css';
import Sidebar from '../partials/sidebar';

//css

const Home = () => {
    return (
        <div>
            <Sidebar />
            <Container className='banner'>
                <h1>Banner here</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                    Nunc viverra imperdiet enim. Fusce est.</p>
            </Container>
        </div>   
    )
}

export default Home;