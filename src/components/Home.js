import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


// stateless component
const Home = () => (
        <div className="home">
            <h2><Link to="/login" className='link'><Button>Login</Button></Link> or <Link to="/signup" className='link'><Button>Signup</Button></Link> to acquire the Master Key!</h2>
        </div>
);

export default Home;