import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src='https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg' alt="" />
          <Link to='/'>
          <button>GO BACK</button>
</Link>
        </div>
    );
};

export default NotFound;