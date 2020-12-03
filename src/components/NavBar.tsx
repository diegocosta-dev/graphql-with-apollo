import { ReactNode } from 'react';
import { Nav, NavLogo, NavButton, NavButtons } from './Utils/Navs';

type Props = {
  children?: ReactNode;
};

function NavBar(props: Props) {
  return (
    <Nav>
      <NavLogo>
        <a style={{ color: '#FFF', textDecoration: 'none' }} href="/">
          {props.children || 'Dash Board'}
        </a>
      </NavLogo>
      <NavButtons>
        <NavButton href="/">User</NavButton>
        <NavButton href="/companies">Companies</NavButton>
      </NavButtons>
    </Nav>
  );
}

export default NavBar;
