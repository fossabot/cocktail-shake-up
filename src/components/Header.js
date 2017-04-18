/* @flow */

import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props: Object) => {
  return (
    <header>
      <Link to={`/${props.previous}`}>
        {props.previousTitle ? props.previousTitle : props.previous}
      </Link>
      <p className="path">{props.path}</p>
      <Link to={`/${props.next}`}>
        {props.nextTitle ? props.nextTitle : props.next}
      </Link>
    </header>
  );
};

Header.propTypes = {
  path:          string,
  previous:      string,
  previousTitle: string,
  next:          string,
  nextTitle:     string,
};

export default Header;
