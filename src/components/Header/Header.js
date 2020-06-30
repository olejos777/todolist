import React from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  }

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.icon} />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
