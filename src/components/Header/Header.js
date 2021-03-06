import React from 'react';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Search from '../Search/Search';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  }

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Search />
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
