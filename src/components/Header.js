import React from 'react';
import { NavLink } from 'react-router-dom'

import { Menu, Icon } from 'semantic-ui-react';

import './header.css';

let showMenu = !window.matchMedia("(max-width: 768px)").matches;

const handleStackable = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    showMenu = !showMenu;
  } else {
    showMenu = true;
  }
}

const Header = () => {
  const burgerButton = window.matchMedia("(max-width: 768px)").matches;

  const collapsedMenu = (
    <Menu>
      <Menu.Item id="header-burger" onClick={handleStackable(showMenu)}>
        <Icon name="content" />
      </Menu.Item>
    </Menu>
  );

  const expandedMenu = (
    <Menu stackable onClick={handleStackable(showMenu)}>
      {burgerButton &&
        <Menu.Item id="header-burger">
          <Icon name="content" />
        </Menu.Item>
      }
      <NavLink to="/">
        <Menu.Item name="home">
          <Icon name="home" />
        </Menu.Item>
      </NavLink>
    </Menu>
  );

  return (
    <div className="header">
      { showMenu ? expandedMenu : collapsedMenu }
    </div>
  )
};

export default Header;
