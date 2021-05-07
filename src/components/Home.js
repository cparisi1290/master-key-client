import React from 'react';
// import Signup from './Signup'
// import Login from './Login'
// import Logout from './Logout'
import { Link } from 'react-router-dom';


// stateless component
const Home = () => (
        <div>
            <h2><Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to acquire the Master Key!</h2>
        </div>
);

export default Home;