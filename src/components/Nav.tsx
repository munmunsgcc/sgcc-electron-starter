import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FunctionComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Nav;
