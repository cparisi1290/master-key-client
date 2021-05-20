import React from 'react';
import { Link } from 'react-router-dom';


// stateless component
const Home = () => (
        <div className="home">
            <h2><Link to="/login" className='link'>Login</Link> or <Link to="/signup" className='link'>Signup</Link> to acquire the Master Key!</h2>
        </div>
);

export default Home;