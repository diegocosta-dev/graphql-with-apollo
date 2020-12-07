import { ReactNode } from 'react';
import { Nav, NavLogo, NavButton, NavButtons } from './Utils/Navs';

type Props = {
  children?: ReactNode;
  activeUser?: boolean;
  activeCompany?: boolean;
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
        <NavButton active={props.activeUser} href="/">
          User
        </NavButton>
        <NavButton active={props.activeCompany} href="/companies">
          Companies
        </NavButton>
      </NavButtons>
    </Nav>
  );
}

export default NavBar;
