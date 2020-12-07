import styled from 'styled-components';

type Props = {
  active?: boolean;
};

const NavLogo = styled.div`
  color: #ffffff;
  display: inline-block;
  font-size: 20px;
  margin-left: 130px;
  width: 175px;
`;

const Nav = styled.div`
  background-color: #556871;
  height: 50px;
  display: flex;
  align-items: center;
`;
const NavButtons = styled.div`
  text-align: right;
  font-size: 18px;
  margin-right: 130px;
  width: 100%;
`;

const NavButton = styled.a<Props>`
  color: ${(props) => (props.active ? '#baf3ff' : '#ffffff')};
  margin-left: 10px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #baf3ff;
  }
`;

export { NavLogo, Nav, NavButtons, NavButton };
