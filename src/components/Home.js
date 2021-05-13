import React from 'react';
import { Link } from 'react-router-dom';


// stateless component
const Home = () => (
        <div>
            <h2><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to acquire the Master Key!</h2>
        </div>
);

export default Home;