import styled from 'styled-components';

type MsgProps = {
  show?: boolean;
};

const ErroMsg = styled.div<MsgProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: #f5664d;
  padding: 15px;
  text-align: center;
  color: #ffff;
`;

const SuccessMsg = styled.div<MsgProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: #4df555;
  padding: 15px;
  text-align: center;
  color: #ffff;
`;

export { ErroMsg, SuccessMsg };
