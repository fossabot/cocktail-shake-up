/* @flow */

import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header = (props: Object) => {
  return (
    <header>
      <Link to={`/${props.previous}`}>{props.previousTitle ? props.previousTitle : props.previous}</Link>
      <p className="path">{props.path}</p>
      <Link to={`/${props.next}`}>{props.nextTitle ? props.nextTitle : props.next}</Link>
    </header>
  );
};

export default Header;
