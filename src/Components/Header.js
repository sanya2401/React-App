// src/components/Header.js
import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Header = () => (
  <Menu inverted>
    <Menu.Item name="logo">DEV@Deakin</Menu.Item>
    <Menu.Item>
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Button primary>Post</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Header;
