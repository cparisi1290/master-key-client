import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


// stateless component
const Home = () => (
        <div className="home">
            <h2><Link to="/login" className='link'><Button variant="dark">Login</Button></Link> or <Link to="/signup" className='link'><Button variant="dark">Signup</Button></Link> to acquire the Master Key!</h2>
        </div>
);

export default Home;