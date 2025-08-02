import React from 'react';
// import Banner from 'react-bootstrap/Banner';
import Container from 'react-bootstrap/Container';
import Header from './../partials/header';

//css
import '../../css/main pages/home.css';

const Home = () => {
    return (
        <Container>
            <Header />
            
            <Container className='banner'>
                Banner here
            </Container>
        </Container>
        
    )
}

export default Home;